import groq from "groq";

export const galleryImageCategoryQuery = groq`*[_type == "galleryImageCategory"] {
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  "slug": slug.current,
  icon,
}`;
