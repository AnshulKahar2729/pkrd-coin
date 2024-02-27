import Footer from 'components/_common/copyWritefooter/Footer';
import TradeDashboard from 'components/userDashboard/Trade/TradeDashboard';
import UserHeader from 'layout/UserHeader';
import React from 'react'

function BuyTrade() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <TradeDashboard />
        </>
      )}
      <Footer />
    </div>
  );
};

export default BuyTrade