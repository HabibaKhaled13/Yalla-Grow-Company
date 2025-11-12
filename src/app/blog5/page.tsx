import React from "react";
import style from "./blog5.module.css";
export default function Blog5() {
  return (
    <section className="md:py-30 pt-30 pb-15 " dir="rtl">
      <div className="mx-auto md:px-14 px-7 text-white ">
        <div className="content-blog text-white">
          <div className="title text-center text-2xl pb-10">
            <h2>
              التسويق من الصفر
              <span className="text-[#FFA300]"> الــ Engagement</span>
            </h2>
          </div>
          <div className={`${style.img} img`}></div>
          <div className="content">
            <p className="mb-3 mt-10">
              في غلطة مهمة جدا ممكن تلاقي نفسك بتقع فيها.
            </p>
            <p>
              تخيل معايا انك متجوز جديد ومعاك يجي عوشرميت الف مثلا وعاوز تقضى
              شهر عسل حلو علشان مراتك تقلك يا ميتو شبه الحج متولي.
            </p>
            <p> لكن هنا فيه تحدّي انك خايف تضيع العوشرميت الف دول</p>
            <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
              ودخلت على شركة البطة المرتاحة للنقل والسياحة المشهوره ووثقت فيهم؟
            </h2>
            <h3 className="text-[#FFA300] text-lg mt-5 mb-3">
              تعالى بقا نشوف الشركة دي عملت ايه زمان؟
            </h3>
            <p>بدأت تحكي، تشارك، وتضحّك.</p>
            <p>عملت محتوى تعليمي لطيف</p>
            <p>"إزاي تسافر جمصة بالتوكتوك؟</p>
            <p> انت اتفرجت، وعملت لايك، وبعدين سألت سؤال:</p>
            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                هي جمصة بالتكوتوك دي تنفع للعريس؟
              </h2>
              <p> الشركة ردّت وقالت رحلات مخصصة للعروسين</p>
              <p>وهكذا بقا </p>
              <p>
                تخيل اننا في المرحلة دي كل همنا نخلق حوار وهمي واجابة لإي تسائل
                ممكن يجي في ذهن العميل:-
              </p>
              <p>
                طيب ايه الغلطة الي بيقع فيها معظم الناس انك سعات بتكون عاوز تقيس
                المرحلة دي بلاك وكومنت بس{" "}
              </p>
              <p>مع انك ممكن تقيسها برسايل او تقيسها بمشاهدات بتزيد</p>
              <p>
                الناس ممكن تكون بتتفاعل معاك بانها دخلت تكلمك في الرسايل تستفسر
                علشان مش عاوزه تتفاعل معك في الكومنتات لاسباب خاصة
              </p>
              <p>
                ذي مثلا دكاترة النفـ=خ اكيد مش اي حد هيحب يتواصل معاهم في
                الكومنتات
              </p>
            </div>

            <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
                ايه بقا الوسائل الي تحطها في البلان بتاعك علشان نتفاعل مع الناس؟
              </h2>
              <ul className="list-disc px-7">
                <li className="mb-2 "> فيديوهات تعليمية</li>
                <li className="mb-2">
                  {" "}
                  اميلات فيها نصايح لو المجال بتاعك ينفع فيه ده
                </li>
                <li className="mb-2"> ادوات الـSEO</li>
                <li className="mb-2"> استوري كلها تفاعل</li>
              </ul>
            </div>
               <div className="section">
              <h2 className="text-[#FFA300] text-xl mt-5 mb-3">
طيب هو ايه أنواع التفاعل؟
              </h2>
              <p>سؤال جامد على فكره
</p>
              <ul className="list-disc px-7">
                <li className="mb-2 "> تعليمي</li>
                <li className="mb-2">
                 عاطفي
                </li>
                <li className="mb-2"> تفاعل مباشر
</li>
      
              </ul>
              <p>الي هو قلنا طفحت ايه انهارده وكدا
</p>
            </div>
            <p className="text-left mt-7">#اعمل ميكس بين ال٣ حاجات دي وتوكل على الله.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
