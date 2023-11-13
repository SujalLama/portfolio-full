import client from "./contentful-config";

interface IEntry {
    content_type: string;
    select?: string;
    'metadata.tags.sys.id[in]' ?: string;
    'fields.title[match]' ?: string;
    'limit' ?: number;
}

export async function getAllBlogs (tag: string = '', search: string = '', limit: number = 0) {
    const entries : IEntry= {
        content_type: 'blogPost',
        select: 'fields.title,fields.short_desc,fields.slug,fields.banner,sys.id,metadata.tags'
    }

    if(tag && tag !== 'all') {
        entries['metadata.tags.sys.id[in]'] = tag;
    }

    if(search) {
        entries['fields.title[match]'] = search
    }

    if(limit) {
        entries['limit'] = limit;
    }
    
    try {
      const response = await  client.getEntries(entries);

      if(response?.items) {

        const data = response.items.map((item) => {
            const tags = item.metadata.tags.length > 0 ? item.metadata.tags.map(tag => (tag.sys.id)) : [];

            const banner = item.fields.banner as unknown as {fields : {title: string, file: {url: string}}};
            
            return ({
                short_desc: item.fields.short_desc ?? '',
                title: item.fields.title ?? '',
                id: item.sys.id,
                link: `/blogs/${item.sys.id}`,
                tags,
                banner: banner?.fields?.file?.url ? {url: banner.fields.file.url, title: banner.fields.title} : {url:'', title: ''}
            })
        })

        return {status: true, data}
      }
      
    } catch (error) {
        return {status:false, error: 'Error occured'}
    }
    
}


export async function getSingleBlog (entryId : string) {
    
    try {
      const response = await  client.getEntry(entryId);

      if(response) {

        if(response.fields) {
            const {title, short_desc, banner, content, scroll} = response.fields;

            
            const data = {
                title: title ? title : '',
                desc: short_desc ?? '',
                content: content ?? '',
                banner: banner ?? {fields: {title: '', file: {url: ''}}},
                scroll: scroll ?? false
            }

            return {
                status: true, 
                data
            }

        }

      }
      
    } catch (error) {
        return {status:false, error: 'Error occured'}
    }
    
}