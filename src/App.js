// routes
import React, { useEffect,useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import "./App.css";
import Homepage from './components/HomePage';
import Footer from './components/Footer';
import $ from 'jquery';

// ----------------------------------------------------------------------

export default function App() {

  useEffect(() => {
    $("#homePage").show();
  }, []);
  return (
    <ThemeProvider>
      <Homepage />
      {/* <ScrollToTop />
      <BaseOptionChartStyle />
       */}
       {/* <Router /> */}
       <Footer/>
    </ThemeProvider>
  );
}
