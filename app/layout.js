import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linky",
  description:
    "A URL shortner in which you can shorten your URL as per your given subdomain which not only shortens URL btu also does not require signIn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_right_top,#a4acb7,#7c9ac9,#5586d9,#2e6fe5,#1254eb)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
