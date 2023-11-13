"use client";

import client from "./contentful-config";

interface IEntry {
    content_type: string;
    "fields.slug"?: string;
    select?: string;
    limit?: number;
}
export async function getPageData (slug : string) {
    const entries : IEntry= {
        content_type: 'page',
        "fields.slug": slug,
        select: 'fields'
    }
    
    try {
      const response = await  client.getEntries(entries);
        let data : unknown[] | undefined = []
        
      if(response) {
        data = response.includes?.Entry?.map(item => item.fields);
      }
      return {status: true, data}
      
    } catch (error) {
        return {status:false, error: 'Error occured'}
    }
    
}

export async function getSingleSection (entryId : string) {
    
  try {
    const response = await client.getEntry(entryId);
    
    if(response) {
      // if(response.fields) {

      //         const {title, desc, subtitle, banner, link_url, link_text} = response.fields;
      //         const data = {
      //             title: title ?? '',
      //             subtitle: subtitle ?? '',
      //             desc: desc ?? '',
      //             banner: banner ?? {url: '', title: ''},
      //             link_url: link_url ?? '',
      //             link_text: link_text ?? ''
      //         }

      //         return {
      //             status: true, 
      //             data
      //         }
      //     }
      }
    
  } catch (error) {
      return {status:false, error: 'Error occured'}
  }
  
}

export async function getHero () {
  const entries : IEntry= {
      content_type: 'hero_section',
      select: 'fields',
      limit: 1,
  }

  try {
    const response = await  client.getEntries(entries);
      

    if(response) {

      const banner = {title: '', url: ''};

      if(response.includes?.Asset?.length) {
        const asset = response.includes?.Asset[0];
        banner.title = asset.fields.title
        banner.url = asset.fields.file.url
      }

      const data = response.items[0].fields;
      
      return {status: true, data: {
        subtitle: data.subtitle ?? '',
        title: data.title ?? '',
        desc: data.desc ?? '',
        banner: banner,
        link_text: data.link_text ?? '',
        link_url: data.link_url ?? ''}}
    }
    
  } catch (error) {
      return {status:false, error: 'Error occured'}
  }
}

export async function getAbout () {
  const entries : IEntry= {
      content_type: 'about_section',
      select: 'fields',
      limit: 1,
  }

  try {
    const response = await  client.getEntries(entries);
      
    if(response) {
      const data = response.items[0].fields;

      const image = {title: '', url: ''};

      if(response.includes?.Asset?.length) {
        const asset = response.includes?.Asset[0];
        image.title = asset.fields.title
        image.url = asset.fields.file.url
      }

      return {status: true, data: {
        title: data.title ?? '',
        img: image,
        detail: data.detail ?? {title: "", desc: ""},
        skills: data.skills ?? []
      }}
    }
    
  } catch (error) {
      return {status:false, error: 'Error occured'}
  }
}