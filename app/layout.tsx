import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStack",
  description: "A full stack blog using next js and redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-woodsmoke-950`}>
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
