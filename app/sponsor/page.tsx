'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const TYPES = [
  { id:'student', label:'Sponsor a Student', color:'#C1502E', img:'/images/sponsor/book-project-bb.jpg',
    annual:'LKR 33,000 (primary/secondary)', alt:'LKR 39,600 (university)', monthly:'LKR 2,500 / 3,000',
    desc:'The annual sponsorship for a primary or secondary student is LKR 33,000 while for a university student it is LKR 39,600, both inclusive of the 10% admin fee. Sponsorships are for a minimum period of one year.',
    form:'/documents/forms/Education-Form.pdf' },
  { id:'patient', label:'Sponsor a Patient', color:'#8B6FAB', img:'/images/sponsor/hospital-projectbb.jpg',
    annual:'LKR 39,600', alt:'incl. 10% admin fee', monthly:'LKR 3,000',
    desc:'The annual sponsorship is LKR 39,600 inclusive of the 10% admin fee introduced from July 2022. A supplement of medicinal and nutritional items based on the recommendation of the doctor is made available every month to the value of LKR 3,000.',
    form:'/documents/forms/sponser_detail_updated.pdf' },
  { id:'family', label:'Sponsor a Family', color:'#E8973A', img:'/images/sponsor/food-bb.jpg',
    annual:'LKR 52,800', alt:'incl. 10% admin fee', monthly:'LKR 4,000',
    desc:'The annual sponsorship is LKR 52,800 inclusive of the 10% admin fee. From April 2024, CandleAid disburses LKR 4,000 per month to beneficiary families. Two months prior to expiry, CandleAid will send a renewal notice.',
    form:'/documents/forms/Sponsor Details form.pdf' },
];

const REMITTANCE = ['Credit Card','Draft','Cheque','TT','Standing Order','Other'];
const FREQUENCY = ['Quarterly','Bi-Annually','Annually'];

export default function Page() {
  const [active, setActive] = useState('student');
  const [remit, setRemit] = useState('');
  const [freq, setFreq] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const prog = TYPES.find(t=>t.id===active)!;

  return (<>
    <PageHero eyebrow="Get Involved" title="Be a Sponsor" subtitle="Choose to make a lasting difference in someone's life — for a student, a patient, or a family." breadcrumbs={[{label:'Home',href:'/'},{label:'Be a Sponsor'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Tab selector */}
        <div className="flex border-b-2 border-[#EDE0CC] mb-12 overflow-x-auto" id="student">
          {TYPES.map(t=>(<button key={t.id} id={t.id} onClick={()=>{setActive(t.id);setSubmitted(false);}} className="bg-transparent border-none cursor-pointer px-8 py-4 nunito whitespace-nowrap transition-all -mb-0.5" style={{borderBottom:`3px solid ${active===t.id?t.color:'transparent'}`,fontWeight:active===t.id?800:600,color:active===t.id?'#2C1A0E':'#8C6845',fontSize:'0.95rem'}}>{t.label}</button>))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <Image src={prog.img} alt={prog.label} width={700} height={400} className="w-full rounded-lg shadow-md mb-8 object-cover" style={{height:260}} quality={85}/>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-[#FDF8F0] border border-[#EDE0CC] p-5 rounded-lg text-center">
                <div className="lora font-bold text-[#2C1A0E] text-[1.5rem]">{prog.annual}</div>
                <div className="nunito text-[0.75rem] text-[#8C6845] mt-1">Annual sponsorship</div>
              </div>
              <div className="flex-1 bg-[#FDF8F0] border border-[#EDE0CC] p-5 rounded-lg text-center">
                <div className="lora font-bold text-[#2C1A0E] text-[1.5rem]">{prog.monthly}</div>
                <div className="nunito text-[0.75rem] text-[#8C6845] mt-1">Monthly disbursement</div>
              </div>
            </div>
            <p className="nunito text-[0.97rem] text-[#5C3D25] leading-[1.9] mb-6 font-light">{prog.desc}</p>
            <a href={prog.form} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 nunito font-bold text-[0.9rem] px-5 py-2.5 border-[1.5px] border-[#C4A882] text-[#5C3D25] rounded hover:border-[#C1502E] hover:text-[#C1502E] transition-all no-underline">📄 Download Sponsorship Form</a>
          </div>

          {/* Form */}
          <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-10 rounded-xl shadow-sm">
            <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-6">Online Sponsorship Form</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="lora font-bold text-green-800 text-[1.1rem] mb-1">Thank you!</div>
                <div className="nunito text-[0.9rem] text-green-700">Your sponsorship enquiry has been submitted. CandleAid will be in touch shortly.</div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div><label className="nunito font-bold text-[0.78rem] tracking-[0.06em] uppercase text-[#8C6845] mb-1.5 block">Your Full Name</label><input type="text" className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors bg-white"/></div>
                <div><label className="nunito font-bold text-[0.78rem] tracking-[0.06em] uppercase text-[#8C6845] mb-1.5 block">Email Address</label><input type="email" className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors bg-white"/></div>
                <div><label className="nunito font-bold text-[0.78rem] tracking-[0.06em] uppercase text-[#8C6845] mb-2 block">Nature of Remittance</label>
                  <div className="flex flex-wrap gap-2">{REMITTANCE.map(r=>(<button key={r} onClick={()=>setRemit(r)} className="nunito font-semibold text-[0.82rem] px-3 py-1.5 rounded border cursor-pointer transition-all" style={{borderColor:remit===r?prog.color:'#EDE0CC',background:remit===r?prog.color:'white',color:remit===r?'white':'#5C3D25'}}>{r}</button>))}</div>
                </div>
                <div><label className="nunito font-bold text-[0.78rem] tracking-[0.06em] uppercase text-[#8C6845] mb-2 block">Frequency of Remittance</label>
                  <div className="flex flex-wrap gap-2">{FREQUENCY.map(f=>(<button key={f} onClick={()=>setFreq(f)} className="nunito font-semibold text-[0.82rem] px-3 py-1.5 rounded border cursor-pointer transition-all" style={{borderColor:freq===f?prog.color:'#EDE0CC',background:freq===f?prog.color:'white',color:freq===f?'white':'#5C3D25'}}>{f}</button>))}</div>
                </div>
                <div><label className="nunito font-bold text-[0.78rem] tracking-[0.06em] uppercase text-[#8C6845] mb-1.5 block">Additional Message (optional)</label><textarea rows={3} className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors resize-none bg-white"/></div>
                <button onClick={()=>setSubmitted(true)} className="w-full py-3.5 nunito font-extrabold text-white rounded cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5" style={{background:`linear-gradient(135deg,${prog.color},${prog.color}cc)`,boxShadow:`0 4px 16px ${prog.color}40`}}>Submit Sponsorship Enquiry</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  </>);
}
