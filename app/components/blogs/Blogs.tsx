import Image from "next/image"
import Link from "next/link"
import { blogData } from "./BlogsData"


export default function Blogs() {
    return (
        <div className="main " id="Blogs">
            <h1 className="sm:text-4xl text-2xl text-center font-medium title-font text-[#ED1B23] ">
                B<span className="text-slate-800">logs</span>
            </h1>

            <article className="mx-auto my-10 -w-1/2 mb-10 rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto ">
                {blogData.map((BlogInterface) => (
                    <div key={BlogInterface.id}className="flex">
                        <div className="p-5 md:w-2/5 md:p-8 mx-auto">
                            <span className="rounded-md text-[#ED1B23] px-2 py-1 text-md font-medium">Date: {BlogInterface.date}</span>
                            <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">{BlogInterface.title}</p>
                            <p className="mt-3 text-gray-600">{BlogInterface.dis}</p>

                            <Link href={`/blogs/${BlogInterface.slug}`}>
                                <button className="mr-2 mt-4 flex items-center justify-center rounded-md bg-slate-800 px-8 py-2 text-center text-white duration-150 hover:translate-y-1 hover:bg-slate-500 md:mb-4">Read More</button></Link>
                        </div>
                        <div className="mx-auto hidden items-center px-5 md:flex md:p-8 ">
                            <Image className="rounded-2xl h-full w-full object-cover bg-left-top overflow-hidden" src={BlogInterface.src} alt={BlogInterface.src} width={384} height={257} />
                        </div>
                    </div>
                ))}
            </article>
        </div>


    )
}
