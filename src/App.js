import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";
import NotFound from "./pages/error/NotFound";

// Import all middleware
import Authmiddleware from "./routes/route";
import { useDispatch } from "react-redux";
import { fetchPKRDPrice } from "store/price/actions";

function App() {
  const dispatch = useDispatch();
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname !== "/") {
        window.scrollTo(0, 0);
      }
    }, [location.pathname]);

    return null;
  };

  const getPKRDPrice = () => {
    dispatch(
      fetchPKRDPrice((response) => {
        if (response) {
          console.log("Successfully executed");
        } else {
          console.log("Something went wrong.");
        }
      })
    );
  };

  useEffect(() => {
    getPKRDPrice();
  }, []);

  setInterval(() => {
    getPKRDPrice();
  }, 60000);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            exact={true}
            path={route.path}
            element={route.component}
            key={index}
          />
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<Authmiddleware>{route.component}</Authmiddleware>}
            key={idx}
            exact={true}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

App.propTypes = {
  layout: PropTypes.any,
};

export default App;
