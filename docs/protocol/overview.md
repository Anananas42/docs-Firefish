---
sidebar_position: 1
title: Protocol Overview
description: Overview of the Firefish protocol
---

# Firefish Protocol Overview

The Firefish protocol is a set of rules and smart contracts built on top of the Bitcoin network that enables secure, non-custodial lending against Bitcoin collateral. This document provides an overview of how the protocol works and its key components.

## Core Principles

The Firefish protocol is designed around several core principles:

1. **Non-custodial** - Bitcoin collateral is never held by Firefish or any single entity. Instead, it is locked in a multi-signature escrow address.
2. **Transparent** - All rules for collateral management, liquidation, and settlement are defined in an open protocol.
3. **Secure** - The protocol uses robust cryptographic primitives and methods to ensure the safety of funds.
4. **Fair** - The protocol balances the interests of both borrowers and lenders.

## Key Components

### Multi-Signature Escrow

The heart of the Firefish protocol is a 3-of-3 multi-signature escrow contract that securely locks Bitcoin collateral. This requires all three parties to sign off on any movement of funds, ensuring that collateral can only be moved under predefined conditions.

### Oracles

The protocol relies on two types of oracles:

1. **Price Oracle** - Provides the current Bitcoin price, critical for determining loan-to-value ratios and triggering liquidations if necessary.
2. **Payment Oracle** - Confirms fiat payments between borrowers and lenders.

### Loan Terms

Each loan in the Firefish protocol is defined by several parameters:

- **Principal Amount** - The loan amount in fiat or stablecoins
- **Interest Rate** - Annual percentage rate charged to the borrower
- **Term** - Duration of the loan
- **Collateral Amount** - The amount of Bitcoin locked as collateral
- **Liquidation Threshold** - The loan-to-value ratio at which liquidation is triggered (typically 95%)

### Liquidation Process

The protocol includes a clearly defined liquidation process that activates in two scenarios:

1. **Price-Based Liquidation** - Triggered when the Bitcoin price drops, causing the loan-to-value ratio to exceed the liquidation threshold.
2. **Default Liquidation** - Triggered when a borrower fails to repay their loan by the maturity date.

### Recovery Mechanism

In the unlikely event of platform failure, borrowers have access to a recovery transaction that allows them to retrieve their Bitcoin collateral after the loan maturity date.

## Technology Stack

The Firefish protocol leverages several Bitcoin technologies:

- **Taproot** - For improved privacy and efficiency
- **Multi-signature Contracts** - For secure escrow of collateral
- **Time-Locked Contracts** - For time-based release of collateral
- **Child-Pays-For-Parent (CPFP)** - For transaction fee management

## Security Model

The security of the Firefish protocol has been audited by independent experts and relies on the robust security of the Bitcoin network itself. The multi-signature approach ensures that no single party has control over the collateral, creating a trustless system for borrowers and lenders.

For more details on the security model, please see our [Security Model](/docs/protocol/security-model) documentation.

## Future Development

The Firefish protocol is continually evolving with planned enhancements including:

- Support for partial loan repayments
- Excess collateral withdrawal
- Additional collateral types
- Decentralized oracle network