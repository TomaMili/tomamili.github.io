import Project from "./Project";

function Projects() {
  return (
    <>
      <h1 className="text-6xl text-center uppercase font-semibold text-gray-300 mt-10">
        PROJECTS
      </h1>
      <p className="text-center text-xl mt-10 text-gray-400 tracking-widest leading-9 sm:w-full w-5/6">
        Some of my favourite personal projects:
      </p>
      <div className="flex flex-col justify-around items-center sm:gap-10 gap-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:overflow-visible overflow-y-scroll w-4/5 mt-20 text-gray-400 gap-20 mx-auto">
          <Project
            title={"Travel Tracking Web Application in React"}
            date={"January 2025"}
            link={"https://github.com/TomaMili/my-map-project"}
          >
            A web application for tracking and logging travel routes using
            OpenStreetMap API and React Router, allowing users to visualize
            their journeys on an interactive map.
          </Project>
          <Project
            title={"Movie Storage and Retrieval Web Application in React"}
            date={"November 2024"}
            link={"https://github.com/TomaMili/usepopcorn"}
          >
            A platform for searching, storing, and retrieving movie information,
            integrated with the OMDb API to provide detailed movie data.
          </Project>
          <Project
            title={"Pizza Restaurant Web Application in React"}
            date={"February 2025"}
            link={"https://github.com/TomaMili/fast-pizza"}
          >
            A web application for managing a pizza restaurant, featuring an
            interactive menu, order tracking, and location-based services using
            Geocode API and Redux for state management.
          </Project>
          <Project
            title={"Desktop Application for an Online Library in C++ Builder"}
            date={"July 2024"}
            link={
              "https://github.com/TomaMili/CppBuilder-Book-store-application"
            }
          >
            A desktop application for managing an online library, enabling book
            cataloging, user borrowing history tracking, and administrative
            functionalities, developed in Embarcadero C++ Builder.
          </Project>
        </div>
        <a
          target="_blank"
          href="https://github.com/TomaMili?tab=repositories"
          className="mb-5 opacity-90 text-gray-300 border-2 border-gray-400 hover:border-gray-600 uppercase font-semibold hover:bg-gray-300 hover:text-gray-600  bg-gray-600 pt-1 pb-1.5 px-3 rounded-xl"
        >
          Other projects
        </a>
      </div>
    </>
  );
}

export default Projects;
