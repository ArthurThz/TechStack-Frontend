import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar/Navbar";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
import Header from "./components/Layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStack",
  description: "A full stack blog using next js and redux",
  icons: [
    {
      url: "/wifi-icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col lg:flex-row h-screen w-full bg-zinc-950`}
      >
        <ReduxProvider>
          <Toaster richColors />
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
