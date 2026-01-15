import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(`*[_type == "page"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
}`);
