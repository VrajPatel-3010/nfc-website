import React from "react";
import "../Service.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';

function OurServices() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ navigate to /Login
    navigate('/Login');
    $("#homePage,#footer").hide();
    $(window).scrollTop(0);
  };

  return (
    // <div>
    //   <section className="serviceCard">
    //     <div className="card-texts">
    //       <div className="text-center" style={{display : "inline-block"}}>
    //         <img src="/static/mock-images/homepage/card.svg" alt="service" className="card__icon" />
    //       </div>
    //       <h2 className="card__title">Digital Card</h2>
    //       <p className="card__paragraph">Still using old boring visiting cards? Now its time to change. Use our Online Visiting Card service and GO DIGITAL.</p>
    //     </div>
    //   </section>

    //   <section className="serviceCard">
    //     <div className="card-texts">
    //     <div className="text-center" style={{display : "inline-block"}}>
    //         <img src="/static/mock-images/homepage/website.svg" alt="service" className="card__icon" />
    //       </div>
    //       <h2 className="card__title">Website Design/Development</h2>
    //       <p className="card__paragraph">Design your own Business/Professional website.</p>
    //     </div>
    //   </section>

    //   <section className="serviceCard">
    //     <div className="card-texts">
    //     <div className="text-center" style={{display : "inline-block"}}>
    //         <img src="/static/mock-images/homepage/portfolio.svg" alt="service" className="card__icon" />
    //       </div>
    //       <h2 className="card__title">Portfolio</h2>
    //       <p className="card__paragraph">Your identity is what sets you apart. Use Digital Card to showcase a fuller and more impressive picture of who you are—beyond your job title—for a more meaningful interaction.</p>
    //     </div>
    //   </section>
    // </div>

    <section className="cw7wm" data-aos-id-4>
    <div className="c0s0y ciev1 c8afs">
      {/* Bg */}
      <div className="czijl cqwz3 cliib cw4j8 cdl4r crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
      <div className="czijl cqwz3 cppns cx1fe cw4j8 crsdq c0thn cb0o6 ctkul" aria-hidden="true" />
      <div className="cq3ss cybvu c8afs c795p">
        <div className="caplu ciwss">
          {/* Section content */}
          <div className="cvznp cj9l2 cbsyx cmkcp ch13c ciev1 c9me5 cj7ct c8afs c90zz">
            {/* Content */}
            <div className="cn4kh cwddw cbjk5">
              {/* Copy */}
              <h2 className="czebt cvg4m aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay={100}>Customize Portfolio and Website</h2>
              <p className="crs7v c1yzh crkpn aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay={200}>Get portfolio/website that work exactly as you configured them. Make real-time decisions on charges and spendings with economical cost.</p>
              {/* Lists */}
              <div className="cspnv c2ayx civgx cz0di aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay={300}>
                {/* Column #1 */}
                <div>
                  <h5 className="cuj67 ccvec">Portfolio</h5>
                  <ul className="crs7v caipo cuscs cj7ct">
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Free Domain Name</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Free Hosting</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Customised Home Page</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Secured Payment Gateway</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>IT Support 24*7</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>5+ Themes</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Customize Landing Page</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Unlimited Update/Sharing</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>starts from <a style={{color:"#1452a5"}}>249$</a></span>
                    </li>
                  </ul>
                </div>
                {/* Column #2 */}
                <div>
                  <h5 className="cuj67 ccvec">Website</h5>
                  <ul className="crs7v caipo cuscs cj7ct">
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Free Domain Name</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Free Hosting</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Customised Design</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Login/Dashboard Feature</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Secured Payment Gateway</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>SEO</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>IT Support 24*7</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>CRM/User Management</span>
                    </li>
                    <li className="cbsyx c90zz">
                      <svg className="cbjk5 cucat" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                        <circle className="cwobz" cx={10} cy={10} r={10} />
                        <path className="cxams" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>starts from <a style={{color:"#1452a5"}}>399$</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button */}
              <div className="cvq63 c32fv c8afs aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay={300}>
                <div>
                  <a className="ckjmd cbsyx cwvj9 cuscs ciduz czb8d cy2kq cww28" onClick={navigateToLogin}>
                    Get your card
                    <span className="cm4hz cpy9x c16sn cdymx ctlbf ci96u c2x1p">
                      <svg className="cxx8b" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="cvznp cmzle cs6or chevy cn7sg cl4i1">
              <div className="ciev1 cz21g chzze">
                <img src="./static/services.png" className="cvznp cnq6c aos-init aos-animate" width={496} height={496} alt="Features 04" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
  }

export default OurServices;
