import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Education Sponsorship' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Education Programme" title="Education Sponsorship" subtitle="Giving financial help to students who deserve assistance, regardless of their family's circumstances." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Education Sponsorship'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <Image src="/images/programmes/Education-Success.jpg" alt="Education Sponsorship" width={600} height={450} className="w-full rounded-lg shadow-md" quality={85}/>
        </div>
        <div>
          <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-4">Objective</h2>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-6 font-light">The purpose of the project is to give financial help to poor students who deserve assistance.</p>
          <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-4">Selection of Students</h2>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-4 font-light">Students who apply for sponsorship are screened through a laid down procedure to determine their eligibility. CandleAid takes into account a student's academic history, current progress, financial circumstances of the family and parental commitment.</p>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">On completion of all administrative formalities, CandleAid links the student to a sponsor. All relevant details of the student and photograph are made available to the sponsor. CandleAid also encourages and facilitates interaction between the sponsor and the student.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Sponsorship Terms</h3>
          <ul className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.9] font-light space-y-2">
            <li>• Annual sponsorship for primary/secondary student: <strong className="font-bold text-[#C1502E]">LKR 33,000</strong></li>
            <li>• Annual sponsorship for university student: <strong className="font-bold text-[#C1502E]">LKR 39,600</strong></li>
            <li>• Monthly disbursement (primary/secondary): LKR 2,500</li>
            <li>• Monthly disbursement (university): LKR 3,000</li>
            <li>• Both amounts inclusive of 10% admin fee</li>
          </ul>
        </div>
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Renewal & Termination</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.9] font-light">Sponsors have the choice of continuing after one year on receipt of the renewal notice. Sponsorships are terminated when students complete their GCE A/Levels, university degrees, or cease formal education.</p>
        </div>
      </div>
      <div className="bg-[#F2E8D5] border-l-4 border-[#C1502E] p-8 rounded-r-lg mb-10">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Forms For Students</h3>
        <p className="nunito text-[0.9rem] text-[#5C3D25] mb-4 font-light">Please submit these forms after commencement of your sponsorship. Email to <a href="mailto:candleaid.inco@gmail.com" className="text-[#C1502E] underline">candleaid.inco@gmail.com</a></p>
        <div className="flex flex-wrap gap-3">
          {[['AE60 Form - Pre-University','/documents/forms/AE 60 form Pre University - 2026.pdf'],['AE60 Form - University','/documents/forms/AE60 Form - University Students - 2026.pdf'],['Annual Thank You Letter','/documents/forms/Annual-Thank-You-Letter-Education-Programme.pdf'],['AE50 Form - Acknowledgement','/documents/forms/AE50-Form-NEW.pdf']].map(([l,h])=>(<a key={l} href={h} target="_blank" rel="noreferrer" className="nunito font-bold text-[0.82rem] px-4 py-2 bg-white border border-[#C4A882] text-[#C1502E] rounded hover:bg-[#C1502E] hover:text-white hover:border-[#C1502E] transition-all no-underline">📄 {l}</a>))}
        </div>
      </div>
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 nunito text-[0.9rem] text-[#5C3D25]">
          <div><div className="font-bold text-[#2C1A0E]">Director In Charge</div><div>Mrs. Dil Jayawardena</div></div>
          <div><div className="font-bold text-[#2C1A0E]">Head – Education Programme</div><div>Mrs. Cheryll Seneviratne</div></div>
        </div>
      </div>
    </div></section>
  </>);
}
