import 'server-only';

const token = process.env.SANITY_API_TOKEN;

if (!token || token.trim() === '') {
  throw new Error('Missing or invalid SANITY_API_TOKEN');
}

export const sanityToken = token;
