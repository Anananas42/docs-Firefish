# Firefish Protocol

[Firefish Guide](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf.md)

[Video Guides](Video%20Guides%20111cc99422708021a177c79a1815bb8b.md)

[Firefish Protocol](Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4.md)

[FAQs](FAQs%20c5cfabe806e14d1abf6245a88ef5119f.md)

[What’s New](What%E2%80%99s%20New%203d042abe2a4c42c0a24d0641c9890382.md)

[Bitcoin: The Ultimate Collateral](Bitcoin%20The%20Ultimate%20Collateral%20157cc994227080a69d2bdd98f91acfbc.md)

[Media](Media%2091b0bc3bfda946d1a768ba5613259c64.md)

[Legal](Legal%206b6c868fcfb74d2bb389c0aa744f9ece.md)

[Deutsch](Deutsch%20604df8215dd449539ce8f1abab2aaa14.md)

[Italiano](Italiano%2015acc994227080d397b6dff1bbe61c0c.md)

[Español](Espan%CC%83ol%201a1cc994227080fdabcee7a36c3ae0e5.md)

[Česky](C%CC%8Cesky%207adcc66a0ffc46b580bb1f50c5391c0b.md)

[繁體中文](%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87%201a4cc9942270807d9706ef29c958c659.md)

**📩 [Contact Us](mailto:hello@firefish.io?subject=Hello%20Firefish)**

# Firefish Protocol

<aside>
🔥 The Firefish Protocol enables the escrow of Bitcoin for peer-to-peer collateralized loans settled in fiat currency

</aside>

<aside>
🔥 The protocol uses the scripting capabilities of bitcoin, such as multi-signature schemes and Partially Signed Bitcoin Transactions (PSBT)

</aside>

<aside>
🔥 The goal of the protocol is to remove risk and trust requirements from the interaction between parties

</aside>

### Subjects of Firefish Protocol

- **Borrower:** An individual or entity that owns bitcoin and seeks fiat liquidity.
- **Lender:** An individual or entity that has excess fiat liquidity and wants to earn interest.
- **Liquidator:** An entity entrusted by the Lender to liquidate the collateral in its name in the event that the Borrower does not fulfill its obligations. The Lender can also act as the Liquidator themselves.
- **Price Oracle:** An Oracle that attests to the exchange rate of bitcoin. It can be implemented as a trusted institution, a public oracle, or a threshold of institutions and public oracles. Price Oracle is currently operated by Firefish.
- **Payment Oracle:** An Oracle that attests to whether or not a fiat payment has been made (e.g. loan repayment). Payment Oracle is currently operated by Firefish.
- **Firefish:** A platform that matches Borrowers and Lenders and facilitates their secure interaction.

### Escrow Contract

The escrow contract is a central part of the Firefish Protocol. It allows to lock bitcoin collateral on a specific address, and further actions with the collateral are only possible:

- When certain conditions are met (such as loan repayment)
- In a specific way (the contract output can only be directed to predetermined addresses)

The escrow contract can be schematically represented as follows:

![001.png](Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/001.png)

The first layer of the escrow contract is the tx_escrow transaction. Its input is the Borrower's UTXO (Borrower's bitcoin) and its output is a 3-of-3 multisig, with keys held by:

- The Price Oracle
- The Payment Oracle
- The Borrower (ephemeral key), B-EPH

The output of the tx_escrow transaction represents the escrow itself, and this is where the bitcoin is held during the loan.

The second layer of the escrow contract is represented by set of partially signed transactions (PSBTs) that allow the output of the tx_escrow to be spent, i.e the collateral to be unlocked and sent to a predetermined address. This occurs when certain conditions are met (such as loan repayment) and the missing signatures are added to a PSBT.

The possible states of the escrow contract, represented by individual PSBTs, are:

| Contract state | PSBT used | description | missing signature | output to |
| --- | --- | --- | --- | --- |
| Repayment | tx_repayment | Loan fully repaid on due date | Payment Oracle | Borrower -B |
| Default | tx_default | Borrower failed to repay | Payment Oracle | Liquidator |
| Liquidation | tx_liquidation | Insufficient collateral value | Price Oracle, Payment Oracle | Liquidator |
| Cancellation | tx_repayment | Lender did not provide loan funds at all | Payment Oracle | Borrower -B |
| Recovery | tx_recover | If Oracles or Platform do not cooperate or cease to exist, Borrower can recover the collateral after given timelock without interaction to other party | none, timelock is used | Borrower -B |

<aside>
🔥 The Borrower uses two types of keys within the protocol: 1) B represents a key pair fully controlled by the Borrower (such as stored on a hardware wallet). All outputs of the escrow designated for the Borrower are directed here. 2) Key B-EPH, which represents an ephemeral key pair created in the Firefish app and used for signing during the contract setup. The keys are not needed after the setup is complete and are deleted.

</aside>

- All PSBTs are intended to be pre-signed before the tx_escrow transaction is broadcast by the Borrower, and the escrow is funded. This allows the Borrower to have control over all possible ways that the escrow contract can be spent.
- In order to construct a transaction, you must know its inputs and outputs.
- In this context, to construct the tx_escrow and PSBTs, you need to know the inputs of the tx_escrow, which are the Borrower's unspent UTXOs that they wish to use as collateral.

### Prefund Contract

To make it practical for Borrowers who use a variety of bitcoin infrastructure (hardware wallets, software wallets, custodial wallets), we propose using an extra on-chain transaction to consolidate and acknowledge the UTXOs that will be used to fund the escrow contract.

The extra on-chain transaction, called tx_prefund, precedes the tx_escrow transaction and can be schematically depicted as follows:

![002.png](Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/002.png)

This construct makes it easy for Borrowers to interact with the Firefish protocol: they send their bitcoin collateral to a specific address, A_prefund.

A_prefund represents a complex spending condition:

- 3-of-3 multisig (Borrower's ephemeral key B-EPH, Price Oracle, Payment Oracle)
- Signature with Borrower's ephemeral key B-EPH after a given timelock

The multisig branch is used in the tx_escrow transaction, while the other two options provide additional security and reduce the trust required between parties.

Firefish protocol, prefund and escrow:

![Screenshot from 2025-02-26 13-37-20.png](Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/Screenshot_from_2025-02-26_13-37-20.png)

### Firefish App

The Firefish protocol is designed to minimize risk and reduce the need for mutual trust between parties. To fully benefit from the security of the prefund and escrow contracts, Borrowers must be able to construct addresses and transactions or verify that they have been correctly implemented according to the protocol.

To make the protocol accessible to Borrowers with a range of technical skills and who use different wallets, the Firefish App has been developed. This is a special-purpose bitcoin wallet software that includes the following features:

- The App is open source software that can be compiled and run by the Borrower on their own hardware (desktop or within a web browser).
- The App is able to construct complex addresses and transactions according to the Firefish protocol.
- The App generates ephemeral key pairs, signs transactions, and stores necessary data (such as PSBTs).

### The Process

Below you can find the simplified process of the escrow setup and the lifetime of the loan. 

1. The participants in the protocol securely exchange necessary data (such as loan details) and public keys.
2. Using the Firefish App, the Borrower generates A_prefund (and the corresponding locking script).
3. The Borrower sends bitcoin collateral to A_prefund using their own wallet.
4. Using the Firefish App, the Borrower constructs tx_escrow and PSBTs, and adds their own signatures to the PSBTs.
5. After verification, the Oracles sign tx_escrow and the PSBTs according to the protocol.
6. The Borrower can now verify that all transactions and signatures are in place. After verification, they sign tx_escrow.
7. The Borrower discards the B-EPH key, ensuring that the spending options for the escrow are limited to those defined by the PSBTs.
8. The escrow is properly set.
9. When some event occur during the lifetime of the loan (such as liquidation), the Oracle adds the necessary missing signature to the PSBT and broadcasts it to the network.

### Key Benefits of Firefish Protocol

- The escrow has a "deterministic" nature. It can only be spent on the Borrower's or Liquidator's address, but not to any other subject.
- The Lender does not need to possess any cryptographic material or otherwise interact with the Bitcoin network. This allows entities that are not Bitcoin-native to use the Firefish platform.
- The Borrower only needs to be online and interact with the platform during the escrow setup phase. Afterwards, this is no longer necessary - they do not need to sign anything else or keep the keys online.
- If the Oracles stop cooperating during any phase of the loan, the Borrower can spend the Bitcoin on their own address after the timelock expires.
- The interaction of the Borrower with the protocol can be reduced to two simple steps: 1) provide your "return" address, 2) send the collateral to another address. The complexity, such as signing the PSBT, is processed by the Firefish application. This will be completely open-source and ideally compiled on the Borrower's side.
- Since the interaction is so simple, Firefish can be used by hardware wallet owners as well as Multi-Party Computation (MPC) wallets (institutions) or even custodial solutions (which is indeed not recommended).

### Potential Drawbacks of Firefish Protocol

- As with any other crypto lending system, some level of trust is required in the Oracles providing correct data within the Firefish. However, we believe that this need for trust can be minimized at the implementation level (for example, decentralizing the price oracle, using DLCs, anonymization techniques used by the payment oracle).
- The contract cannot be canceled even if the Lender and Borrower agree without the cooperation of the Oracle entities.
- The complexity of the proposed solution and the fact that the security and business advantages may not be immediately apparent.
- The Lender must have some level of trust in the Liquidator (i.e. that they will return the funds after liquidating the bitcoin). This can be minimized, for example, by the Liquidator providing some form of security.

📧 [We are keen to hear your feedback at hello@firefish.io!](mailto:hello@firefish.io)