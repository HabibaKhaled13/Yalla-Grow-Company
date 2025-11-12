import React from "react";
import MainBanner from "./_Components/mainBanner/page";
import Logos from "./_Components/logos/page";
import Services from "./_Components/services/page";
import ClientsCount from "./_Components/clinetsCount/page";
import Bar from "./_Components/bar/page";
import Portfolio from "./_Components/portfolio/page";
import AboutUs from "./_Components/aboutUs/page";
import Blogs from "./_Components/blogs/page";
import Contact from "./_Components/contact/page";




export default function page() {
  return (
    <>

      <MainBanner />
   
      <Bar/>
      <Services/>
      <Portfolio/>
      <AboutUs/>
         <ClientsCount/>
      <Logos/>
      <Blogs/>
      <Contact/>
     
   
      


    </>
  );
}
