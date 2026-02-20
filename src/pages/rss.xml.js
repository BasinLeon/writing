import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const literary = await getCollection('literary', ({ data }) => data.isDraft !== true);
  const sortedWorks = literary.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const base = import.meta.env.BASE_URL;

  return rss({
    title: 'Leon Basin Literary',
    description: 'Writing that survives rereading. Personal essays, memory fragments, and voice-led prose.',
    site: context.site,
    items: sortedWorks.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `${base}literary/${post.slug}/`
    })),
    customData: '<language>en-us</language>'
  });
}
