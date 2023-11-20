"use client";

import axios from "axios";
import { ALL_PROJECTS_PATH, PROJECTS_PATH } from "./constants";
import { formatAllProjects, formatProjects } from "./dataFormatter";

export async function getProjects () {
   try {

      const {data} = await axios.get(PROJECTS_PATH);

      if(!data) {
         return []
      }

      return formatProjects(data.data);
   } catch(error) {
      return [];
   }
}

export async function getAllProjects ({tag}: {tag: string;}) {
   try {

      let filter = '';

      if(tag !== 'all') {
         filter = `&filters[tags][slug][$eq]=${tag}`
      }

      const {data} = await axios.get(ALL_PROJECTS_PATH + filter);

      if(!data) {
         return []
      }

      return formatAllProjects(data.data);
   } catch(error) {
      return [];
   }
}

