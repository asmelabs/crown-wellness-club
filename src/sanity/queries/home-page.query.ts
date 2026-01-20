/** GET HOME PAGE */

import { defineQuery } from "groq";

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0] {
  seo {
    "title": coalesce(title["$locale"], title.en),
    "description": coalesce(description["$locale"], description.en),
    "ogTitle": coalesce(ogTitle["$locale"], ogTitle.en),
    "ogDescription": coalesce(ogDescription["$locale"], ogDescription.en),
    ogImage
  },

  // HERO
  bgVideo,
  "bgVideoUrl": bgVideo.asset->url,
  "heroTitle": coalesce(heroTitle["$locale"], heroTitle.en),
  "heroSubtitle": coalesce(heroSubtitle["$locale"], heroSubtitle.en),
  heroBanner,

  // SERVICES
  "servicesTitle": coalesce(servicesTitle["$locale"], servicesTitle.en),
  "servicesSubtitle": coalesce(servicesSubtitle["$locale"], servicesSubtitle.en),
  servicesBanner,

  // SCALE
  "scaleTitle": coalesce(scaleTitle["$locale"], scaleTitle.en),
  "scaleSubtitle": coalesce(scaleSubtitle["$locale"], scaleSubtitle.en),
  scaleList,
  scaleBanner,

  // INNOVATION
  "innovationTitle": coalesce(innovationTitle["$locale"], innovationTitle.en),
  "innovationSubtitle": coalesce(innovationSubtitle["$locale"], innovationSubtitle.en),
  innovationStatsList,
  innovationList,
  innovationBanner,

  // COMMUNITY
  "communityTitle": coalesce(communityTitle["$locale"], communityTitle.en),
  "communitySubtitle": coalesce(communitySubtitle["$locale"], communitySubtitle.en),
  communityStatsList,
  communityList,
  communityBanner,

  // EVENTS
  "eventsTitle": coalesce(eventsTitle["$locale"], eventsTitle.en),
  "eventsSubtitle": coalesce(eventsSubtitle["$locale"], eventsSubtitle.en),
  eventsBanner,

  // MEMBERSHIPS
  "membershipsAnnoc": coalesce(membershipsAnnoc["$locale"], membershipsAnnoc.en),
  "membershipsTitle": coalesce(membershipsTitle["$locale"], membershipsTitle.en),
  "membershipsSubtitle": coalesce(membershipsSubtitle["$locale"], membershipsSubtitle.en),
  membershipsBanner,
  membershipsStats,

  // CONTACT
  "contactTitle": coalesce(contactTitle["$locale"], contactTitle.en),
  "contactSubtitle": coalesce(contactSubtitle["$locale"], contactSubtitle.en),
}`);
