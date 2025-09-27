---
sidebar_label: Liquidation
---

# Liquidation

Understanding how liquidation works is crucial for both borrowers and investors. This protective mechanism ensures platform stability and investor protection.

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%', marginBottom: '2rem'}}>
  <iframe
    src="https://www.youtube.com/embed/Kd6vbmYKnY8"
    title="How Bitcoin Collateral Liquidations Work"
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

:::info Overview
Liquidation is a protective process designed to safeguard investors in two scenarios:
:::

## Liquidation Triggers

### Default

Where the borrower fails to repay their loan

### Price liquidation

Triggered if the Bitcoin price falls to a **'Liquidation price'** level set for each deal. The threshold for price liquidation is set at 95% of the loan-to-value (LTV) ratio, calculated as the notional amount plus interest, compared to the actual value of the Bitcoin collateral.

## Types of Liquidation Methods

There are **two types of liquidation methods** available for Investors:

### Self-liquidation

Investors receive Bitcoin collateral to their designated liquidation address, which they set during the deal setup process.

:::warning Important
**Your liquidation address cannot be changed later.**
:::

### Firefish Liquidation

Firefish manages the collateral liquidation process on behalf of the investors, and Investors receive their investment back in bank currency.