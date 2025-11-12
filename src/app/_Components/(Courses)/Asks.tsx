import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Asks() {
  return (
    <>
  <section className='bg-white py-10'>
        <div className="md:px-14 px-7 text-center ">
                    <div className="title text-center pb-7">
  <h2 className='text-3xl font-semibold  pt-8 pb-3'>الأسئلة الشائعة

</h2>
<p className='text-neutral-500'>إليك إجابات على الأسئلة الأكثر شيوعاً


</p>
</div>

    <Accordion
      type="single"
      collapsible
      className="md:w-[80%] w-full mx-auto"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger  className="text-[17px] font-semibold">هل النظام ده مناسب لو أنا لسه مبتدئ؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
           
طبعاً. النظام مصمم للجميع من المبتدئين إلى المحترفين. كل منتج يبدأ من الأساسيات ويتدرج للمستويات المتقدمة، والمساعدات الذكية تساعدك خطوة بخطوة.
          </p>
   
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[17px] font-semibold">هل النظام ينفع لأي نوع بزنس؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
           أيوة، النظام يغطي SaaS والتطبيقات المتنقلة والتجارة الإلكترونية والخدمات وحتى المشاريع التقليدية. الاستراتيجيات قابلة للتكيف مع أي مجال.
          </p>
      
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[17px] font-semibold">هل في دعم أو تواصل لو عندي أسئلة؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
       نعم، تحصل على دعم مباشر لمدة 6 أشهر، وصول للمجتمع الحصري، والمساعدات الذكية متاحة 24/7 للإجابة على أسئلتك.
          </p>
   
        </AccordionContent>
      </AccordionItem>
          <AccordionItem value="item-4">
        <AccordionTrigger className="text-[17px] font-semibold">المحتوى كله بالعربي ولا فيه إنجليزي؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
المحتوى الأساسي باللغة الإنجليزية، لكن يتوفر دعم باللغة العربية ومجتمع عربي للنقاش والاستفسارات، والمساعدات الذكية تفهم وترد بالعربي.          </p>
   
        </AccordionContent>
      </AccordionItem>
                <AccordionItem value="item-5">
        <AccordionTrigger className="text-[17px] font-semibold">إزاي هستفيد من القوالب والداشبود؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
القوالب جاهزة للتطبيق الفوري - تقدر تفتحها وتعدل عليها حسب مشروعك. الداشبود في Notion تفاعلي وسهل الاستخدام، وفيه دليل كامل للتطبيق. </p>   
        </AccordionContent>
      </AccordionItem>
                    <AccordionItem value="item-6">
        <AccordionTrigger className="text-[17px] font-semibold">هل في تحديثات أو محتوى بعد الشراء؟</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-start pe-7 text-neutral-700">
          <p>
طبعاً. هيوصلك تحديثات مستمرة فيها منتجات جديدة، أدوات ذكاء اصطناعي متطورة، واستراتيجيات متقدمة – كلها مجانية مدى الحياة.
 </p>   
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </section>
    </>
  )
}
