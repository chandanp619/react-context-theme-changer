import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {createRoute} from 'react-router';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';


export const AppRoutes =  createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);