import { useState, createContext } from 'react'
export const ThemeContext = createContext();
export const ThemeProvider = ({ initialTheme, children }) => {

    const [theme, setTheme] = useState(initialTheme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}