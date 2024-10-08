import React, {useState, useEffect} from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeComponent = () => {
    const {theme, toggleTheme} = useTheme();
    let [selectedTheme, setSelectedTheme] = useState('');
    useEffect(()=>{
      setSelectedTheme(theme);
    })
    const updtTheme = (e)=>{
      toggleTheme(e.target.value);
    }
  return (
    <div>
        <select value={selectedTheme} onChange={updtTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
  )
}
export default ThemeComponent;
