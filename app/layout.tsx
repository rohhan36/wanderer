import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next BNB",
  description: "Property renting website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
