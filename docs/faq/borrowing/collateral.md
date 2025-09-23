---
sidebar_label: Collateral
---

# Collateral

### How do I know if I have enough collateral?

You can monitor the status and health of your collateral for all your loans on the platform using the 'Collateral Health Indicator' (CHI).

### What is a loan-to-value (LTV) ratio?

**LTV**, or **Loan-to-Value** ratio, is a financial term that represents the ratio of a loan to the value of the collateral. The initial LTV (e.g., 50%) is used to determine how much Bitcoin needs to be locked in the escrow contract to secure a specific loan amount.

For instance, to achieve an LTV of 50% for a $10,000 loan, you would need to deposit $20,000 worth of Bitcoin. If Bitcoin's price is $25,000, you'd deposit 0.8 Bitcoin (0.8 BTC * $25,000 = $20,000), resulting in an LTV of 50%.

If the LTV reaches 95% during the loan term, the collateral is automatically liquidated to repay the loan and return the proceeds to the Investor.

### What is a collateral health indicator (CHI)?

**CHI**, or **Collateral Health Indicator**, is a metric used on the Firefish platform to assess the sufficiency of collateral securing a loan. The higher the CHI value, the healthier the collateral position.

A CHI of 100% signifies a fully healthy status, indicating that you have sufficient collateral as recommended by Firefish. However, as the CHI approaches 0, it's advisable to consider adding more collateral to avoid potential liquidation. When the CHI reaches 0, the collateral is subject to liquidation.

### What is a liquidation?

Liquidation is a process that occurs when the value of Borrower's collateral does not sufficiently cover the value of the loan due to a decline in the price of Bitcoin, or in case the Borrower doesn't repay their loan at maturity.

In this case, the collateral is sent for liquidation and the proceeds are then used to pay off the loan.

### When would my collateral get liquidated?

Liquidation can occur if the price of Bitcoin reaches a liquidation level (price liquidation) or if you fail to repay your loan at maturity (default).

For price liquidation, the actual level for each loan is displayed at your loan card as **'Bitcoin liquidation price'**.

### How does liquidation work?

There are two scenarios for liquidation:

- **Borrower doesn't repay their loan at maturity** - the collateral is transferred to the liquidator (either Investor or Firefish), who then sells a portion of the collateral to settle the outstanding loan amount. The remaining Bitcoin is returned to the Borrower, with the liquidator retaining a 5% liquidation fee.
- **Bitcoin price reaches liquidation price** - in the event of a significant decline in the Bitcoin price that reaches the liquidation threshold, and if the Borrower neither adds more collateral nor repays the loan, their collateral is transferred to the liquidator. In this scenario, the liquidator retains the entire collateral amount.

### Who is a liquidator?

There are two modes for the liquidation:

- **Self-liquidation** - Investors receive Bitcoin collateral to their designated liquidation address, which they set during the deal setup process.
- **Firefish liquidation** - Firefish manages the collateral liquidation process, and investors receive their investment back in bank currency.

### What is a liquidation price?

If the price of Bitcoin falls to a predetermined liquidation level, it triggers a liquidation event, and the collateral is liquidated.

Liquidation price equals loan-to-value (LTV) of 95% and collateral health indicator (CHI) of 0%. The liquidation price available in the loan details on the platform.

### What if the liquidation price is reached for only a couple of seconds and the price later moves back?

If the Bitcoin price hits the liquidation price, even for only a couple of seconds, it is considered as a liquidation event.

### How can I avoid collateral liquidation?

The value of your collateral should always remain below an LTV of 95%. It is essential to maintain an adequate amount of collateral.

If the price of Bitcoin experiences a significant decline, we advise you to consider either topping up (i.e., sending more Bitcoin, using the **"Top-up collateral"** option of the **"Loan actions"** menu) using the platform's designated process or repaying your loan.

### Can I improve my loan-to-value by making a partial repayment of the loan?

No. Partial loan repayment currently doesn't impact your loan-to-value (LTV) ratio.

We are considering to introduce support for partial repayments in the future.

### What is a margin call?

A margin call is an event which is triggered when your LTV hits a pre-defined level.

There are 3 margin calls levels: at LTV 80%, 85% and 90% (or CHI 33%, 22%, 11%).

If your LTV reaches any of these levels, you receive an email notification.

### What should I do if I receive a margin call?

In an ideal scenario, you would choose top-up your collateral though the platform or repay your loan.

Please bear in mind, that the loan repayment process might take longer, and if the Bitcoin price continues to decline rapidly, there's still a risk of a liquidation.

### Can I withdraw excess collateral?

Currently we do not support excess collateral withdrawal.

We are considering to introduce this process in the future.

### Can I receive more loans if the value of my locked collateral increases due to the increase of price of Bitcoin?

Currently not, but we are considering to introduce this feature in the future.

### Which data source do you use for the Bitcoin price?

Firefish utilizes a weighted Bitcoin price index sourced from 9 Bitcoin exchanges. This helps to avoid a flash crash or a technical glitch situations at any single exchange impacting the Bitcoin price considered for a price liquidation event.

The platform refreshes prices once every 5 minutes and the prices displayed are for information purpose only.

For non-USD deals, the liquidation and price levels are calculated using the USD/BTC price and the respective currency cross (e.g. EUR/USD).