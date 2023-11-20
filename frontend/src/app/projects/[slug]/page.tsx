import { API_URL, PROJECTS_PATH, PROJECTS_SLUG_PATH } from "@/api/constants";
import { formatProject, formatSEO } from "@/api/dataFormatter";
import SinglePage from "@/components/SinglePage"

import { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const {data} = await fetch(API_URL + `/projects?filters[slug][$eq]=${slug}&populate[1]=generalSeo&populate[2]=generalSeo.shareImg` ).then((res) => res.json());
 
  
  if(!data[0]) {
    return {
      title: 'Single Project Page',
    }
  }

  const product = formatSEO(data[0]);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    openGraph: {
      images: [product.shareImg.src, ...previousImages],
    },
  }
}

export async function generateStaticParams() {
  try {
    
    const {data} = await fetch(PROJECTS_SLUG_PATH, { cache: 'no-store' }).then((res) => res.json());
  
    if(!data) {
      return [{slug: '0'}]
    }
   
    return data?.map((item : {attributes: {slug: string;}}) => ({
      slug: item?.attributes?.slug,
    })) 

  } catch(error) {
    return [{slug: '0'}]
  }
}

async function getProjectData (slug: string) {
  try {
    const query = `?filters[slug][$eq]=${slug}&populate[0]=banner&populate[1]=tags`;
   
    const url = API_URL + `/projects${query}`
    const {data} = await fetch(url, {cache: 'no-store'}).then((res) => res.json());
   
     if(!data) {
      return null;
     }
   
     return formatProject(data[0]);
  } catch(error) {
    return null;
  }
}

export default async function SingleProject({params}: {params: {slug: string;}}) {
  const project = await getProjectData(params.slug);

  if(!project) {
    return null;
  }

  return (
    <SinglePage data={project} />
  )
}
