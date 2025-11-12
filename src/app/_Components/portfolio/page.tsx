"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

 const containerRef = useRef<HTMLDivElement | null>(null);

 const scrollContext = useRef<gsap.Context | null>(null); 

 useLayoutEffect(() => { 

if (!containerRef.current) return;

const ctx = gsap.context(() => { 

const sections = gsap.utils.toArray<HTMLElement>(".panel");
        

gsap.to(sections, {
 xPercent: -100 * (sections.length - 1),
 ease: "none",
 scrollTrigger: {
  trigger: containerRef.current,
  pin: true,
  scrub: 1,
  snap: 1 / (sections.length - 1),
  end: () => `+=${containerRef.current?.scrollWidth}`, 
  invalidateOnRefresh: true, 
 },
});
 
}, containerRef.current); 

scrollContext.current = ctx; 

return () => {

 ctx.revert(); 
};

 }, []);


return (
 <>
 <section>
<div className="mx-auto md:px-14 px-7 ">
 <div className="text text-center ">
  <h2 className='text-4xl font-bold uppercase text-white'>Portfolio</h2>
  <p className='text-[#f9a004] text-xl mt-3 '>عملاء وثقوا فينا، فطلعنا الشغل ده</p>
 </div>
</div>
 </section>

 <section
ref={containerRef}
className="horizontal-section py-12 overflow-hidden md:px-14 px-7 md:block hidden">

<div className="flex w-[400vw] gap-x-10">

 <div className="panel w-full object-fill flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider1.jpg" className="rounded-xl" alt="" /></div>
 <div className="panel w-full flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider2.jpg" className="rounded-xl" alt="" /></div>
 <div className="panel w-full flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider3.jpg" className="rounded-xl" alt="" /></div>
 <div className="panel w-full flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider4.jpg" className="rounded-xl" alt="" /></div>
 <div className="panel w-full flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider5.jpg" className="rounded-xl" alt="" /></div>
 <div className="panel w-full flex items-center justify-center text-6xl font-bold"><img src="/imgs/slider6.jpg" className="rounded-xl" alt="" /></div>
</div>
 
 </section>
 <section className="md:hidden mt-9 ">
    <div className="py-12 overflow-hidden md:px-14 px-7 ">

 <div className="mb-6"><img src="/imgs/slider1.jpg" className="rounded-xl" alt="" /></div>
 <div className="mb-6"><img src="/imgs/slider2.jpg" className="rounded-xl" alt="" /></div>
 <div className="mb-6"><img src="/imgs/slider3.jpg" className="rounded-xl" alt="" /></div>
 <div className="mb-6"><img src="/imgs/slider4.jpg" className="rounded-xl" alt="" /></div>
 <div className="mb-6"><img src="/imgs/slider5.jpg" className="rounded-xl" alt="" /></div>
 <div className="mb-6"><img src="/imgs/slider6.jpg" className="rounded-xl" alt="" /></div>
 </div>
 </section>
</>


 );
}