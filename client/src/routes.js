/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from 'views/Index.js';
import Register from 'views/examples/Register.js';
import Login from 'views/examples/Login.js';
import Starred from 'views/Starred.js';
import Shared from 'views/Shared.js';
import Recent from 'views/Recent.js';
import Profile from 'views/examples/Profile.js';

var routes = [
  {
    path: '/index',
    name: 'All Files',
    icon: 'ni ni-books text-primary',
    component: Index,
    layout: '/admin',
  },
  {
    path: '/shared_with_me',
    name: 'Shared',
    icon: 'fa fa-share text-blue',
    component: Shared,
    layout: '/admin',
  },
  {
    path: '/recent',
    name: 'Recent',
    icon: 'fa fa-clock text-blue',
    component: Recent,
    layout: '/admin',
  },
  {
    path: '/starred',
    name: 'Starred',
    icon: 'fa fa-star text-blue',
    component: Starred,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: Register,
    layout: '/auth',
  },
];
export default routes;
