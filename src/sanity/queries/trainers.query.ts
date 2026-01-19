import groq from "groq";

export const trainersQuery = groq`*[_type == "trainer"] {
  name,
  slug,
  image,
  gender,
  "bio": coalesce(bio["$locale"], bio.en),
  "title": coalesce(title["$locale"], title.en),
  "tags": tags[]{
    "tag": coalesce(@["$locale"], @.en)
  },
  "languages": languages[]{
    "language": coalesce(@["$locale"], @.en)
  },
  experience,
  workingHours,
  socialLinks,
  primaryColor
}`;
