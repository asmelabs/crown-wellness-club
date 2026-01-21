import groq from "groq";

export const SETTINGS_QUERY = groq`*[_type == "settings"][0] {
  siteName,
  logo,
  "address": coalesce(address["$locale"], address.en),
  phone,
  email,
  workingHours,
  mapEmbed,
  socialLinks,
  pageRendering,
}`;

export const SETTINGS_META_QUERY = groq`*[_type == "settings"][0] {
  siteName,
  pageRendering,
  defaultSeo {
    "title": coalesce(title["$locale"], title.en),
    "description": coalesce(description["$locale"], description.en),
    "ogTitle": coalesce(ogTitle["$locale"], ogTitle.en),
    "ogDescription": coalesce(ogDescription["$locale"], ogDescription.en),
    ogImage,
  },
}`;
