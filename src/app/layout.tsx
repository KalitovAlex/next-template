import type { Metadata } from "next";
import "@/shared/styles/globals.css";
import { Inter } from "next/font/google";
import { APP_METADATA } from "@/shared/constants/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_METADATA.TITLE,
  description: APP_METADATA.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
