---
sidebar_position: 2
title: Borrowing FAQ
description: Frequently asked questions about borrowing with Firefish
---

# Borrowing FAQ

## General

### What is Firefish Borrow?

Firefish Borrow enables borrowers to receive cash loans and use their Bitcoin as collateral to secure them.

### Why would I borrow instead of selling my Bitcoin?

Bitcoin holders may encounter situations where they need funds for investment opportunities or significant life events. Similarly, professionals with Bitcoin on their balance sheets might seek additional leverage, exposure, or a means to cover operational costs.

With a Firefish loan, individuals and organizations can retain ownership of their Bitcoin assets while unlocking the liquidity they require. By leveraging their Bitcoin holdings as collateral, they can secure a cash loan without having to sell their digital assets. This approach not only preserves their long-term investment strategy but also positions them to potentially benefit from future capital appreciation in the value of Bitcoin.

Furthermore, by retaining their Bitcoin, they can avoid capital gains tax implications.

### What is the maximum amount I can borrow?

Currently there are three account tiers available with the following limits:

- **BASIC** - EUR 15,000 or CZK 360,000 per transaction and EUR 30,000 in total, per user, for all active loans.
- **INTERMEDIATE** - EUR 50,000 per month, and up to EUR 150,000 in total per user for all active deals.
- **PRO** - custom limits based on your borrowing and investing needs.

We are working on introducing a tier for stablecoin deals.

### What is the minimum amount I can borrow?

Currently CZK 20,000 and EUR 800.

### What amount of Bitcoin do I need for a loan?

In general, the ratio between your Bitcoin collateral and the amount due (amount + interest) of your loan is 2x.

For example, if you wish to borrow EUR 1000, for 1 year at 6% (amount due ⇒ 1000 + 6% = EUR 1060), you would need to lock Bitcoin collateral worth EUR 2120.

On top of that, you should consider the current blockchain network fees and Firefish origination fee of 1.50% that will be deducted when transferring Bitcoin.

### What is the difference between Standard and Instant loans?

- **Standard Loan**: You can choose all the loan parameters, including your preferred interest rate. Your loan request is then posted in the marketplace and sent to relevant investors for matching.
- **Instant Loan**: Borrow cash immediately at a *fixed interest rate*, without the need to wait for an investor match. Once you submit the request, you will proceed to lock your Bitcoin, and the funds will be sent to your bank account instantly.

### How much does Firefish charge for the service?

An origination fee of **1.5% of the loan amount** is applied to Borrowers.

The fee is automatically deducted from the Bitcoin collateral during the collateral locking process phase.

### What currencies does Firefish support?

Currently Czech koruna (CZK) and Euro (EUR).

Please, reach out if you are interested in other currencies.

### Can I borrow stablecoins instead of banking money?

Along with fiat currencies (EUR and CZK) you can also borrow USDC (Circle) stablecoins on Ethereum.

### How are interest rates on Firefish loans determined?

Interest rates on Firefish are driven by supply and demand from the platform members.

### What if there are no investors for my loan request?

Firefish always tries to find the best deal for all loan interest, however, at times there might be not enough liquidity (Investors) for a combination of currency, amount and tenor. In such case, Firefish lists your loan requests on the platform (Marketplace) or, occasionally, contacts particular investors to consider your request.

We are working actively on bringing additional sources of liquidity to the platform.

## Bitcoin

### What happens to my Bitcoin?

To secure a Firefish loan, Bitcoin collateral is locked using a 3-of-3 multi-signature contract directly on Bitcoin blockchain, providing a high level of security and preventing unauthorized access. The collateral is designed to only move under specific predefined conditions, such as loan repayment.

The escrow address, where the collateral is stored, is generated through a code executed within the Borrower's web browser. Firefish subsequently verifies the accuracy of this code-generated address.

### Who has access to my Bitcoin?

Your Bitcoin remains secure in a multi-signature escrow address, with no party having access to it.

It will only be released back to you (the Borrower) upon loan repayment or to the Liquidator in the event of non-repayment or if your loan-to-value ratio exceeds 95%.

### What is an escrow address?

An escrow is a Bitcoin address, where your collateral is securely locked for the duration of the loan.

Your collateral can only move from the escrow address to your return address upon loan repayment, or to the liquidation address in the event of default or price liquidation.

### Which wallets can I use to send my Bitcoin?

You can use practically any wallet or infrastructure that supports Bitcoin "*Taproot*" addresses.

In case your wallet provider doesn't support Taproot, you would need to use a different wallet to send your Bitcoin.

### How long does the escrow setup process take?

The duration of the process can vary, typically taking a few hours. This timeline depends on how promptly you provide your details, send your Bitcoin, and how quickly your transactions are confirmed (mined) on the blockchain.

### Why is the escrow address different from the one I sent my Bitcoin to?

Your Bitcoin is initially sent to a 'pre-fund' address, specifically used to consolidate UTXOs (Unspent Transaction Outputs) into a single address. Subsequently, it is transferred to the 'escrow' address, where it remains securely locked for the entire loan duration.

### Why there is another address in the escrow transaction?

An additional address receives a minimum amount of Bitcoin. This address serves a vital role for Firefish: in instances when blockchain confirmation fees become prohibitively high, potentially causing delays in the confirmation of the escrow transaction, Firefish employs a 'child-pays-for-parent' (CPFP) transaction. This approach boosts the blockchain fees, expediting the confirmation process when necessary.

### Can I speed up the blockchain confirmation process by a "replace-by-fee" (RBF) transaction?

No, **please do not use RBF** to expedite the process. If there is a sudden increase in blockchain fees, Firefish will use a 'child-pays-for-parent' (CPFP) transaction to increase the fees and accelerate the process.

### Can I send a different amount of Bitcoin than proposed during the setup process?

It is technically possible to send both more or less Bitcoin than the platform proposes, with the following potential outcomes:

- Sending more Bitcoin - by providing additional Bitcoin as collateral, your loan becomes more secure. This results in a lower loan-to-value (LTV) ratio and liquidation price. Essentially, it enhances safety and reduces the risk of liquidation due to a decline in Bitcoin's price.
- Sending less Bitcoin - you will receive a warning message (Underfunded), and we will contact you with further instructions on how to resolve the issue.

### What if I don't finish the escrow setup process?

There are two scenarios:

1. You never send your Bitcoin - in this scenario, we would cancel the transaction, removing it from the platform. We strongly advise against sending any further Bitcoin to the escrow address. Doing so could result in the loss of your Bitcoin.
2. You send your Bitcoin but never finish the process - in this situation, your Bitcoin remains at the 'pre-fund' address. If you discontinue the process and fail to complete it, your Bitcoin will be returned to you two weeks after the first confirmation of the pre-fund transaction on the blockchain.

### Who pays the blockchain (on-chain) fees?

The Borrower.

### What is the Network Fee and how is it determined?

The '**Network Fee***'* is essentially a blockchain fee required to process the transaction that locks Bitcoin into escrow and the transaction that unlocks Bitcoin and returns it to the Borrower upon loan repayment.
The fee is calculated as twice the recent blockchain fees.

### When will I get my Bitcoin back?

Your Bitcoin will be sent to your return address within 72 hours after the investor confirms they have received their investment (Amount Due) back.

### What if I input a wrong Bitcoin return address?

Please, contact us.

### Can I change the Bitcoin return address?

After finalizing the setup process, the return address cannot be changed. If you have used an incorrect address, please contact us for assistance.

### What if I lose access to my Bitcoin return address?

Please, contact us.

### What happens to my Bitcoin if Firefish disappears?

In a highly unlikely scenario of a complete meltdown of Firefish infrastructure you have at your disposal a text file with a 'Recovery transaction' which gives you (the Borrower) the ability retrieve your Bitcoin from the escrow. 

In such a scenario, you can use the 'Broadcast transaction' feature on a standard blockchain explorer like [Mempool.space](http://Mempool.space), one month after the loan matures, to unlock and send your Bitcoin back to your return address.

You can download this transaction during the escrow setup process, or directly from the loan card on the platform.

## Collateral

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

For price liquidation, the actual level for each loan is displayed at your loan card as '**Bitcoin liquidation price**'.

### How does liquidation work?

There are two scenarios for liquidation:

- Borrower doesn't repay their loan at maturity - the collateral is transferred to the liquidator (either Investor or Firefish), who then sells a portion of the collateral to settle the outstanding loan amount. The remaining Bitcoin is returned to the Borrower, with the liquidator retaining a 5% liquidation fee.

- Bitcoin price reaches liquidation price - in the event of a significant decline in the Bitcoin price that reaches the liquidation threshold, and if the Borrower neither adds more collateral nor repays the loan, their collateral is transferred to the liquidator. In this scenario, the liquidator retains the entire collateral amount.

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

If the price of Bitcoin experiences a significant decline, we advise you to consider either topping up (i.e., sending more Bitcoin, using the "**Top-up collateral**" option of the "**Loan actions**" menu) using the platform's designated process or repaying your loan.

### Can I improve my loan-to-value by making a partial repayment of the loan?

No. Partial loan repayment currently doesn't impact your loan-to-value (LTV) ratio.

We are considering to introduce support for partial repayments in the future.

### What is a margin call?

A margin call is an event which is triggered when your LTV hits a pre-defined level. 

There are 3 margin calls levels: at LTV 80%, 85% and 90%. 

If your LTV reaches any of these levels, you receive an email notification.

### What should I do if I receive a margin call?

In an ideal scenario, you would choose to top-up your collateral though the platform or repay your loan. 

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