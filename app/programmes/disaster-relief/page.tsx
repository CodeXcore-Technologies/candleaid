import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Disaster Relief' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Disaster Relief" title="Disaster Relief — 2025" subtitle="Rapid response support for communities affected by natural disasters." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Disaster Relief'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#5C3D25] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">When disaster strikes, CandleAid mobilises quickly to provide relief to affected communities. Our 2025 disaster relief efforts are ongoing — details of the current operation and how to contribute are available below.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">For full details on the Ditwah 2025 relief operation, please <a href="https://www.candleaid.org/ditwah" target="_blank" rel="noreferrer" className="text-[#C1502E] underline">visit the dedicated page on the live site</a>.</p>
        <div className="mt-8"><a href="/donate" className="inline-block bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold px-6 py-3 rounded transition-colors no-underline">Donate to Disaster Relief →</a></div>
      </div>
    </div></section>
  </>);
}
