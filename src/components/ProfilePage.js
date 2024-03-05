import Portfolio from '../pages/Portfolio';
import Portfolio2 from '../pages/Portfolio2';
import Portfolio3 from '../pages/Portfolio3';
import Portfolio4 from '../pages/Portfolio4';
import Portfolio5 from '../pages/Portfolio5';
import Portfolio6 from '../pages/Portfolio6';
import Portfolio7 from '../pages/Portfolio7';
import { useState, useEffect } from 'react';
import service from "../services/service";
import InactiveAccountPage from '../pages/InactiveAccountPage';

export default function ProfilePage({ phoneNo, themeId }) {
  const [inActive, setInActive] = useState(false);

  useEffect(() => {
    service.dataListByPhoneNo(phoneNo)
      .then(resp => {
        if (resp.data.length > 0) {
          console.log(resp.data[0]);
          if (resp.data[0].activeStatus == 2) {
            setInActive(true)
          }
        }
      })
  }, []);

  return (

    <>
      <div className='mt-5'>
        {(() => {
          if (!inActive) {
            switch (themeId) {
              case "1": return <Portfolio phoneNo={phoneNo} withoutLogin="true" />;
              case "2": return <Portfolio2 phoneNo={phoneNo} withoutLogin="true" />;
              case "3": return <Portfolio3 phoneNo={phoneNo} withoutLogin="true" />;
              case "4": return <Portfolio4 phoneNo={phoneNo} withoutLogin="true" />;
              case "5": return <Portfolio5 phoneNo={phoneNo} withoutLogin="true" />;
              case "6": return <Portfolio6 phoneNo={phoneNo} withoutLogin="true" />;
              case "7": return <Portfolio7 phoneNo={phoneNo} withoutLogin="true" />;
              default: <InactiveAccountPage />;
            }
          }
          else
            return <InactiveAccountPage />
        })()}
      </div>
    </>
  );
}
