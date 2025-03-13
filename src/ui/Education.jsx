function Education() {
  return (
    <>
      <h1 className="text-6xl text-center uppercase font-semibold text-gray-300 mb-10">
        EDUCATION
      </h1>
      <div className="flex w-5/8  lg:flex-row flex-col justify-between ">
        <div className="text-gray-400 flex flex-col gap-15 mt-15">
          <div className="relative">
            <h2 className="text-gray-300 uppercase font-semibold">
              Zagreb University of Applied Sciences - Informatics
            </h2>
            <p>GPA - 4.3</p>
            <p className="italic">2022 - present</p>
            <span className="absolute w-4 h-4 bg-gray-400 top-7.5 -left-20"></span>
            <span className="absolute w-15 h-0.5 bg-gray-400 top-[37px] -left-20"></span>
          </div>
          <div className="relative">
            <h2 className="text-gray-300 uppercase font-semibold">
              High School fra Slavko Barbarić - Gymnasium
            </h2>
            <p>
              [2nd place at the national competition in bridge modeling and
              construction]
            </p>
            <p className="italic">2022</p>
            <span className="absolute w-4 h-4 bg-gray-400 top-7.5 -left-20"></span>
            <span className="absolute w-15 h-0.5 bg-gray-400 top-[37px] -left-20"></span>
            <span className="absolute w-0.5 h-34 bg-gray-400 -top-25 -left-[73px]"></span>
          </div>
        </div>
        <div className="text-gray-400 mt-15">
          <h2 className="mb-4 text-gray-300 font-semibold uppercase">
            The complete JavaScript Course – Udemy
          </h2>
          <p className="mb-2">
            Credential ID: UC-ad4548b2-2168-4248-bc18-f5f41107e905
          </p>
          <p className="italic">April 2023</p>
        </div>
      </div>
    </>
  );
}

export default Education;
