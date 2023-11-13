import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SinglePage, { ISinglePageProps } from "../components/SinglePage";
import { getSingleProject } from "../api/projects";

const data : {[k : string] : ISinglePageProps} | null= null;

export default function SingleProject () {
  const [project, setProject] = useState<ISinglePageProps | null>(null)

  const {projectId} = useParams();


    useEffect(() => {
      if(projectId) {
        (async function () {

          if(data && data[projectId]) {
            setProject(data[projectId])
          } else {
            const res = await getSingleProject(projectId);
            
            if(!res) {
              return;
            }

            if(res.status) {
              if(data && !data[projectId]) {
                data[projectId] = res.data as ISinglePageProps;
              }

              setProject(res.data as ISinglePageProps);
            }
          }

        })()
      }
    }, [projectId])

  return (
    <SinglePage data={project} />
  )
}
