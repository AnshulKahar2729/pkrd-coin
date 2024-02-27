import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import React, { useEffect } from "react";
import BuyFormDashboard from "components/userDashboard/BuyFormDashboard";
import { useLocation } from "react-router-dom";

function BuyForm() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const location = useLocation();

  const { bid } = location?.state;

  return (
    <div className="min-h-screen flex flex-col justify-between pt-24 w-full bg-[#F8F9F9]">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <BuyFormDashboard bid={bid} />
          <Footer />
        </>
      )}
      <Footer />
    </div>
  );
}

export default BuyForm;
