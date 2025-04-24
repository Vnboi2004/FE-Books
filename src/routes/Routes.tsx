import { lazy } from "react";

import Home from "../pages/main/Home";
const About = lazy(() => import('../pages/main/About'));
const Contact = lazy(() => import('../pages/main/Contact'));
const BookDetail = lazy(() => import('../pages/main/BookDetail'));
const NotFound = lazy(() => import('../pages/main/NotFound'));
export const appRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/book/:subject/:bookId', component: BookDetail},
    { path: '*', component: NotFound },
];

