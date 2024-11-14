import Link from "next/link";
import Image from "next/image";
import logo from "@/app/Images/logo.svg";
import { FiAlignRight } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="container">
     
      {/* this is container*/}
      <nav className="w-[1440px] h-14 bg-orange-500 mx-auto grid grid-cols-2 justify-center items-center px-4">
        
        {/* this is container*/}
        <div className="bg-green-300 w-44 flex justify-center items-center ">
          <Link href="/">
            <Image src={logo} alt="logo" className="h-14"></Image>
            
          </Link><h1 className="font-bold text-white tracking-wider">Portfolio</h1>
</div>

        <div className="hamburger w-auto bg-cyan-300"><FiAlignRight /></div>
      </nav>
    </div>
  );
}
