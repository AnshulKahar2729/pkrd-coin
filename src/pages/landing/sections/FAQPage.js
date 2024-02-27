import React, { useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import MainLayout from "layout/main";
import Faq from "react-faq-component";

const FAQPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQs - PKRD";
  },[])


  const data = {
    title : 'FAQ',
    rows : [
      {
        title : 'Why use PKRD Platform?',
        content: ` <p className=" ">
        PKRD PLATFORM is an innovative model for investors and traders
        to trade, invest, earn and contribute to GO Green Awareness
        simultaneously. Launched in 2024, it will revolutionise the
        global crypto ecosystem with multipurpose objectives.
      </p>
      <p>
        PKRD tokens are stable, simple and secure to couple advanced
        block chain technology with fiat currencies and present hybrid
        financial crypto activity for ideal private and corporate
        business opportunity.
      </p>`
      },




      {
        title: "What is PKRD Stable coin?",
        content: ` <p className=" ">
          PKRD stable coin provides a block chain-enabled platform
          designed to facilitate the use of traditional fiat currencies
          in a digital manner and provide equal opportunity for
          cross-border transactions across the block chain. PKRD enables
          to disrupt the conventional financial system with its modern
          approach to money by giving customers the ability to transact
          and invest with traditional currencies across the block chain,
          without the inherent volatility and complexity typically
          related to a digital currency.
        </p>`,
      },




      {
        title: "How do PKRD's Tokens work?",
        content: `   <p className=" ">
        PKRD tokens exist as digital tokens built on block chains and
        integrated advanced technologies including
        <ul>
          <li>a. NodeJS(Backend)</li>
          <li>b. ReactJS(Frontend)</li>
          <li>c. MongoDB(Database)</li>
          <li>d. Solidity(Binanace Blockchain)</li>
          <li>e. Web 3 (Contract Integration)</li>
        </ul>
      </p>
      <p>
        These consist of open source software that interface with
        block chains to allow for the issuance and redemption of PKRD
        tokens.
      </p>
      <p>
        Every PKRD token is 100% backed by our reserves, which
        includes traditional currency, cash equivalents, assets and
        receivables from third parties under loan agreements. The PKRD
        platform is fully reserved when the sum of all PKRD tokens in
        circulation is less than or equal to the value of our
        reserves. The real time chart is available at our Transparency
        page to view both of these numbers on a daily basis. PKRD as
        ERC20 generated token, is a newer transport layer, which makes
        PKRD tokens available to generate smart contracts or
        decentralized applications on Ethereum. As a standard ERC20
        token it can also be sent to any Ethereum address. It is
        advised, when users send PKRD tokens to other addresses, they
        need to carefully check the destination address to confirm if
        they are selecting the correct transport protocol.
      </p>`,
      },




      {
        title: "What are PKRD tokens?",
        content: ` <p className=" font-sans">
        PKRD tokens are stable coin based assets that are pegged to
        real-world currencies on a 1-to-1 basis. These assets can be
        traded and moved across the block chain just as easily as
        other digital currencies and are fully backed by PKRD
        reserves.
      </p>
      <p>
        Each PKRD is pegged at 1-to-1 with matching fiat currency, for
        example 1PKRD = $1 USD. PKRD tokens are known as stable coins
        because of its price stability as they are pegged to a fiat
        currency. These tokens hold low volatility and are much more
        secure for exiting positions in the market. With respect to
        our transparency, daily record of the current total assets and
        reserves is published.
      </p>`,
      },




      {
        title: "What currencies does PKRD support?",
        content: `<p className=" ">
        PKRD tokens support US dollars (USD), Euros, Indian Rupee,
        offshore Chinese yuan and UAE Dirham with the following PKRD
        tokens, respectively: USD-PKRD, EUR-PKRD, IR-PKRD, CNH-PKRD
        and PKRD-UAED.
      </p>`,
      },




      {
        title : 'Who can use PKRD tokens?',
        content : ` <p className=" font-sans">
        PKRD tokens enable private and corporate businesses
        including exchanges, wallets, payment processors, financial
        services to easily use fiat currencies on block chains. Some
        other businesses in the digital currency ecosystem are in
        the process of integrating PKRD tokens. The list of industry
        supporter is given on page…
      </p>
      <p>
        Individuals can also use PKRD-enabled platforms to invest,
        trade and transact with PKRD tokens.
      </p>  `,
      },




      {
        title : 'How do PKRD tokens are protected from cryptocurrency volatility?',
        content : `<p className=" font-sans">
        PKRD tokens are protected from cryptocurrency volatility
        because of holding their value at 1:1 to the original assets
        as each PKRD token is anchored to real-world currencies on a
        1-to-1 basis and backed by our reserves. The PKRD tokens are
        digital formation as new assets to move across the block
        chain just as easily as other digital currencies in a secure
        method.
      </p>   `,
      },




      {
        title : 'How do I know my PKRD tokens are secure and safe?',
        content : ` <p className=" font-sans">
        Our platform ensures the best possible security of financial
        information and transactions.it is highly protected from
        fraud and cyberattacks with continuous upgrading of security
        features.
      </p>
      <p>
        PKRD tokens have all possible security features with
        innovative solutions to be stored, sent and received across
        the block chain. These are redeemable for cash pursuant to
        PKRD Limited’s (company name) terms of instructions and
        service. PKRD platform is built on top of the innovative
        advanced cryptographically, secure open block chain
        technologies along with strict security features, global
        government laws and regulations.
      </p>
      <p>
        The value and liquidity of every PKRD is secured by pegging
        all PKRD tokens at 1-to-1 with a matching fiat currency
        (e.g., 1 PKRD = $1 USD) and are backed 100% by PKRD
        reserves. For full transparency, PKRD HOUSE publish a daily
        record of our bank balances and the value of our reserves.
      </p>  `,
      },




      {
        title : 'Where can I use PKRD tokens?',
        content : ` <p className=" font-sans">
        PKRD tokens have multiple advantages, specially price
        stability and low transaction fees because of its stable
        nature and advanced crypto ecosystem for transactions. A
        list of trading partners will be regularly update to use and
        spend PKRD across the world, online and listed stores. You
        can find further information in Paying with PKRD COIN
      </p>  `,
      },




      {
        title : 'What is the registration process to be a PKRD customer?',
        content : `<p className=" font-sans">
        PKRD registration process starts at PKRD sign up page. A new
        user can begin the registration process by filling in their
        personal details on the PKRD sign up page. Considering
        strict security rules, the user must activate Two-Factor
        Authentication 2FA for their PKRD account. The user must pay
        a verification fee of? USD Which is non-refundable but can
        be part of future redemptions.
      </p>
      <p>
        The user must then undergo a verification process, either as
        an individual or corporate, and submit all required
        documents. PKRD compliance team will then review the user’s
        verification request to evaluate due diligence and rating
        risks of every new applicant based on Know Your Customer
        (KYC) process. The review and evaluation process could take
        days to weeks to complete and user will be notified once
        account verification has been completed.
      </p>   `,
      },




      {
        title : 'How are PKRD tokens created?',
        content : ` <p className=" font-sans">
        PKRD tokens are created by having multiple authorisation
        keys sign and broadcast creation transactions on the
        specific block chain. These new tokens are “authorised but
        not issued. These tokens are stored in PKRD treasury and are
        not in circulation. These PKRD tokens are issued only in
        response to market demand.
      </p>  `,
      },




      {
        title : 'What are “PKRD tokens authorised but not issued”?',
        content : ` <p className=" font-sans">
        PKRD tokens “authorised but not issued” are tokens that are
        created on a blockchain and stored in PKRD treasury. These
        tokens are not counted as part of the total market
        capitalization of PKRD as these tokens have not been
        issued.  Equally, “Issued” PKRD are those authorised tokens
        those have been sold and issued to PKRD customers. These are
        in actual circulation and are fully backed by PKRD reserves.
      </p>  `,
      },




      {
        title : 'What is inventory replenishment?',
        content : `<p className=" font-sans">
        Inventory replenishment is the process of creating new PKRD
        that are stored in PKRD treasury inventory as “authorised
        but not issued” PKRD. These tokens are not part of the total
        market capitalization of PKRD, as they have not been issued
        or released into circulation yet.
      </p>   `,
      },




      {
        title : 'Is PKRD transparent?',
        content : `<p className=" font-sans">
        Yes. PKRD platform is built to be transparent at all times.
        All PKRD tokens are backed 100% by PKRD reserves. Our
        platform has clear rules and regulations that are publicly
        communicated to all participants before signing in as trader
        or investor.
      </p>   `,
      },




      {
        title : 'Why are PKRD tokens burned?',
        content : `<p className=" font-sans">
        PKRD tokens are sometimes burned to reduce the number of
        outstanding tokens existing on a specific blockchain. These
        outstanding tokens could be from a customer’s redemption of
        their PKRD holdings for fiat currency. These redeemed and
        returned PKRD could alternatively be held by PKRD treasury
        and are made out of circulation and not part of the total
        market capitalization, ready for future issuance only in
        response to new market demand.
      </p>   `,
      },




      {
        title : 'Why are “authorised but not issued” tokens required?',
        content : ` <p className=" font-sans">
        “Authorised but not issued” PKRD are required to keep the
        entire creation and issuance process as secure as possible.
        There is a need to balance the security risks to PKRD
        private keys and catering to new market demand for PKRD .By
        creating “authorised but not issued PKRD limits the number
        of times PKRD’s signers need to access their authorisation
        private keys, thereby reducing their exposure to security
        threats. With “authorised but not issued” PKRD stored in
        PKRD,s treasury and not in circulation or part of PKRD,s
        market capitalization, PKRD house can issue these stored
        PKRD TOKENS as soon as new customer funds are received. This
        ensures that every PKRD issued is 100% backed by PKRD’s
        reserves.
      </p>  `,
      },

    ]
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    openOnload: 0,
    expandIcon: <SlArrowDown />,
    collapseIcon: <SlArrowDown />,
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "black",
    titleTextSize:"50px",
    rowTitleColor: "black",
    rowContentColor: "black",
    arrowColor: "black",
  };

  return (
    <MainLayout>
      <div className="h">
        <div className=" mx-[12.5%] ">
          <Faq data={data} config={config} styles={styles} />
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQPage;
