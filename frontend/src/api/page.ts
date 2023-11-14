import { API_URL, HOME_PATH } from "./constants";

export async function getHomeData () {
  const {data} = await fetch(HOME_PATH).then(res => res.json());

  return data?.attributes?.sections ?? [];
}