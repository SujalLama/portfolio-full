import { CardProps } from "../components/CardList";
import Slider from "../components/Slider";
import Link from "next/link";

let data : CardProps[] | null = null

const blogs = [
    {
        id: "s9032j93",
        title: "Mastering Design Patterns in React: A Comprehensive Guide",
        slug: "mastering-design-patterns",
        tags: ["react"],
        short_desc: "Design patterns in React are powerful tools that help you write maintainable, scalable, and reusable code. By understanding and applying these patterns, you can create robust React applications that are easy to develop, extend, and maintain.",
        banner: {url: "", title: "",}
    },
    {
        id: "s9032j93nid9",
        title: "Comprehensive guide to react hooks",
        slug: "comprehensive-guide-react-hooks",
        tags: ["react"],
        short_desc: "React Hooks have revolutionized how we write React components. They offer a more intuitive and functional approach to handling state and side effects in functional components. By embracing hooks, you can write cleaner, more modular, and easier-to-test code.",
        banner: {url: "", title: "",}
    },
    {
        id: "s9032j9312j",
        title: "Beginners Guide to React",
        slug: "beginners-guide-to-react",
        tags: ["react"],
        short_desc: "In the world of web development, creating dynamic and interactive user interfaces is a fundamental requirement. That's where React.js, a popular JavaScript library, comes into play. React simplifies the process of building user interfaces by breaking them into reusable components.",
        banner: {url: "", title: "",}
    },
    {
        id: "s9032j9312jbu38",
        title: "Rendering Strategies in Next js",
        slug: "next-rendering-strategies",
        tags: ["react, next"],
        short_desc: "While learning about nextjs, it is better to understand various rendering strategies that next js uses. Better understanding will eventually lead to better and performant application.",
        banner: {url: "", title: "",}
    },
    {
        id: "s9032j9312jnd93j",
        title: "How to write clean code in Javascript",
        slug: "write-clean-code-in-js",
        tags: ["javascript"],
        short_desc: "Clean code is the foundation of a robust and maintainable JavaScript application. It's not just about making your code look pretty; it's about fostering a culture of clarity, collaboration, and continuous improvement within your development team.",
        banner: {url: "", title: "",}
    },
]
export default function BlogSection() {

    if(!blogs || blogs?.length === 0) {
        return null;
    }

    return (
        <section className="bg-gray-100 dark:bg-primary">
            <div className="px-4 mx-auto max-w-screen-xl py-24">
                <Slider data={blogs ?? []} />

                <div className="hidden md:block text-center mt-16">
                    <Link href="/blogs" className="py-3 rounded-md px-4 mt-8 tracking-wide border-gray-400 hover:bg-gray-200 dark:text-white border dark:border-secondary text-base dark:hover:bg-secondary">
                        View All Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
}


