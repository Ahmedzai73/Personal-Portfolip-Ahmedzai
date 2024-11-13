import Image from "next/image";
import experiencewitlogoimge1 from "@/app/Images/javascript (1).png";
import experiencewitlogoimge2 from "@/app/Images/nodejs (1).png";
import experiencewitlogoimge3 from "@/app/Images/html.png";
import experiencewitlogoimge4 from "@/app/Images/css.png";
import experiencewitlogoimge5 from "@/app/Images/reactjs.png";
import Project_1 from "@/app/Images/Projects (1).jpg";
import Project_2 from "@/app/Images/Projects (2).jpg";
import Project_3 from "@/app/Images/Projects (3).jpg";
import Project_4 from "@/app/Images/Projects (4).jpg";

export default function aboutElements() {
  return (
    <div className="container w-[1440px] h-[900px] flex  justify-between items-center mx-auto flex-col">
      {/*skills section start*/}
      <div className="ExperienceWith w-[446.82px]" id="project2">
        <h1 className="aboutHeading mb-12 text-center font-bold text-white text-2xl">
          Skilled With
        </h1>
        <div className="logoImages flex justify-between">
          <Image
            src={experiencewitlogoimge1}
            alt="logos"
            className="w-10 h-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          ></Image>
          <Image
            src={experiencewitlogoimge2}
            alt="logos"
            className="w-10 h-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          ></Image>
          <Image
            src={experiencewitlogoimge3}
            alt="logos"
            className="w-10 h-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          ></Image>
          <Image
            src={experiencewitlogoimge4}
            alt="logos"
            className="w-10 h-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          ></Image>
          <Image
            src={experiencewitlogoimge5}
            alt="logos"
            className="w-10 h-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          ></Image>
        </div>
      </div>
      {/*skills section end*/}

      {/*projects section start*/}
      <div className="projects ">
        <div className="heading mb-12 text-center font-bold text-white text-2xl">
          Projects
        </div>

        <div className="projectsImages flex flex-row flex-wrap items-center justify-center w-[810px] h-[600px]  ">
          <Image
            src={Project_1}
            alt="logos"
            className="w-[390px] h-[300px] rounded-[30px] p-4  cursor-pointer transition-transform duration-300 hover:scale-110 "
          ></Image>
          <Image
            src={Project_2}
            alt="logos"
            className="w-[390px] h-[300px] rounded-[30px] p-4  cursor-pointer transition-transform duration-300 hover:scale-110 "
          ></Image>
          <Image
            src={Project_3}
            alt="logos"
            className="w-[390px] h-[300px] rounded-[30px] p-4  cursor-pointer transition-transform duration-300 hover:scale-110 "
          ></Image>
          <Image
            src={Project_4}
            alt="logos"
            className="w-[390px] h-[300px] rounded-[30px] p-4  cursor-pointer transition-transform duration-300 hover:scale-110 "
          ></Image>
        </div>
      </div>
      {/*projects section end*/}
    </div>
  );
}
