// component
import Iconify from '../../components/Iconify';
import AuthService from "../../services/auth.service";

// ----------------------------------------------------------------------
const user = AuthService.getCurrentUser();
  let admin = false
  console.log(user)
  if (user) {
    if(user.roles[0] == "ROLE_ADMIN"){
      admin = true
    }
  }

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
const navConfig = [];
navConfig.push({
  title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
      title: 'user',
      path: '/dashboard/user',
      icon: getIcon('eva:people-fill'),
    },
    {
      title: 'register',
      path: '/dashboard/register',
      icon: getIcon('eva:person-add-fill'),
    },
    {
      title: 'theme',
      path: '/dashboard/products',
      icon: getIcon('vscode-icons:folder-type-theme'),
    },
)


 
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  
  // {
  //   title: 'Demo',
  //   path: '/dashboard/portfolio',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },

 if(true){
  navConfig.push({
    title: 'Price',
    path: '/dashboard/paymentPage',
    icon: getIcon('ic:baseline-price-change'),
  })
}

export default navConfig;
