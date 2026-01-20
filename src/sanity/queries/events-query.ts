import groq from "groq";

export const EVENTS_QUERY = groq`*[_type == "event"] {
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  slug,
  "description": coalesce(description["$locale"], description.en),
  "location": coalesce(location["$locale"], location.en),
  date,
  endDate,
  image,
  "tags": [
    { "tag": coalesce(title["$locale"], title.en) }
  ]
}`;
