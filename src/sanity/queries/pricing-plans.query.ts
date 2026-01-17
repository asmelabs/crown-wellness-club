import groq from "groq";

export const PRICING_PLANS_QUERY = groq`*[_type == "pricingPlan"] | order(order asc) {
  "name": coalesce(name["$locale"], name.en),
  "subtitle": coalesce(subtitle["$locale"], subtitle.en),
  "description": coalesce(description["$locale"], description.en),
  icon,
  slug,
  order,
  isPopular,
  accent,
  "features": features[]{
    "feature": coalesce(feature["$locale"], feature.en),
    icon,
    isAvailable,
  },
  action
}`;
