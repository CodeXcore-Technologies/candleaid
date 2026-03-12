import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Our Staff' };

const STAFF = [
  { name: 'Krishani Fernando', role: 'Finance Manager', img: '/images/staff/Krishani.jpg' },
  { name: 'Cheryll Seneviratne', role: 'Head of Education Programme', img: '/images/staff/Cheryll-Seneviratne.jpg' },
  { name: 'Rukmal Silva', role: 'Head of Health Programme', img: '/images/staff/Ms-Rukmal-Silva.jpg' },
  { name: 'Savindranie Perera', role: 'Head of Food Programme', img: '/images/staff/Savindranie-Perera.jpg' },
  { name: 'Chaminda de Alwis', role: 'Coordinating Officer', img: '/images/staff/Chaminda.jpg' },
  { name: 'Malkanthi (Ganga) Silva', role: 'Assistant Accountant', img: '/images/staff/Malkanthi-Silva.jpg' },
  { name: 'Priyangani Ratnayake', role: 'Coordinating Secretary', img: '/images/staff/Mrs.Priyangani-Ratnayake.jpg' },
  { name: 'Shalini Nisansala', role: 'Administrative Assistant', img: '/images/staff/Shalini-Nisansala.jpg' },
  { name: 'Chamila Mendis', role: 'Project Assistant - Health Programme', img: '/images/staff/Chamila-Mendis2.jpg' },
  { name: 'Shiromi Fonseka', role: 'Project Secretary - Education Programme', img: '/images/staff/Shiromi-Fonseka.jpg' },
  { name: 'Sanushi Mendis', role: 'Project Assistant - Education Programme', img: '/images/staff/Sanushi-Mendis.jpg' },
  { name: 'Devinka Fernando', role: 'Project Assistant - Food Programme', img: '/images/staff/Ms.Devinka-Fernando.jpg' },
];

export default function Page() {
  return (<>
    <PageHero eyebrow="About Us" title="Our Staff" subtitle="The dedicated team who keep CandleAid's operations running every day." breadcrumbs={[{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'Our Staff'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1100px] mx-auto">
      
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-10 rounded-lg mb-12">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">
          Our dedicated staff members work tirelessly to ensure that every donation reaches those who need it most. From managing finances to coordinating programmes across education, health, and food security, each member plays a vital role in CandleAid's mission to light candles of hope across Sri Lanka.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STAFF.map(member => (
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
              <p className="nunito text-[0.85rem] text-[#C1502E] font-semibold leading-relaxed">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="nunito text-[0.9rem] text-[#8C6845] italic">All staff members are employed full-time and work from the CandleAid Lanka office in Moratuwa.</p>
      </div>

    </div></section>
  </>);
}
