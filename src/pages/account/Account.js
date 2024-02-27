import AccountTab from "components/userDashboard/account/AccountTab";
import UserHeader from "layout/UserHeader";

import React from "react";
import UserSidebar from "components/userDashboard/_sidebar/UserSidebar";
import Footer from "components/_common/copyWritefooter/Footer";
import Password from "components/userDashboard/account/Password";
import AcitivitySession from "components/userDashboard/account/AcitivitySession";
import TwoFactorAuthentication from "components/userDashboard/account/TwoFactorAuthentication";
import PersonalInfo from "components/userDashboard/account/PersonalInfo";

const Account = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);

  const [personalInfoShow, setPersonalInfoShow] = React.useState(true);
  const [twoFactorShow, setTwoFactorShow] = React.useState(false);
  const [passwordShow, setPasswordShow] = React.useState(false);
  const [activitySessionsShow, setActivitySessionsShow] = React.useState(false);
  const [dashboardShow, setDashboardShow] = React.useState(true);
  const [tradeHistoryShow, setTradeHistoryShow] = React.useState(false);
  const [newsShow, setNewsShow] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8F8F8]">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <div className="flex-1 pt-28 lg:px-24 grid lg:grid-cols-5 grid-cols-1 lg:gap-10">
          <div className=" col-span-1 flex flex-col lg:m-0 mb-5 mx-2">
            <UserSidebar
              setTradeHistoryShow={setTradeHistoryShow}
              setDashboardShow={setDashboardShow}
              setNewsShow={setNewsShow}
              newsShow={newsShow}
              dashboardShow={dashboardShow}
              tradeHistoryShow={tradeHistoryShow}
            />
          </div>
          <div className=" col-span-4">
            <AccountTab
              setPersonalInfoShow={setPersonalInfoShow}
              setTwoFactorShow={setTwoFactorShow}
              setPasswordShow={setPasswordShow}
              setActivitySessionsShow={setActivitySessionsShow}
              personalInfoShow={personalInfoShow}
              twoFactorShow={twoFactorShow}
              passwordShow={passwordShow}
              activitySessionsShow={activitySessionsShow}
            />

            {/* content */}
            {personalInfoShow && <PersonalInfo />}
            {twoFactorShow && <TwoFactorAuthentication />}
            {passwordShow && <Password />}
            {activitySessionsShow && <AcitivitySession />}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Account;
