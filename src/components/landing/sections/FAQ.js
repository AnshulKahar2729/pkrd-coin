import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "Why use PKRD Platform?",
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
      </p>`,
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
    ],
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    openOnload: 0,
    expandIcon: <SlArrowDown />,
    collapseIcon: <SlArrowDown />,
  };

  const styles = {
    bgColor: "#29A744",
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "white",
    arrowColor: "white",
  };

  return (
    <>
      <div className=" bg-[#29A744] px-[5%] sm:px-[4%] md:px-[9%] lg:px-[12.5%] sm:pt-28 py-10">
        <Faq data={data} config={config} styles={styles} />
        <div className=" mx-auto text-center mt-10 ">
        <Link
          to={"/faq"}
          className=" text-base transition-all py-3 px-16 sm:px-24 font-sans font-semibold rounded-full bg-white text-green-600 hover:bg-gray-100 duration-200 border-white"
        >
          Read all FAQs
        </Link>
      </div>
      </div>
     
    </>
  );
};

export default FAQ;
