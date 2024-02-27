import React, { useEffect } from "react";
import MainLayout from "layout/main";
import HowItWorks from "components/landing/sections/HowItWorks";

const HowItWorksPage = () => {

  useEffect(() => {

    document.title = "How it works - Transforming Finance Enriching Lives"
  }, []);

  return (
    <MainLayout>
      <HowItWorks/>
    </MainLayout>
  );
};

export default HowItWorksPage;
