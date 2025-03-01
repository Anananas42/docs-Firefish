import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Firefish Documentation',
  tagline: 'Bitcoin-backed lending platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.firefish.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'firefish', 
  projectName: 'documentation',

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
      },
      de: {
        label: 'Deutsch',
      },
      it: {
        label: 'Italiano',
      },
      cs: {
        label: 'Česky',
      },
      'zh-Hant': {
        label: '繁體中文',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/firefish/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          editUrl: 'https://github.com/firefish/documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/firefish-social-card.jpg',
    navbar: {
      title: 'Firefish',
      logo: {
        alt: 'Firefish Logo',
        src: 'img/logo512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',  // Make sure this matches the ID in sidebars.ts
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/faq/general',
          label: 'FAQ',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/firefish/documentation',
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
      copyright: `Copyright © ${new Date().getFullYear()} Firefish. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;