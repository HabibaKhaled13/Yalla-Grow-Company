import React from 'react'
import { GoStar } from "react-icons/go";
import Marquee from 'react-fast-marquee';
export default function Bar() {
  return (
    <>
    <section className='slider-bar py-12'>
      <div className="text-white bar md:py-0 py-0 border-y border-neutral-400 overflow-hidden">
<Marquee className='md:text-[50px] text-4xl uppercase'>
        From <span className=' text-transparent mx-3 [-webkit-text-stroke:2px_#fff] [-webkit-text-fill-color:transparent] leading-none'>strategy</span> to results <GoStar className='ms-2'/>
, we’ve got you <span className=' text-transparent mx-3 [-webkit-text-stroke:2px_#fff] [-webkit-text-fill-color:transparent] leading-none'>covered</span> <GoStar className='mx-2'/>
        </Marquee>

      </div>
   
    </section>
    </>
  )
}
