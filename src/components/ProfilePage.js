import Portfolio from '../pages/Portfolio';
import Portfolio2 from '../pages/Portfolio2';
import Portfolio3 from '../pages/Portfolio3';
import Portfolio4 from '../pages/Portfolio4';
import Portfolio5 from '../pages/Portfolio5';
import Portfolio6 from '../pages/Portfolio6';

export default function ProfilePage({ phoneNo, themeId }) {
  return (
    <>
      <div className='mt-5'>
        {themeId == 1 &&
          <Portfolio phoneNo={phoneNo} withoutLogin="true" />
        }
        {themeId == 2 &&
          <Portfolio2 phoneNo={phoneNo} withoutLogin="true" />
        }
        {themeId == 3 &&
          <Portfolio3 phoneNo={phoneNo} withoutLogin="true" />
        }
        {themeId == 4 &&
          <Portfolio4 phoneNo={phoneNo} withoutLogin="true" />
        }
        {themeId == 5 &&
          <Portfolio5 phoneNo={phoneNo} withoutLogin="true" />
        }
        {themeId == 6 &&
          <Portfolio6 phoneNo={phoneNo} withoutLogin="true" />
        }
      </div>
    </>
  );
}
