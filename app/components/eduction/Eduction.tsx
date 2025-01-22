import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";

export default function Eduction() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font text-[#ED1B23]">
            Education
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg bg-slate-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ED1B23] text-white flex-shrink-0">
                  <BiSolidSchool className="text-xl" />
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Matriculation
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base text-white">
                  NED Foundation School - Karachi.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg  bg-slate-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ED1B23] text-white flex-shrink-0">
                  <FaSchool className="text-xl" />
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Intermediate
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base text-white">
                  Govt. Boys Degree College - Karachi.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-slate-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ED1B23] text-white flex-shrink-0">
                  <MdEngineering className="text-xl" />
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Generative AI Engineer (GenEng)
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base text-white">
                  GIAIC - Karachi. <b>Still Continue...</b>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
