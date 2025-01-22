import Image from "next/image"


export default function About() {
  return (
    <section className="text-gray-600 body-font mx-auto bg-slate-100" id="About">
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col  items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col justify-center md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-800"><span className="text-[#ED1B23]">About </span>Me</h1>

          <p className="mb-8 leading-relaxed">I am a passionate Full Stack Developer with 9 months of experience, continuously learning and building projects. I started by mastering TypeScript and creating CLI projects, then moved on to learning Tailwind CSS. Recently, I have gained expertise in React and Next.js. Alongside development, I have 8 years of experience as a Graphic Designer, creating impactful designs like flyers, packaging, and social media posts. I combine my technical and creative skills to deliver visually appealing and functional solutions. I&m committed to learning, innovation, and building projects that reflect my growing expertise. </p>

        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/1 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" alt="about" src="/about.png" width={820} height={800} />
        </div>

      </div>
    </section>
  )
}
