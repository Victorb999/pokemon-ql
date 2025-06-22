import type { Metadata } from "next"
import "./globals.css"
import ReactQueryProvider from "../providers/ReactQueryProvider"
import { Provider } from "jotai"
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu"
import { Londrina_Solid } from "next/font/google"

const londrina = Londrina_Solid({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  //👇 Add variable to our object
  variable: "--font-londrina",
})

export const metadata: Metadata = {
  title: "Pokemon APP",
  description: "Pokemon APP",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <ReactQueryProvider>
          <body
            className={`${londrina.className} pattern-leave tracking-widest
          bg-stone-950 text-stone-100 h-[100dvh]`}
          >
            <HeaderMenu />
            {children}
          </body>
        </ReactQueryProvider>
      </Provider>
    </html>
  )
}
