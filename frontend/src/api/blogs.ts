"use client";

import axios from "axios";
import { ALL_BLOGS_PATH, BLOGS_PATH, RELATED_BLOGS_PATH } from "./constants";
import { formatAllBlogs, formatBlogs } from "./dataFormatter";


export async function getBlogs () {
   try {

      const {data} = await axios.get(BLOGS_PATH);

      if(!data) {
         return []
      }

      return formatBlogs(data.data);
   } catch(error) {
      return [];
   }
}

export async function getAllBlogs ({tag, s}: {tag: string; s: string;}) {
   try {

      let filter = '';

      if(tag !== 'all') {
         filter = `&filters[tags][slug][$eq]=${tag}`
      }

      let search = '';

      if(s) {
         search = `&filters[title][$containsi]=${s}`
      }

      const {data} = await axios.get(ALL_BLOGS_PATH + filter + search);

      if(!data) {
         return []
      }

      return formatAllBlogs(data.data);
   } catch(error) {
      return [];
   }
}

export async function getRelatedBlogs ({blogId, tag}: {blogId: number; tag: number;}) {
   try {

      let tagFilter = '';

      if(tag) {
         tagFilter = `&filters[tags][id][$eq]=${tag}`
      }

      let blogFilter = '';

      if(blogId) {
         blogFilter = `&filters[id][$ne]=${blogId}`
      }

      const {data} = await axios.get(RELATED_BLOGS_PATH + tagFilter + blogFilter);

      if(!data) {
         return []
      }

      return formatAllBlogs(data.data);
   } catch(error) {
      return [];
   }
}