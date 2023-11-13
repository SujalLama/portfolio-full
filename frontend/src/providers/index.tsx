import { PropsWithChildren } from "react"
import ThemeProvider from "./ThemeProvider"

export default function CustomProvider ({children}: PropsWithChildren) {
    return (<ThemeProvider>
    {children}
    </ThemeProvider>)
} 