import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import type { Post } from '@type/post';

const postsDirectory = join(process.cwd(), 'src', '_posts');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

type Fields = 'title' | 'excerpt' | 'date' | 'ogImage' | 'slug' | 'content';
export function getPostBySlug(slug: string, fields: Fields[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Partial<Post> = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as Post;
}

export function getAllPosts(fields: Fields[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      if (!post1.date || !post2.date) {
        return -1;
      }
      return post1.date > post2.date ? -1 : 1;
    });
  return posts;
}
