import groq from "groq";

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
   seo {
    "title": coalesce(title["$locale"], title.en),
    "description": coalesce(description["$locale"], description.en),
    "ogTitle": coalesce(ogTitle["$locale"], ogTitle.en),
    "ogDescription": coalesce(ogDescription["$locale"], ogDescription.en),
    ogImage
  },
  // HEADER
  pageHeaderIcon,
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  "aboutAnnoc": coalesce(aboutAnnoc["$locale"], aboutAnnoc.en),
  // INTRO
  "introTitle": coalesce(introTitle["$locale"], introTitle.en),
  "introDesc": coalesce(introDesc["$locale"], introDesc.en),
  introBanner,
  introImage,
  "introImageCaption": coalesce(introImageCaption["$locale"], introImageCaption.en),
  "introImageDescription": coalesce(introImageDescription["$locale"], introImageDescription.en),
  introImageIcon,
  // STATS
  "statsTitle": coalesce(statsTitle["$locale"], statsTitle.en),
  "statsDescription": coalesce(statsDescription["$locale"], statsDescription.en),
  statsIcon,
  statsList,
  // DIFFERENCES
  "differencesTitle": coalesce(differencesTitle["$locale"], differencesTitle.en),
  "differencesDescription": coalesce(differencesDescription["$locale"], differencesDescription.en),
  differencesList,
  // VALUES
  "valuesTitle": coalesce(valuesTitle["$locale"], valuesTitle.en),
  "valuesDescription": coalesce(valuesDescription["$locale"], valuesDescription.en),
  valuesList,
  // VISION
  "visionTitle": coalesce(visionTitle["$locale"], visionTitle.en),
  "visionDescription": coalesce(visionDescription["$locale"], visionDescription.en),
  visionList,
}`;
