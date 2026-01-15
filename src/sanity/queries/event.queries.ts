import { defineQuery } from 'next-sanity';

/**
 * Get all events
 */
export const EVENTS_QUERY = defineQuery(`*[_type == "event"] {  
  title,
  slug,
  description,
  date,
  endDate,
  location,
  image,
  tags,
}`);

/**
 * Get an event by slug
 */
export const EVENT_BY_SLUG_QUERY = defineQuery(`*[_type == "event"] && slug.current == $slug {
  title,
  slug,
  description,
  date,
  endDate,
  location,
  image,
  tags,
}`);
