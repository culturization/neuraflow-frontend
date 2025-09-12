import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEURAFLOW - TESTING",
  description: "123123123123",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
