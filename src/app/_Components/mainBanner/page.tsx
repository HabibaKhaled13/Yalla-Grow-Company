import React from "react";
import styles from "./mainBanner.module.css";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";



export default function MainBanner() {
  return (
    <section className={`w-full md:h-screen h-[50vh] ${styles.banner}`}>
      <div className=" flex justify-center flex-col text-white h-screen  md:px-14 px-7">
        <div className="text">
        <h1 className="md:text-6xl text-5xl uppercase mt-16  font-bold">Your <span className="text-[#FEA200]">Gateway <br /> </span>to the future
         </h1>
<p className="py-5 md:w-[39%]">We turn your vision into momentum that pushes your business further, one smart move at a time.
</p>
      </div>

<div className="btn text-[#f9a004] font-bold ms-auto text-xl ">
  <Link href="https://wa.me/201552599703" className="flex items-center "><FaLongArrowAltLeft  className="mt-3 me-2"/>
تعالي نرغي
</Link>
</div>
</div>

      <div   className={`glow ${styles.glow}`}
      
      ></div>
      <div
  className={`spark ${styles.spark}`}
        style={{ top: "50%", left: "50%", animationDelay: "0s" }}
      ></div>

      <div
        className={`spark ${styles.spark}`}
        style={{ top: "52%", left: "48%", animationDelay: "1s" }}
      ></div>

      <div
  className={`spark ${styles.spark}`}
        style={{ top: "55%", left: "51%", animationDelay: "2s" }}
      ></div>
    </section>
  );
}
