import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from "assets/images/nav-logo.png";
import { Link } from "react-router-dom";
import { Button } from "components/_common/buttons/Button";
import { RxCross1 } from "react-icons/rx";
import Modal from "components/_common/modal/Modal";




const currency_list = [
  {name: "Afghan Afghani", code: "AFA"},
  {name: "Albanian Lek", code: "ALL"},
  {name: "Algerian Dinar", code: "DZD"},
  {name: "Angolan Kwanza", code: "AOA"},
  {name: "Argentine Peso", code: "ARS"},
  {name: "Armenian Dram", code: "AMD"},
  {name: "Aruban Florin", code: "AWG"},
  {name: "Australian Dollar", code: "AUD"},
  {name: "Azerbaijani Manat", code: "AZN"},
  {name: "Bahamian Dollar", code: "BSD"},
  {name: "Bahraini Dinar", code: "BHD"},
  {name: "Bangladeshi Taka", code: "BDT"},
  {name: "Barbadian Dollar", code: "BBD"},
  {name: "Belarusian Ruble", code: "BYR"},
  {name: "Belgian Franc", code: "BEF"},
  {name: "Belize Dollar", code: "BZD"},
  {name: "Bermudan Dollar", code: "BMD"},
  {name: "Bhutanese Ngultrum", code: "BTN"},
  {name: "Bitcoin", code: "BTC"},
  {name: "Bolivian Boliviano", code: "BOB"},
  {name: "Bosnia-Herzegovina Convertible Mark", code: "BAM"},
  {name: "Botswanan Pula", code: "BWP"},
  {name: "Brazilian Real", code: "BRL"},
  {name: "British Pound Sterling", code: "GBP"},
  {name: "Brunei Dollar", code: "BND"},
  {name: "Bulgarian Lev", code: "BGN"},
  {name: "Burundian Franc", code: "BIF"},
  {name: "Cambodian Riel", code: "KHR"},
  {name: "Canadian Dollar", code: "CAD"},
  {name: "Cape Verdean Escudo", code: "CVE"},
  {name: "Cayman Islands Dollar", code: "KYD"},
  {name: "CFA Franc BCEAO", code: "XOF"},
  {name: "CFA Franc BEAC", code: "XAF"},
  {name: "CFP Franc", code: "XPF"},
  {name: "Chilean Peso", code: "CLP"},
  {name: "Chilean Unit of Account", code: "CLF"},
  {name: "Chinese Yuan", code: "CNY"},
  {name: "Colombian Peso", code: "COP"},
  {name: "Comorian Franc", code: "KMF"},
  {name: "Congolese Franc", code: "CDF"},
  {name: "Costa Rican Colón", code: "CRC"},
  {name: "Croatian Kuna", code: "HRK"},
  {name: "Cuban Convertible Peso", code: "CUC"},
  {name: "Czech Republic Koruna", code: "CZK"},
  {name: "Danish Krone", code: "DKK"},
  {name: "Djiboutian Franc", code: "DJF"},
  {name: "Dominican Peso", code: "DOP"},
  {name: "East Caribbean Dollar", code: "XCD"},
  {name: "Egyptian Pound", code: "EGP"},
  {name: "Eritrean Nakfa", code: "ERN"},
  {name: "Estonian Kroon", code: "EEK"},
  {name: "Ethiopian Birr", code: "ETB"},
  {name: "Euro", code: "EUR"},
  {name: "Falkland Islands Pound", code: "FKP"},
  {name: "Fijian Dollar", code: "FJD"},
  {name: "Gambian Dalasi", code: "GMD"},
  {name: "Georgian Lari", code: "GEL"},
  {name: "German Mark", code: "DEM"},
  {name: "Ghanaian Cedi", code: "GHS"},
  {name: "Gibraltar Pound", code: "GIP"},
  {name: "Greek Drachma", code: "GRD"},
  {name: "Guatemalan Quetzal", code: "GTQ"},
  {name: "Guinean Franc", code: "GNF"},
  {name: "Guyanaese Dollar", code: "GYD"},
  {name: "Haitian Gourde", code: "HTG"},
  {name: "Honduran Lempira", code: "HNL"},
  {name: "Hong Kong Dollar", code: "HKD"},
  {name: "Hungarian Forint", code: "HUF"},
  {name: "Icelandic Króna", code: "ISK"},
  {name: "Indian Rupee", code: "INR"},
  {name: "Indonesian Rupiah", code: "IDR"},
  {name: "Iranian Rial", code: "IRR"},
  {name: "Iraqi Dinar", code: "IQD"},
  {name: "Israeli New Sheqel", code: "ILS"},
  {name: "Italian Lira", code: "ITL"},
  {name: "Jamaican Dollar", code: "JMD"},
  {name: "Japanese Yen", code: "JPY"},
  {name: "Jordanian Dinar", code: "JOD"},
  {name: "Kazakhstani Tenge", code: "KZT"},
  {name: "Kenyan Shilling", code: "KES"},
  {name: "Kuwaiti Dinar", code: "KWD"},
  {name: "Kyrgystani Som", code: "KGS"},
  {name: "Laotian Kip", code: "LAK"},
  {name: "Latvian Lats", code: "LVL"},
  {name: "Lebanese Pound", code: "LBP"},
  {name: "Lesotho Loti", code: "LSL"},
  {name: "Liberian Dollar", code: "LRD"},
  {name: "Libyan Dinar", code: "LYD"},
  {name: "Litecoin", code: "LTC"},
  {name: "Lithuanian Litas", code: "LTL"},
  {name: "Macanese Pataca", code: "MOP"},
  {name: "Macedonian Denar", code: "MKD"},
  {name: "Malagasy Ariary", code: "MGA"},
  {name: "Malawian Kwacha", code: "MWK"},
  {name: "Malaysian Ringgit", code: "MYR"},
  {name: "Maldivian Rufiyaa", code: "MVR"},
  {name: "Mauritanian Ouguiya", code: "MRO"},
  {name: "Mauritian Rupee", code: "MUR"},
  {name: "Mexican Peso", code: "MXN"},
  {name: "Moldovan Leu", code: "MDL"},
  {name: "Mongolian Tugrik", code: "MNT"},
  {name: "Moroccan Dirham", code: "MAD"},
  {name: "Mozambican Metical", code: "MZM"},
  {name: "Myanmar Kyat", code: "MMK"},
  {name: "Namibian Dollar", code: "NAD"},
  {name: "Nepalese Rupee", code: "NPR"},
  {name: "Netherlands Antillean Guilder", code: "ANG"},
  {name: "New Taiwan Dollar", code: "TWD"},
  {name: "New Zealand Dollar", code: "NZD"},
  {name: "Nicaraguan Córdoba", code: "NIO"},
  {name: "Nigerian Naira", code: "NGN"},
  {name: "North Korean Won", code: "KPW"},
  {name: "Norwegian Krone", code: "NOK"},
  {name: "Omani Rial", code: "OMR"},
  {name: "Pakistani Rupee", code: "PKR"},
  {name: "Panamanian Balboa", code: "PAB"},
  {name: "Papua New Guinean Kina", code: "PGK"},
  {name: "Paraguayan Guarani", code: "PYG"},
  {name: "Peruvian Nuevo Sol", code: "PEN"},
  {name: "Philippine Peso", code: "PHP"},
  {name: "Polish Zloty", code: "PLN"},
  {name: "Qatari Rial", code: "QAR"},
  {name: "Romanian Leu", code: "RON"},
  {name: "Russian Ruble", code: "RUB"},
  {name: "Rwandan Franc", code: "RWF"},
  {name: "Salvadoran Colón", code: "SVC"},
  {name: "Samoan Tala", code: "WST"},
  {name: "São Tomé and Príncipe Dobra", code: "STD"},
  {name: "Saudi Riyal", code: "SAR"},
  {name: "Serbian Dinar", code: "RSD"},
  {name: "Seychellois Rupee", code: "SCR"},
  {name: "Sierra Leonean Leone", code: "SLL"},
  {name: "Singapore Dollar", code: "SGD"},
  {name: "Slovak Koruna", code: "SKK"},
  {name: "Solomon Islands Dollar", code: "SBD"},
  {name: "Somali Shilling", code: "SOS"},
  {name: "South African Rand", code: "ZAR"},
  {name: "South Korean Won", code: "KRW"},
  {name: "South Sudanese Pound", code: "SSP"},
  {name: "Special Drawing Rights", code: "XDR"},
  {name: "Sri Lankan Rupee", code: "LKR"},
  {name: "St. Helena Pound", code: "SHP"},
  {name: "Sudanese Pound", code: "SDG"},
  {name: "Surinamese Dollar", code: "SRD"},
  {name: "Swazi Lilangeni", code: "SZL"},
  {name: "Swedish Krona", code: "SEK"},
  {name: "Swiss Franc", code: "CHF"},
  {name: "Syrian Pound", code: "SYP"},
  {name: "Tajikistani Somoni", code: "TJS"},
  {name: "Tanzanian Shilling", code: "TZS"},
  {name: "Thai Baht", code: "THB"},
  {name: "Tongan Pa'anga", code: "TOP"},
  {name: "Trinidad & Tobago Dollar", code: "TTD"},
  {name: "Tunisian Dinar", code: "TND"},
  {name: "Turkish Lira", code: "TRY"},
  {name: "Turkmenistani Manat", code: "TMT"},
  {name: "Ugandan Shilling", code: "UGX"},
  {name: "Ukrainian Hryvnia", code: "UAH"},
  {name: "United Arab Emirates Dirham", code: "AED"},
  {name: "Uruguayan Peso", code: "UYU"},
  {name: "US Dollar", code: "USD"},
  {name: "Uzbekistan Som", code: "UZS"},
  {name: "Vanuatu Vatu", code: "VUV"},
  {name: "Venezuelan BolÃvar", code: "VEF"},
  {name: "Vietnamese Dong", code: "VND"},
  {name: "Yemeni Rial", code: "YER"},
  {name: "Zambian Kwacha", code: "ZMK"},
  {name: "Zimbabwean dollar", code: "ZWL"}
];







const Header = ({ showSidebar = false, setShowSidebar = () => { } }) => {
  // const [sidebarShow, setSidebarShow] = React.useState(false);

  return (
    <div
      className=" flex flex-row justify-between items-center"
      style={{ backgroundColor: "#29A744" }}
    >
      <div className="py-1 px-2 sm:px-12 ">
        <Link to={"/"}>
          <img
            className="w-[175px] sm:w-[250px]"
            src={NavLogo}
            alt="NavLogo"
            width={""}
          />
        </Link>
      </div>
      <div
        className="py-3 px-2 sm:px-16 xl:px-3 xl:hidden "
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        {showSidebar ? (
          <RxCross1 className=" text-4xl text-white" />
        ) : (
          <GiHamburgerMenu className=" text-3xl pr-1 sm:pr-0 sm:text-4xl text-white" />
        )}
      </div>

      <div className="hidden xl:flex flex-row lg:gap-5 px-12 text-[14px] sm:text-base items-center">
        <h6 className="">
          <Link
            to={"/why-pkrd"}
            className="  text-decoration-none hover:underline transition-all duration-300"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            Why PKRD?
          </Link>
        </h6>
        <h6>
          <Link
            to={"/how-it-works"}
            className=" text-decoration-none hover:underline transition-all ease-in-out delay-500"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            How it works
          </Link>
        </h6>
        <h6>
          <Link
            to={"/news"}
            className=" text-decoration-none hover:underline transition-all ease-in-out delay-500"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            News
          </Link>
        </h6>
        <h6 className="">
          <Link
            to={"/about-us"}
            className="  text-decoration-none hover:underline transition-all ease-in-out delay-500"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            About us
          </Link>
        </h6>
        <h6 className="">
          <Link
            to={"/about-us"}
            className="  text-decoration-none hover:underline transition-all ease-in-out delay-500"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            Marketplace
          </Link>
        </h6>

        <h6 className="">
          <Link
            to={"/contact-us"}
            className="text-decoration-none hover:underline transition-all ease-in-out delay-500"
            style={{
              color: "white",
              fontStyle: "normal",
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
          >
            Contact us
          </Link>
        </h6>
        <h6 class="">
          <select
            name=""
            id=""
            style={{
              textdecoration: "none",
              fontWeight: "500",
              lineHeight: "19px",
            }}
            className=" bg-transparent border border-white outline-none py-1 rounded-md text-white"
          >
            {currency_list.map((item) => (
              <option value="" className=" text-black optionSelect">
                {item.code}
              </option>
            ))}
          </select>
        </h6>
        <Link
          className=" hover:bg-[#f4f4f4] bg-[#ffffff] border border-gray-300 hover:border-gray-600 duration-300 transition-all rounded-full px-10 py-2"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
