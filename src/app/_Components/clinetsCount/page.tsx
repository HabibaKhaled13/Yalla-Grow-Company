"use client";
import React from "react";
import CountUp from "react-countup";

export default function ClientsCount() {
  return (
    <>
      <section className="py-10 md:pt-30 md:pb-15">
        <div className="mx-auto md:px-14 px-7 ">
          <div className=" flex justify-between flex-wrap md:gap-y-0 gap-y-6">
            <div className="md:w-[23%] w-full text-center">
              <h2 className="md:text-[70px] lg:text-[100px] text-7xl text-transparent [-webkit-text-stroke:2px_#f9a004] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={300}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                    scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-white mt-4 text-xl font-semibold ">Projects</p>
            </div>
            <div className="md:w-[23%] w-full text-center">
              <h2 className="md:text-[70px] lg:text-[100px] text-7xl text-transparent [-webkit-text-stroke:2px_#f9a004] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={42}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-white mt-4 text-xl font-semibold ">Human</p>
            </div>
            <div className="md:w-[23%] w-full text-center">
              <h2 className="md:text-[70px] lg:text-[100px] text-7xl text-transparent [-webkit-text-stroke:2px_#f9a004] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={5}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-white mt-4 text-xl font-semibold ">Years</p>
            </div>
            <div className="md:w-[23%] w-full text-center">
              <h2 className="md:text-[70px] lg:text-[100px] text-7xl text-transparent [-webkit-text-stroke:2px_#f9a004] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={15}
                  duration={3}
                  suffix="k+"
                 enableScrollSpy
                 scrollSpyOnce
  
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-white mt-4 text-xl font-semibold ">
                Cup of Coffee
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
