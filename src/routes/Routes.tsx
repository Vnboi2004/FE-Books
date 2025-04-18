import { lazy } from "react";

import Home from "../pages/main/Home";
const About = lazy(() => import('../pages/main/About'));
const Contact = lazy(() => import('../pages/main/Contact'));
const NotFound = lazy(() => import('../pages/main/NotFound'));
export const appRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound },
];

