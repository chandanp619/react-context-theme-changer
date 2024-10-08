import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
const AppRoot = createRoot(document.getElementById("root"));

AppRoot.render(<App />);