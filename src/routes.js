/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import Home from "views/Home/Home.js"
import LoginPage from "views/Login/LoginPage.js";
import UserProfile from "views/UserProfile/UserProfile.js";

import Icons from "views/Icons/Icons.js";
import { Star, StarBorder } from "@material-ui/icons";
import StarBorderIcon from '@material-ui/icons/StarBorder';



// core components/views for RTL layout


const dashboardRoutes = [
  {
    path: "/Home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "home",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
 
  {
    path: "/user",
    name: "Monitoring",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "desktop_windows",
    component: UserProfile,
    layout: "/admin"
  },

  {
    path: "/table",
    name: "Tasks",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "desktop_windows",
    component: TableList,
    layout: "/admin"
  },
 

  {
    
    path: "/icons",
    name: ".",
    
    icon: Star,
    component: Icons,
    layout: "/admin"
    
  }
 
];

export default dashboardRoutes;
