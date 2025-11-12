import React from 'react'
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Blogs() {
  return (
     <section className="md:py-20 pt-15 pb-0">
        <div className="mx-auto md:px-14 px-7 text-white ">

    <div className="title justify-between flex-wrap flex text-white items-start">
        <div className="md:w-1/6 w-full  md:mb-9 mb-5 ">
       
        <h2 className='text-4xl font-bold uppercase mb-2'>Blogs</h2>
         <span className='text-[#ffa300] '>حتوى يعيش ... مش يعدّي</span>
            </div>
        
                 <div className="md:w-3/5 md:mb-0 mb-5 w-full  text-neutral-300">
                    <p>              We craft blogs that spark conversations, build trust, and keep your audience coming back for more.</p>

            </div>
        
                 <div className="lg:w-[14%] md:mb-0 mb-5 w-full bg-[#0c0c0c] text-center rounded-full text-sm border border-neutral-300 py-2">
                    
                    <Link href='/blogs'>View All Blogs</Link>

            </div>


            </div>

    

          <div className="flex flex-wrap  ">
   

   <div className="lg:w-[32%] md:w-[48%]  w-full h-[30%] overflow-hidden lg:p-3 p-3">
        
              <div className="info py-6 lg:px-8  relative">
                <div className="card-img">
                  <img
                    src="/imgs/blog2.jpg"
                    alt=""
                    className="w-full "
                  />
                </div>
                <div className="card-title bg-[#0F1014] lg:absolute -bottom-2 lg:w-[70%] py-4 px-5 -right-12 ">
                  <span className="text-xs text-neutral-400">
                    Our Blog . Oct 2, 2025
                  </span>

                  <h2 className=" my-2 py-1 font-semibold uppercase">
              
                  لامؤخذة يطلع ايه التسويق الرقمي ده؟
                  </h2>
                  <div
                    className="mt-5 border-t-neutral-500 border-t pt-2
"
                  >
                    <Link href="/blog1" className="text-neutral-400  text-sm">
                      Read More <BsArrowUpRight className="inline" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>


               <div className="lg:w-[32%] md:w-[48%]  w-full h-[30%] overflow-hidden lg:p-3 p-3">
        
              <div className="info py-6 lg:px-8  relative">
                <div className="card-img">
                  <img
                    src="/imgs/blog11.jpg"
                    alt=""
                    className="w-full "
                  />
                </div>
                <div className="card-title bg-[#0F1014] lg:absolute -bottom-2 lg:w-[70%] py-4 px-5 -right-12 ">
                  <span className="text-xs text-neutral-400">
Our Blog . Oct 5, 2025
                  </span>

                  <h2 className=" my-2 py-1 font-semibold uppercase">
              
يحصل ايه لو عملت تسويق رقمي صح؟
                  </h2>
                  <div
                    className="mt-5 border-t-neutral-500 border-t pt-2
"
                  >
                    <Link href="/blog2" className="text-neutral-400  text-sm">
                      Read More <BsArrowUpRight className="inline" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:w-[32%] md:w-[48%]  w-full h-[30%] overflow-hidden lg:p-3 p-3">
        
              <div className="info py-6 lg:px-8  relative">
                <div className="card-img">
                  <img
                    src="/imgs/blog1.jpg"
                    alt=""
                    className="w-full "
                  />
                </div>
                <div className="card-title bg-[#0F1014] lg:absolute -bottom-2 lg:w-[70%] py-4 px-5 -right-12 ">
                  <span className="text-xs text-neutral-400">
Our Blog . Oct 7, 2025
                  </span>

                  <h2 className=" my-2 py-1 font-semibold uppercase">
              
رحلة العميل (Customer Value Journey)?
                  </h2>
                  <div
                    className="mt-5 border-t-neutral-500 border-t pt-2
"
                  >
                    <Link href="/blog3" className="text-neutral-400  text-sm">
                      Read More <BsArrowUpRight className="inline" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
  )
}
