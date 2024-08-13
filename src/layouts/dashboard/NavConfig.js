// component
import Iconify from '../../components/Iconify';
import AuthService from "../../services/auth.service";

// ----------------------------------------------------------------------
const user = AuthService.getCurrentUser();
let admin = false
let teamMember = false
console.log(user)
if (user) {
  if (user.roles[0] == "ROLE_ADMIN") {
    admin = true
  }
  if (user.roles[0] == "ROLE_MODERATOR") {
    teamMember = true
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
    title: 'theme',
    path: '/dashboard/products',
    icon: getIcon('vscode-icons:folder-type-theme'),
  },
  // {
  //   title: 'service',
  //   path: '/dashboard/UserService',
  //   icon: getIcon('eos-icons:service-plan-outlined'),
  // },
)

if (admin)  {
  navConfig.push({
    title: 'order',
    path: '/dashboard/OrderPage',
    icon: getIcon('material-symbols:order-approve'),
  },)
}

if (!teamMember && !admin)  {
  navConfig.push({
    title: 'register',
    path: '/dashboard/register',
    icon: getIcon('eva:person-add-fill'),
  },{
    title: 'card',
    path: '/dashboard/CardType',
    icon: getIcon('fluent:card-ui-20-filled'),
  }, {
    title: 'Checkout',
    path: '/dashboard/paymentPage',
    icon: getIcon('ic:baseline-price-change'),
  })
}

export default navConfig;
