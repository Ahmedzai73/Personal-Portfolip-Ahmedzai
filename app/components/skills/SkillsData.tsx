import { FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill, RiFileExcel2Line  } from "react-icons/ri";
import { SiAdobephotoshop, SiAdobeillustrator,SiAdobeindesign,  SiCoreldraw } from "react-icons/si";
import { MdFindInPage } from "react-icons/md";
interface skillsInterface {
  sr: number;
  logo: React.ReactElement;
  name: string;
  dis: string;
  readMoreHref: string;
}

export const skillsData: skillsInterface[] = [
  {
    sr: 1,
    logo: <FaHtml5 className="text-6xl mt-1" />,
    name: "Html",
    dis: 'HTML (HyperText Markup Language) is the most basic building block of the Web… "Hypertext" refers to links that connect web pages to one another, either within … HTML uses "markup" to annotate text, images ',
    readMoreHref: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    sr: 2,
    logo: <FaCss3Alt className="text-6xl mt-1" />,
    name: "CSS",
    dis: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes ",
    readMoreHref: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    sr: 3,
    logo: <SiTypescript className="text-5xl" />,
    name: "Typescript",
    dis: "The first section develops the theory behind how TypeScript approaches modules. If you want to be able to write the correct module-related compiler options for any situation, reason about how to integrate TypeScript with other tools ",
    readMoreHref: "https://www.typescriptlang.org/docs/",
  },
  {
    sr: 4,
    logo: <RiTailwindCssFill className="text-5xl" />,
    name: "Tailwind CSS",
    dis: "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and ",
    readMoreHref: "https://tailwindcss.com/docs",
  },
  {
    sr: 5,
    logo: <RiNextjsFill className="text-6xl" />,
    name: "Next.js",
    dis: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. ",
    readMoreHref: "https://nextjs.org/docs",
  },
  {
    sr: 6,
    logo: <FaFigma className="text-5xl " />,
    name: "Figma",
    dis: "Find answers and inspiration on all things Figma and FigJam, from design systems to prototypes to plugins. Watch videos, view guides, and access forums to learn from the community and ",
    readMoreHref: "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma",
  },
];
interface GraphicSkillsInterface {
  sr: number;
  logo: React.ReactElement;
  name: string;



}

export const graphicSkillsData: GraphicSkillsInterface[] = [
  {
    sr: 1,
    logo: <SiAdobephotoshop className="text-5xl mr-3" />,
    name: "Adobe Photoshop",


  },
  {
    sr: 2,
    logo: <SiAdobeillustrator className="text-5xl mr-3" />,
    name: "Adobe Illustrator",


  },
  {
    sr: 3,
    logo: <SiAdobeindesign className="text-5xl mr-3 " />,
    name: "Adobe InDesign",

  },
  {
    sr: 4,
    logo: <SiCoreldraw className="text-5xl mr-3 " />,
    name: "CorelDraw",

  },
  {
    sr: 5,
    logo: <MdFindInPage className="text-5xl mr-3 " />,
    name: "Inpage (for Urdu typing)",

  },
  {
    sr: 6,
    logo: <RiFileExcel2Line className="text-5xl mr-3 " />,
    name: "Microsoft Excel",

  }


];