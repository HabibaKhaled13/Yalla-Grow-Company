import Link from 'next/link'
import React from 'react'

export default function Logoss() {
  return (
  <>
     <section className="py-10 md:py-20">
        <div className="mx-auto md:px-14 px-7 text-white ">
                <div className="title flex justify-between flex-wrap  my-5 md:my-20 text-white items-start">
        <div className="md:w-1/6 w-full md:mb-0 mb-5 ">
       
        <h2 className='text-4xl font-bold uppercase mb-2'>Logos</h2>
         <span className='text-[#FFA300] '>انت تفكر في المشروع .. واحنا نرسم له هوية</span>
            </div>
        
                 <div className="md:w-[70%] md:mb-0 mb-5 w-full text-neutral-300">

      <p>We transform ideas into meaningful brand identities — blending creativity, strategy, and innovation to make your vision stand out.</p>
            </div>
 


            </div>

            <div className="flex flex-wrap">
                   <div className="md:w-2/6 w-full h-[30%]">
    <div className="info py-6 md:px-5 ">
<img src="/imgs/logo1.jpg" alt="" className='w-full ' />
    </div>
    </div> 
    <div className="md:w-2/6 w-full">
    <div className="info info py-6 md:px-5 md:border-x md:border-t-0 border-t border-neutral-400  ">
 <img src="/imgs/Artboard8.png" alt="" className='w-full ' />
   </div>
    </div>
   
       <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5 border-t md:border-t-0  border-neutral-400 ">
 <img src="/imgs/Artboard2.png" alt="" className='w-full ' />
    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5  border-t border-neutral-400 ">
<img src="/imgs/logo4.jpg" alt="" className='w-full ' />

    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5 md:border-x border-t border-neutral-400 ">
 <img src="/imgs/Artboard7.png" alt="" className='w-full ' />

    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5  border-t border-neutral-400 ">
<img src="/imgs/logo6.jpg" alt="" className='w-full ' />

    </div>
    </div>
            <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5 border-t border-neutral-400 ">
 <img src="/imgs/Artboard4.png" alt="" className='w-full ' />

    </div>
    </div>
                <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5 md:border border-t md:border-b-0 border-neutral-400 ">
 <img src="/imgs/logo3.jpg" alt="" className='w-full ' />

    </div>
    </div>
                    <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-5   border-t border-neutral-400 ">
 <img src="/imgs/Artboard3.png" alt="" className='w-full ' />

    </div>
    </div>

</div>

 <div className="contact text-center mt-10 md:mt-20 text-white">
        <h2 className='text-4xl font-bold uppercase mb-2'>Start your project</h2>
         <span className='text-[#ffa300] text-xl '>يلا نشتغل سوا؟</span>
                <div className="md:w-[14%] mx-auto mt-5 w-full text-center rounded-full  border border-neutral-300 py-2">
                    
                    <Link href='https://wa.me/201552599703'>Let's Start</Link>

            </div>
            </div>
</div>
  </section>
  
  
  </>
  )
}
