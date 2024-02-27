import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Sidebar from "pages/landing/sections/Sidebar";

export default function MainLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main className="mainBody">
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        {!showSidebar && children}
        {showSidebar && <Sidebar/>}
        {!showSidebar && <Footer />}
      </main>
    </>
  );
}
