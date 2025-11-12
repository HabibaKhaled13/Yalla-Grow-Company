"use client"
import "./globals.css";
import Navbar from "./_Components/navbar/page";
import WhatappBtn from "./_Components/whatsappBtn/page";
import Footer from "./_Components/footer/Page";
import NavigationBar from "./_Components/navigationBar/page";
import Loading from "./_Components/loading/page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Loading/>
        <WhatappBtn />
        {children}
        <Footer/>
        <NavigationBar/>
      </body>
    </html>
  
  );
}
