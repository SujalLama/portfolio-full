"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>
}


export const useTheme = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext) as ThemeContextType;
    return {darkMode, setDarkMode};
}

const ThemeContext = createContext< ThemeContextType | null>(null)

export default function ThemeProvider ({children} : PropsWithChildren) {
    const [darkMode, setDarkMode] = useState(true);

    const value = {
        darkMode,
        setDarkMode
    }

    return (
        <ThemeContext.Provider value={value}>
            <main className={`${darkMode ? 'dark' : ''}`}>
                {children}
            </main>
        </ThemeContext.Provider>
    )
}
