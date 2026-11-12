import { useEffect, useRef } from "react";

const ACCENT = [255, 91, 46];
const BONE = [241, 239, 233];

/**
 * Interactive grid of "tiles" drawn on a canvas. Tiles near the pointer light
 * up in the accent colour and fade out slowly; a few random tiles glint on
 * their own so the field stays alive on touch devices. Pauses when off-screen
 * and renders a still frame for people who prefer reduced motion.
 */
function TileField({ cell = 64, radius = 2.4, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let offsetX = 0;
    let offsetY = 0;
    let heat = new Float32Array(0); // accent glow per tile, 0..1
    let glint = new Float32Array(0); // neutral ambient glint per tile, 0..1
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, inside: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / cell) + 1;
      rows = Math.ceil(height / cell) + 1;
      // centre the grid so it looks intentional at every width
      offsetX = ((width % cell) - cell) / 2;
      offsetY = ((height % cell) - cell) / 2;
      heat = new Float32Array(cols * rows);
      glint = new Float32Array(cols * rows);
    };

    const seedStill = () => {
      for (let i = 0; i < glint.length; i++) {
        if (Math.random() < 0.05) glint[i] = Math.random() * 0.8;
        if (Math.random() < 0.012) heat[i] = 0.35 + Math.random() * 0.4;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // grout lines
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = Math.round(offsetX + c * cell) + 0.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let r = 0; r <= rows; r++) {
        const y = Math.round(offsetY + r * cell) + 0.5;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.055)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // tiles
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const h = heat[i];
          const g = glint[i];
          if (h < 0.01 && g < 0.01) continue;
          const x = offsetX + c * cell + 3;
          const y = offsetY + r * cell + 3;
          const s = cell - 5;
          if (g >= 0.01) {
            ctx.fillStyle = `rgba(${BONE[0]},${BONE[1]},${BONE[2]},${g * 0.05})`;
            ctx.fillRect(x, y, s, s);
          }
          if (h >= 0.01) {
            ctx.fillStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${h * 0.5})`;
            ctx.fillRect(x, y, s, s);
          }
        }
      }
    };

    const step = () => {
      raf = 0;
      if (!visible) return;

      // ambient glints
      if (Math.random() < 0.18) {
        const i = (Math.random() * glint.length) | 0;
        glint[i] = 1;
      }
      if (Math.random() < 0.025) {
        const i = (Math.random() * heat.length) | 0;
        heat[i] = Math.max(heat[i], 0.45);
      }

      // pointer heat
      if (pointer.inside) {
        const pc = (pointer.x - offsetX) / cell;
        const pr = (pointer.y - offsetY) / cell;
        const r0 = Math.max(0, Math.floor(pr - radius));
        const r1 = Math.min(rows - 1, Math.ceil(pr + radius));
        const c0 = Math.max(0, Math.floor(pc - radius));
        const c1 = Math.min(cols - 1, Math.ceil(pc + radius));
        for (let r = r0; r <= r1; r++) {
          for (let c = c0; c <= c1; c++) {
            const d = Math.hypot(c + 0.5 - pc, r + 0.5 - pr);
            if (d < radius) {
              const i = r * cols + c;
              heat[i] = Math.max(heat[i], (1 - d / radius) ** 1.4);
            }
          }
        }
      }

      for (let i = 0; i < heat.length; i++) {
        heat[i] *= 0.955;
        glint[i] *= 0.975;
      }

      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!raf && visible && !reduceMotion) raf = requestAnimationFrame(step);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.inside =
        pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
    };
    const onPointerLeave = () => {
      pointer.inside = false;
    };

    resize();
    if (reduceMotion) {
      seedStill();
      draw();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) {
        seedStill();
        draw();
      }
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
      start();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [cell, radius]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block size-full ${className}`} />;
}

export default TileField;
