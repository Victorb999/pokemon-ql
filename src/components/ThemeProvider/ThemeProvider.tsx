"use client"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { themeAtom } from "@/src/store/store"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme] = useAtom(themeAtom)

    useEffect(() => {
        const root = document.documentElement
        if (theme === "light") {
            root.classList.remove("dark")
            root.classList.add("light")
        } else {
            root.classList.remove("light")
            root.classList.add("dark")
        }
    }, [theme])

    return <>{children}</>
}
