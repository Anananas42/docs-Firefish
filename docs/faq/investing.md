---
sidebar_label: Investing in Bitcoin-backed Loans
---

# Investing in Bitcoin-backed Loans FAQ

## What is Firefish Invest?

Firefish Invest enables Investors with free cash to earn interest on their investment (fiat or USDC stablecoins) by providing funds for Bitcoin-backed loans. These funds are sent directly to Borrowers who return them upon maturity of their loans, along with accrued interest.

Firefish investments are backed by Bitcoin collateral that is always higher than the amount of the loan, therefore the credit risk for Investors is completely minimised.

## Is investing through Firefish risky?

The return of your investment is guaranteed.

Because the value of the locked Bitcoin is always higher than the loan itself, the possibility of a default and you losing your investment is completely removed.

If the Borrower doesn't pay back their loan, Bitcoin collateral is liquidated either via a 'Self-Liquidation' or 'Firefish Liquidation' process (please, see below for further details about the liquidation processes).

## How much can I earn investing on Firefish?

Interest rates on Firefish are driven by supply and demand from our users, however in general the rates are higher than standard money market instruments.

Check our Platform or contact us for the latest rates.

## How is my investment protected?

Your investment is protected by Bitcoin collateral. Its value is always higher than your investment. By default, Borrowers lock 2x the amount of your investment.

E.g. for a EUR 1000 loan with EUR 60 as the interest, a Borrower would lock EUR 2120 worth of Bitcoin collateral.

If the value of collateral significantly declines, because of of the decline in the price of Bitcoin, the Borrower would be asked to top up additional collateral. Alternatively they can opt to repay the loan.

In case they fail to do so and the price reaches a liquidation level, the Bitcoin collateral would get liquidated and your investment covered with the proceeds. The same applies to a situation, when the Borrower fails to repay their loan at maturity.

## What is the maximum amount I can invest?

Currently there are three account tiers available with the following limits:

- **BASIC** - EUR 15,000 per transaction and EUR 30,000 in total, per user, for all active loans.
- **INTERMEDIATE** - EUR 50,000 per month, and EUR up to 150,000 in total per user for all active deals.
- **PRO** - custom limits based on your borrowing and investing needs.

We are working on introducing a tier for stablecoin deals.

## What is the minimum amount I can invest?

The minimum amount is EUR 800 or the equivalent in other currencies.

## Do I need to own Bitcoin or crypto to invest?

No. Investing with Firefish is easy, you do not need to interact with Bitcoin or blockchain.

Your only role is to send funds (banking money) to the Borrower before the start of the deal and confirm the repayment of the investment at maturity.

## How much does Firefish charge for the service?

A service fee is applied to Borrowers.

## How do I invest on Firefish?

Along with borrowing, Firefish allows its users to invest money in secured Firefish loans in a very direct and easy way. No trading, cryptography or blockchain skills are required.

For Investors, there are two methods of interacting with the platform:

- **Loan Marketplace** - displays all available deals that haven't been matched with a particular investor. Investors can select any of the available deals and accept the opportunity.

  Once the opportunity is accepted, the investor confirms the details, and the deal is then passed to the borrower for them to lock their Bitcoin collateral.

- **Watchdog** - an email notification service that enables Investors to receive investment opportunities directly to their inbox. Watchdog allows Investors to customize their preferences for currencies, minimum and maximum loan amounts, interest rates, and loan periods.

  When a new loan request is submitted by a borrower, all investors whose preferences match the loan request parameters receive a notification in their email inbox. They can accept the deal from the "*Your current Watchdog offers*" section above the Loan Marketplace and the request is also listed in the marketplace.

Once the collateral securing your investment is locked, you will be asked to transfer the funds directly to the Borrower's bank account. You will receive your investment and accrued interest on the maturity date.

## How and when is my investment payed back?

Your investment and interest should be returned to your bank account latest on the maturity date of the loan.

Alternatively, the Borrower can request an early repayment of the whole amount and interest.

## What if Borrower doesn't return the money?

Firefish would first start a "Resolution Procedure", as defined [Escrow Rules](https://app.firefish.io/pdf/collateral-escrow-rules.pdf). The aim of the procedure is to clarify what happened with the bank transaction - if the money was sent back to the Investor or not and if the Investor has received the money, or not.

In the event of a Borrower's default a liquidation process is triggered. The collateral gets liquidated either via a 'Self-Liquidation' or 'Firefish Liquidation' process.

## When would the collateral get liquidated?

Liquidation of collateral can occur in the following two scenarios:

- **Default** - Borrower doesn't repay their loan at maturity: the collateral is transferred to the liquidator (either Investor or Firefish), who then sells a portion of the collateral to settle the outstanding loan amount. The remaining Bitcoin is returned to the Borrower, with the liquidator retaining a 5% liquidation fee.
- **Price Liquidation** - Bitcoin price reaches liquidation price: in the event of a significant decline in the Bitcoin price that reaches the liquidation threshold, and if the Borrower neither adds more collateral nor repays the loan, their collateral is transferred to the liquidator. In this scenario, the liquidator retains the entire collateral amount.

For price liquidation, the actual level for each loan is displayed at your loan card as **'Bitcoin liquidation price'**.

## Who is a liquidator?

There are two modes for the liquidation:

- **Self-liquidation** - Investors receive Bitcoin collateral to their designated liquidation address, which they set during the deal setup process. After deducting an amount to settle the outstanding loan amount, the remaining Bitcoin is returned to the Borrower, with the Investor retaining a 5% liquidation fee.
- **Firefish liquidation** - Firefish manages the collateral liquidation process, and Investors receive their investment back in bank currency. This mode allows Investors not to worry about handling cryptographic material, such as private keys or about interacting with exchanges.

## What is a liquidation price?

If the price of Bitcoin falls to a predetermined liquidation level, it triggers a liquidation event, and the collateral is liquidated.

Liquidation price equals loan-to-value (LTV) of 95% and collateral health indicator (CHI) of 0%. The liquidation price available in the loan details on the platform.

## How do I setup my preferred liquidation method?

**Firefish liquidation** is set as the **default option**. If you prefer self-liquidation for each deal instead, please navigate to **'My Account / Settings'** and enable the **'Self-liquidation'** option. When confirming your investment you will be prompted to provide your Bitcoin liquidation address. Alternatively, you can switch back to Firefish liquidation when confirming the deal.

It is possible to have different methods applied for individual deals. To select your preferred option, please toggle the **'Self-Liquidation'** radio button in 'Settings'.

Please bear in mind, that it is **not** possible to change the liquidation method for live deals and deals that are in or past the Bitcoin collateral locking process stage.

## What if the liquidation price is reached for only a couple of seconds and the price later moves back?

If the Bitcoin price hits the liquidation price, even for only a couple of seconds, it is considered as a liquidation event.