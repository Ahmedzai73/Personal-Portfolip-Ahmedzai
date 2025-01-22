import Image from "next/image"
import { projectsData } from "./ProjectsData"


export default function Projects() {
  return (
    <section className="text-gray-600 body-font" id="Projects">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mt-6 text-slate-800 mb-4">Projects</h1>
            <div className="h-1 w-20 bg-[#ED1B23] rounded "></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed tracking-wide text-justify text-slate-800">I have collaborated with numerous clients in graphic design, delivering impactful solutions. With 9 months of web development experience, I have also created projects showcasing my skills, available for review here.</p>
          
        </div>

        <div className="flex flex-wrap -m-4">
          {projectsData.map((projectsInterface) => (
            <div className="xl:w-1/4 md:w-1/2 p-4 flex " key={projectsInterface.id}>
              <div className="bg-slate-50 p-6 rounded-lg shadow-lg hover:scale-105 transform duration-500 cursor-pointer">
                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={projectsInterface.src} alt="content" width={720} height={400} />
                <h3 className="tracking-widest text-[#ED1B23] text-xs font-medium title-font">{projectsInterface.catalogue}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{projectsInterface.name} </h2>
                <p className="leading-relaxed text-base">{projectsInterface.dis}</p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>



  )
}
