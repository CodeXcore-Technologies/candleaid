import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'International Representatives' };

const REGIONAL = [
  { name: 'Mr. Gerard Wijeyaratne', location: 'North American Representative', img: '/images/reps/Mr-Gerard- Wijeyaratne.jpg' },
];

const BRANCH = [
  { name: 'Mr. Wayne Dannhauer', location: 'Vancouver', email: 'wildan@telus.net', img: '/images/reps/Capt-Wayne Dannhauer.jpg' },
  { name: 'Mrs. Natasha Paes', location: 'Singapore', email: 'paesnatasha@gmail.com', img: '/images/reps/Natasha-Paes.jpg' },
  { name: 'Mrs. Asha de Silva', location: 'Melbourne', email: 'asharanil330@msn.com', img: '/images/reps/Asha-de-Silva.jpg' },
  { name: 'Mr. Jaliya Pilimatalawwe', location: 'Hong Kong', email: 'jaliyap99@gmail.com', img: '/images/reps/Jaliya-Pilimathalawe.jpg' },
  { name: 'Mrs. Yolande De Silva', location: 'Perth', email: 'yds47@icloud.com', img: '/images/reps/Yolande-de-Silva.png' },
  { name: 'Mrs. Claudia Frey', location: 'Frankfurt', email: 'claudia.frey@vdma.org', img: '/images/reps/Claudia-Frey.jpg' },
  { name: 'Mr. Godwin Fernandez', location: 'Toronto', email: 'goddy@godwinf.com', img: '/images/reps/Godwin-Fernandez.jpg' },
  { name: 'Mr. Lakshan Fernando', location: 'USA (Texas)', email: 'contactlakshan@hotmail.com', img: '/images/reps/Lakshan-Fernando.jpg' },
  { name: 'Mrs. Siromi Wanasundera', location: 'USA (New York)', email: 'sirominw@gmail.com', img: '/images/reps/Siromi-Wanasundera.jpg' },
  { name: 'Mr. & Mrs. Chris Fernando', location: 'Sydney', email: 'chris.fernando@sydney.edu.au', img: null },
  { name: 'Mr. & Mrs. Kithsiri Perera', location: 'Calgary', email: 'nylap2383@gmail.com', img: null },
  { name: 'Mrs. Carla Horn', location: 'Amsterdam', email: 'carla.horn@zonnet.nl', img: '/images/reps/Horn-Amsterdam.jpg' },
  { name: 'Mr. Harald & Dr. Maria Wessman', location: 'Stockholm', email: 'harald.wessman@gmail.com', img: '/images/reps/Harald-Dr-Maria-Wessman-Stockholm.jpg' },
  { name: 'Mr. Mohan Samarasinghe', location: 'Melbourne', email: 'mohan.samarasinghe@bigpond.com', img: '/images/reps/Mohan-Samarasinghe.jpg' },
];

export default function Page() {
  return (<>
    <PageHero eyebrow="About Us" title="International Representatives" subtitle="A global network of dedicated volunteers spreading CandleAid's message worldwide." breadcrumbs={[{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'International Representatives'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1100px] mx-auto">
      
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-10 rounded-lg mb-12">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">There is a Regional Representative in the USA and fourteen representatives in various cities around the world. Their task is to engender awareness among their associates of the needs and difficulties faced by the poor in Sri Lanka.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">Most times, they source sponsors and donors to support CandleAid programmes. They are free to use their own initiatives rather than a standardized process to spread the message of CandleAid.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">These Honorary representatives have worked diligently to spread the cause of CandleAid far and wide, linking many people — both Sri Lankans living abroad as well as nationals of countries across the globe — to support our cause.</p>
      </div>

      {/* Regional Representative */}
      <div className="mb-12">
        <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-6">Regional Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REGIONAL.map(rep => (
            <div key={rep.name} className="bg-[#FDF8F0] border-2 border-[#C1502E]/30 rounded-lg p-6 flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#EDE0CC] to-[#D4C4A8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                {rep.img ? (
                  <Image src={rep.img} alt={rep.name} width={96} height={96} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-4xl text-[#C1502E]/20">👤</div>
                )}
              </div>
              <div>
                <h3 className="lora font-bold text-[#2C1A0E] text-[1.1rem] mb-1">{rep.name}</h3>
                <p className="nunito text-[0.9rem] text-[#C1502E] font-semibold">{rep.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branch Representatives */}
      <div className="mb-8">
        <h2 className="lora font-bold text-[#2C1A0E] text-[1.8rem] mb-6">Branch Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCH.map(rep => (
            <div key={rep.name} className="bg-[#FDF8F0] border border-[#EDE0CC] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gradient-to-br from-[#EDE0CC] to-[#D4C4A8] flex items-center justify-center">
                {rep.img ? (
                  <Image src={rep.img} alt={rep.name} fill className="object-cover" />
                ) : (
                  <div className="text-6xl text-[#C1502E]/20">👤</div>
                )}
              </div>
              <div className="p-5">
                <h3 className="lora font-bold text-[#2C1A0E] text-[1rem] mb-1">{rep.name}</h3>
                <p className="nunito text-[0.85rem] text-[#C1502E] font-semibold mb-2">📍 {rep.location}</p>
                {rep.email && (
                  <a href={`mailto:${rep.email}`} className="nunito text-[0.8rem] text-[#8C6845] hover:text-[#C1502E] transition-colors break-all">
                    ✉️ {rep.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F2E8D5] border-l-4 border-[#C1502E] p-6 rounded-r-lg">
        <p className="nunito text-[0.95rem] text-[#5C3D25]">Interested in becoming an international representative? Contact us at <a href="tel:0112642526" className="text-[#C1502E] font-bold">0112 642 526</a> or visit our office.</p>
      </div>

    </div></section>
  </>);
}
