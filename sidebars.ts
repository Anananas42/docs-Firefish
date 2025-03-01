import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Make sure this ID matches what's referenced in docusaurus.config.ts
  docSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'guide/getting-started',
        'guide/borrowing',
        'guide/investing',
        'guide/stablecoins',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/borrowing',
        'faq/investing',
        'faq/stablecoins',
        'faq/protocol',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/overview',
        'protocol/security-model',
        'protocol/liquidation',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/terms',
        'legal/privacy',
        'legal/fiat-supported-countries',
        'legal/ineligible-countries',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'videos/tutorials',
        'media/press',
      ],
    },
  ],
};

export default sidebars;