import { API_URL, BlOGS_SLUG_PATH } from "@/api/constants";
import { formatBlog, formatSEO } from "@/api/dataFormatter";
import SinglePage from "@/components/SinglePage";
import RelatedBlogSection from "@/layouts/RelatedBlogSection";

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
  const {data} = await fetch(API_URL + `/blogs?filters[slug][$eq]=${slug}&populate[1]=generalSeo&populate[2]=generalSeo.shareImg` ).then((res) => res.json());
 
  
  if(!data[0]) {
    return {
      title: 'Single Blog Page',
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
    
    const {data} = await fetch(BlOGS_SLUG_PATH, { cache: 'no-store' }).then((res) => res.json());
  
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

async function getBlogData (slug: string) {
  try {
    const query = `?filters[slug][$eq]=${slug}&populate[0]=cover&populate[1]=tags`;
   
    const url = API_URL + `/blogs${query}`
    const {data} = await fetch(url, {cache: 'no-store'}).then((res) => res.json());
   
     if(!data) {
      return null;
     }
   
     return formatBlog(data[0]);
  } catch(error) {
    return null;
  }
}

export default async function SingleBlog({params}:{params: {slug: string}}) {
  const blog = await getBlogData(params.slug);

  if(!blog) {
    return null;
  }

  return (
    <>
      <SinglePage data={blog} />
      <RelatedBlogSection blogId={blog.id} tab={blog?.tags?.[0]?.id} />
    </>
  )
}
