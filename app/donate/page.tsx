import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Donate' };
const methods = [
  { img:'/images/credit-wall.jpg', title:'Online Donation', icon:'💳',
    body:'Donations can be made via an electronic fund transfer to any of our bank accounts. Please add a card processing fee of 3.5% for AMEX, 2.5% for VISA or MASTERCARD.',
    cta:'Donate Now', href:'https://www.candleaid.org/candleaid_donations', external:true },
  { img:'/images/cheques-write.jpg', title:'Donate at CandleAid', icon:'🏢',
    body:'Donations can be made directly at our office at: 21/4 Dharmaratne Avenue, Rawathawatte, Moratuwa, Sri Lanka.',
    cta:'View on Map', href:'https://www.google.com/maps/place/CandleAid+Lanka', external:true },
  { img:'/images/sponsor/book-project-bb.jpg', title:'Become a Sponsor', icon:'🤝',
    body:'Sponsor a beneficiary for a minimum of one year — in Food, Health, or the Education Sponsorship Programme.',
    cta:'See Sponsorships', href:'/sponsor', external:false },
  { img:'/images/how to donate.jpg', title:'Other Methods', icon:'📋',
    body:'Find out about all other methods of donating to CandleAid Lanka, including bank transfers and international remittances.',
    cta:'Download Guide', href:'/documents/forms/Ways of making a Remittance to CA.pdf', external:true },
];
export default function Page() {
  return (<>
    <PageHero eyebrow="Give" title="Donate to CandleAid" subtitle="Every rupee you give goes directly to someone who needs it. No overheads. No salaries. Just impact." breadcrumbs={[{label:'Home',href:'/'},{label:'Donate'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {methods.map(m=>(<div key={m.title} className="bg-[#FDF8F0] border border-[#EDE0CC] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-52 overflow-hidden relative"><Image src={m.img} alt={m.title} fill className="object-cover" quality={85}/></div>
            <div className="p-8">
              <div className="text-3xl mb-3">{m.icon}</div>
              <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-3">{m.title}</h3>
              <p className="nunito text-[0.92rem] text-[#5C3D25] leading-[1.85] font-light mb-5">{m.body}</p>
              {m.external ? (
                <a href={m.href} target="_blank" rel="noreferrer" className="inline-block bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold text-[0.88rem] px-5 py-2.5 rounded transition-colors no-underline">{m.cta} →</a>
              ) : (
                <Link href={m.href} className="inline-block bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold text-[0.88rem] px-5 py-2.5 rounded transition-colors no-underline">{m.cta} →</Link>
              )}
            </div>
          </div>))}
        </div>
        <div className="bg-[#2C1A0E] text-white p-10 rounded-xl text-center">
          <div className="lora font-bold text-[1.8rem] mb-3">Every candle counts</div>
          <p className="nunito text-white/65 text-[1rem] max-w-xl mx-auto leading-[1.8] mb-6">CandleAid Lanka has been lighting candles of hope for over 30 years. Your donation, however small, is another candle in the darkness.</p>
          <a href="https://www.candleaid.org/candleaid_donations" target="_blank" rel="noreferrer" className="inline-block bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold text-[1rem] px-8 py-3.5 rounded-lg shadow-lg transition-colors no-underline">Donate Now →</a>
        </div>
      </div>
    </section>
  </>);
}
