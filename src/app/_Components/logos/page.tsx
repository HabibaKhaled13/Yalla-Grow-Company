import Marquee from "react-fast-marquee";
export default function Logos() {
  return (
    <>

    <section className=" md:py-20 py-10">
         <div className="mx-auto md:px-14 px-7 ">
        <div className="text text-center py-6">
          <h2 className='text-4xl font-bold uppercase text-white'>Our Clients</h2>
          <p className='text-[#f9a004] text-xl mt-3 mb-6'>خدنا الشرف نشتغل مع</p>
        </div>
  <Marquee>
       

        <div><img src="/imgs/1.png" className="w-[150px] mx-7" alt="noon" /></div>
        <div><img src="/imgs/2.png" className="w-[150px] mx-7" alt="cib bank" /></div>
        <div><img src="/imgs/3.png" className="w-[150px] mx-7" alt="akned" /></div>
        <div><img src="/imgs/4.png" className="w-[150px] mx-7" alt="NBE" /></div>
        <div><img src="/imgs/5.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/6.svg" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/7.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/8.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/9.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/10.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/11.png" className="w-[150px] mx-7" alt="logo" /></div>
        <div><img src="/imgs/12.png" className="w-[150px] mx-7" alt="logo" /></div>
         <div><img src="/imgs/14.png" className="w-[150px] mx-7" alt="مشويات الكرز" /></div>
        <div><img src="/imgs/13.avif" className="w-[150px] mx-7" alt="logo" /></div>
       


</Marquee>
     </div>
    </section>
    </>
  );
}
