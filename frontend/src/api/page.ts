import { HOME_PATH } from "./constants";

export async function getHomeData () {
  try {
    const {data} = await fetch(HOME_PATH).then(res => res.json());
  
    return data?.attributes?.sections ?? [];
  } catch(error) {
    return null;
  }
}