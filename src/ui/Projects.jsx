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
            title={"Cineo"}
            date={"December 2024 - now"}
            link={"https://github.com/TomaMili/cineo-mc2"}
          >
            Cineo is an AI-driven movie library app — built with Next.js, React,
            and Supabase — that lets you track, rate, organize and share your
            favorite movies seamlessly. Primary goal in current phase is
            developing an advanced reccomend algorithm based on machine
            learning.
          </Project>
          <Project
            title={"Booking application"}
            date={"November 2025"}
            link={"https://github.com/TomaMili/booking-app-next"}
          >
            Booking like app that is connected to one of my previous projects,
            internal hotel management app. It&apos;s built using Next.js, React
            and Supabase.
          </Project>
          <Project
            title={"Internal hotel management app"}
            date={"July 2025"}
            link={"https://github.com/TomaMili/internal-booking-app"}
          >
            Hotel administration web-app, built with React and Supabase. Built
            as an internal solution for hotels, after noticing a need for it
            having previously worked in tourism field.
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
