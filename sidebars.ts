import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'category',
      label: 'How it works',
      link: {
        type: 'doc',
        id: 'how-it-works',
      },
      items: [
        'how-it-works/what-is-firefish',
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
    },
    {
      type: 'doc',
      id: 'firefish-protocol',
      label: 'Firefish Protocol',
    },
    // {
    //   type: 'category',
    //   label: 'Media & Insights',
    //   items: [
    //     // Items will be added here
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Legal',
    //   items: [
    //     // Items will be added here
    //   ],
    // },
  ],
};

export default sidebars;