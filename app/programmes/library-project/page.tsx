import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Library & Book Project' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Education Programme" title="Library & Book Project" subtitle="Putting books in the hands of children who need them most." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Library Project'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-4">Library Project</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">CandleAid builds and stocks libraries in underserved schools across Sri Lanka, giving students access to learning resources that they would otherwise never encounter. A good library can transform a child&apos;s relationship with knowledge and learning.</p>
        </div>
        <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-8 rounded-lg">
          <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-4">Book Project</h3>
          <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">The Book Project provides school books, reference materials, and stationery directly to students who cannot afford them. For many students, these materials make the difference between attending school and falling behind permanently.</p>
        </div>
      </div>
    </div></section>
  </>);
}
