import groq from "groq";

export const trainerSpecialitiesQuery = groq`*[_type == "trainerSpeciality"] {
  "name": coalesce(name["$locale"], name.en),
  slug,
  "description": coalesce(description["$locale"], description.en),
  icon,
}`;
