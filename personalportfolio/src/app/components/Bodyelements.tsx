import Link from "next/link";
import Image from "next/image";
import profile from "@/app/Images/WhatsApp Image 2024-11-13 at 16.05.31_dc71bf57.jpg";


export default function Bodyelements() {
  return (
    <div className="container mx-auto">
      <div className="w-[1440px] h-[900px] mx-auto flex justify-cente b">
        <div className="BodyContent w-[656px] h-[650px] mx-auto  mt-[160px] text-white flex flex-col justify-between ">
          <div className="relative flex items-center justify-center">
            {/* Spinning Circle Effect - Positioned Behind */}
            <div className="absolute w-[250px] h-[200px] bg-gradient-to-r from-[#000000] to-[#000000] rounded-full blur-xl animate-spin border-4"></div>
            <div className="absolute w-[280px] h-[280px] rounded-full outline-[3pt] outline outline-offset-0 outline-[#ED3237] "></div>
            <div className="absolute w-[200px] h-[250px] bg-gradient-to-r from-[#ED3237] to-[#811b1e] rounded-full blur-xl  border-4 border-[#8d3437] hidden"></div>
            

            {/* Image Circle - Positioned on Top */}
            <div className="w-[250px] h-[250px] overflow-hidden bg-white rounded-full z-10">
              <Image
                src={profile}
                alt="Profile Picture"
                className="w-[190px] h-auto mx-auto"
              />
            </div>
          </div>

          <h1 className="HeadingText text-[30px] text-center leading-[63.4px] mt-7">
            Hello, I am <br />
            <span className="text-[60px] font-bold text-[#ED3237]">
              Ahmed Zai
            </span>
            <br />
            Frontend Developer & UX/UI Designer
          </h1>
          <p className="peragraphText text-center w-[656px]">
            I am a seasoned designer with over 6 years of professional
            experience. I specialize in creating intuitive, user-centered
            interfaces that enhance the digital experience across scalable,
            architectures
          </p>

          <div className="BodyButtons flex flex-row items-center justify-evenly mx-auto mt-3 w-[417px] h-[64px]">
            <div className="button1 w-[195px] h-[64px] bg-white rounded-[50px] flex items-center justify-center cursor-pointer hover:bg-[#bebebe]  group">
              <Link
                href="https://www.linkedin.com/in/ahmed-zai-b3b5aa2b8"
                className="text-black  text-lg font-bold font-[Montserrat] "
              >
                Linkedin
              </Link>
            </div>
            <div className="button2 w-[195px] h-[64px] flex rounded-[50px] border-[2px] border-[#ED3237] items-center justify-center cursor-pointer hover:bg-[#ED3237] group ">
              <Link
                href="https://github.com/Ahmedzai73"
                className="text-[#ED3237] text-lg font-bold font-['Montserrat'] group-hover:text-white"
              >
                Git Hub
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
