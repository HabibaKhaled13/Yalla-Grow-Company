import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  return (
<>
<section className='md:hidden'>


<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1a1a1a]  ">
    <div className="h-full justify-around flex mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
        <Link href="/">
           <img src="/imgs/home-icon.png" className='w-6 mx-auto mb-1'alt="" />
            <span className="text-sm text-neutral-400   ">Home</span>
            </Link>
        </button>

    
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                         <Link href="/courses">

                    <img src="/imgs/icon-course.png" className='w-6 mx-auto mb-1 'alt="" />

            <span className="text-sm text-neutral-400   ">Courses</span>
            </Link>
        </button>
     <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                         <Link href="/blogs">

                    <img src="/imgs/icon-blogs.png" className='w-6 mx-auto mb-1 'alt="" />

            <span className="text-sm text-neutral-400   ">Blogs</span>
            </Link>
        </button>
           <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                        <Link href="/contact">
                      <img src="/imgs/icon-contact.png" className='w-6 mx-auto mb-1'alt="" />

            <span className="text-sm text-neutral-400   ">Contact </span>
            </Link>
        </button>
    </div>
</div>

</section>

</>
  )
}
