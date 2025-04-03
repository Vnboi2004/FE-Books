import { lazy } from "react";

import Home from "../pages/main/Home";
const About = lazy(() => import('../pages/main/About'));
const Pages = lazy(() => import('../pages/main/Pages'));
const Shop = lazy(() => import('../pages/main/Shop'));
const Articles = lazy(() => import('../pages/main/Articles'));
const Contact = lazy(() => import('../pages/main/Contact'));

export const appRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/pages', component: Pages },
    { path: '/shop', component: Shop },
    { path: '/articles', component: Articles },
    { path: '/contact', component: Contact }
];

