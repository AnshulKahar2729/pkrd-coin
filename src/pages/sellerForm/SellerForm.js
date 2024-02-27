import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerFormDashboard from "components/userDashboard/SellerFormDashboard";

function SellerForm() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const location = useLocation();

  const { bid } = location?.state;

  return (
    <div className="min-h-screen flex flex-col justify-between pt-24 w-full bg-[#F8F9F9]">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <SellerFormDashboard bid={bid} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default SellerForm;
