import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";


export default function Payment() {
  return (
   <section className='bg-[#F7F7F7] py-10'>
    <div className="md:px-14 px-7 ">
        <div className="title text-center pb-3">
  <h2 className='text-3xl font-semibold  pt-8 pb-3'>جاهز تبني الGrowth Machine لمشروعك؟
</h2>
<p className='text-neutral-500'>متاح كل اشكال الدفع
</p>
</div>

<div className="payment-img text-center">
    <img src="/imgs/payment-methods.png" className='md:w-2/5 w-full mx-auto shadow-md mt-4 mb-6' alt="" />
    <span><AiOutlineSafety className='inline text-xl' /> الدفع آمن ومشفر بالكامل</span>
</div>

      </div>

    
   </section>
  )
}
