import { TAGS_PATH } from "./constants";

export const getTags = async () => {
  try {
    const {data} = await fetch(TAGS_PATH).then(res => res.json());
  
    if(!data) {
      return null;
    }

    const tags = data.map((item: any) => ({id: item.id, name: item.attributes.title, slug: item.attributes.slug}));
    tags.unshift({id: 'all', name: 'All', slug: 'all'})
    
    return tags ?? [];

  } catch(error) {
    return null;
  }
}