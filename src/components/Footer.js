import React from "react";
import Card from "./Card";
import "../Service.css";
import Service from "../components/Services";
import CardPricing from "../components/CardPricing";
import FAQs from "../components/FAQs";
import FooterDeatils from "../components/FooterDetails";

function Footer() {
  return (
    <>
      <div id="footer">

        <Service />
        <div>
          <CardPricing />
          <FAQs />
        </div>
      <FooterDeatils />
</div>
        
    </>
  );
}

export default Footer;