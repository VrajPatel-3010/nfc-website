import React from "react";
import "../CardPrice.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
function CardPricing() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ navigate to /Login
    navigate('/Login');
    $("#homePage,#footer").hide();
    $(window).scrollTop(0);
  };
  return (
    <>
      <section id="howItWorks">
        <div className="c0s0y ciev1 c8afs">
          {/* Bg */}
          <div className="czijl cqwz3 c8sta cxcdb chitq cw4j8 c0thn cb0o6" aria-hidden="true" />
          <div className="cq3ss cybvu c8afs c795p">
            <div className="caplu ciwss">
              {/* Section content */}
              <div className="cvznp cj9l2 ch13c ciev1 c9me5 c8afs">
                {/* Section header */}
                <div className="czied cie5d csrf8 aos-init aos-animate" data-aos="fade-up">
                  <h2 className="cfni9 czebt cvg4m">How DIGIIDHUB Card Works?</h2>
                  {/* <p className="cw46s c1yzh cz0di">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                {/* Image */}
                <div className="cgjfv crkpn c90zz aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
                  <div className="ciev1">
                    {/* <img className="cqwz3 cgibt c9w4z c6n6n coe5y cgw3k cw4j8 c6mh0 cb0o6" src="./images/logos-illustration.svg" width={594} height={639} aria-hidden="true" /> */}
                    {/* <img src="./images/logos.png" width={720} height={283} alt="Logos" /> */}
                  </div>
                </div>
                {/* Items */}
                <div className="cle81 cvznp c1nxv c6ekv cdz4n ch8y8 cmzle c8afs cked8 c1ymh aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
                  {/* 1st item */}
                  <div className="chha8 cpkd2 cfuru cffde ccfr6 cxrjr caf9c cjbbj cmv89 c7l6m ciev1 c0jxq">
                    <div className="cuowh">
                      <div className="cgjfv cio7a cbsyx csyf7 cw762 cuj67 c90zz cvl45 czov6">1</div>
                    </div>
                    <h4 className="cfni9 cuj67 cij91 cct3x">Sign Up</h4>
                    <p className="cw46s">
                      Sign up for an account on the DIGIDHUB Card platform.
                    </p>
                  </div>
                  {/* 2nd item */}
                  <div className="chha8 cpkd2 cfuru cffde ccfr6 cxrjr caf9c cjbbj cmv89 c7l6m ciev1 c0jxq">
                    <div className="cuowh">
                      <div className="cgjfv cio7a cbsyx csyf7 cw762 cuj67 c90zz cvl45 czov6">2</div>
                    </div>
                    <h4 className="cfni9 cuj67 cij91 cct3x">Create & Customize</h4>
                    <p className="cw46s">
                      Share your profile with just a tap, exchange contacts effortlessly, and watch your network grow.
                    </p>                  </div>
                  {/* 3rd item */}
                  <div className="chha8 cpkd2 cfuru cffde ccfr6 cxrjr caf9c cjbbj cmv89 c7l6m ciev1 c0jxq">
                    <div className="cuowh">
                      <div className="cgjfv cio7a cbsyx csyf7 cw762 cuj67 c90zz cvl45 czov6">3</div>
                    </div>
                    <h4 className="cfni9 cuj67 cij91 cct3x">Tap, Exchange & Grow</h4>
                    <p className="cw46s">Share your profile with just a tap, exchange contacts effortlessly, and watch your network grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bg */}
      <section className="cntah cdjne" data-aos-id-6>
        <div className="c0s0y ciev1 c8afs">
          {/* Bg */}
          <div className="c6ig5 cqwz3 cog9c cpjmk cw4j8 crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
          <div className="cq3ss cybvu c8afs c795p">
            <div className="caplu ciwss">
              {/* Section content */}
              <div className="cvznp cj9l2 cbsyx cmkcp c9n9z ch13c ciev1 c9me5 cj7ct c8afs c90zz">
                {/* Content */}
                <div className="cn4kh c4vz6 cwddw cbjk5">
                  {/* Copy */}
                  <h2 className="czebt cvg4m aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay={100}>Compliance built card for businesses and professionals</h2>
                  <p className="crs7v c1yzh crkpn aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay={200}>There are multiple ways to digitally connect, whether it's for in-person meetings, online networking, or virtual events. These methods are compatible with modern smartphones, including both Apple and Android devices.</p>
                  <ul className="crs7v caipo cuscs cj7ct aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay={300}>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>NFC Chip</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>QR Codes</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Device Support</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>NFC Key fob</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>NFC smart button</span>
                    </li>
                  </ul>
                </div>
                {/* Carousel */}
                <div className="cvznp cmzle cs6or cski4 cn7sg cdjne aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                  <div className="ciev1 cmzle c8afs">
                    <div className="c8n05 cw4j8 c0thn cm1wc crj9e cb0o6 c3q14" aria-hidden="true" />
                    {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
                    {/* * Initialized in src/js/main.js */}
                    {/* * Custom styles in src/css/additional-styles/theme.scss */}
                    <div className="testimonial-carousel swiper-container cvq63 cmzle c8afs swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
                      <div className="swiper-wrapper" id="swiper-wrapper-74bc4fab247689cc" aria-live="polite" style={{ transitionDuration: '0ms' }}>
                        {/* Card #1 */}
                        <div className="swiper-slide c99rw c6ekv cj7ct cszdf c90zz swiper-slide-prev" role="group" aria-label="1 / 2" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                          <div className="ctm2i cb6xh ccfr6 cskbp ciev1">
                            <img src="./static/5.jpg" className="cvznp" width={384} height={180} alt="Testiomonial 01" />
                          </div>
                          <div className="cppns c5m09 cy3ez ciev1 cj7ct cz3eq c90zz cclc4 cecyf">
                            {/* <img className="cnvwf cat50 cw4j8" src="./static/illustrations/testimonial-01.jpg" width={150} height={71} alt="Testiomonial sign 01" /> */}
                            <p className="cwqik cuy1u czebt cclc4">“ Share your contact info with just a tap! NFC cards make exchanging numbers and emails as easy as a handshake. Say goodbye to typing and hello to quick, effortless sharing ”</p>
                            {/* <div className="crs7v cuy1u cflrl">
                              <span className="cwqik">Elisa Koeppel</span> - <span className="c3bg1">CEO &amp; Co-Founder</span>
                            </div> */}
                          </div>
                        </div>
                        {/* Card #2
                        <div className="swiper-slide c99rw c6ekv cj7ct cszdf c90zz swiper-slide-visible swiper-slide-active" role="group" aria-label="2 / 2" style={{ width: '384px', opacity: 1, transform: 'translate3d(-384px, 0px, 0px)', transitionDuration: '0ms' }}>
                          <div className="ctm2i cb6xh ccfr6 cskbp ciev1">
                            <img src="./static/illustrations/testimonial-02.jpg" className="cvznp" width={384} height={180} alt="Testiomonial 02" />
                          </div>
                          <div className="cppns c5m09 cy3ez ciev1 cj7ct cz3eq c90zz cclc4 cecyf">
                            <img className="cnvwf cat50 cw4j8" src="./images/testimonial-sign-02.svg" width={105} height={46} alt="Testiomonial sign 02" />
                            <p className="cwqik cuy1u czebt cclc4">“ This card allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer support, and keep the user experience on our platform. “</p>
                            <div className="crs7v cuy1u cflrl">
                              <span className="cwqik">Maria Gress</span> - <span className="c3bg1">CEO &amp; Co-Founder</span>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                    {/* Bullets */}
                    <div className="cwpmn">
                      <div className="testimonial-carousel-pagination ch13c swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 2" aria-current="true" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing */}


      <section>
        <div className="c0s0y ciev1 c8afs">
          {/* Bg */}
          <div className="czijl cqwz3 cliib cw4j8 cdl4r crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
          <div className="czijl cqwz3 cppns cx1fe cw4j8 crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
          <div className="cq3ss cybvu c8afs c795p">
            <div className="caplu ciwss">
              {/* Section content */}
              <div className="cvznp cj9l2 ch13c ciev1 c9me5 c8afs">
                {/* Section header */}
                <div className="czied cie5d csrf8 aos-init aos-animate" data-aos="fade-up">
                  <h2 className="czebt cvg4m">Get the only custom digital card you'll ever need</h2>
                  <p className="crs7v c1yzh cz0di">Our innovative solution revolutionizes the way you exchange contact information and make lasting connections. With DIGIIDHUB Card, you can leave traditional paper business cards behind and embrace a modern, eco-friendly approach to networking.</p>
                </div>
                {/* Pricing tables */}
                <div className="cji5s cry79 c5xjq cysxe c1nxv cgzxz cmzle c8afs c5py1 c1ymh aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
                  {/* Pricing table 1 */}
                  <div className="cl239 ciev1 cj7ct c1gk0 c90zz c6d4u clzpq">
                    <div className="czebt">
                      <div className="ch13c cuj67 c1yzh cuowh">PVC Card</div>
                      <img className="ccryv cn7sg" src="./static/7.png" width={210} height={124} alt="Starter" />
                    </div>
                    <div className="ccvec">
                      <div className="c667e ch13c cuj67 czjx8 czebt">$99.99</div>
                      <a className="ckjmd cbsyx cwvj9 cuscs ciduz czb8d cy2kq cn7sg" onClick={navigateToLogin}>Get Starter</a>
                    </div>
                    <div className="c667e cuy1u czebt">Features include</div>
                    <ul className="crs7v cfihk c6ekv">
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>For individuals only</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Add Logo (+ $29.99)</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Share Social Media</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Save Contact</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Personal QR code</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>NFC/RFID Enabled</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Works with Apple and Android</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Monthly package available</span>
                      </li>
                    </ul>
                  </div>
                  {/* Pricing table 2 */}
                  <div className="cl239 cog9c c1rl0 couzf ciev1 cj7ct c1gk0 c90zz c6d4u clzpq">
                    <div className="cgibt csyf7 ck0rf cuscs c272x cfni9 cw4j8 c765r cflrl csp47 cqhcy cy5kf c11w6">
                      Popular
                    </div>
                    <div className="czebt">
                      <div className="ch13c cuj67 c1yzh cuowh">Premium Metal</div>
                      <img className="ccryv cn7sg" src="./static/Silver image.png" width={210} height={124} alt="Smart" />
                    </div>
                    <div className="ccvec">
                      <div className="c667e ch13c cuj67 czjx8 czebt">$299.99</div>
                      <a className="cpygj camqk cbsyx ckf1f cuscs czb8d cy2kq cn7sg" onClick={navigateToLogin}>Get Smart</a>
                    </div>
                    <div className="c667e cuy1u czebt">Everything in PVC, plus</div>
                    <ul className="crs7v cfihk c6ekv">
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Custom designed with your logo and branding</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>QR Code support</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Apple and Android</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Share Links</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Share Social Media</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Add Logo (Included)</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited uses</span>
                      </li>
                    </ul>
                  </div>
                  {/* Pricing table 3 */}
                  <div className="cl239 ciev1 cj7ct c1gk0 c90zz c6d4u clzpq">
                    <div className="czebt">
                      <div className="ch13c cuj67 c1yzh cuowh">Teams</div>
                      <img className="ccryv cn7sg" src="./static/White Card.png" width={210} height={124} alt="You" />
                    </div>
                    <div className="ccvec">
                      <div className="c667e ch13c cuj67 czjx8 czebt">$69.99/m</div>
                      <a className="ckjmd cbsyx cwvj9 cuscs ciduz czb8d cy2kq cn7sg" onClick={navigateToLogin}>Get You</a>
                    </div>
                    <div className="c667e cuy1u czebt">Everything in PVC, plus</div>
                    <ul className="crs7v cfihk c6ekv">
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>10+ Users</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Custom designed with your logo and branding</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Control, lock, and override data fields</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Manage your team (Active/Deactive)</span>
                      </li>
                    </ul>
                  </div>
                  {/* Pricing table 4 */}
                  <div className="cl239 ciev1 cj7ct c1gk0 c90zz c6d4u clzpq">
                    <div className="czebt">
                      <div className="ch13c cuj67 c1yzh cuowh">Enterprise</div>
                      <img className="ccryv cn7sg" src="./static/6.jpg" width={210} height={124} alt="Black" />
                    </div>
                    <div className="ccvec">
                      <div className="c667e ch13c cuj67 czjx8 czebt">Varies</div>
                      <a className="ckjmd cbsyx cwvj9 cuscs ciduz czb8d cy2kq cn7sg" href="#contactUs">Contact Us</a>
                    </div>
                    <div className="c667e cuy1u czebt">Everything in Teams, plus</div>
                    <ul className="crs7v cfihk c6ekv">
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Admin Dashboard</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>User Permission Manager</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Custom landing page branding for teams more than 15 members</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Branded Profiles</span>
                      </li>
                      <li className="c1nxv c90zz">
                        <svg className="cwh4b cxx8b cbjk5 ch8cw cucat cx4go c75uz" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Premium Content Blocks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default CardPricing;