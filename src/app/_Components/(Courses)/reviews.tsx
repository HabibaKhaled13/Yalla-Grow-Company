"use client"
import React from 'react'
import CountUp from "react-countup";


export default function Reviews() {

  return (
    
 <>
 <section className='bg-neutral-100 md:py-20 py-10'>
    <div className="md:px-14 px-7 ">
    <div className="title text-center">
        <h2 className='text-3xl font-bold mb-3'>نتائج حقيقة من طلابنا</h2>
         <p className='text-neutral-500'>مئات من رواد الاعمال استخدموا الاطار لتحقيق النمو في أعمالهم</p>
    </div>
<div className="reviews flex flex-wrap mt-12 justify-between">
<div className="first-gift shadow-lg transition-all duration-400 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl md:mt-0 mt-5 w-full md:w-[32%] p-7 text-center">
  <h2 className='mb-2 text-2xl text-[#2E313A] font-semibold'> <CountUp
                    start={0}
                    end={30}
                    duration={3}
                    suffix="%"
                   enableScrollSpy
                   scrollSpyOnce
    
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp></h2>
  <p  className='text-neutral-500' >  متوسط نمو المبيعات خلال 6 اشهر
</p>
</div>
<div className="first-gift shadow-lg transition-all duration-400 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl md:mt-0 mt-5 w-full md:w-[32%] p-7 text-center">
  <h2 className='mb-2 text-2xl text-[#2E313A] font-semibold'>  <CountUp
                    start={0}
                    end={70}
                    duration={3}
                    suffix="%"
                   enableScrollSpy
                   scrollSpyOnce
    
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp></h2>
  <p  className='text-neutral-500' >  تحسن في معدل احتفاظ العملاء
</p>
</div>
<div className="first-gift shadow-lg transition-all duration-400 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl md:mt-0 mt-5 w-full md:w-[32%] p-7 text-center">
  <h2 className='mb-2 text-2xl text-[#2E313A] font-semibold'> <CountUp
                    start={0}
                    end={44}
                    duration={3}
                    
                   enableScrollSpy
                   scrollSpyOnce
    
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp></h2>
  <p  className='text-neutral-500' >  رائد اعمال استفاد من النظام
</p>
</div>
</div>
<div className="clinets-review">


</div>

</div>

 </section>
 
 </>
  )
}
