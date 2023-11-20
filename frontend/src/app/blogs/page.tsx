
import { getTags } from "@/api/tags";
import BlogSearch from "@/layouts/BlogSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Blogs',
  description: 'This page includes all the information about the blogs written by Sujal lama.',
}

export default async function BlogsPage() {
    const tabs = await getTags();

    if(!tabs) {
        return null;
    }

  return (
    <BlogSearch data={{tabs: tabs}}/>
  )
}
