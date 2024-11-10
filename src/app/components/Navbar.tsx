import Link from "next/link"

export default function Navbar() {
  return ( 
    <div className="container w-[1440px] h-[82.18px] flex flex-row items-center justify-center mx-auto">
      <nav className="   mx-auto text-white flex px-[280px] ">
        <div className="logo text-2xl font-bold mr-[356px]"><Link href="/">Portfolio</Link></div>
        <ul className="flex justify-center gap-[71px] font-normal">
            <Link href="/" className="text-samibold hover:text-yellow-400">Home</Link>
            <Link href="#project2" className="text-samibold hover:text-yellow-400">Skills</Link>
            <Link href="#project2" className="text-samibold hover:text-yellow-400">Projects</Link>
            <Link href="/" className="text-samibold hover:text-yellow-400">Contact</Link>
        </ul>
      </nav>
    </div>
  )
}
