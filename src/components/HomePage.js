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
import Portfolio6 from '../pages/Portfolio6';
import PaymentPage from '../pages/PaymentPage';
import CardType from '../pages/CardType';
import ForgotPassword from '../pages/ForgotPassword';

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
  }, []);
  return (
    <>
      <div id="homePage" style={{ background: "#111827"}}>
        <img src="static/1.jpg" onClick={navigateToLogin} />
      </div>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

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
          <Route path='portfolio6' element={<Portfolio6 />} /> {/*A nested route!*/}
          <Route path='contactUs' element={<ContactUs />} /> {/*A nested route!*/}
          <Route path='paymentPage' element={<PaymentPage />} /> {/*A nested route!*/}
          <Route path='CardType' element={<CardType />} /> {/*A nested route!*/}
        </Route>

      </Routes>

    </>
  );
}
