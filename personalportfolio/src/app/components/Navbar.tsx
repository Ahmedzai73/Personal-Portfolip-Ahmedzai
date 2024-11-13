import Link from "next/link";
import Image from "next/image";
import logo from "@/app/Images/logo.svg";

export default function Navbar() {
  return (
    <div className="container ">
      <div className="w-full h-[82.18px] flex flex-row items-center fixed justify-center mx-auto bg-[#222222] shadow-md shadow-[#ED3237]">
        

        <nav className="   mx-auto text-white flex px-[380px] ">
        <Link href="/"><Image src={logo} alt="logo" className="h-14"></Image></Link>
          <div className="text-3xl font-bold mr-[456px] flex items-center">
            Portfolio
          </div>

          <ul className="flex justify-center gap-[71px] font-normal  items-center">
          
            <Link href="/" className="text-samibold hover:text-[#ED3237]  tracking-wider">
              Home
            </Link>
            <Link
              href="#project2"
              className="text-samibold hover:text-[#ED3237] hover:border-3 hover:border-solid  hover:border-b-[#ED3237]  tracking-wider"
            >
              Skills
            </Link>
            <Link
              href="#project2"
              className="text-samibold hover:text-[#ED3237] hover:border-3 hover:border-solid  hover:border-b-[#ED3237]  tracking-wider"
            >
              Projects
            </Link>
            <Link href="/" className="text-samibold hover:text-[#ED3237] hover:border-3 hover:border-solid  hover:border-b-[#ED3237] tracking-wider">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
