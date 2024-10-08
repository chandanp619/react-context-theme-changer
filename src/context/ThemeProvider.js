import React, { createContext, useEffect, useState } from 'react';

const initState = {
    theme: 'light',
    toggleTheme: () => {}
};

const ThemeContext = createContext(initState);

export default function ThemeProvider({ children }) {
    const [state, setState] = useState(() => {
        // Check localStorage for a saved theme
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? { theme: savedTheme, toggleTheme: () => {} } : initState;
    });

    const toggleTheme = (value) => {
        setState((prevState) => {
            const newState = { theme: value, toggleTheme };
            // Save the new theme to localStorage
            localStorage.setItem('theme', value);
            return newState;
        });
    };

    useEffect(() => {
        // Update the theme in localStorage whenever it changes
        localStorage.setItem('theme', state.theme);
    }, [state.theme]);

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            <div className={`theme-${state.theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);
