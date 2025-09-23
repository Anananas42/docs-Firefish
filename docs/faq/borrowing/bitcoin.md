---
sidebar_label: Bitcoin
---

# Bitcoin FAQ

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

- **Sending more Bitcoin** - by providing additional Bitcoin as collateral, your loan becomes more secure. This results in a lower loan-to-value (LTV) ratio and liquidation price. Essentially, it enhances safety and reduces the risk of liquidation due to a decline in Bitcoin's price.
- **Sending less Bitcoin** - you will receive a warning message (Underfunded), and we will contact you with further instructions on how to resolve the issue.

### What if I don't finish the escrow setup process?

There are two scenarios:

1. **You never send your Bitcoin** - in this scenario, we would cancel the transaction, removing it from the platform. We strongly advise against sending any further Bitcoin to the escrow address. Doing so could result in the loss of your Bitcoin.
2. **You send your Bitcoin but never finish the process** - in this situation, your Bitcoin remains at the 'pre-fund' address. If you discontinue the process and fail to complete it, your Bitcoin will be returned to you two weeks after the first confirmation of the pre-fund transaction on the blockchain.

### Who pays the blockchain (on-chain) fees?

The Borrower.

### What is the Network Fee and how is it determined?

The **'Network Fee'** is essentially a blockchain fee required to process the transaction that locks Bitcoin into escrow and the transaction that unlocks Bitcoin and returns it to the Borrower upon loan repayment.

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