import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Aboutme() {
  return (
    <>
      <h1 className="sm:text-6xl text-[56px] text-center uppercase font-semibold text-gray-300">
        About me
      </h1>
      <p className="text-center text-xl mt-20 text-gray-400 tracking-widest leading-9 lg:w-4xl sm:w-full w-5/6">
        I am a Computer Science student that focuses on
        <span className="font-bold text-gray-300"> web-development</span>, I
        currently study and live in{" "}
        <span className="font-bold text-gray-300">Zagreb, Croatia</span>. With 2
        other partners I&apos;ve co-founded an AI startup called{" "}
        <span className="font-bold text-gray-300">CINEO</span>. With this
        project we have competed in
        <span className="font-bold text-gray-300"> Mc2</span> competition and
        won a ticket to{" "}
        <span className="font-bold text-gray-300"> BIRD Incubator</span>, where
        we are currently in developing in their incubation phase.
      </p>

      <a
        href="/TomaMilicevic_CV_Hrv.pdf"
        download
        className="mt-10 flex items-center gap-1 justify-between"
      >
        <FontAwesomeIcon
          icon="fa-solid fa-file-pdf"
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <p className="font-bold text-gray-300">
          portfolio <i className="text-gray-400">croatian</i>
        </p>
      </a>
      <a
        href="/Toma_Milicevic_CV_English.pdf"
        download
        className="mt-10 flex items-center gap-1 justify-between"
      >
        <FontAwesomeIcon
          icon="fa-solid fa-file-pdf"
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <p className="font-bold text-gray-300">
          portfolio <i className="text-gray-400">english</i>
        </p>
      </a>
    </>
  );
}

export default Aboutme;
