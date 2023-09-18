import React from "react";
import Card from "./Card";
import "../Service.css";
import Service from "../components/Services";

function Footer() {
  return (
    <>
      <div id="footer">

        <Service />

       
        <div className="header-content mb-0 p-3" style={{ backgroundColor: "rgb(17, 24, 39)", color: "white" }}>
          <p className="text-center">
            Copyright © 2023 ABC HOME AUTOMATION LTD. All Rights Reserved.
          </p>
        </div>
      </div>

    </>
  );
}

export default Footer;