import groq from "groq";

export const galleryPageQuery = groq`*[_type == "galleryPage"][0] {
  seo {
    "title": coalesce(title["$locale"], title.en),
    "description": coalesce(description["$locale"], description.en),
    "ogTitle": coalesce(ogTitle["$locale"], ogTitle.en),
    "ogDescription": coalesce(ogDescription["$locale"], ogDescription.en),
    ogImage
  },
  pageHeaderIcon,
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  stats,
  categoriesHeaderIcon,
  "categoriesTitle": coalesce(categoriesTitle["$locale"], categoriesTitle.en),
  "categoriesSubtitle": coalesce(categoriesSubtitle["$locale"], categoriesSubtitle.en),
  "imagesTitle": coalesce(imagesTitle["$locale"], imagesTitle.en),
  "imagesSubtitle": coalesce(imagesSubtitle["$locale"], imagesSubtitle.en),
}`;
