import Portfolio from '../pages/Portfolio';
import Portfolio2 from '../pages/Portfolio2';
import Portfolio3 from '../pages/Portfolio3';
import Portfolio4 from '../pages/Portfolio4';
import Portfolio5 from '../pages/Portfolio5';
import Portfolio6 from '../pages/Portfolio6';
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
            {!inActive && themeId == 1 ?
              <Portfolio phoneNo={phoneNo} withoutLogin="true" />
              : <InactiveAccountPage />
            }
            {!inActive && themeId == 2 &&
              <Portfolio2 phoneNo={phoneNo} withoutLogin="true" />
            }
            {!inActive && themeId == 3 &&
              <Portfolio3 phoneNo={phoneNo} withoutLogin="true" />
            }
            {!inActive && themeId == 4 &&
              <Portfolio4 phoneNo={phoneNo} withoutLogin="true" />
            }
            {!inActive && themeId == 5 &&
              <Portfolio5 phoneNo={phoneNo} withoutLogin="true" />
            }
            {!inActive && themeId == 6 &&
              <Portfolio6 phoneNo={phoneNo} withoutLogin="true" />
            }
          </div>
        </>
  );
}
