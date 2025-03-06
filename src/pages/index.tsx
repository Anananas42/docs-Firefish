import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import { JSX } from 'react';
import styles from './index.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bitcoin Borrowing',
    icon: '🤝',
    description: (
      <>
        Borrow fiat or stablecoins by using your Bitcoin as collateral,
        without the need to sell your Bitcoin holdings. Access liquidity while maintaining
        your Bitcoin investment strategy.
      </>
    ),
  },
  {
    title: 'Secure Investments',
    icon: '💰',
    description: (
      <>
        Invest in Bitcoin-backed loans and earn interest on your capital.
        Your investment is secured by Bitcoin collateral that is always worth more than
        the loan amount.
      </>
    ),
  },
  {
    title: 'Non-Custodial Protocol',
    icon: '🔐',
    description: (
      <>
        Firefish never touches, trades, or exchanges your Bitcoin collateral.
        It is securely locked in a smart contract built on top of the Bitcoin network,
        making the process secure for both borrowers and investors.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Read Docs
          </Link>
          <Link
            className="button button--tertiary button--lg"
            to="/docs/faq/general"
            style={{ marginLeft: '1rem', border: '1px solid white' }}>
            View FAQ
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Firefish, a Bitcoin-backed lending platform">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}