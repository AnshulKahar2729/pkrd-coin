import React, { useEffect } from "react";
import MainLayout from "layout/main";
import WhyPKRD from "components/landing/sections/WhyPKRD";


const WhyPKRDPage = () => {

  useEffect(() => {

   document.title = "Why PKRD - PKRD - Transforming Finance Enriching Lives"
  }, []);

  return (
    <MainLayout>
      <WhyPKRD/>
    </MainLayout>
  );
};

export default WhyPKRDPage;
