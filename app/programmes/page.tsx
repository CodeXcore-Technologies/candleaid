import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Our Programmes' };
const progs = [
  { cat:'Education', color:'#C1502E', items:[{title:'Education Sponsorship',href:'/programmes/education-sponsorship',desc:'Monthly financial assistance to students from low-income families.'},{title:'Overseas Scholarships',href:'/programmes/overseas-scholarships',desc:'Supporting Sri Lankan students studying abroad.'},{title:'Library Project',href:'/programmes/library-project',desc:'Building and stocking libraries in underserved schools.'},{title:'Book Project',href:'/programmes/library-project',desc:'Providing books directly to students in need.'}]},
  { cat:'Food', color:'#E8973A', items:[{title:'Gift A Meal',href:'/programmes/gift-a-meal',desc:'LKR 4,000 monthly subsistence for struggling families.'},{title:'Mother & Child Project',href:'/programmes/mother-and-child',desc:'Nutritional support for mothers and young children.'}]},
  { cat:'Healthcare', color:'#8B6FAB', items:[{title:'Cancer Patients Assistance',href:'/programmes/cancer-sponsorship',desc:'Monthly support for cancer patients at Apeksha Hospital.'},{title:'Sigiri Trust Fund',href:'/programmes/sigiri-trust-fund',desc:'Medical assistance through the Sigiri Trust.'},{title:'Kidney Dialysis Programme',href:'/programmes/kidney-dialysis',desc:'Supporting patients requiring regular dialysis.'}]},
  { cat:'Empowerment', color:'#6B8F71', items:[{title:'Self Empowerment of Women (SEW)',href:'/programmes/sew',desc:'Skills training and economic empowerment for women.'},{title:'Children With Special Needs',href:'/programmes/special-needs',desc:'Support and resources for differently-abled children.'}]},
  { cat:'Disaster Relief', color:'#5C3D25', items:[{title:'Disaster Relief 2025',href:'/programmes/disaster-relief',desc:'Emergency response and relief for affected communities.'}]},
];
export default function Page() {
  return (<>
    <PageHero eyebrow="What We Do" title="Our Programmes" subtitle="Five pillars of support — education, food, health, empowerment, and disaster relief." breadcrumbs={[{label:'Home',href:'/'},{label:'Our Programmes'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1200px] mx-auto">
      {progs.map(cat=>(<div key={cat.cat} className="mb-16">
        <div className="flex items-center gap-3 mb-6"><div className="w-1 h-8 rounded-full" style={{background:cat.color}}/><h2 className="lora font-bold text-[#2C1A0E] text-[1.7rem]">{cat.cat} Programme</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.items.map(p=>(<Link key={p.title} href={p.href} className="block bg-[#FDF8F0] border border-[#EDE0CC] p-7 rounded-lg hover:shadow-md hover:border-opacity-0 transition-all no-underline group" style={{'--hover-border':cat.color} as React.CSSProperties}>
            <div className="w-10 h-1 rounded-full mb-4" style={{background:cat.color}}/>
            <h3 className="lora font-bold text-[#2C1A0E] text-[1.1rem] mb-2 group-hover:text-[#C1502E] transition-colors">{p.title}</h3>
            <p className="nunito text-[0.88rem] text-[#8C6845] leading-[1.7]">{p.desc}</p>
            <div className="mt-4 nunito font-bold text-[0.82rem]" style={{color:cat.color}}>Learn more →</div>
          </Link>))}
        </div>
      </div>))}
    </div></section>
  </>);
}
