import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <h1 className="text-6xl text-center uppercase font-semibold text-gray-300 my-10">
        CONTACT
      </h1>
      <div className="text-gray-400 text-xl flex flex-col gap-5">
        <p>
          <span className="text-gray-300 font-semibold">Email: </span>
          tomatomamilicevic@gmail.com
        </p>
        <p>
          <span className="text-gray-300 font-semibold">Phone: </span>+385 92
          419 2060
        </p>
        <p>
          <span className="text-gray-300 font-semibold">WhatsApp: </span>+387 63
          578 988
        </p>
      </div>
      <div className="flex justify-between w-20 mt-10">
        <a href="https://www.linkedin.com/in/toma-milićević-2057a7268/">
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </a>
        <a href="https://github.com/TomaMili?tab=repositories">
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
    </>
  );
}

export default Contact;
