import "./globals.css"
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ariel Navarro | Front-end Developer",
  description: "Ariel Navarro | Front-end Developer",
};

export default function RootLayout({ 
  children 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
