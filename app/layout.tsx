import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TEMC Dashboard",
    default: "TEMC Dashboard",
  },
  description:
    "Dashboard construido con APP Router y con la ayuda de NextJS Learn",
  metadataBase: new URL("https://temc-dashboard.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
