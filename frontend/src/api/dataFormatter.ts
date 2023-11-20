
type ImageSize = "medium" | "small" | "thumbnail" | "large";
export type TagType = {id:number; title: string; slug: string;};

export function formatProjects (data: any[]) {
   
   const newData = data.map((project : any) => {
        const {id, attributes : {description, slug, title, banner, tags}} = project;

        let newBanner = {alt: "", src: ""};
        let newTags:TagType[] = [];

        if(banner?.data) {
        newBanner = formatImage("large", banner?.data);
        }

        if(tags?.data) {
        newTags = formatTags(tags?.data);
        }
        
        return {
        id,
        description,
        slug,
        title,
        banner: newBanner,
        tags: newTags
        }
   })

   return newData;
}

export function formatAllProjects (data: any[]) {
   
   const newData = data.map((project : any) => {
        const {id, attributes : {description, slug, title, banner, tags}} = project;

        let newBanner = {alt: "", src: ""};
        let newTags:TagType[] = [];

        if(banner?.data) {
        newBanner = formatImage("large", banner?.data);
        }

        if(tags?.data) {
        newTags = formatTags(tags?.data);
        }
        
        return {
        id,
        description,
        link: '/projects/' + slug,
        title,
        banner: newBanner,
        tags: newTags
        }
   })

   return newData;
}

export function formatProject(project: any) {
    const {id, attributes : {description, slug, title, banner, tags, content}} = project;

      let newBanner = {alt: "", src: ""};
      let newTags:TagType[] = [];

      if(banner?.data) {
         newBanner = formatImage("large", banner?.data);
      }

      if(tags?.data) {
         newTags = formatTags(tags?.data);
      }
      
      return {
         id,
         description,
         slug,
         title,
         banner: newBanner,
         tags: newTags,
         content,
      }
}

export function formatImage (imgSize: ImageSize, image: any) {

   let img = {alt: "", src: process.env.NEXT_PUBLIC_MEDIA_URL!};

   if(!image) {
      return img;
   }

   const {alternativeText, formats} = image.attributes;

   img.alt = alternativeText;
   img.src += formats[imgSize] ? formats[imgSize].url : image.url;

   return img;
}


export function formatTags(data: any[]) {
   const tags:TagType[] = data.map(tag => ({id: tag.id, title: tag.attributes.title, slug:tag.attributes.slug}));

   return tags;
}

export function formatBlogs(data: any[]) {
   const newData = data.map((blog : any) => {
      const {id, attributes : {description, slug, title, cover, tags}} = blog;

      let newBanner = {alt: "", src: ""};
      let newTags:TagType[] = [];

      if(cover?.data) {
      newBanner = formatImage("large", cover?.data);
      }

      if(tags?.data) {
      newTags = formatTags(tags?.data);
      }
      
      return {
         id,
         description,
         slug,
         title,
         banner: newBanner,
         tags: newTags
      }
 })

 return newData;
}

export function formatAllBlogs(data: any[]) {
   const newData = data.map((blog : any) => {
      const {id, attributes : {description, slug, title, cover, tags}} = blog;

      let newBanner = {alt: "", src: ""};
      let newTags:TagType[] = [];

      if(cover?.data) {
      newBanner = formatImage("large", cover?.data);
      }

      if(tags?.data) {
      newTags = formatTags(tags?.data);
      }
      
      return {
         id,
         description,
         link: '/blogs/' + slug,
         title,
         banner: newBanner,
         tags: newTags
      }
 })

 return newData;
}

export function formatBlog(blog: any) {
   const {id, attributes : {description, slug, title, cover, tags, content, publishedAt}} = blog;

     let newBanner = {alt: "", src: ""};
     let newTags:TagType[] = [];

     if(cover?.data) {
        newBanner = formatImage("large", cover?.data);
     }

     if(tags?.data) {
        newTags = formatTags(tags?.data);
     }
     
     return {
        id,
        description,
        slug,
        title,
        banner: newBanner,
        tags: newTags,
        content,
        publishedAt
     }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatStringToDate(dateStr : string) {
   const date = new Date(dateStr);
   const year = date.getFullYear();
   const month = months[date.getMonth()];
   const day = date.getDate();

   return `${day} ${month}, ${year}`;
}

export function formatSEO(data:any) {
   const seo = {
      metaTitle: '',
      metaDescription: '',
      shareImg: {src: '', alt: ''},
   }

   const {generalSeo} = data?.attributes

   seo.metaTitle = generalSeo?.metaTitle
   seo.metaDescription = generalSeo?.metaDescription
   seo.shareImg = formatImage('thumbnail', generalSeo?.shareImg?.data)

   return seo;
}