export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const HOME_PATH = API_URL + "/home-page?populate[generalSeo][populate]=*&populate[sections][populate]=*"

export const TAGS_PATH = API_URL + '/tags';

export const BLOGS_PATH = API_URL + '/blogs?fields[1]=title&fields[2]=description&fields[3]=slug&populate[0]=cover&populate[1]=tags&pagination[pageSize]=6';
export const ALL_BLOGS_PATH = API_URL + '/blogs?fields[1]=title&fields[2]=description&fields[3]=slug&populate[0]=cover&populate[1]=tags';
export const RELATED_BLOGS_PATH = API_URL + '/blogs?fields[1]=title&fields[2]=description&fields[3]=slug&populate[0]=cover&populate[1]=tags&pagination[pageSize]=4';


export const PROJECTS_PATH = API_URL + '/projects?fields[1]=title&fields[2]=description&fields[3]=slug&populate[0]=banner&populate[1]=tags&pagination[pageSize]=6&sort[0]=updatedAt:desc';
export const ALL_PROJECTS_PATH = API_URL + '/projects?fields[1]=title&fields[2]=description&fields[3]=slug&populate[0]=banner&populate[1]=tags';

export const PROJECTS_SLUG_PATH = API_URL + '/projects?fields[0]=slug'
export const BlOGS_SLUG_PATH = API_URL + '/blogs?fields[0]=slug'