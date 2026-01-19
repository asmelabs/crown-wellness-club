import groq from "groq";

export const trainersQuery = groq`*[_type == "trainer"] {
  name,
  slug,
  image,
  gender,
  "bio": coalesce(bio["$locale"], bio.en),
  "title": coalesce(title["$locale"], title.en),
  "tags": [
    { "tag": coalesce(title["$locale"], title.en) }
  ],
  "languages": [
    { "language": coalesce(title["$locale"], title.en) }
  ],
  experience,
  workingHours,
  socialLinks,
  primaryColor
}`;
