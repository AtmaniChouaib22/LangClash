import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LangClash",
  description: "Language learning quiz battle app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
