'use client';
import { useState } from 'react';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  return (<>
    <PageHero eyebrow="Get In Touch" title="Contact Us" subtitle="We'd love to hear from you — whether you want to donate, sponsor, volunteer, or just learn more." breadcrumbs={[{label:'Home',href:'/'},{label:'Contact Us'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info */}
        <div>
          <h2 className="lora font-bold text-[#2C1A0E] text-[1.5rem] mb-6">CandleAid Lanka</h2>
          <div className="flex flex-col gap-6">
            {[
              { icon:'📍', label:'Address', value:'21/4 Dharmaratne Avenue, Rawathawatte, Moratuwa, Sri Lanka', href:'https://www.google.com/maps/place/CandleAid+Lanka' },
              { icon:'📞', label:'Phone', value:'0112 642 526', href:'tel:0112642526' },
              { icon:'🕐', label:'Office Hours', value:'Monday – Friday\n8:45am – 4:45pm', href:null },
              { icon:'✉️', label:'Education', value:'candleaid.inco@gmail.com', href:'mailto:candleaid.inco@gmail.com' },
              { icon:'🍚', label:'Food Programme', value:'candleaid.food@gmail.com', href:'mailto:candleaid.food@gmail.com' },
              { icon:'🏥', label:'Health Programme', value:'health@candleaid.org', href:'mailto:health@candleaid.org' },
            ].map(item=>(<div key={item.label} className="flex gap-3">
              <div className="text-xl mt-0.5">{item.icon}</div>
              <div>
                <div className="nunito font-extrabold text-[0.7rem] tracking-[0.1em] uppercase text-[#C1502E] mb-0.5">{item.label}</div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http')?'_blank':'_self'} rel="noreferrer" className="nunito text-[0.9rem] text-[#5C3D25] hover:text-[#C1502E] transition-colors" style={{whiteSpace:'pre-line'}}>{item.value}</a>
                ) : (
                  <div className="nunito text-[0.9rem] text-[#5C3D25]" style={{whiteSpace:'pre-line'}}>{item.value}</div>
                )}
              </div>
            </div>))}
          </div>
          <div className="mt-8 pt-8 border-t border-[#EDE0CC]">
            <a href="https://www.google.com/maps/place/CandleAid+Lanka" target="_blank" rel="noreferrer" className="inline-block bg-[#2C1A0E] hover:bg-[#C1502E] text-white nunito font-bold text-[0.85rem] px-5 py-2.5 rounded transition-colors no-underline">📍 View on Google Maps</a>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-[#FDF8F0] border border-[#EDE0CC] p-10 rounded-xl shadow-sm">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <div className="text-5xl mb-4">🕯️</div>
              <div className="lora font-bold text-[#2C1A0E] text-[1.5rem] mb-2">Message received!</div>
              <p className="nunito text-[0.95rem] text-[#8C6845] max-w-sm leading-relaxed">Thank you for reaching out. A member of the CandleAid team will be in touch with you shortly.</p>
              <button onClick={()=>setSent(false)} className="mt-6 nunito font-bold text-[0.85rem] px-5 py-2 border-[1.5px] border-[#C4A882] text-[#5C3D25] rounded hover:border-[#C1502E] hover:text-[#C1502E] transition-all cursor-pointer bg-transparent">Send another message</button>
            </div>
          ) : (<>
            <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-6">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div><label className="nunito font-bold text-[0.75rem] tracking-[0.08em] uppercase text-[#8C6845] mb-1.5 block">Full Name</label>
                <input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors bg-white"/></div>
              <div><label className="nunito font-bold text-[0.75rem] tracking-[0.08em] uppercase text-[#8C6845] mb-1.5 block">Email Address</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors bg-white"/></div>
            </div>
            <div className="mb-4"><label className="nunito font-bold text-[0.75rem] tracking-[0.08em] uppercase text-[#8C6845] mb-1.5 block">Subject</label>
              <input type="text" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors bg-white"/></div>
            <div className="mb-6"><label className="nunito font-bold text-[0.75rem] tracking-[0.08em] uppercase text-[#8C6845] mb-1.5 block">Message</label>
              <textarea rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full px-4 py-3 border border-[#EDE0CC] rounded nunito text-[0.9rem] text-[#2C1A0E] outline-none focus:border-[#C1502E] transition-colors resize-none bg-white"/></div>
            <button onClick={()=>setSent(true)} className="w-full py-3.5 bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-extrabold text-[1rem] rounded cursor-pointer transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg">Send Message</button>
          </>)}
        </div>
      </div>
    </section>
  </>);
}
