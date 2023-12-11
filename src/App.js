// routes
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

// theme
import ThemeProvider from './theme';
// components
import "./App.css";
import Homepage from './components/HomePage';
import Footer from './components/Footer';
import { useSearchParams } from "react-router-dom";
import ProfilePage from './components/ProfilePage';
import AuthService from "./services/auth.service";

// ----------------------------------------------------------------------

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  let themeId = searchParams.get("themeId")
  let phoneNo = searchParams.get("phoneNo")
  const [dialog, setDialog] = useState(true);
  const toggleDialog = () => {
    setDialog(!dialog);
  };
  const user = AuthService.getCurrentUser();
  return (<>
    {(themeId != null && phoneNo != null) ? <><ProfilePage phoneNo={phoneNo} themeId={themeId} />
    </> :
      <ThemeProvider>  {!user && dialog && (
        <div className="dialog">
          <div className="dialog-content">
            <button className="close-icon" onClick={toggleDialog}>&#10005;</button>
            <br></br>
            <img className="popup-image" src='static/popup.png' alt="Popup Image" />
          </div>
        </div>
      )}
        <Homepage />
        <Footer />
      </ThemeProvider>
    }
  </>
  );
}
