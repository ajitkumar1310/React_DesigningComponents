import React, { createContext, useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext'


const LayoutNoThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (

        <div className={theme == 'light' ? "container-fluid light" : "container-fluid dark"}>
            {children}

        </div>

    )

}
const Layout = ({ startingTheme, children }) => {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider >{children}</LayoutNoThemeProvider>
        </ThemeProvider>


    )
}
export default Layout;