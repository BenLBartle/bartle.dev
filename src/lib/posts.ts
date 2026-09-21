import { getCollection, render } from 'astro:content';

export async function getSortedPosts() {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return Promise.all(
    sorted.map(async (post) => {
      const { remarkPluginFrontmatter } = await render(post);
      return { ...post, data: { ...post.data, excerpt: remarkPluginFrontmatter.excerpt } };
    }),
  );
}
