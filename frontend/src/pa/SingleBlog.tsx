import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleBlog } from "../api/blog";
import SinglePage, { ISinglePageProps } from "../components/SinglePage";

const data : {[k : string] : ISinglePageProps} | null= null;

export default function SingleBlog () {
  const [blog, setBlog] = useState<ISinglePageProps | null>(null)

  const {blogId} = useParams();


    useEffect(() => {
      if(blogId) {
        (async function () {

          if(data && data[blogId]) {
              setBlog(data[blogId])
          } else {
            const res = await getSingleBlog(blogId);
  
            if(!res) {
              return;
            }
  
            if(res.status) {

              if(data && !data[blogId]) {
                data[blogId] = res.data as ISinglePageProps;
              }

              setBlog(res.data as ISinglePageProps);
            }
          }
        })()
      }
    }, [blogId])


  return (
    <SinglePage data={blog}/>
  )
}
