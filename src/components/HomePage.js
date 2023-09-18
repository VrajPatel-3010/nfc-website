import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import DashboardApp from '../pages/DashboardApp';
import Blog from '../pages/Blog';
import User from '../pages/User';
import NotFound from '../pages/Page404';
import Register from '../pages/Register';
import RegisterUser from '../pages/RegisterUser';
import Portfolio from '../pages/Portfolio';
import Portfolio2 from '../pages/Portfolio2';
import Portfolio3 from '../pages/Portfolio3';
import Portfolio4 from '../pages/Portfolio4';
import Portfolio5 from '../pages/Portfolio5';
import PaymentPage from '../pages/PaymentPage';

import Products from '../pages/Products';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import ContactUs from '../pages/ContactUs';


// ----------------------------------------------------------------------

export default function HomePage() {
  const navigate = useNavigate();
  

  const navigateToLogin = () => {
    // 👇️ navigate to /Login
    navigate('/Login');
    $("#homePage,#footer").hide();
    $(window).scrollTop(0);
  };
  useEffect(() => {
    $("#homePage,#footer").show();
  },[]);
  return (
    <>
      <div id="homePage" style={{ backgroundColor: "#111827", minHeight: "100%" }}>

        <div className="container">
          <div className="px-4">
            <div className="flex items-start justify-between pt-8">
              <div title="" className="logo w-24" style={{ width: "3rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#10b981" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 512 412"><path d="M115.96 384.67a38.44 38.44 0 0 0 36.57 26.67 38.41 38.41 0 0 0 0-76.8 38.44 38.44 0 0 0-35.81 24.53H25.6V26.27h460.8v332.8h-93.26a38.43 38.43 0 0 0-35.81-24.53 38.41 38.41 0 0 0 0 76.8 38.44 38.44 0 0 0 36.57-26.67h105.3a12.8 12.8 0 0 0 12.8-12.8V13.47A12.8 12.8 0 0 0 499.2.67H12.8A12.8 12.8 0 0 0 0 13.47v358.4a12.8 12.8 0 0 0 12.8 12.8zm138.97-50.13a38.41 38.41 0 0 0 0 76.8 38.41 38.41 0 0 0 0-76.8zm-102.4 25.6a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zm102.4 0a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zm102.4 0a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zM153.6 128.67c-35.32 0-64 28.67-64 64 0 35.32 28.68 64 64 64s64-28.68 64-64c0-35.33-28.68-64-64-64zm204.8 76.8h-89.6a12.8 12.8 0 0 0 0 25.6h89.6a12.8 12.8 0 0 0 0-25.6zm-204.8-51.2a38.41 38.41 0 0 1 0 76.8 38.41 38.41 0 0 1 0-76.8zm115.2 25.6h139.93a12.8 12.8 0 0 0 0-25.6H268.8a12.8 12.8 0 0 0 0 25.6z"></path></svg>
              </div>
              <div title="">

                <a target="_blank" style={{ border: "2px solid", borderRadius: "10px", padding: "0.6rem" }} className="font-extrabold
          tracking-wide
          leading-none
          shrink-0
          text-white
          border-gray-700
          transition-colors
          duration-200" onClick={navigateToLogin}>Login</a>              </div>
            </div> <h1 style={{ color: "white", marginTop: "2rem" }}>
              The Digital way to connect
            </h1>
            <p className="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
              Not just for in-person meetings, but also for online networking and virtual events.
              <br></br>
              <br></br>
              Compatible with all modern smartphones, Apple and Android.

            </p>
          </div>
        </div>
      </div>


      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='app' element={<DashboardApp />} />
          <Route path='user' element={<User />} />
          <Route path='register' element={<Register />} /> {/*A nested route!*/}
          <Route path='products' element={<Products />} /> {/*A nested route!*/}
          <Route path='portfolio' element={<Portfolio />} /> {/*A nested route!*/}
          <Route path='portfolio2' element={<Portfolio2 />} /> {/*A nested route!*/}
          <Route path='portfolio3' element={<Portfolio3 />} /> {/*A nested route!*/}
          <Route path='portfolio4' element={<Portfolio4 />} /> {/*A nested route!*/}
          <Route path='portfolio5' element={<Portfolio5 />} /> {/*A nested route!*/}
          <Route path='contactUs' element={<ContactUs />} /> {/*A nested route!*/}
          <Route path='paymentPage' element={<PaymentPage />} /> {/*A nested route!*/}
        </Route>

        
      </Routes>

    </>
  );
}
