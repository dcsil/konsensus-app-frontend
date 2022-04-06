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
import Register from 'views/Register.js';
import Login from 'views/Login.js';
import Starred from 'views/Starred.js';
import MyFiles from 'views/MyFiles.js';
import Recent from 'views/Recent.js';
import Profile from 'views/Profile.js';
import File from 'views/File.js';

var routes = [
  {
    path: '/index',
    name: 'All Files',
    showOnSidebar: true,
    icon: 'fa fa-home text-primary',
    component: Index,
    layout: '/admin',
  },
  {
    path: '/my_files',
    name: 'My Files',
    showOnSidebar: true,
    icon: 'ni ni-books text-blue',
    component: MyFiles,
    layout: '/admin',
  },
  {
    path: '/recent',
    name: 'Recent',
    icon: 'fa fa-clock text-blue',
    showOnSidebar: true,
    component: Recent,
    layout: '/admin',
  },
  {
    path: '/starred',
    name: 'Starred',
    icon: 'fa fa-star text-blue',
    showOnSidebar: true,
    component: Starred,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    showOnSidebar: false,
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/file',
    name: 'File View',
    showOnSidebar: false,
    icon: 'ni ni-collection text-yellow',
    component: File,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    showOnSidebar: false,
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    showOnSidebar: false,
    icon: 'ni ni-circle-08 text-pink',
    component: Register,
    layout: '/auth',
  },
];
export default routes;
