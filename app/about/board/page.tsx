import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Board of Directors' };

const BOARD = [
  { name: 'Capt. Elmo Jayawardena', title: 'Founder President', img: '/images/board/Capt.Elmo-Jayawardena.jpg' },
  { name: 'Mrs. Dil Jayawardena', title: 'Executive Director', img: '/images/board/Mrs.-Dil-Jayawardena.jpg' },
  { name: 'Mr. Priya Cooray', title: 'Vice President', img: '/images/board/Priya Cooray_v2.jpg' },
  { name: 'Mrs. Himali Senanayake', title: 'Director', img: '/images/board/Mrs.-Himali-Senanayake.jpg' },
  { name: 'Mr. Mevan Jayawardena', title: 'Director', img: '/images/board/Mevan Jayawardena.jpg' },
  { name: 'Dr. Razeen Sally', title: 'Director', img: null },
  { name: 'Mrs. Yasmin Weerasuriya', title: 'Director', img: '/images/board/Mrs-Yasmin- Weerasuriya.jpg' },
  { name: 'Mr. Aruna Fernando', title: 'Director', img: '/images/board/Mr.Aruna Fernando.jpg' },
];

export default function Page() {
  return (<>
    <PageHero eyebrow="About Us" title="Board of Directors" subtitle="The leadership team guiding CandleAid Lanka's mission since 1990." breadcrumbs={[{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'Board of Directors'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1100px] mx-auto">
      
      {/* Important Notice */}
      <div className="bg-[#F2E8D5] border-l-4 border-[#E8973A] p-6 rounded-r-lg mb-12">
        <div className="nunito font-extrabold text-[0.72rem] tracking-[0.18em] uppercase text-[#E8973A] mb-2">Important Notice</div>
        <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.8] mb-3">The Board has issued important communications regarding the future of CandleAid Lanka. Please read the letters below.</p>
        <div className="flex flex-col gap-2">
          {[['First Communication from the Board','/documents/reports/Communication_from_the_Board_of_Directors_of_CandleAid_Lanka.pdf'],['Second Communication from the Board','/documents/reports/20.03.25 2nd Communication from the Board of Directors.pdf'],['Third Communication from the Board','/documents/reports/3rd Communication from the President - The future of CandleAid.pdf']].map(([l,h])=>(<a key={l} href={h} target="_blank" rel="noreferrer" className="flex items-center gap-2 nunito font-bold text-[0.88rem] text-[#C1502E] no-underline hover:opacity-75">📄 {l}</a>))}
        </div>
      </div>

      {/* Board Members Grid */}
      <div className="mb-12">
        <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-8">Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOARD.map(member => (
            <div key={member.name} className="bg-[#FDF8F0] border border-[#EDE0CC] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gradient-to-br from-[#EDE0CC] to-[#D4C4A8] flex items-center justify-center">
                {member.img ? (
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                ) : (
                  <div className="text-6xl text-[#C1502E]/20">👤</div>
                )}
              </div>
              <div className="p-5 text-center">
                <h3 className="lora font-bold text-[#2C1A0E] text-[1.05rem] mb-1">{member.name}</h3>
                <p className="nunito text-[0.85rem] text-[#C1502E] font-semibold">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In Memoriam */}
      <div className="bg-[#FDF8F0] border-2 border-[#8C6845]/20 rounded-lg p-8">
        <h2 className="lora font-bold text-[#2C1A0E] text-[1.5rem] mb-4">We Remember Our Dearly Departed</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#EDE0CC] to-[#D4C4A8] flex items-center justify-center flex-shrink-0">
            <div className="text-5xl text-[#8C6845]/30">🕊️</div>
          </div>
          <div className="flex-1">
            <h3 className="lora font-bold text-[#2C1A0E] text-[1.2rem] mb-3">Mr. Dayantha De Mel</h3>
            <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">
              It is with deep gratitude that we remember our Founder Finance Director Dayantha de Mel who passed away on 15th October 2022. From the inception of the organisation to his dying day, Dayantha was a heavy-load-bearing pillar of CandleAid. His service of 27 years on the Board of CandleAid, his valuable inputs on finance and administrative matters and his selfless humanitarian work for the organisation are profoundly appreciated. For all his services at CandleAid he never received a cent in payment or claimed any kind of remuneration for anything he contributed to uplift the lives of people in need. We at CandleAid miss him. May his soul rest in peace!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="nunito text-[0.9rem] text-[#8C6845] italic">All board members serve in an entirely voluntary capacity — none receive remuneration for their service.</p>
      </div>

    </div></section>
  </>);
}
