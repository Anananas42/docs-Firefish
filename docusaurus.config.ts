import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Firefish Docs',
  tagline: 'Bitcoin-backed lending platform',
  favicon: 'img/favicon.ico',

  url: 'https://anananas42.github.io',
  baseUrl: '/docs-Firefish/',

  organizationName: 'Anananas42',
  projectName: 'docs-Firefish',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'it', 'cs', 'zh-Hant'],
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
      'zh-Hant': {
        label: '繁體中文',
        path: 'zh-hant',
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
    image: 'img/firefish-social-card.jpg',
    navbar: {
      title: 'Firefish Docs',
      logo: {
        alt: 'Firefish Logo',
        src: 'img/logo512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
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
              label: 'Introduction',
              to: '/docs/',
            },
            {
              label: 'FAQ',
              to: '/docs/faq/general',
            },
            {
              label: 'Protocol',
              to: '/docs/protocol/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/firefish',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/firefish',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/firefish/documentation',
            },
            {
              label: 'Main Website',
              href: 'https://firefish.io',
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