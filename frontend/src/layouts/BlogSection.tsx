import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../api/blog";
import { CardProps } from "../components/CardList";
import Slider from "../components/Slider";
import SectionLoader from "../components/SectionLoader";

let data : CardProps[] | null = null

export default function BlogSection() {
    const [blogs, setBlogs] = useState<CardProps[] | null>(null);

    useEffect(() => {
        (async function () {

            if(data) {
                setBlogs(data);
            } else {
                const response = await getAllBlogs('','', 5)

                if(!response) {
                    return;
                }
    
                if(response.status) {
                    data = response.data as CardProps[];
                    setBlogs(response.data as CardProps[]);
                }
            }
        })()
    }, [])

    if(!blogs || blogs?.length === 0) {
        return <SectionLoader />;
    }

    return (
        <section className="bg-gray-100 dark:bg-primary">
            <div className="px-4 mx-auto max-w-screen-xl py-24">
                <Slider data={blogs ?? []} />

                <div className="hidden md:block text-center mt-16">
                    <Link to="/blogs" className="py-3 rounded-md px-4 mt-8 tracking-wide border-gray-400 hover:bg-gray-200 dark:text-white border dark:border-secondary text-base dark:hover:bg-secondary">
                        View All Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
}


