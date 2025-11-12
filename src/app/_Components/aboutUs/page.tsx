import React from 'react'


export default function AboutUs() {

  return (
<>
<section className='md:py-20 py-10'>
      <div className="mx-auto md:px-14 px-7 text-white ">
        <div className="flex md:flex-row flex-col-reverse flex-wrap justify-between ">
            <div className="md:w-[48%] w-full md:mt-0 mt-8">
                <img src="/imgs/about.png" alt="" className='md:w-[80%] w-full mx-auto rounded-sm'/>
            </div>
               <div className="md:w-[48%] w-full self-center ">
                   
        <h2 className='text-4xl font-bold uppercase mb-2 text-white'>About us</h2>
         <span className='text-[#f9a004] '>إحنا مين</span>
         <div className="md:ms-12 md:mt-6 mt-7">
            <p className='text-neutral-300 mb-5 mt-5'>Yalla Grow isn’t just our name, it’s our mindset. Always shifting, always creating, always pushing forward.</p>
             <p className='text-neutral-300 mb-5 '>We’re a small, deliberate team that builds ideas into things people notice and remember. Not because we chase the loudest trends, but because we choose the right ones, the ones that fit your brand and actually Yalla Grow your business.
</p>
 <p className='text-neutral-300'>We work with brands that need clarity, not noise. Our process is simple and practical: learn, test, create, improve. No templates, Only customize solutions, every project gets its own playbook.
</p>
         </div>
       
            </div>
        </div>
        </div>
</section>
</>
  )
}