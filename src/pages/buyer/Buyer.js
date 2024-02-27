import BuyerDashboard from "components/userDashboard/BuySell/Buy";
import UserHeader from "layout/UserHeader";
import React from "react";
import Footer from "../../components/_common/copyWritefooter/Footer";

const Buyer = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <BuyerDashboard />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Buyer;
