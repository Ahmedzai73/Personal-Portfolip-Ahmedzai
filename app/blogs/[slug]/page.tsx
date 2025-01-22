// // app/blogs/[slug]/page.tsx
// import { blogData } from "@/app/components/blogs/BlogsData";
// import Image from "next/image";

// export async function generateStaticParams() {
//   return blogData.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const blog = blogData.find((b) => b.slug === params.slug);
//   if (!blog) {
//     return { title: "Blog Not Found" };
//   }
//   return { title: blog.title };
// }

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const blog = blogData.find((b) => b.slug === params.slug);

//   if (!blog) {
//     return <div>404 - Blog Not Found</div>;
//   }

//   return (
//     <section><div className="mx-auto w-full max-w-7xl px-5 py-16 mt-10 md:px-10 md:py-20"> <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left"> {blog.title} </h2>
//       <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">{blog.dis}</p> 
//        <div className="mx-auto grid gap-8 lg:grid-cols-1">
//         <div className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8">
//           <Image src={blog.src} alt={blog.title} width={700} height={300} className="inline-block h-96 w-full  max-w-[800px] object-cover" />
//           <div className="flex flex-col items-start py-4">
//             <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
//               <p className="text-sm font-semibold text-red-800">{blog.catalogue}</p>
//             </div>
//             <p className="mb-4 text-xl font-bold md:text-2xl">{blog.title}</p>
//             <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
//               <p>Date</p>
//               <p className="mx-2 hidden lg:block">-</p>
              
//               <p>{blog.date}</p>
//             </div>
//             <p className=" mt-4 text-lg font-bold md:text-xl text-gray-500">{blog.blogbody}</p>
//           </div>
//         </div>

//       </div>
//     </div>
//     </section>
//   );
// }
// app/blogs/[slug]/page.tsx
import { blogData } from "@/app/components/blogs/BlogsData";
import Image from "next/image";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Ensure blogData is properly typed and contains valid slugs
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return { title: blog.title };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div className="text-center py-10 text-xl">404 - Blog Not Found</div>;
  }

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 mt-10 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
          {blog.title}
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
          {blog.dis}
        </p>
        <div className="mx-auto grid gap-8 lg:grid-cols-1">
          <div className="flex flex-col gap-4 rounded-md lg:pr-8">
            <Image
              src={blog.src}
              alt={blog.title}
              width={700}
              height={300}
              className="inline-block h-96 w-full max-w-[800px] object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-red-800">{blog.catalogue}</p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">{blog.title}</p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Date</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>{blog.date}</p>
              </div>
              <p className="mt-4 text-lg font-bold md:text-xl text-gray-500">
                {blog.blogbody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
