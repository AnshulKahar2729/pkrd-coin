import HowItWorks from "../pages/landing/sections/HowItWorks";
import Home from "../pages/landing";
import Login from "../pages/auth/login/Login";
import News from "../pages/landing/sections/News";
import WhyPKRD from "../pages/landing/sections/WhyPKRD";
import NewsPage from "../pages/landing/sections/NewsPage";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import Wallet from "../pages/wallet/Wallet";
import Buyer from "pages/buyer/Buyer";
import Seller from "pages/seller/Seller";
import Account from "pages/account/Account";
import PKRDBackgroundPage from "pages/landing/sections/PKRDBackground";
import ContactUs from "pages/landing/sections/ContactUs";
import AboutUs from "pages/landing/sections/AboutUs";
import PKRDForIndividual from "pages/landing/sections/PKRDForIndividual";
import PKRDForMerchant from "pages/landing/sections/PKRDForMerchant";
import PKRDForExchange from "pages/landing/sections/PKRDForExchange";
import Exchange from "pages/exchange/Exchange";
import FAQPage from "pages/landing/sections/FAQPage";
import UserProfile from "pages/userProfile/UserProfile";
import CreateAnOffer from "pages/createAnOffer/CreateAnOffer";
import Offers from "pages/offers/Offers";
import OfferDetails from "pages/offerDetails/OfferDetails";
import BuyForm from "pages/buyForm/BuyForm";
import PersonalInfoSignup from "pages/auth/signup/PersonalInfoSignup";
import MobileOTPSignup from "pages/auth/signup/MobileOTPSignup";
import EmailOTPSignup from "pages/auth/signup/EmailOTPSignup";
import PasswordSignup from "pages/auth/signup/PasswordSignup";
import SignupSuccess from "components/auth/signup/SignupSuccess";
import SellerForm from "pages/sellerForm/SellerForm";
import SellerTrade from "pages/sellerTrade/SellerTrade";
import BuyTrade from "pages/buyTrade/BuyTrade";
import TradeDetail from "pages/trades/TradeDetail";
import OfferBids from "pages/offerDetails/OfferBids";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/why-pkrd", component: <WhyPKRD /> },
  { path: "/how-it-works", component: <HowItWorks /> },
  { path: "/pkrd-for-individuals", component: <PKRDForIndividual /> },
  { path: "/pkrd-for-merchants", component: <PKRDForMerchant /> },
  { path: "/pkrd-for-exchanges", component: <PKRDForExchange /> },
  { path: "/contact-us", component: <ContactUs /> },
  { path: "/about-us", component: <AboutUs /> },
  {
    path: "/pkrd-fighting-against-major-global-challenges",
    component: <PKRDBackgroundPage />,
  },
  { path: "/faq", component: <FAQPage /> },
  { path: "/news", component: <News /> },
  { path: "/login", component: <Login /> },
  // { path: "/sign-up", component: <Signup /> },
  { path: "/sign-up/step-1", component: <PersonalInfoSignup /> },
  { path: "/sign-up/step-2", component: <MobileOTPSignup />},
  { path: "/sign-up/step-3", component: <EmailOTPSignup />},
  { path: "/sign-up/step-4", component: <PasswordSignup />},
  {path : "/sign-up/success", component : <SignupSuccess/>},
  { path: "/news/:newsName", component: <NewsPage /> },
];

const authProtectedRoutes = [
  { path: "/user-dashboard", component: <UserDashboard /> },
  { path: "/buyer", component: <Buyer /> },
  { path: "/buyer/buy-form", component: <BuyForm /> },
  { path: "/buyer/buy-form/trade", component: <BuyTrade /> },
  { path: "/seller", component: <Seller /> },
  { path: "/seller/seller-form", component: <SellerForm /> },
/*   { path: "/seller/seller-form/trade", component: <SellerTrade /> },
 */  { path: "/list-pkrd-buy-sell-ad", component: <CreateAnOffer /> },
  { path: "/wallet", component: <Wallet /> },
  { path: "/exchange", component: <Exchange /> },
  { path: "/account", component: <Account /> },
  { path: "/user/my-offer-list", component: <Offers /> },
  { path: "/user/my-offer-list/:offerId", component: <OfferDetails /> },
  { path: "/user/my-offer-list/:offerId/bids", component: <OfferBids /> },
  { path: "/user/profile", component: <UserProfile /> },
  { path : "/trade/:tradeId", component : <TradeDetail/>}
];

export { authProtectedRoutes, publicRoutes };
