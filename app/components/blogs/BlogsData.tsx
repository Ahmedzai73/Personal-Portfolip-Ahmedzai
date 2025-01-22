interface BlogInterface {
    id: number;
    title: string;
    catalogue: string;
    dis: string;
    src: string;
    date: string;
    slug: string;
    blogbody: string;
    
}

export const blogData: BlogInterface[] = [
    {
        id: 1,
        title: "Next.js 15 - What's New and Why It Matters",
        catalogue:"Web Development",
        dis: "Briefly explain what Next.js is and its importance in modern web development.",
        src: "/nextjs.png",
        date: "20-01-2025",
        slug: "nextjs-15-whatandaposs-new-and-why-it-matters",
        blogbody: "Blog Content will display here...",
    },
    {
        id: 2,
        title: "React 19 - The Future of Frontend Development",
        catalogue:"Web Development",
        dis: "Start with the evolution of React and its impact on the frontend ecosystem.",
        src: "/remix.jpeg",
        date: "21-01-2025",
        slug: "react-19-the-future-of-frontend-development",
        blogbody: "Blog Content will display here...",
    },
  
 
 
]