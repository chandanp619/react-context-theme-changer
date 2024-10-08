import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {AppRoutes} from './Routes';
import ThemeProvider from './context/ThemeProvider';
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
