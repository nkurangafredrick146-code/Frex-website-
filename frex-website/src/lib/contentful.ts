import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Contentful content types
export const CONTENT_TYPES = {
  BLOG_POST: 'blogPost',
  AUTHOR: 'author',
} as const;

// Blog post query
export async function getBlogPosts() {
  const entries = await client.getEntries({
    content_type: CONTENT_TYPES.BLOG_POST,
    include: 2, // Include linked authors
    order: '-fields.publishDate',
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    category: item.fields.category,
    readTime: item.fields.readTime,
    publishDate: item.fields.publishDate,
    author: item.fields.author?.fields,
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: CONTENT_TYPES.BLOG_POST,
    'fields.slug': slug,
    include: 2,
    limit: 1,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0];
  return {
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    category: item.fields.category,
    readTime: item.fields.readTime,
    publishDate: item.fields.publishDate,
    author: item.fields.author?.fields,
  };
}

export default client;