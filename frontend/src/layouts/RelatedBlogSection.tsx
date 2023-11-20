"use client";

import { getRelatedBlogs } from "@/api/blogs";
import CardGrid from "@/components/CardGrid";
import QueryProvider from "@/providers/QueryProvider";
import { useQuery } from "@tanstack/react-query";

export default function RelatedBlogSection({blogId, tab}: {blogId: number; tab: number;}) {
   return <QueryProvider>
                <RelatedBlogs blogId={blogId} tab={tab} />
        </QueryProvider>
}


function RelatedBlogs ({blogId, tab}: {blogId: number; tab: number;}) {
    const {isPending, isError, data} = useQuery({
        queryKey: ['relatedProjects', tab, blogId], 
        queryFn: () => getRelatedBlogs({tag: tab, blogId: blogId})
        });
    
      if(isPending) {
        return <p>Loading...</p>
      }
    
      if(isError) {
        return <p>Error</p>
      }

      if(!data || data?.length === 0) {
        return null;
      }

  return (
    <section className="bg-gray-100 dark:bg-primary">
        <div className="max-w-screen-xl mx-auto px-4 py-24 border-t">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed dark:text-white">Related Blogs</h2>
            <CardGrid data={data} />  
        </div>  
    </section>
  )
}