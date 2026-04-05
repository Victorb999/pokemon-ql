import type { Metadata } from "next"
import "./globals.css"
import ReactQueryProvider from "../providers/ReactQueryProvider"
import { Provider } from "jotai"
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu"
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider"
import { Londrina_Solid } from "next/font/google"

const londrina = Londrina_Solid({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-londrina",
})

export const metadata: Metadata = {
  title: "PokeAgenda",
  description: "PokeAgenda",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Provider>
        <ReactQueryProvider>
          <ThemeProvider>
            <body
              className={`${londrina.className} pattern-leave tracking-widest
              theme-bg-base theme-text min-h-[100dvh] transition-colors`}
            >
              <HeaderMenu />
              {children}
            </body>
          </ThemeProvider>
        </ReactQueryProvider>
      </Provider>
    </html>
  )
}
