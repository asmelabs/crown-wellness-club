import groq from "groq";

export const SERVICES_QUERY = groq`*[_type == "service"] {
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  "description": coalesce(description["$locale"], description.en),
  icon,
  "slug": slug.current,
  image,
  "stats": [{
    "title": coalesce(title["$locale"], title.en),
    "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  }],
  "tags": [
    { "tag": coalesce(title["$locale"], title.en) }
  ],
  "featuresTitle": coalesce(featuresTitle["$locale"], featuresTitle.en),
  "features": [{
    "feature": coalesce(title["$locale"], title.en)
  }],
}`;
