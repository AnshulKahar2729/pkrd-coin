// import React from 'react'

// function SellerTrade() {
//   return (
//     <div>SellerTrade</div>
//   )
// }

// export default SellerTrade

import Footer from "components/_common/copyWritefooter/Footer";
import TradeDashboard from "components/userDashboard/Trade/TradeDashboard";
import UserHeader from "layout/UserHeader";
import React from "react";

function SellerTrade() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <div>
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <TradeDashboard />
        </>
      )}
      <Footer />
    </div>
  );
}

export default SellerTrade;
