import groq from "groq";

export const galleryImagesQuery = groq`*[
  _type == "galleryImage" &&
  (!defined($category) || category->slug.current == $category)
] {
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  "description": coalesce(description["$locale"], description.en),
  slug,
  image,
  isFeatured,
  category
}`;
