# Firefish Guide

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

# **Firefish Step-by-Step Guide**

Firefish offers the following workflows:

<aside>
🔥 **Firefish Borrow** - enables Borrowers to receive cash loans while using Bitcoin as collateral

</aside>

<aside>
🔥 **Firefish Invest** - enables Investors to earn interest on their investment by providing funds for Bitcoin-backed loans

</aside>

## Borrowing & Locking Bitcoin

- Firefish Borrow enables Borrowers to receive cash or stablecoin loans while using Bitcoin as collateral
- To secure your loan, we require you to place your Bitcoin in a designated multi-signature escrow address. This escrow can only be accessed in two ways: returned to your wallet (e.g. if you pay back the loan) or transferred to the liquidator's address (e.g. if you don't repay the loan by the due date).
- For the loan to be safe for both you and the Investor, it's important that the value of the collateral always exceeds the value of the loan. **The required initial Loan-To-Value ratio is 50%, which means the value of collateral is 2x the size of the loan.**
- If the value of your Bitcoin falls close to the value of the loan (due to a significant drop in the Bitcoin exchange rate), your Bitcoin will be sold on the open market, and the proceeds will be used to pay off the loan. This process is known as liquidation. The current liquidation level is set at 95% loan-to-value (LTV), meaning that if the value of your collateral gets to 95% of the loan amount, liquidation would be triggered to protect the lender's interests.
- You have the option to add more Bitcoin to the collateral to maintain a safe margin and prevent liquidation. Furthermore, if you are able to pay off the loan early, it eliminates the risk of liquidation entirely.
- In a highly unlikely scenario of a complete meltdown of Firefish infrastructure you have at your disposal a text file with a ‘Recovery transaction’ which gives you (the Borrower) the ability retrieve your Bitcoin from the escrow. In such a scenario, you can use the 'Broadcast transaction' feature on a standard blockchain explorer like [Mempool.space](http://Mempool.space), one month after the loan matures, to unlock and send your Bitcoin back to your return address.
You can download this transaction during the escrow setup process, or directly from the loan card on the platform.

### 🪜 Borrowing Step-By-Step

1. If you’re interested in borrowing cash against your Bitcoin, navigate to the **‘Borrow’** menu and select ‘**Request a loan**’.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled.png)
    
2. Next, choose the **Loan Type**. With a **Standard Loan**, you can customize all the loan parameters, including your preferred interest rate. Your loan request is then posted in the marketplace and sent to relevant investors for matching. An **Instant Loan** enables you to borrow cash immediately at a *fixed interest rate*, without the need to wait for an investor match.
    
    Next, fill in the details about **Amount** you’d like to borrow, **currency, loan period** and your **preferred interest rate** (in % p.a.), in case of a Standard loan. 
    
    The ‘**Loan request summary**’ element will calculate the **Amount due**, as well as details about the amount of Bitcoin required for such deal. 
    The '**Network Fee**' is a blockchain fee required to process the transaction that locks Bitcoin into escrow and the transaction that unlocks Bitcoin and returns it to the borrower upon loan repayment. The fee is calculated as twice the recent blockchain fees.
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image.png)
    
3. Your loan request will appear under the ‘**My loan requests**’ tab. 
Should you wish to cancel your request, simply click on the ‘**Cancel**’ button.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%201.png)
    
4. Investors who submitted an investment interest matching your loan preferences (i.e. amount, interest rate and tenor) will receive an email notification and have the option to accept the deal and your request also appears in the **Loan Marketplace**. 
5. Once you are matched with an Investor, you will be asked to ‘**Accept**’ or ‘**Reject**’ the deal.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%202.png)
    
6. Next, you will proceed to **confirming** the details of the deal and accepting the **Terms of Service** and **Loan and Security Agreement**.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%203.png)
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/86465a14-f9ce-4102-a8a0-25dbe11258da.png)
    
7. Next, you will proceed to the **Bitcoin escrow** setup process which will guide you through locking your Bitcoin collateral.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%204.png)
    
8. First, due security reasons you will be asked to confirm your **current [firefish.io](http://firefish.io)** app **password**.  
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/529b9d86-3b8f-4ae7-bf17-272686e06e3d.png)
    
9. Next, enter your **Bitcoin return address**. This address will be used to return your Bitcoin collateral at maturity. **Please note that this address can’t be changed during the lifetime of the loan!**
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%205.png)
    
10. You can then proceed to the **Bitcoin transfer**. You can either use the embedded QR code or the Bitcoin funding address displayed below the Bitcoin amount. 
If you’re copy & pasting the Bitcoin funding address, please make sure you transfer the exact amount of Bitcoin that is displayed in the ‘**Bitcoin amount’** field.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/46223e5e-9702-45c6-b261-e5319d9b5fde.png)
    
11. After your Bitcoin transaction is successfully completed the next steps in the Escrow setup process will be conducted by the **Oracles**. The process will take only a couple of seconds. 
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/3d06ffdd-9ab5-44a5-9a06-381aa8c307e6.png)
    
12. Once Oracle complete their duties you will be required to finalize the process by clicking ‘**Complete setup’**.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/12cf1aa3-8515-413e-8082-58c692a34bd4.png)
    
13. After the setup is completed, the investor will receive a notification to proceed with the bank transfer and confirm the payment.
14. The final step is to confirm that you have received cash from the Investor. In such case, click the ‘**Confirm’** button next to **’Payment confirmation**’ on your loan card.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%206.png)
    
15. In the Payment confirmation window select the tick-box and click ‘**Confirm funds**’. 
This provides Firefish with a proof that the funds have successfully arrived on your bank account. 
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%207.png)
    
16. **You are all set**! The loan card contains all details about your loan, as well as a link to loan documents and Bitcoin collateral details and various actions available under the ‘**Loan Actions**’ menu.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%208.png)
    
17. Finally, 1week before the maturity, you will have access to ‘**Transfer instructions**’ menu which provides you with all repayment details, including Investor’s bank account and the Amount due to be repaid.
2 weeks, 1 week, 2 days and on the day of maturity you will receive an email notification about the need to repay the loan. These notifications will be sent to you automatically until the moment you confirm the repayment.

    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/83cf6e19-6902-4632-820a-4668d195fd37.png)
    
    **EARLY REPAYMENT**: You also have an option to repay your loan before the maturity. To do so, please select the ‘**Request early repayment**’ option in the ‘**Loan Actions**’ menu.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/78a12c48-225b-4811-9c28-a07915e81ca9.png)
    
    We will then seek agreement from the investor that they are ready to confirm the repayment of your loan. Once they agree, you will get notified and the platform will guide you through the repayment process.
    
18. Once you **repay your loan** (i.e. send the Amount due to the Investor via a bank transfer), you can confirm the repayment in the following window by clicking “**Confirm bank transfer**”. 
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/df9eca76-eea8-4109-9cc3-764e4483be2d.png)
    
19. Upon confirmation from the Investor, your Bitcoin will be returned to you within the next 72 hours and your loan is successfully closed.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%209.png)
    

### 📑 **Loan actions**

The ‘**Loan actions’** menu on the loan card enables a quick access to key actions related to the loan:

- **View loan documents** - access to loan agreement and loan confirmation
- **Show Return Address** - displays the Bitcoin address where your Bitcoin will be sent after the loan is repaid
- **Top-up collateral** - start a collateral top-up process
- **Save recovery transaction** - download text file of the Bitcoin recovery transaction. In a highly unlikely scenario of a complete meltdown of Firefish infrastructure this transaction gives you (the Borrower) the ability retrieve your Bitcoin from the escrow. 
In such a scenario, you can use the 'Broadcast transaction' feature on a standard blockchain explorer like [Mempool.space](http://Mempool.space), one month after the loan matures, to unlock and send your Bitcoin back to your return address.
- **Request early repayment** - submit a request to repay the loan before maturity
- **Add maturity event to calendar** - download .ics file to import loan maturity event into your calendar
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2010.png)
    

### ⬆️ T**op-up** collateral

Collateral top-up is a feature that allows you to send additional Bitcoin to your escrow should you be willing to improve your Loan-to-Value (LTV) ratio, for example in an event of a margin call.

***Please bear in mind, that this is the only way of adding more Bitcoin to your collateral. Any other approach, for example directly sending more Bitcoin to the escrow address, would result in loss of your Bitcoin!***

To add more Bitcoin to your collateral, select the “**Top-up collateral**” item in the Loan actions menu of the loan card. You will be guided through a similar process as during the Escrow setup phase (point 7 onwards of this step-by-step guide). 

In addition, you will be able to input your preferred Bitcoin amount to top up or you can keep the recommended value, that is automatically calculated to get your LTV back to 50%. Based on your input, the Top-up amount menu will calculate your new liquidation price, collateral health indicator, as well as the new LTV.  

![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2011.png)

## Investing

- **Firefish Invest** enables Investors earn income by providing funds for Bitcoin-backed loans
- To ensure the security of your loan, we require the Borrower to place their Bitcoin in a designated multi-signature escrow address. You can easily track the activity on this escrow address using a public blockchain explorer.
- Your investment is always protected as the value of the collateral exceeds the value of the loan.
- If the value of the Bitcoin collateral drops close to the value of the loan (due to a decline in the Bitcoin price), the collateral will be sold on the open market and the proceeds used to pay back your investment. This process is called liquidation. Liquidation may also occur if the Borrower fails to pay back the loan on the due date.
- You don't need to worry about handling, trading, or exchanging Bitcoin yourself. You can choose to use a trusted third party, known as the Liquidator, to handle the process of liquidation on your behalf. However, if you are comfortable working with Bitcoin, you have the option to opt-out and act as your own liquidator.

### **🪜 Investing Step-by-Step**

For Investors, there are two methods of interacting with the platform available under the ‘**Invest**’ menu:

- **Loan Marketplace** - displays all available deals that haven’t been matched with a particular investor. Investors can select any of the available deals and accept the opportunity.
- **Watchdog** - an email notification service that enables Investors to receive investment opportunities directly to their inbox. Watchdog allows Investors to customize their preferences for currencies, minimum and maximum loan amounts, interest rates, and loan periods.

*❗️**IMPORTANT**: Investors have two options for the collateral liquidation model in the event of borrowers' default (i.e. failing to repay the loan) or price liquidation (i.e. when the value of Bitcoin collateral not sufficient anymore):*

- ***Self-liquidation -** Investor receives Bitcoin collateral to their designated liquidation address.*
- ***Firefish liquidation** - Firefish manages the collateral liquidation process on behalf of the Investors, and Investors receive their investment back in bank currency.*

*Please, see the ‘**Liquidation Preferences**’ section below for more details.*

- **🏪 Investing via Loan Marketplace**
    
    Loan Marketplace lists all loan requests that haven’t been matched with any of the Investors on the platform and are available for execution.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2012.png)
    
    1. If you’re interested in any of the listed deals, select ‘**Investment details**’ and you can accept the deal by clicking the ‘**Invest Now**’ button:
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2013.png)
        
    2. In the next step you can double-check the deal details and tick respective boxes to agree with the **Terms of Service** and **Loan & Security Agreement**. 
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2014.png)
        
    3. Once you confirm the details a notification will be sent to the Borrower to confirm loan details on their side and to lock Bitcoin collateral. Your deal will be marked as ‘**Pending investment’**.
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/5acda541-7d54-4ccf-9497-9af845fa4573.png)
        
    4. In the next step, the Borrower locks their **Bitcoin collateral**. Once the process, which might take a couple of days, is finalized, you will be notified to transfer funds to Borrower’s bank account. The details for the transfer are available under ‘**Bank transfer / Transfer funds’** segment of the loan card.
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2015.png)
        
    5. Once you execute the funds transfer, you need to confirm this by selecting the “**I confirm**” tick-box and clicking “**Confirm bank transfer**”.  
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2016.png)
        
    6. Finally, the Borrower confirms that they have received the funds and your deal becomes active.
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2017.png)
        
    7. At maturity, you will have access to ‘**Confirm return’** menu which gives you the ability confirm that Borrower returned your investment with interest earned (Amount due). Once funds received you can proceed to confirming the repayment by selecting the “**I confirm**” tick-box and clicking on “**Confirm repayment**” button.
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/504d038e-00e4-4ffc-b6c1-b4e6a52f4a08.png)
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2018.png)
        
    8. Your investment is **successfully closed**!
    
- **🐕 Investing via Watchdogs**
    
    Watchdog is an email notification service that enables Investors to receive investment opportunities directly to their inbox. Watchdog allows Investors to customize their preferences for currencies, minimum and maximum loan amounts, interest rates, and loan periods.
    
    1. To create a Watchdog, select '**Invest / My watchdogs**’ and click ‘**Create watchdog**’ button.
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2019.png)
    
    ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2020.png)
    
    1. Select your preferences, such as minimum and maximum investment amount, currency, loan periods and minimum acceptable interest rate in % p.a.
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2021.png)
        
    2. Your Watchdog is created and available under ‘**My watchdogs**’ menu. 
        
        ![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2022.png)
        
    3. If a Borrower submits a new loan request that is in line with your preferences, you will get notification to your inbox and will be able to accept or reject that particular offer. 
    When a new loan request is submitted by a borrower, all investors whose preferences match the loan request parameters receive a notification in their email inbox and they can accept the deal from the “*Your current Watchdog offers*” section above the Loan Marketplace. 
        
        ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%201.png)
        
    
    Once accepted, you will follow the same steps as in the above ‘**Loan Marketplace**’ guide, from step number 2.
    

### **🚨 Liquidation Preferences**

Liquidation is a protective process designed to safeguard investors in two scenarios:

- **Default** - ****where the Borrower fails to repay their loan
- **Price liquidation** - triggered if the Bitcoin price falls to a ‘**Liquidation price’** level set for each deal. The threshold for price liquidation is set at 95% of the loan-to-value (LTV) ratio, calculated as the notional amount plus interest, compared to the actual value of the Bitcoin collateral.

There are two types of liquidation methods available for Investors:

- **Self-liquidation -** Investors receive Bitcoin collateral to their designated liquidation address, which they set during the deal setup process.
- **Firefish liquidation** - Firefish manages the collateral liquidation process on behalf of the Investors, and Investors receive their investment back in bank currency. This mode allows Investors not to worry about handling cryptographic material, such as private keys or about interacting with exchanges.

 

**Firefish liquidation** is set as the **default option**. If you prefer self-liquidation for each deal instead, please navigate to ‘**My Account / Settings’** and enable the ‘**Self-liquidation’** option:

![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2023.png)

If ‘**Self-liquidation**’ is on, you will be prompted to provide your Bitcoin liquidation address when confirming your investment :

![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2024.png)

Alternatively, you can switch back to Firefish Liquidation when confirming the deal by triggering the ‘**I want to self-liquidate**’ button.

![Untitled](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2025.png)

**NOTE:** It is **not** possible to change the liquidation method for live deals and deals that are in or past the Bitcoin collateral locking process stage.

## **My Account**

The account menu is a one-stop shop for managing your account preferences, including your user tier, security settings, liquidation preferences, and affiliate information.

- **Account tiers**
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%202.png)
    
    A specific per-user deal limit scheme is applied based on the following Account Tiers:
    
    - **ZERO** - Default tier, no borrowing and lending available
    - **BASIC** - EUR 15.000 or CZK 360.000 per transaction and EUR 30.000 in total, per user, for all active loans
    - **INTERMEDIATE** - EUR 50.000 per month, and up to EUR 150.000 in total per user for all active deals
    - **PRO** - custom limits based on your borrowing or investing needs
    
    The platform would not allow you to process deals above the set limits. 
    
    To upgrade to the BASIC or INTERMEDIATE tier, please go to ‘**My Account / Account Tiers’** and select ‘**Upgrade’**.
    
    To qualify for an INTERMEDIATE tier, you need to upgrade to the BASIC tier first.
    
- **My details**
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%203.png)
    
    My details menu enables you to:
    
    - Check your **personal information**
    - Change your **e-mail address**
    - Manage your **bank accounts**
    - Manage your **USDC** **Ethereum address**
    
- **Settings**
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%204.png)
    
    The ‘Settings’ menu contains the following options:
    
    - **Two-factor authentication** - enable or disable 2FA authentication for enhanced account security.
    - **Self-liquidation** - when turned on, **Self-liquidation** is set as the preferred method of liquidation. When confirming your investment you will be prompted to provide your Bitcoin liquidation address. Alternatively, you can switch back to Firefish liquidation when confirming the deal. 
    Please note that **Firefish liquidation** is set as the **default option**.
    - **Change password** - reset your Firefish platform password.
    - **Set preferred language** - choose your preferred language.
    
- **Affiliate Dashboard**
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%205.png)
    
    **Firefish Affiliate Program** enables you to earn bitcoin when referring a friend. You’ll earn a commission of all the amount borrower or investor will make the first year after registration. This 0.5 % commission will be paid to you in bitcoin.
    
    - Earn 0.5 % of the amount referred users will **borrow** or **invest** on the platform in the first year after registration
    - Borrowers get 30 % off the origination fee to their first loan.
    
- **Statements**
    
    ![image.png](Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%206.png)
    
    **The ‘Statements’** menu enables you **download your loan and investment data**, including all deal details, in a CSV format.
    

📧 [Ask us any question at hello@firefish.io!](mailto:hello@firefish.io)