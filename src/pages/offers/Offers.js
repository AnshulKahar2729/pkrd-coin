import Footer from "components/_common/copyWritefooter/Footer";
import OffersDashboard from "components/userDashboard/OfferCreate/OffersDashboard";
import UserHeader from "layout/UserHeader";
import React from "react";

function Offers() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <OffersDashboard />
        </>
      )}
      {!sidebarShow && (<Footer />)}
    </div>
  );
}

export default Offers;
