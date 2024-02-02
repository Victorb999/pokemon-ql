import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className="bg-amber-50 w-[100dvw] h-[100dvh]">{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
