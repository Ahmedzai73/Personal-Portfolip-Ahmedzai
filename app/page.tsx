import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
// import Eduction from "./components/eduction/Eduction";
import Hero from "./components/home/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";



export default function Home() {
  return (
    <div className="">

      <Hero />
      <About />
      {/* <Eduction /> */}
      <Skills />
      <Projects />
      <Blogs />
      <Contact />

    </div>
  );
}
