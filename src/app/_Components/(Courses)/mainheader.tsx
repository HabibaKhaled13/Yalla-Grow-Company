import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { PiRocketLaunch } from "react-icons/pi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { GrAd } from "react-icons/gr";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


export default function MainHeader() {
  return (
    <section className="w-full md:min-h-screen pt-20 text-white bg-[#1A2332]">
      <div className="md:px-14 px-7 ">
        <div className="flex justify-between flex-wrap items-center h-auto  md:h-screen">
          <div className="text md:w-[50%] w-full">
            <span>لكل ما هو </span>
            <h1 className="text-3xl md:text-4xl mb-6 mt-3 uppercase font-bold">
              Senior Content Creator & Senior Copy Writer
            </h1>
            <p className="text-[15px] mb-2">
              او في المستوى المتوسط وعاوز يوصل لخطوة ابعد. في ورشة{" "}
              <span className="text-[#FFA300] font-semibold">
                لمدة شهرين 16 محاضرة على مدار شهرين{" "}
              </span>
              . معمولة علشان نجدد ونحسن ونعرف طرق جديدة في التفكير والتحليل
            </p>
            <p className="text-[15px]">
              الورشة دي حقيقي كانت سبب بفضل ربنا انها تنقل ناس من مرتبات ضعيفة
              لمرتبات مختلفة تمام ومستوى مختلف من العملاء.
            </p>
            <div className="icons flex gap-x-1 text-3xl mt-5"> 
 <PiRocketLaunch /><HiArrowTrendingUp /><MdOutlineSignalCellularAlt /><GrAd />
            </div>

           <Link href="https://wa.me/201552599703" className=' px-5 inline-block py-3 bg-[#FFA300] text-white text-center text-sm shadow-lg rounded-lg my-6' >
احصل علي النظام الآن<FaArrowRight className='inline text-lg me-1' /> </Link>



          </div>
          <div className="offer md:w-[45%] w-full mb-8 mt-3 bg-[#404A53] shadow-2xl rounded-2xl md:p-8 p-4">
            <span className="bg-[#FFA300] block p-2 rounded-sm">
              الورشة دي حقيقي فيها خلاصة علم وتجارب كثيرة جدا (مش هيكون فيها
              اساسيات)
            </span>
            <ul className="mt-6 text-[15px]">
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Customer Retention Strategy
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                CFeedback Machine Building{" "}
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Acquisition Strategy Conversion
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Copywriting Strategy
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Product Positioning
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Growth Funnels
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Hooks & Loops{" "}
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Converting Offers Strategy
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Writing and Design (Landing Page)
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Psychological and Behavioral Tools{" "}
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Conversion Emails Marketing
              </li>
              <li className="mb-1">
                <FaCircleCheck className="inline ms-2" />
                Market Yourself & Portfolio
              </li>
              <li className="mb-3">
                <FaCircleCheck className="inline ms-2" />
                First Client
              </li>
            </ul>
            <p className="text-[15px]">
              ده بشكل مختصر مواضيع المحاضرات الي هنتعلمها سوا{" "}
              <span className="text-[#FFA300]">في الورشة دي.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
