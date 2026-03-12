import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Gift A Meal Programme' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Food Programme" title="Gift A Meal Project" subtitle="Supporting low-income families with a monthly food subsistence — because no family should go to bed hungry." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Gift A Meal'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1000px] mx-auto">
      <Image src="/images/programmes/landscape-1449689348-crt7klzxaaaz75c.jpg" alt="Gift A Meal" width={1000} height={420} className="w-full rounded-lg shadow-md mb-12 object-cover" style={{maxHeight:420}} quality={85}/>
      <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-8 font-light">CandleAid assists low-income families by supporting them under its Food Programme, giving them a monthly subsistence of <strong className="font-bold text-[#C1502E]">LKR 4,000</strong> by enrolling them in the GAM program. At any given time, we have about 200 such families — reaching approximately 800 people.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Selection of Beneficiaries</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">Recipients are selected through a laid down procedure irrespective of race or religion. After assessing financial circumstances, preference is given to families with children. A coordinator monitors each family and reports any changes to CandleAid.</p>
        </div>
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Sponsorship Terms</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">Minimum period of sponsorship is one year. The sponsor has discretion to renew thereafter. Total annual commitment is <strong className="font-bold text-[#C1502E]">LKR 52,800</strong> inclusive of the 10% admin fee.</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-8">Statistics as at 31st December 2025</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['887','Families enrolled since inception'],['132','Current families'],['85','Current sponsors'],['111','Current coordinators']].map(([n,l])=>(<div key={n} className="bg-[#FDF8F0] border border-[#EDE0CC] p-6 rounded-lg text-center"><div className="lora font-bold text-[#C1502E] text-[2.2rem]">{n}</div><div className="nunito text-[0.8rem] text-[#8C6845] mt-1">{l}</div></div>))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Mrs Gunaseelan Jeyasaritha – Kayts, Jaffna</h3>
          <Image src="/images/programmes/family01.jpg" alt="Family story" width={500} height={200} className="w-full rounded-lg mb-4 object-cover" style={{height:200}} quality={85}/>
          <p className="nunito text-[0.92rem] text-[#5C3D25] leading-[1.85] font-light">Mrs. Jeyasaritha is a widowed mother of three daughters. Her husband passed away in April 2020. She works as a casual labourer earning approximately LKR 1,500 per day. Her two younger daughters study in Grades 09 and 07. She continues to work tirelessly to support her children and secure a better future for them.</p>
        </div>
        <div>
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Mrs H. G. Sumali – Habarana, Anuradhapura</h3>
          <Image src="/images/programmes/family02.jpg" alt="Family story" width={500} height={200} className="w-full rounded-lg mb-4 object-cover" style={{height:200}} quality={85}/>
          <p className="nunito text-[0.92rem] text-[#5C3D25] leading-[1.85] font-light">Mrs. Sumali&apos;s husband met with a serious accident resulting in paralysis. She is unable to work as she must provide full-time care. Her daughter is in Grade 10 and her son in Grade 05. CandleAid has them in the Gift-A-Meal program and continues to look for ways to help them more.</p>
        </div>
      </div>
      <div className="bg-[#F2E8D5] border-l-4 border-[#E8973A] p-6 rounded-r-lg mb-8">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.2rem] mb-3">Forms For Families</h3>
        <div className="flex flex-wrap gap-3">
          {[['AFS70 Form','/documents/forms/AFS 70  Form - Updated.pdf'],['Instruction Letter','/documents/forms/Instruction Letter.pdf'],['Annual Thank You Letter','/documents/forms/AnnualThank-You-Letter.pdf'],['GAM Overview','/documents/forms/GAM Overview.pdf']].map(([l,h])=>(<a key={l} href={h} target="_blank" rel="noreferrer" className="nunito font-bold text-[0.82rem] px-4 py-2 bg-white border border-[#C4A882] text-[#C1502E] rounded hover:bg-[#C1502E] hover:text-white transition-all no-underline">📄 {l}</a>))}
        </div>
      </div>
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.2rem] mb-4">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 nunito text-[0.88rem] text-[#5C3D25]">
          <div><div className="font-bold text-[#2C1A0E]">Director In Charge</div><div>Mrs. Yasmin Weerasuriya</div><a href="mailto:candleaid.food@gmail.com" className="text-[#C1502E] text-[0.8rem]">candleaid.food@gmail.com</a></div>
          <div><div className="font-bold text-[#2C1A0E]">Head of Food Programme</div><div>Mrs Savindranie Perera</div></div>
          <div><div className="font-bold text-[#2C1A0E]">Project Assistant</div><div>Ms Devinka Fernando</div><a href="mailto:food@candleaid.org" className="text-[#C1502E] text-[0.8rem]">food@candleaid.org</a></div>
        </div>
      </div>
    </div></section>
  </>);
}
