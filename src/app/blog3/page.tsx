import React from "react";
import style from "./blog3.module.css";
export default function Blog3() {
  return (
    <section className="md:py-30 pt-30 pb-15 " dir="rtl">
      <div className="mx-auto md:px-14 px-7 text-white ">
        <div className="content-blog text-white">
          <div className="title text-center text-2xl pb-10">
            <h2>
              رحلة العميل
              <span className="text-[#FFA300]"> (Customer Value Journey) </span>
            </h2>
          </div>
          <div className={`${style.img} img`}></div>
          <div className="content">
            <p className="mb-3 mt-10">
              الدليل السحري لتحويل الناس اللي مش عارفينك لناس عارفينك عادي جدا
              أهلاً بيك في أهم حتة في التسويق الرقمي ( اهم حته بجد ركز علشان انت
              هتاخد فيها كورسات في المستقبل دي)
            </p>
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">رحلة العميل:</h2>
            <p>
              الرحلة دي مش مجرد خطوات على الورقه لأ، دي خطة وخريطة – شبه الخرايط
              الي كانت دوره بدور عليها كدا وهي قصادها – نفس الكلام احنا بنعمل
              خطة علشان نعرف ازاي هنوصل للعميل علشان منتوهش.
            </p>

            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                طيب يعني إيه "رحلة العميل" أصلاً؟
              </h2>
              <h3 className="text-[#FFA300] text-lg mt-5 mb-3">باختصار:</h3>
              <p>
                {" "}
                هي العملية اللي بيمشي فيها أي حد من أول ما يشوف اسم شركتك،(خطوة
                واحد) لحد ما يتحول لعميل دائم…
              </p>
              <p className="text-[#FFA300] text-lg mt-5 mb-3">وبس كدا لا؟</p>
              <p>هندخلة في خطوات تانية</p>
              <p>
                نخليه هو نفسه بيروّجلك ويجيبلك عملاء من غير ما تطلب منه ودي
                هنسميها (اللويالتي كاستر) اسمع دي واركنها على جمب دلوقتي.
              </p>
            </div>

            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                خد بالك، الرحلة دي مش زرار تدوس عليه وخلاص.{" "}
              </h2>
              <p>
                هي مش مرحلة واحدة… دي ٨ مراحل، كل مرحلة لها دوافع هتساعدك تزق
                الناس خطوة لقدّام. الموضوع مش إعلان واحد على فيسبوك وخلاص.
              </p>
              <p>
                ده محتاج تتعلم طريقة تفكير معينة بيسموها في بلاد الفرينجة (
                المايند سيت) mindset وده اختصارة في جملة واحدة عاوزك تحطها
                قدامك.
              </p>
              <p>
                أنا هخلّي الشخص اللي عمره ما سمع عني، يتعامل معايا كأننا صحاب من
                ١٠ سنين، ويشتري وهو مرتاح ويبقا كمان مستعجل على الطلب. ومش بس
                كدا بعد ما هيشتري هطمن عليه علشان يفضل فاكرني.
              </p>
              <p>ولو صدقت الي فوق ده اضمن ليك انك تبني براند قوي جدا.</p>
            </div>

            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                طب هو في هدف تاني او نصيحة؟
              </h2>
              <h3 className="text-[#FFA300] text-lg mt-5 mb-3">
                اه في اهداف تانية ونصايح مهمة:
              </h3>
              <p>
                انت لازم تفهم الرحلة دي كويس، علشان تقدر تصمّم كل جزء فيها علشان
                الناس تمشي فيها بشكل تلقائي شبه سلالم الكهرباء كدا يعني إيه؟
              </p>
              <p>
                شطارتك أنك تقدر تتحكم في اللي بيحصل من أول ما شافك لحد أول
                فاتورة.
              </p>
            </div>

            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                ودي اول قاعدة هنشتغل بيها هنا:
              </h2>
              <p>مش كل حاجة بيع بيع بيع.</p>
              <p>
                انا عاوز هدفك انك تمشي الناس خطوة خطوة في رحلة بهدوء وذكاء، لحد
                ما يبقوا عملاء مخلصين.
              </p>
              <p>
                فاضل بقا نتكلم عن مراحل الرحلة وتفاصيلها وهتلاقوه في البوست الي
                بعد ده على طول
              </p>
            </div>
            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                بس قبل ما نروح هنا بص على الرسمة دي كويس معلش
              </h2>
              <h3 className="text-[#FFA300] text-xl mt-5 mb-3">
                فيها ٨ مراحل:
              </h3>
              <ul className="list-disc px-7">
                <li className="mb-2 "> الوعي (AWARE)</li>
                <li className="mb-2"> التفاعل (ENGAGE)</li>
                <li className="mb-2"> الاشتراك (SUBSCRIBE)</li>
                <li className="mb-2"> التحويل (CONVERT)</li>
                <li className="mb-2">الإثارة (EXCITE)</li>
                <li className="mb-2">الصعود (ASCEND) </li>
                <li className="mb-2">الدعوة (ADVOCATE) </li>
                <li className="mb-2">الترويج (PROMOTE) </li>
              </ul>
            </div>
            <p className="text-left mt-7">#اتعلم_التسويق_من_الصفر</p>
          </div>
        </div>
      </div>
    </section>
  );
}
