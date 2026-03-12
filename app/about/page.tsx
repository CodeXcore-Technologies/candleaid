import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CandleAid Lanka"
        title="Lighting candles since 1990"
        subtitle="Founded upon the belief that every person can do something to help another, irrespective of race, creed or social status."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section className="bg-[#FAF3E8] py-20 px-6">
        <div className="max-w-[1000px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="lora font-bold text-[#2C1A0E] text-[2rem] mb-5">Our Formation</h2>
              <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-4 font-light">
                CandleAid Lanka (formerly AFLAC International) was founded in 1995 by Capt. Elmo Jayawardena, a Sri Lankan pilot then employed with Singapore Airlines. Today, he and a Board of two vice-presidents and five directors run CandleAid.
              </p>
              <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">
                CandleAid is registered under the Ministry of Social Services in Sri Lanka as a Non-Governmental Organisation engaged in charitable work and was granted the status of an &lsquo;Approved Charity&rsquo; in Sri Lanka in the year 2000.
              </p>
            </div>
            <div>
              <Image src="/images/aboutpagenew.jpg" alt="CandleAid Lanka" width={600} height={450} className="w-full rounded-lg shadow-md" quality={85}/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg border-t-4 border-t-[#C1502E]">
              <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-4">Our Ideology</h3>
              <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">
                Founded upon the adage <em>&ldquo;It is better by far to light a solitary candle than to curse the darkness&rdquo;</em>, CandleAid was formed with the purpose of alleviating poverty in Sri Lanka. It is modelled on the belief that every person can do something to help another, irrespective of race, creed or social status.
              </p>
              <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] mt-3 font-light">
                CandleAid functions as a link between your act of generosity and someone else&rsquo;s humanitarian need in Sri Lanka. Our ideology has been to minimize administrative expenses — only a mere 10% is levied for administration.
              </p>
            </div>
            <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg border-t-4 border-t-[#E8973A]">
              <h3 className="lora font-bold text-[#2C1A0E] text-[1.4rem] mb-4">Our Mission</h3>
              <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] font-light">
                To improve the quality of life of the poor and less fortunate in Sri Lanka in all aspects of basic human needs including but not limited to education, health, food, and community development.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="lora font-bold text-[#2C1A0E] text-[2rem] mb-5">Our Work</h2>
            <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-4 font-light">
              CandleAid&rsquo;s primary focus is on its Education Sponsorship Programme where monthly financial assistance is given to students from low-income families. Its food programme is called &lsquo;Gift A Meal&rsquo;. Under health, it runs the Cancer Patients&rsquo; Assistance Programme. Under these programmes, CandleAid disburses a monthly subsidy to enable destitute families to procure dry rations and cancer patients to sustain their basic needs.
            </p>
            <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">
              All prospective initiatives are screened for their viability, authenticity and suitability prior to submission to the Board of Directors for approval. There are office personnel appointed as Heads of each programme category who report to a designated Director and work with project assistants and a network of voluntary coordinators.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="lora font-bold text-[#2C1A0E] text-[2rem] mb-5">Our International Presence</h2>
            <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">
              There is a Regional Representative in the USA and fourteen representatives in various cities in the world whose task is to engender awareness among their associates of the needs and difficulties faced by the poor in Sri Lanka. Most times, they source sponsors and donors to support CandleAid programmes. These Honorary representatives have worked diligently to spread the cause of CandleAid far and wide, linking many people — both Sri Lankans abroad and nationals of other countries — to support our cause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Board of Directors', href: '/about/board', desc: 'Meet the people who lead CandleAid Lanka.' },
              { label: 'International Representatives', href: '/about/international-reps', desc: 'Our global network of advocates and ambassadors.' },
              { label: 'Our Staff', href: '/about/staff', desc: 'The dedicated team behind our programmes.' },
            ].map(c => (
              <Link key={c.label} href={c.href}
                className="block bg-[#FDF8F0] border border-[#EDE0CC] p-7 rounded-lg hover:border-[#C1502E] hover:shadow-md transition-all no-underline group">
                <h3 className="lora font-bold text-[#2C1A0E] text-[1.15rem] mb-2 group-hover:text-[#C1502E] transition-colors">{c.label}</h3>
                <p className="nunito text-[0.88rem] text-[#8C6845]">{c.desc}</p>
                <div className="mt-3 text-[#C1502E] nunito font-bold text-[0.82rem]">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
