import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeComponent = () => {
    const {theme, toggleTheme} = useTheme();
    const updtTheme = (e)=>{
      toggleTheme(e.target.value);
    }
  return (
    <div>
        <select onChange={updtTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
  )
}
export default ThemeComponent;
