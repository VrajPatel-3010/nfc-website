import React from "react";
import ContactUs from '../pages/ContactUs';
import "../CardPrice.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Iconify from '../components/Iconify';

function FooterDetails() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ navigate to /Login
    navigate('/Login');
    $("#homePage,#footer").hide();
    $(window).scrollTop(0);
  };
  
  return (
    <>
      <section className="cw7wm" data-aos-id-4 id="contactUs">
        <div className="c0s0y ciev1 c8afs">
          {/* Bg */}
          <div className="czijl cqwz3 cliib cw4j8 cdl4r crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
          <div className="czijl cqwz3 cppns cx1fe cw4j8 crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
          <div className="cq3ss cybvu c8afs c795p">
            <div className="caplu ciwss">
              {/* Section content */}
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
      <section className="ciev1">
        {/* Bg */}
        <div className="ckf1f cw4j8 c0thn cb0o6" aria-hidden="true" />
        <div className="cq3ss cybvu c8afs c795p aos-init aos-animate" data-aos="fade-up">
          <div className="caplu ciwss">
            <div className="cueat cbsyx c8mjt c7dj5 ctov5">
              {/* CTA content */}
              <div className="ci03a ch13c csspv ce36l crkpn">
                <p className="cta4p ck0rf cij91 cuowh">What are you waiting for?</p>
                <h2 className="camqk cvg4m">Get the only custom digital card</h2>
              </div>
              {/* Buttons */}
              <div className="cbjk5">
                <div className="cv4g6 cay85 cvq63 c0dlp c2ayx clnjj c32fv ctov5 crsdq c8afs csrf8">
                  <div>
                    <a className="ckjmd cbsyx cwvj9 cuscs ciduz czb8d cy2kq cn7sg cww28" onClick={navigateToLogin}>
                      Get your card
                      <span className="cm4hz cpy9x c16sn cx4n8 ctlbf ci96u c2x1p">
                        <svg className="cxx8b" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div>
                    <a className="cdwim clqa1 cj6s7 cevcb czzy2 clvx9 c01rt cbsyx c7dey cuscs cfni9 czb8d ciev1 cy2kq cn7sg" href="#contactUs">Get in touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ciev1">
        {/* Bg */}
        <div className="ckf1f cw4j8 c0thn cb0o6" aria-hidden="true" />
        {/* Illustration */}
        <div className="cq3ss cybvu c8afs c795p">
          {/* Blocks */}
          <div className="c9udw ckfpy csdae c6fxk c5py1 c1ymh cywql">
            {/* 1st block */}
            <div className="cfhfj c5j1h c7zk6">
              {/* Logo */}
              <a className="cdmxb" href="index.html" aria-label="Cruip">
                <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                  <g fillRule="nonzero" fill="none">
                    <g className="cxams" transform="translate(3 3)">
                      <circle cx={5} cy={5} r={5} />
                      <circle cx={19} cy={5} r={5} />
                      <circle cx={5} cy={19} r={5} />
                      <circle cx={19} cy={19} r={5} />
                    </g>
                    <g className="c0glf">
                      <circle cx={15} cy={5} r={5} />
                      <circle cx={25} cy={15} r={5} />
                      <circle cx={15} cy={25} r={5} />
                      <circle cx={5} cy={15} r={5} />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            {/* 2nd block */}
            <div className="c8866 cqkqb c5j1h">
              <h6 className="camqk cuj67 cflrl cuowh">DIGIIDHUB CARD</h6>
              <div class="is-divider small"></div>
              <ul className="c20ei cfihk cflrl">
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" onClick={navigateToLogin}>For Individuals</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" onClick={navigateToLogin}>For Teams</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#howItWorks">How It Works</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" onClick={navigateToLogin}>Login</a>
                </li>
              </ul>
            </div>
            {/* 4th block */}
            <div className="c8866 cqkqb c5j1h">
              <h6 className="camqk cuj67 cflrl cuowh">HELP AND SUPPORT</h6>
              <div class="is-divider small"></div>
              <ul className="c20ei cfihk cflrl">
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#contactUs">Support</a>
                </li>
                {/* <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Contact</a>
                </li> */}
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Privacy Policy</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Terms of Service</a>
                </li>
              </ul>
            </div>
            {/* 5th block */}
            <div className="c8866 cqkqb c5j1h">
              <h6 className="camqk cuj67 cflrl cuowh">SOCIAL MEDIA</h6>
              <div class="is-divider small"></div>
              <ul className="c20ei cfihk cflrl">
                {/* <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">email</a>
                </li> */}
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="https://www.linkedin.com/in/digi-id-hub">Linkedin</a>
                </li>
                {/* <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Twitter</a>
                </li> */}
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="https://www.instagram.com/digiidhub/">Instagram</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Facebook</a>
                </li>
              </ul>
            </div>
            {/* 3rd block */}
            <div className="c8866 cqkqb c5j1h">
              <h6 className="camqk cuj67 cflrl cuowh">COMPANY</h6>
              <div class="is-divider small"></div>
              <ul className="c20ei cfihk cflrl">
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="mailto:info@digiidhub.com">info@digiidhub.com</a>
                </li>
                <li>
                <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">11996 95 Ave, Delta</a>
                </li>
                <li>
                <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">BC V4C 3T9</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Canada</a>
                </li>
                {/* <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Support</a>
                </li>
                <li>
                  <a className="cwaev c3bg1 ctlbf ci96u cpmmw" href="#0">Contact Us</a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* Bottom area */}
          <div className="cts81 cxkvn">
            <div className="crs7v c4gs1">
              <p className="text-center">
                Copyright © 2023 ABC HOME AUTOMATION LTD. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterDetails;