import React from "react";
import style from "./blog1.module.css";
export default function Blog1() {
  return (
    <section className="md:py-30 pt-30 pb-15 " dir="rtl">
      <div className="mx-auto md:px-14 px-7 text-white ">
        <div className="content-blog text-white">
          <div className="title text-center text-2xl pb-10">
            <h2>
              لامؤخذة يطلع ايه التسويق الرقمي ده؟ او كما يسمى الـ{" "}
              <span className="text-[#FFA300]">Digital Marketing؟</span>
            </h2>
          </div>
          <div className={`${style.img} img`}></div>
          <div className="content">
            <p className="mb-3 mt-10">
              التسويق الرقمي ببساطة هو إنك تبيع وتسوق حاجتك باستخدام الإنترنت…
              يعني بدل ما تنزل الشارع وتزعق "ان معاك بكسرات للبيع!"، لأ، دلوقتي
              بتعمل بوست على إنستجرام أو إعلان بيظهر للي قاعد بيشرب بياكل بطيخ
              في الحر ده.
            </p>
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
              طب تاخد معلومة؟
            </h2>
            <p>
              التسويق الرقمي هو نفس التسويق اللي في الكتب، بس ميكناه لمؤخذة يعني
              خلناه مميكن. نفس القواعد بتاعت (اعرف عميلك، اعرض عليه حاجة تحل
              مشكلته، وخليه ينبهر بيك ويشتري من غير مجهود)
            </p>
            <p>
              شوف لو كتبت التلت حاجات دول في ورقه وفضلت تبص عليها هتوصل صدقني.
              بدل ما هنروح هنطلعلهم
            </p>
            <div className="section">
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
              يعني بدل ما تروحلهم، إنت خليك ذكي واطلعلهم على:
            </h2>
            <ul className="list-disc px-7">
              <li className="mb-2 "> الفيسبوك</li>
              <li className="mb-2"> انستجرام</li>
              <li className="mb-2"> جوجل</li>
              <li className="mb-2"> اليوتيوب</li>
              <li className="mb-2">اي مكان تعرف لامؤخذة تطلع منه اطلع</li>
            </ul>
            </div>
                        <div className="section">
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
              الناس بقت تدور على كل حاجة أونلاين كل حاجة حرفية انا لسه شايف حد
              بيدور على كلبة دوبر نتاية للكلب بتاعة انت متخيل وصلنا لفين؟
            </h2>
            <p>وطلاما ما دخلنا في الكلاب الدوبر كدا يبقا الموضوع كبير!</p>
            <p>أيوه…بس الي جي ده مش هتلاقيه موجود في مكان تاني غير هنا.</p>
            <p>طول الكلام الي جي هنعتبر ان التسويق = مطبخ والكامبين = اكلة.</p>
            <p>
          
              وزي ما أي مطبخ مليان أدوات، التسويق الرقمي : أدواته كتير… بس مش
              لازم تستخدمهم كلهم مرة واحدة.
            </p>
</div>
            <div className="section">
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
              كل أداة ليها استخدام:
            </h2>
            <ul className="list-disc px-7">
              <li className="mb-2 "> ادوات المحتوى</li>
              <li className="mb-2"> ادوات السوشيال ميديا</li>
              <li className="mb-2"> ادوات الـSEO</li>
              <li className="mb-2"> الإعلانات</li>
              <li className="mb-2">الإيميلات</li>
              <li className="mb-2">
                اعرفهم بس دلوقتي وبعدين خلينا نتكلم فيهم بعدين على رواقة.
              </li>
            </ul>
            </div>
            <p className="text-left mt-7">#اتعلم_التسويق_من_الصفر</p>
          </div>
        </div>
      </div>
    </section>
  );
}
