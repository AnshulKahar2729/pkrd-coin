import React, { useEffect } from "react";
import "../../App.css";
import MainLayout from "layout/main";
import Landing from "components/landing";

const LandingPage = () => {

  useEffect(() => {

    document.title = "PKRD - Transforming Finance Enriching Lives"
  }, []);

  return <>
    <MainLayout>
        <Landing/>
    </MainLayout>
  </>
}

export default LandingPage;
