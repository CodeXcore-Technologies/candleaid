import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Cancer Patients Assistance Programme' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Health Programme" title="Cancer Patients Assistance Programme" subtitle="Supporting cancer patients who cannot afford treatment — because illness should never be a death sentence." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Cancer Assistance'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <Image src="/images/programmes/canser.jpg" alt="Cancer Patients Assistance" width={600} height={450} className="w-full rounded-lg shadow-md" quality={85}/>
        </div>
        <div>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">This programme commenced in 2001 with five sponsorships from a USA based voluntary organization granted to five child patients.</p>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">Patients are generally recommended by doctors at Apeksha Hospital, Maharagama. On completion of a screening procedure, qualifying patients are placed on the waiting list and notified when sponsorships become available.</p>
          <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">CandleAid will disburse <strong className="font-bold text-[#C1502E]">LKR 4,000</strong> to patients every month to purchase supplements of medicinal and nutritional items based on the doctor&apos;s recommendation.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#8B6FAB] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Sponsorship Terms</h3>
          <ul className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.9] font-light space-y-2">
            <li>• Minimum sponsorship period: one year</li>
            <li>• Annual sponsorship: <strong className="font-bold text-[#8B6FAB]">LKR 39,600</strong> (incl. 10% admin fee)</li>
            <li>• Monthly disbursement to patient: LKR 3,000</li>
            <li>• Donations can be made quarterly, bi-annually or annually</li>
          </ul>
        </div>
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">How It Works</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">CandleAid makes available to each sponsor the details of the patient receiving their sponsorship. A thank you letter from the patient is sent to each sponsor in October every year. Each patient nominates a non-related coordinator who ensures proper use of funds.</p>
        </div>
      </div>
      <div className="bg-[#F2E8D5] border-l-4 border-[#8B6FAB] p-6 rounded-r-lg mb-8">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.2rem] mb-3">Forms For Cancer Patients</h3>
        <div className="flex flex-wrap gap-3">
          {[['ACF 30 Form','/documents/forms/Health-ACF-30-(3)-19.04.2024.pdf'],['Annual Thank You Letter','/documents/forms/Cancer-TYL-format.pdf']].map(([l,h])=>(<a key={l} href={h} target="_blank" rel="noreferrer" className="nunito font-bold text-[0.82rem] px-4 py-2 bg-white border border-[#C4A882] text-[#8B6FAB] rounded hover:bg-[#8B6FAB] hover:text-white transition-all no-underline">📄 {l}</a>))}
        </div>
      </div>
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.2rem] mb-4">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 nunito text-[0.88rem] text-[#5C3D25]">
          <div><div className="font-bold text-[#2C1A0E]">Head – Health Programme</div><div>Ms. Rukmal Silva</div><a href="mailto:Head_Health@candleaid.org" className="text-[#C1502E] text-[0.8rem]">Head_Health@candleaid.org</a></div>
          <div><div className="font-bold text-[#2C1A0E]">International Coordinator</div><div>Mrs. Sabine Dias</div><a href="mailto:sabine.cad2@gmail.com" className="text-[#C1502E] text-[0.8rem]">sabine.cad2@gmail.com</a></div>
          <div><div className="font-bold text-[#2C1A0E]">Project Assistant</div><div>Ms. Chamila Mendis</div><a href="mailto:health@candleaid.org" className="text-[#C1502E] text-[0.8rem]">health@candleaid.org</a></div>
        </div>
      </div>
    </div></section>
  </>);
}
