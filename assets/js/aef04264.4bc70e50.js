"use strict";(self.webpackChunkdocs_firefish=self.webpackChunkdocs_firefish||[]).push([[7619],{7609:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"protocol/overview","title":"Protocol Overview","description":"Overview of the Firefish protocol","source":"@site/docs/protocol/overview.md","sourceDirName":"protocol","slug":"/protocol/overview","permalink":"/docs-Firefish/docs/protocol/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/Anananas42/docs-Firefish/tree/main/docs/protocol/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Protocol Overview","description":"Overview of the Firefish protocol"},"sidebar":"docSidebar","previous":{"title":"Protocol","permalink":"/docs-Firefish/docs/faq/protocol"},"next":{"title":"security-model","permalink":"/docs-Firefish/docs/protocol/security-model"}}');var n=o(4848),t=o(8453);const s={sidebar_position:1,title:"Protocol Overview",description:"Overview of the Firefish protocol"},l="Firefish Protocol Overview",c={},a=[{value:"Core Principles",id:"core-principles",level:2},{value:"Key Components",id:"key-components",level:2},{value:"Multi-Signature Escrow",id:"multi-signature-escrow",level:3},{value:"Oracles",id:"oracles",level:3},{value:"Loan Terms",id:"loan-terms",level:3},{value:"Liquidation Process",id:"liquidation-process",level:3},{value:"Recovery Mechanism",id:"recovery-mechanism",level:3},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Security Model",id:"security-model",level:2},{value:"Future Development",id:"future-development",level:2}];function d(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"firefish-protocol-overview",children:"Firefish Protocol Overview"})}),"\n",(0,n.jsx)(r.p,{children:"The Firefish protocol is a set of rules and smart contracts built on top of the Bitcoin network that enables secure, non-custodial lending against Bitcoin collateral. This document provides an overview of how the protocol works and its key components."}),"\n",(0,n.jsx)(r.h2,{id:"core-principles",children:"Core Principles"}),"\n",(0,n.jsx)(r.p,{children:"The Firefish protocol is designed around several core principles:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Non-custodial"})," - Bitcoin collateral is never held by Firefish or any single entity. Instead, it is locked in a multi-signature escrow address."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Transparent"})," - All rules for collateral management, liquidation, and settlement are defined in an open protocol."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Secure"})," - The protocol uses robust cryptographic primitives and methods to ensure the safety of funds."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Fair"})," - The protocol balances the interests of both borrowers and lenders."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"key-components",children:"Key Components"}),"\n",(0,n.jsx)(r.h3,{id:"multi-signature-escrow",children:"Multi-Signature Escrow"}),"\n",(0,n.jsx)(r.p,{children:"The heart of the Firefish protocol is a 3-of-3 multi-signature escrow contract that securely locks Bitcoin collateral. This requires all three parties to sign off on any movement of funds, ensuring that collateral can only be moved under predefined conditions."}),"\n",(0,n.jsx)(r.h3,{id:"oracles",children:"Oracles"}),"\n",(0,n.jsx)(r.p,{children:"The protocol relies on two types of oracles:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Price Oracle"})," - Provides the current Bitcoin price, critical for determining loan-to-value ratios and triggering liquidations if necessary."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Payment Oracle"})," - Confirms fiat payments between borrowers and lenders."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"loan-terms",children:"Loan Terms"}),"\n",(0,n.jsx)(r.p,{children:"Each loan in the Firefish protocol is defined by several parameters:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Principal Amount"})," - The loan amount in fiat or stablecoins"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Interest Rate"})," - Annual percentage rate charged to the borrower"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Term"})," - Duration of the loan"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Collateral Amount"})," - The amount of Bitcoin locked as collateral"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Liquidation Threshold"})," - The loan-to-value ratio at which liquidation is triggered (typically 95%)"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"liquidation-process",children:"Liquidation Process"}),"\n",(0,n.jsx)(r.p,{children:"The protocol includes a clearly defined liquidation process that activates in two scenarios:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Price-Based Liquidation"})," - Triggered when the Bitcoin price drops, causing the loan-to-value ratio to exceed the liquidation threshold."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Default Liquidation"})," - Triggered when a borrower fails to repay their loan by the maturity date."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"recovery-mechanism",children:"Recovery Mechanism"}),"\n",(0,n.jsx)(r.p,{children:"In the unlikely event of platform failure, borrowers have access to a recovery transaction that allows them to retrieve their Bitcoin collateral after the loan maturity date."}),"\n",(0,n.jsx)(r.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,n.jsx)(r.p,{children:"The Firefish protocol leverages several Bitcoin technologies:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Taproot"})," - For improved privacy and efficiency"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Multi-signature Contracts"})," - For secure escrow of collateral"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Time-Locked Contracts"})," - For time-based release of collateral"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Child-Pays-For-Parent (CPFP)"})," - For transaction fee management"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"security-model",children:"Security Model"}),"\n",(0,n.jsx)(r.p,{children:"The security of the Firefish protocol has been audited by independent experts and relies on the robust security of the Bitcoin network itself. The multi-signature approach ensures that no single party has control over the collateral, creating a trustless system for borrowers and lenders."}),"\n",(0,n.jsxs)(r.p,{children:["For more details on the security model, please see our ",(0,n.jsx)(r.a,{href:"/docs/protocol/security-model",children:"Security Model"})," documentation."]}),"\n",(0,n.jsx)(r.h2,{id:"future-development",children:"Future Development"}),"\n",(0,n.jsx)(r.p,{children:"The Firefish protocol is continually evolving with planned enhancements including:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Support for partial loan repayments"}),"\n",(0,n.jsx)(r.li,{children:"Excess collateral withdrawal"}),"\n",(0,n.jsx)(r.li,{children:"Additional collateral types"}),"\n",(0,n.jsx)(r.li,{children:"Decentralized oracle network"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>l});var i=o(6540);const n={},t=i.createContext(n);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);