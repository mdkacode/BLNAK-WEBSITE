import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Essays, release notes, and field notes on minimalist technology.',
    site: context.site ?? SITE.url,
    items: posts.map(p => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.slug}/`,
      categories: p.data.tags,
    })),
  });
}
