import type { Metadata } from "next";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";

export const metadata: Metadata = { title: "NEURAFLOW - TESTING" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
}
