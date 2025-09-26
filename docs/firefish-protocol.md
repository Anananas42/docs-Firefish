---
sidebar_position: 3
---

# Firefish Protocol

> This document outlines the technical design of the Firefish Protocol. Please note that the actual implementation—delivered through the Firefish application—may differ in certain aspects, as both the application and the underlying escrow system remain under active development. For the most accurate and up-to-date information on the current functionality and limitations of the Firefish Protocol, please refer to the [Terms of Service](/docs/legal/terms-of-service).

:::info Key Features
🔥 The Firefish Protocol enables the escrow of Bitcoin for peer-to-peer collateralized loans settled in fiat currency

🔥 The protocol uses the scripting capabilities of bitcoin, such as multi-signature schemes and Partially Signed Bitcoin Transactions (PSBT)

🔥 The goal of the protocol is to remove risk and trust requirements from the interaction between parties
:::

## Subjects of Firefish Protocol

- **Borrower:** An individual or entity that owns bitcoin and seeks fiat liquidity.
- **Lender:** An individual or entity that has excess fiat liquidity and wants to earn interest.
- **Liquidator:** An entity entrusted by the Lender to liquidate the collateral in its name in the event that the Borrower does not fulfill its obligations. The Lender can also act as the Liquidator themselves.
- **Price Oracle:** An Oracle that attests to the exchange rate of bitcoin. It can be implemented as a trusted institution, a public oracle, or a threshold of institutions and public oracles. Price Oracle is currently operated by Firefish.
- **Payment Oracle:** An Oracle that attests to whether or not a fiat payment has been made (e.g. loan repayment). Payment Oracle is currently operated by Firefish.
- **Firefish:** A platform that matches Borrowers and Lenders and facilitates their secure interaction.

## Escrow Contract

The escrow contract is a central part of the Firefish Protocol. It allows to lock bitcoin collateral on a specific address, and further actions with the collateral are only possible:

- When certain conditions are met (such as loan repayment)
- In a specific way (the contract output can only be directed to predetermined addresses)

The escrow contract can be schematically represented as follows:

The first layer of the escrow contract is the tx_escrow transaction. Its input is the Borrower's UTXO (Borrower's bitcoin) and its output is a 3-of-3 multisig, with keys held by:

- The Price Oracle
- The Payment Oracle
- The Borrower (ephemeral key), B-EPH

The output of the tx_escrow transaction represents the escrow itself, and this is where the bitcoin is held during the loan.

The second layer of the escrow contract is represented by set of partially signed transactions (PSBTs) that allow the output of the tx_escrow to be spent, i.e the collateral to be unlocked and sent to a predetermined address. This occurs when certain conditions are met (such as loan repayment) and the missing signatures are added to a PSBT.

The possible states of the escrow contract, represented by individual PSBTs, are:

| Contract state | PSBT used | Description | Missing signature | Output to |
| --- | --- | --- | --- | --- |
| Repayment | tx_repayment | Loan fully repaid on due date | Payment Oracle | Borrower -B |
| Default | tx_default | Borrower failed to repay | Payment Oracle | Liquidator |
| Liquidation | tx_liquidation | Insufficient collateral value | Price Oracle, Payment Oracle | Liquidator |
| Cancellation | tx_repayment | Lender did not provide loan funds at all | Payment Oracle | Borrower -B |
| Recovery | tx_recover | If Oracles or Platform do not cooperate or cease to exist, Borrower can recover the collateral after given timelock without interaction to other party | none, timelock is used | Borrower -B |

:::info Key Management
The Borrower uses two types of keys within the protocol:

1. **B** represents a key pair fully controlled by the Borrower (such as stored on a hardware wallet). All outputs of the escrow designated for the Borrower are directed here.
2. **B-EPH** represents an ephemeral key pair created in the Firefish app and used for signing during the contract setup. The keys are not needed after the setup is complete and are deleted.
:::

- All PSBTs are intended to be pre-signed before the tx_escrow transaction is broadcast by the Borrower, and the escrow is funded. This allows the Borrower to have control over all possible ways that the escrow contract can be spent.
- In order to construct a transaction, you must know its inputs and outputs.
- In this context, to construct the tx_escrow and PSBTs, you need to know the inputs of the tx_escrow, which are the Borrower's unspent UTXOs that they wish to use as collateral.

## Prefund Contract

To make it practical for Borrowers who use a variety of bitcoin infrastructure (hardware wallets, software wallets, custodial wallets), we propose using an extra on-chain transaction to consolidate and acknowledge the UTXOs that will be used to fund the escrow contract.

The extra on-chain transaction, called prefund transaction (tx<sub>prefund</sub>), precedes the escrow transaction and can be schematically depicted as follows:

TODO

This construct makes it easy for Borrowers to interact with the Firefish protocol. First, they send their bitcoin collateral to a specific prefund address (A_prefund), which allows to create the follow-up escrow and closing transactions. 

The prefund address represents the following spending condition:

- 3-of-3 multisig (Borrower’s prefund key, Price Oracle, Payment Oracle), or
- Borrower’s prefund key and a relative timelock of 7 days

The first spending condition using the multisig is used to move bitcoin from prefund to escrow when all parties cooperate. 
The second spending condition using only Borrower’s prefund key with a relative timelock works as a safeguard for the Borrower, should oracles become unresponsive or malicious during the contract setup.

Once the Bitcoin is locked into prefund, all information is known to create the escrow and closing transactions.

## Protocol Implementation

The whole Firefish protocol is implemented in Rust. To simplify the interaction with the protocol for Borrowers, the Borrower's part, called borrower-client, is compiled into WASM and runs at app.firefish.io. The source code for the borrower-client is available HERE. It also contains instructions for deterministic builds, allowing Borrowers to verify that the client used at [Firefish](https://app.firefish.io) corresponds to the published source code. 

## The Process

Below you can find the simplified process of the escrow setup and the lifetime of the loan. 

1. The participants in the protocol securely exchange necessary data (such as loan details) and public keys.
2. Borrower enters his return address where bitcoin collateral will be returned upon successful repayment
3. Using the borrower-client, the Borrower generates the prefund address
4. The Borrower sends bitcoin collateral to the prefund address using their own wallet.
5. Using the borrower-client, the Borrower constructs the escrow and closing transactions, and adds their own signatures to the closing transactions.
6. The oracles add their own signatures to the escrow transaction and the closing transactions according to the protocol specification.
7. Using the borrower-client, the Borrower verifies that all transactions and signatures are in place. After verification, Borrower adds the last missing signature to the escrow transaction.
8. Using the borrower-client, the Borrower discards their escrow private key, ensuring that the spending options for the escrow are limited to those defined by the closing transactions.
9. Borrower broadcasts the now fully signed escrow transaction, effectively locking bitcoin collateral. The escrow is properly set.
10. Lender sends funds (fiat or stablecoins) to the Borrower.
11. Later, when the loan outcome is known (repayment, default, …), the corresponding transaction is signed and broadcast by the responsible oracle for the given outcome.

## Key Benefits of Firefish Protocol

- The escrow has a "deterministic" nature. It can only be spent on the Borrower's or Lender’s/Liquidator's address, but not to any other subject.
- The Lender does not need to possess any cryptographic material or otherwise interact with the Bitcoin network. This allows entities that are not Bitcoin-native to invest on the Firefish platform.
- The Borrower only needs to be online and interact with the platform during the escrow setup phase. Afterwards, this is no longer necessary - they do not need to sign anything else or keep the keys online.
- If the Oracles stop cooperating during any phase of the loan, the Borrower can spend the Bitcoin on their own address after the timelock expires.
- The interaction of the Borrower with the protocol is reduced to (i) provide your return address and (ii) send bitcoin to the prefund address. The whole complexity, such as creating the addresses and signing the escrow and closing transactions, is processed by the borrower-client.
- Since the interaction is so simple, Firefish can be used by hardware wallet owners as well as Multi-Party Computation (MPC) wallets (institutions) or even custodial solutions (which is indeed not recommended).

## Potential Drawbacks of Firefish Protocol

- As with any other bitcoin-backed lending protocol, some level of trust is required in the Oracles being honest. However, we believe that this need for trust can be minimized at the implementation level (for example, decentralizing the Price oracle, using DLCs, anonymization techniques used by the Payment oracle, etc.).
- The contract cannot be canceled without the cooperation of the Oracle entities, even if the Lender and Borrower agree.
- The complexity of the proposed solution and the fact that the security and business advantages may not be immediately apparent.
- The Lender (and Borrower) must have some level of trust in the Liquidator that they will return the funds/bitcoin in the case of liquidation and default. This can be minimized, for example, by the Liquidator providing some form of security or using DLCs.
