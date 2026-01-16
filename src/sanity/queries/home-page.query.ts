/** GET HOME PAGE */

import { defineQuery } from 'next-sanity';

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0] {
  seo {
    "title": coalesce(title[$locale], title.en),
    "description": coalesce(description[$locale], description.en),
    "ogTitle": coalesce(ogTitle[$locale], ogTitle.en),
    "ogDescription": coalesce(ogDescription[$locale], ogDescription.en),
    ogImage
  }
}`);
