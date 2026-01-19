import groq from "groq";

export const trainersPageQuery = groq`*[_type == "trainersPage"][0] {
  seo {
    "title": coalesce(title["$locale"], title.en),
    "description": coalesce(description["$locale"], description.en),
    "ogTitle": coalesce(ogTitle["$locale"], ogTitle.en),
    "ogDescription": coalesce(ogDescription["$locale"], ogDescription.en),
    ogImage
  },
  // Header section
  pageHeaderIcon,
  "title": coalesce(title["$locale"], title.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  stats,
  // Specialities section
  specialitiesHeaderIcon,
  "specialitiesTitle": coalesce(specialitiesTitle["$locale"], specialitiesTitle.en),
  "specialitiesSubtitle": coalesce(specialitiesSubtitle["$locale"], specialitiesSubtitle.en),
  // Trainers section
  trainersHeaderIcon,
  "trainersTitle": coalesce(trainersTitle["$locale"], trainersTitle.en),
  "trainersSubtitle": coalesce(trainersSubtitle["$locale"], trainersSubtitle.en),
}`;
