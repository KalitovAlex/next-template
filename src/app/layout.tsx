import type { Metadata } from "next";
import "@/shared/styles/globals.css";
import { Inter } from "next/font/google";
import { APP_METADATA } from "@/shared/constants/app";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_METADATA.TITLE,
  description: APP_METADATA.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
