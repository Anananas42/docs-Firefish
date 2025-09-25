import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  knowledgeHubSidebar: [
    {
      type: 'doc',
      id: 'how-it-works/what-is-firefish',
      label: 'What is Firefish?',
    },
    {
      type: 'category',
      label: 'How it works',
      link: {
        type: 'doc',
        id: 'how-it-works',
      },
      items: [
        'how-it-works/how-to-borrow',
        'how-it-works/how-to-invest',
        'how-it-works/liquidations',
        'how-it-works/early-repayment',
        'how-it-works/top-up-collateral',
        'how-it-works/loan-rollover',
        'how-it-works/watchdog-setup',
        'how-it-works/loan-actions-menu',
      ],
    },
    {
      type: 'doc',
      id: 'firefish-protocol',
      label: 'Firefish Protocol',
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        {
          type: 'category',
          label: 'Borrowing & Locking Bitcoin',
          link: {
            type: 'doc',
            id: 'faq/borrowing-and-locking',
          },
          items: [
            'faq/borrowing/general',
            'faq/borrowing/bitcoin',
            'faq/borrowing/collateral',
            'faq/borrowing/receiving-loans',
            'faq/borrowing/repaying-loans',
          ],
        },
        'faq/investing',
        'faq/stablecoins',
        'faq/protocol',
      ],
    }
  ],
  mediaInsightsSidebar: [
    {
      type: 'doc',
      id: 'media-insights',
      label: 'Overview',
    },
    'media-insights/english',
    'media-insights/german',
    'media-insights/czech-slovak',
    'media-insights/spanish',
    'media-insights/italian',
    'media-insights/dutch',
    'media-insights/french',
    'media-insights/hungarian',
  ],
  legalSidebar: [
    {
      type: 'doc',
      id: 'legal',
      label: 'Overview',
    },
    'legal/privacy-policy',
    'legal/cookie-policy',
    'legal/terms-of-service',
    'legal/fiat-supported-countries',
    'legal/ineligible-countries',
    'legal/legacy-documents',
  ],
  supportSidebar: [
    {
      type: 'doc',
      id: 'support',
      label: 'Support',
    },
  ],
};

export default sidebars;