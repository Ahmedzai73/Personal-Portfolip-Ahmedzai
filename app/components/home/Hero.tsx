import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="text-gray-600 body-font mt-14 mx-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-xl lg:w-full md:w-1/1 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" alt="hero" src="/hero.png" width={920} height={800} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-800"><span className="text-[#ED1B23]">Hi, I&apos;m </span>Ahmed Zai</h1>
          <h2 className="sm:text-4xl md:text-4xl  text-4xl mb-4 font-medium text-gray-800">Graphics Designer | Full Stack Developer</h2>
          <p className="mb-8 leading-relaxed">I am a Full Stack Developer with 9 months of experience and 8 years as a Graphic Designer. Skilled in TypeScript, React, Next.js, and Tailwind CSS, I create functional and visually appealing web solutions. My design expertise in flyers, packaging, and social media content enhances my development work. I am dedicated to learning and innovation, delivering impactful results. </p>
          <div className="flex justify-center">
            <Link href="#">
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg items-center">Linkedin <FaLinkedin className="ml-2" /></button></Link>
            <Link href="#">
              <button className="ml-4 inline-flex text-gray-100 bg-[#ED1B23] border-0 py-2 px-6 focus:outline-none hover:bg-[#e64d52] rounded text-lg items-center">Github <FaGithub className="ml-2" /> </button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
