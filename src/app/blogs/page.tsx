"use client"
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const dataForBlogs=[
  {
     id: 1,
  img:"/imgs/blog2.jpg" ,
  date:"  Our Blog . Oct 2, 2025",
  title:"لامؤخذة يطلع ايه التسويق الرقمي ده؟",
  link: "/blog1"
},
  {
       id: 2,
  img:"/imgs/blog11.jpg" ,
  date:"  Our Blog . Oct 5, 2025",
  title:" يحصل ايه لو عملت تسويق رقمي صح؟",
    link: "/blog2"

},
{
     id: 3,
  img:"/imgs/blog1.jpg" ,
  date:"  Our Blog . Oct 7, 2025",
  title:" رحلة العميل (Customer Value Journey)?",
    link: "/blog3"

},

{

     id: 4,
  img:"/imgs/blog3.jpg" ,
  date:"  Our Blog . Oct 8, 2025",
  title:" الـ Awareness",
    link: "/blog4"

},

{
     id: 5,
  img:"/imgs/blog4.jpg" ,
  date:"  Our Blog . Oct 10, 2025",
  title:" التسويق من الصفر الEngagement",
    link: "/blog5"

},
{
     id: 6,
  img:"/imgs/blog5.jpg" ,
  date:"  Our Blog . Oct 12, 2025",
  title:"الاشتراكات والتواصل",
    link: "/blog6"

},
{
     id: 7,
  img:"/imgs/blog6.jpg" ,
  date:"  Our Blog . Oct 14, 2025",
  title:"ازاي تخلي العميل يشتري منك او يدفع اكتر؟",
    link: "/blog7"

},
{
     id: 8,
  img:"/imgs/blogs7.jpg" ,
  date:"  Our Blog . Oct 16, 2025",
  title:" ازاي تخلي العملاءك Advocate؟",
    link: "/blog8"

},
{
     id: 9,
  img:"/imgs/blogs8.jpg" ,
  date:"  Our Blog . Oct 18, 2025",
  title:" تخيل توظف احسن مسوق في العالم من غير ما تدفع ليه ولا جنيه؟",
    link: "/blog9"

},{
     id: 10,
  img:"/imgs/blogs9.jpg" ,
  date:"  Our Blog . Oct 20, 2025",
  title:"كتابه الCopy",
    link: "/blog10"

},

]
const ITEMS_PER_PAGE = 6
export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataForBlogs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = dataForBlogs.slice(startIndex, endIndex);

  return (
    <>
      <section className="py-20">
        <div className="mx-auto md:px-14 px-7 text-white ">
          <div className="title flex justify-between flex-wrap  my-5 md:my-20 text-white items-start">
            <div className="md:w-1/6 w-full md:mb-0 mb-5 ">
              <h2 className="text-4xl font-bold uppercase mb-2">Blogs</h2>
              <span className="text-[#FFA300] ">محتوى يعيش ... مش يعدّي</span>
            </div>

            <div className="md:w-[70%] md:mb-0 mb-5 w-full text-neutral-300">
              <p>
              We craft blogs that spark conversations, build trust, and keep your audience coming back for more.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap ">
              {currentData.map((data) =>(
        <div key={data.id} className="md:w-[48%] lg:border-r lg:border-l border-b border-neutral-800 w-full h-[30%] overflow-hidden lg:p-10 p-3">
        
              <div className="info py-6 md:px-8  relative">
                <div className="card-img">
                  <img
                    src={data.img}
                    alt="blog"
                    className="w-[80%] mx-auto"
                  />
                </div>
                <div className="card-title bg-[#0F1014] lg:absolute -bottom-2 lg:w-1/2 py-5 px-7 -right-1 ">
                  <span className="text-xs text-neutral-400">
                   {data.date}
                  </span>

                  <h2 className="text-xl my-3 py-1 font-semibold uppercase">
              {data.title}
                  </h2>
                  <div
                    className="mt-5 border-t-neutral-500 border-t pt-3
"
                  >
                    <Link href={data.link} className="text-neutral-400 text-[15px]">
                      Read More <BsArrowUpRight className="inline" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
                ))}
    

      
          </div>
   

   <div className="mt-10">  
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setCurrentPage(prev => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          </div>
          <div className="contact text-center mt-10 md:mt-20">
            <h2 className="text-4xl font-bold uppercase mb-2">
              Start your project
            </h2>
            <span className="text-[#ffa300] text-xl ">يلا نشتغل سوا؟</span>
            <div className="md:w-[14%] mx-auto mt-5 w-full text-center rounded-full  border border-neutral-300 py-2">
              <Link href="https://wa.me/201552599703">Let's Start</Link>
            </div>
          </div>



        </div>
      </section>
    </>
  );
}
