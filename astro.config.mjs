// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://radiolabme.github.io',
  base: '/tqsl-docs',
  integrations: [
    starlight({
      title: 'Trusted QSL',
      description:
        'Keeping the technology for digitally signed eQSLs freely available to the amateur radio community',
      favicon: '/favicon.svg',
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/radiolabme/tqsl-docs/edit/main/',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/radiolabme/tqsl-docs' },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://radiolabme.github.io/tqsl-docs/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'index' },
            { label: 'FAQ', slug: 'faq' },
          ],
        },
        {
          label: 'Specifications',
          items: [
            { label: 'GAbbI', slug: 'specifications/gabbi' },
            { label: 'ARRL LoTW', slug: 'specifications/lotw' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'About This Archive', slug: 'reference/about-this-archive' },
            { label: 'License', slug: 'reference/license' },
            { label: 'Missing Resources', slug: 'reference/missing-resources' },
          ],
        },
      ],
    }),
  ],
});
