import SellerDashboard from "components/userDashboard/BuySell/Sell";
import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import React from "react";

const Seller = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          {" "}
          <SellerDashboard />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Seller;
