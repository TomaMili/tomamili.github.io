import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-infinite-logo-slider";

function Skills() {
  return (
    <>
      <h1 className="text-6xl text-center uppercase font-semibold text-gray-300">
        Skills
      </h1>
      <p className="text-center text-xl mt-20 text-gray-400 tracking-widest leading-9 lg:w-4xl w-7/8">
        My strongest skills are tied with web-app development, with a good sense
        of teamwork and leadership. I consider myself very adaptable to
        different situations and enviroments.
      </p>
      <div className="mt-10 w-5xl border-gray-500 border-solid border-x-2">
        <Slider
          width="200px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#000"}
        >
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">React.js</p>
          </Slider.Slide>
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-brands fa-html5"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">HTML5</p>
          </Slider.Slide>
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">CSS3</p>
          </Slider.Slide>
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-brands fa-js"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">JavaScript</p>
          </Slider.Slide>
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-brands fa-node"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">Node.js</p>
          </Slider.Slide>
          <Slider.Slide>
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <p className="text-gray-300 ml-2 font-semibold">SQL </p>
          </Slider.Slide>
          <Slider.Slide>
            <img src="public/next-svgrepo-com.svg" alt="redux" width="40px" />
            <p className="text-gray-300 ml-2 font-semibold">Next.js</p>
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="public/tailwind-svgrepo-com (2).svg"
              alt="tailwind"
              width="40px"
            />
            <p className="text-gray-300 ml-2 font-semibold">Tailwind</p>
          </Slider.Slide>
          <Slider.Slide>
            <img src="public/redux-svgrepo-com.svg" alt="redux" width="35px" />
            <p className="text-gray-300 ml-2 font-semibold">Redux.js</p>
          </Slider.Slide>
        </Slider>
      </div>
      <p className="text-center text-xl mt-20 text-gray-400 tracking-widest leading-9 lg:w-4xl w-7/8">
        Besides these skills, I have a good knowledge of: C++, PHP, Python, as
        well as some creative platforms such as: Figma, Adobe Package, Office
        365
      </p>
    </>
  );
}

export default Skills;
