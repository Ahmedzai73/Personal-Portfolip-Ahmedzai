"use client";
import { graphicSkillsData, skillsData } from "./SkillsData";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="text-gray-600 body-font mt-10">
      <h1 className="sm:text-4xl text-2xl text-center font-medium title-font text-[#ED1B23]">
        Development <span className="text-slate-800">Skills</span>
      </h1>
      <div className="container px-5 py-14 mx-auto flex flex-wrap">
        {skillsData.map((skillsInterface) => (
          <div key={skillsInterface.sr} className="flex relative pt-10 pb-20 sm:items-center lg:w-1/2 pr-2 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-white relative z-10 title-font font-medium text-sm">
              {skillsInterface.sr}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-slate-100 text-[#ED1B23] rounded-full inline-flex items-center justify-center">
                {skillsInterface.logo}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {skillsInterface.name}
                </h2>
                <p className="leading-relaxed">
                  {skillsInterface.dis}
                  <Link
                    href={skillsInterface.readMoreHref}
                    className="text-[#ED1B23]"
                  >
                    Read more...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>

      <section className="text-gray-600 body-font  p-6 flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl text-2xl text-center font-medium title-font text-[#ED1B23]">
          Graphics <span className="text-slate-800">Skills</span>
        </h1>
        <div className="container  py-6 flex flex-wrap mx-auto ">
          {graphicSkillsData.map((GraphicSkillsInterface) => (
            <div key={GraphicSkillsInterface.sr} className=" flex flex-wrap w-full lg:w-2/6 sm:mx-auto sm:mb-2 -mx-2 hover:scale-95 transform duration-500">
              <div className="p-2 lg:w-2/2 w-full ">
                <div className="bg-slate-100 shadow-md rounded flex p-4 h-full items-center text-slate-800">
                 

                  {GraphicSkillsInterface.logo}
                  <span className="title-font font-medium text-[#ED1B23]">{GraphicSkillsInterface.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
}
