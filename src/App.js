import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {AppRoutes} from './Routes';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.scss';


export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={AppRoutes} />
      </ThemeProvider>
    </React.StrictMode>
   
  )
}
