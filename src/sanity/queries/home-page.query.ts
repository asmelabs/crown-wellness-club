/** GET HOME PAGE */

import { defineQuery } from "next-sanity";
import type { HomePage, Seo } from "../types";

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0] {
  seo {
    "title": coalesce(title[$locale], title.en),
    "description": coalesce(description[$locale], description.en),
    "ogTitle": coalesce(ogTitle[$locale], ogTitle.en),
    "ogDescription": coalesce(ogDescription[$locale], ogDescription.en),
    ogImage
  },

  // HERO
  bgVideo,
  "bgVideoUrl": bgVideo.asset->url,
  "heroTitle": coalesce(heroTitle[$locale], heroTitle.en),
  "heroSubtitle": coalesce(heroSubtitle[$locale], heroSubtitle.en),
  heroBanner,
}`);

export type HomePageQueryResult =
  | {
      seo: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: Seo["ogImage"];
      };

      heroTitle: string;
      heroSubtitle: string;
      bgVideo: HomePage["bgVideo"];
      bgVideoUrl?: string | null;
    }
  | null
  | undefined;
