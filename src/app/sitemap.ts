import { getAllPosts } from '@lib/api';

import type { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/'].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = getAllPosts(['date', 'slug']).map(({ slug, date }) => ({
    url: `${BASE_URL}/posts/${slug}`,
    lastModified: date,
  }));

  return [...routes, ...posts];
}
