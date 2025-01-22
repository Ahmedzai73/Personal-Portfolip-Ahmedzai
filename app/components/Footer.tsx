import Link from "next/link"
import Logo from "./logosvg"


/*************  ✨ Codeium Command ⭐  *************/
/******  bda3e400-b298-47bf-bcd1-dc748c8439e2  *******/
export default function Footer() {
  return (


<footer className="text-gray-600  bg-slate-800 flex justify-center">
  <div className=" px-5 py-10 mx-auto flex items-center ">
  <Link href="/" className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
          <Logo />
          
        </Link>
    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Copyright 2025 All rights reserved 
    </p>
  </div>
</footer>
  )
}
