import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className="times-new-roman">{children}</body>
      <Analytics />
    </html>
  );
}
