import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Firefish Resources',
  tagline: 'Bitcoin-backed lending platform',
  favicon: 'img/favicon.ico',

  url: 'https://anananas42.github.io',
  baseUrl: '/docs-Firefish/',

  organizationName: 'Anananas42',
  projectName: 'docs-Firefish',
  trailingSlash: false,

  onBrokenLinks: 'throw',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'it', 'cs', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
        path: 'es',
      },
      de: {
        label: 'Deutsch',
        path: 'de',
      },
      it: {
        label: 'Italiano',
        path: 'it',
      },
      cs: {
        label: 'Česky',
        path: 'cs',
      },
      zh: {
        label: '中文',
        path: 'zh',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Anananas42/docs-Firefish/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Anananas42/docs-Firefish/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'algolia-site-verification',
        content: '199DC04FB859E1F7',
      },
    ],
    algolia: {
      appId: '68W48A2WHL',
      apiKey: '5c5ba67215c57c58f555c068890f029b',
      indexName: 'firefish-docs',
      contextualSearch: true,
      searchPagePath: 'search',
    },
    image: 'img/firefish-social-card.jpg',
    navbar: {
      title: 'Firefish Resources',
      logo: {
        alt: 'Firefish Logo',
        src: 'img/logo512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeHubSidebar',
          position: 'left',
          label: 'Knowledge Hub',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mediaInsightsSidebar',
          position: 'left',
          label: 'Media & Insights',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legalSidebar',
          position: 'left',
          label: 'Legal',
        },
        {
          type: 'docSidebar',
          sidebarId: 'supportSidebar',
          position: 'left',
          label: 'Support',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Firefish-io',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://firefish.io',
          label: 'Main Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'How it works',
              to: '/docs/how-it-works',
            },
            {
              label: 'FAQ',
              to: '/docs/faq/general',
            },
            {
              label: 'Firefish Protocol',
              to: '/docs/firefish-protocol',
            },
            {
              label: 'Support',
              to: '/docs/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/7dbKKaQxH3',
            },
            {
              label: 'Main Website',
              href: 'https://firefish.io',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Legal Overview',
              to: '/docs/legal',
            },
            {
              label: 'Media & Insights',
              to: '/docs/media-insights',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Firefish-io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Firefish.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;