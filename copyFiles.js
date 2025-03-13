import { writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const distPath = join(__dirname, "dist", ".nojekyll");

// Ensure the file exists
await writeFile(distPath, "", { flag: "w" });

console.log(".nojekyll file created successfully!");
