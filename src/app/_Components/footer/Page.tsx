import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import style from"./footer.module.css";
import { FaXTwitter } from "react-icons/fa6";




export default function Footer() {
  return (
    <>
    <footer className='bg-[#060606] text-white'>
        <div className="mx-auto md:px-14 px-7 ">
<div className=" flex flex-wrap py-12 justify-between">
    <div className="logo md:w-[27%] w-full md:mb-0 mb-10">
  
<img
  src="/imgs/yalla.png"
  alt="logo"
  width={130}
  height={40}
  className='mb-4'
/>
        <p className='text-stone-300 mb-4'>Yalla Grow isn’t just our name, it’s our mindset. Always shifting, always creating, always pushing forward.
</p>
   <div className="social-media mt-4">
<ul className='flex gap-x-2'><li><Link href="https://www.instagram.com/yallagrow.pro/"><FaInstagram className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.facebook.com/YallaGrow.pro"><FaFacebook 
    className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="#"><FaXTwitter
    className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.linkedin.com/company/yallagroweg/posts/?feedView=all"><FaLinkedin className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li></ul>
   </div>

    </div>
   
<div className="services md:w-[15%] w-full md:mb-0 mb-10">

<h2 className='text-xl font-semibold uppercase'>Contact Us</h2>
 <p className='text-stone-300 my-4 '> Cairo, Egypt, Nasr City<br/>Kuwait, Kuwait<br/>Al-Hamra, Saudi Arabia </p> 
  <p className='text-stone-300 my-4 '> KSA +966 59 040 4941<br/> Cairo +200102344 3822 <br/> Kuwait +96550267471</p> 
<p> <Link href="info@Yalla Growmena.com"  className=" text-stone-300 ">info@Yalla Growmena.com</Link></p>
  
</div>
 <div className="nav md:w-[13%] w-full md:mb-0 mb-10">
<h2 className='text-xl font-semibold uppercase'>Explore</h2>
      <ul className='text-stone-300 '><li className='mt-4 mb-2'><Link href="/">Home</Link></li>
      <li className='mb-2'><Link href="/courses">Courses</Link></li>
      <li className='mb-2'><Link href="/blogs">Blogs</Link></li>
      <li ><Link href="/contact">Contact us</Link></li>
      </ul>
    </div>
      <div className="letsTalk uppercase md:w-[27%] w-full text-center md:text-left  lg:self-center">   <h2 className={`${style['animated-text']} text-6xl font-bold` }>Let's Talk</h2></div>
      </div>
  <div className="copy-right py-5 border-t  border-gray-800 text-neutral-200 text-center text-sm ">
           <p>© 2025 Yalla Grow. All right received, all wrongs received.</p>
        </div>
          </div>
    </footer>
    </>
  )
}
