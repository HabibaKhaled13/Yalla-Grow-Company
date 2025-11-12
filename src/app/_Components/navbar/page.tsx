"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import * as React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GoX } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 567) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header>
        <NavigationMenu
          viewport={false}
          className="lg:flex justify-between  hidden"
        >
          <div className="">
            <Link href="/">
              <img src="/imgs/yalla.png" alt="" className="w-[80px]" />
            </Link>
          </div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
{/* 
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/portfolio">Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/courses">Courses</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/blogs">Blogs</Link>
            </NavigationMenuLink>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <nav
          className={`fixed right-0 left-0 py-6 lg:hidden z-30 ${
            scroll ? "bg-black" : "bg-transparent"
          }`}
        >
          <div className=" md:px-14 px-7">
            <div className="flex flex-nowrap justify-between items-center">
              <div className="logo ">
                <Link href="/">
                  <img src="/imgs/yalla.png" alt="" className="w-[70px]" />
                </Link>
              </div>
        
             <div
          className="toggle text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : <FaBarsStaggered />}
        </div>
            </div>

      </div>

 
    <div
  className={`navagation w-[80%] fixed inset-0 bg-[#010101] z-40 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
          <div className="up px-8 mt-5 mb-8 flex justify-between items-center">
            <div className="logo">
              <Link href="/">
                <img src="/imgs/yalla.png" alt="" className="w-[70px]" />
              </Link>
            </div>
            <div
              className="toggle text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <GoX />
            </div>
          </div>

          <ul className="text-white uppercase">
            <li className="ps-8 border-neutral-900 border-b py-6 ">
              <Link href="/">Home</Link>
            </li>
     
            {/* <li className="ps-8 border-neutral-900 border-b py-6">
              <Link href="/Portfolio">Portfolio</Link>
            </li> */}
                 <li className="ps-8 border-neutral-900 border-b py-6">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="ps-8 border-neutral-900 border-b py-6">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="ps-8 border-neutral-900 border-b py-6">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
             <div className="social-media mt-6 mx-7 ">
<ul className='flex gap-x-2'><li><Link href="https://www.instagram.com/yallagrow.pro/"><FaInstagram className='bg-[#FFA300] text-amber-50 text-[42px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.facebook.com/YallaGrow.pro"><FaFacebook 
    className='bg-[#FFA300] text-amber-50 text-[42px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="#"><FaXTwitter
    className='bg-[#FFA300] text-amber-50 text-[42px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.linkedin.com/company/yallagroweg/posts/?feedView=all"><FaLinkedin className='bg-[#FFA300] text-amber-50 text-[42px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li></ul>
   </div>
        </div>
      
        </nav>
      </header>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
