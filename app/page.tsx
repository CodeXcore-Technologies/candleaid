'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CandleGlyph from '@/components/CandleGlyph';

const IMGS = ['/images/hero/slide1.jpeg','/images/hero/slide2.jpg','/images/hero/slide3.jpg'];
const STORIES = [
  { name:'Kumari Perera', location:'Kilinochchi', programme:'Education Sponsorship', color:'#C1502E', quote:'My daughter was the first in our family to finish university. She is a teacher now — she gives back to the same village that helped her. That is what CandleAid did.' },
  { name:'Rajan Fernando', location:'Colombo', programme:'Cancer Patients Assistance', color:'#E8973A', quote:'When the doctors told me the diagnosis I thought everything was over. CandleAid paid for my treatment. I am still here. I still see my grandchildren. That is everything.' },
  { name:'Fatima Razik', location:'Puttalam', programme:'Self Empowerment of Women', color:'#6B8F71', quote:'They gave me a sewing machine and three months of training. Now I have my own shop. I employ two other women. One candle really does light another.' },
];
const PROGRAMMES = [
  { emoji:'📖', title:'Education', tagline:'Every child deserves to learn', color:'#C1502E', href:'/programmes/education-sponsorship', body:'School sponsorships, overseas scholarships, library building, and book projects — because education is the one investment that outlasts us all.', img:'/images/programmes/pr1.jpg' },
  { emoji:'🌾', title:'Food', tagline:'No family should go to bed hungry', color:'#E8973A', href:'/programmes/gift-a-meal', body:'Our Gift A Meal and Mother & Child projects deliver nutrition to struggling families and expectant mothers at their most vulnerable moments.', img:'/images/programmes/pr2.jpg' },
  { emoji:'🩺', title:'Healthcare', tagline:'Illness should never be a sentence', color:'#8B6FAB', href:'/programmes/cancer-sponsorship', body:'Covering cancer treatment, kidney dialysis, and emergency medical costs — care that government programmes leave behind.', img:'/images/programmes/pr3.jpg' },
  { emoji:'✊', title:'Empowerment', tagline:'Skills that outlast aid', color:'#6B8F71', href:'/programmes/sew', body:'The SEW programme and Children With Special Needs projects build dignity, independence, and opportunity from within communities.', img:null },
];
const IMPACT = [{ n:'30+',sub:'Years of service' },{ n:'5,000+',sub:'Families reached' },{ n:'15',sub:'Active programmes' },{ n:'100%',sub:'Volunteer-run' }];

function useInView(t=0.12){const r=useRef<HTMLDivElement>(null);const[v,sv]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){sv(true);o.disconnect();}},{threshold:t});if(r.current)o.observe(r.current);return()=>o.disconnect();},[]);return[r,v] as const;}
function Eyebrow({children,center}:{children:string;center?:boolean}){return(<div className={`flex items-center gap-3 mb-3${center?' justify-center':''}`}><div className="w-6 h-[2.5px] bg-[#C1502E] rounded-full flex-shrink-0"/><span className="nunito font-extrabold text-[0.72rem] tracking-[0.2em] uppercase text-[#C1502E]">{children}</span></div>);}

export default function HomePage(){
  const[slide,ss]=useState(0);const[born,sb]=useState(false);const[glow,sg]=useState(0);const[flicker,sf]=useState(0);const[story,sst]=useState(0);const[prog,spr]=useState(0);const[amt,sa]=useState<number|null>(1000);const[custom,sc]=useState('');const[noticeOpen,sno]=useState(false);
  const[r1,v1]=useInView();const[r2,v2]=useInView();const[r3,v3]=useInView();const[r4,v4]=useInView();const[r5,v5]=useInView();const[r6,v6]=useInView();
  useEffect(()=>{setTimeout(()=>sb(true),100);},[]);
  useEffect(()=>{const t=setInterval(()=>ss(s=>(s+1)%IMGS.length),5500);return()=>clearInterval(t);},[]);
  useEffect(()=>{let raf:number,t=0;const l=()=>{t+=0.015;sg(Math.sin(t)*0.5+0.5);sf(Math.sin(t*6.5)*0.15+Math.sin(t*3.2)*0.12);raf=requestAnimationFrame(l);};raf=requestAnimationFrame(l);return()=>cancelAnimationFrame(raf);},[]);
  const R=320+glow*100,op=0.25+glow*0.15+flicker*0.08;
  const p=PROGRAMMES[prog],s=STORIES[story];
  const docs=[{label:'First Communication from the Board',href:'/documents/reports/Communication_from_the_Board_of_Directors_of_CandleAid_Lanka.pdf'},{label:'Second Communication from the Board',href:'/documents/reports/20.03.25 2nd Communication from the Board of Directors.pdf'},{label:'Third Communication from the Board',href:'/documents/reports/3rd Communication from the President - The future of CandleAid.pdf'}];
  return(<>
  {/* HERO */}
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{background:'linear-gradient(160deg,#2C1A0E 0%,#1A0E06 50%,#0F0803 100%)'}}>
    {IMGS.map((src,i)=>(<div key={i} className="absolute inset-0 transition-opacity duration-[1400ms]" style={{opacity:i===slide?1:0}}><Image src={src} alt="CandleAid Sri Lanka" fill className="object-cover" style={{filter:'brightness(0.3) saturate(0.7)'}} priority={i===0} quality={85}/></div>))}
    {/* Outer glow layers for depth */}
    <div className="absolute rounded-full pointer-events-none transition-all duration-75" style={{bottom:'10%',right:'8%',width:R*1.3,height:R*1.3,background:`radial-gradient(circle, rgba(255,180,60,${op*0.15}) 0%, rgba(232,151,58,${op*0.08}) 40%, transparent 70%)`}}/>
    <div className="absolute rounded-full pointer-events-none transition-all duration-100" style={{bottom:'10%',right:'8%',width:R,height:R,background:`radial-gradient(circle, rgba(255,180,60,${op}) 0%, rgba(232,151,58,${op*0.6}) 35%, rgba(193,80,46,${op*0.2}) 60%, transparent 75%)`}}/>
    {/* Inner bright core with flicker */}
    <div className="absolute rounded-full pointer-events-none transition-all duration-75" style={{bottom:'10%',right:'8%',width:R*0.45,height:R*0.45,background:`radial-gradient(circle, rgba(255,240,180,${op*1.8+flicker*0.3}) 0%, rgba(255,220,120,${op*1.2}) 40%, transparent 70%)`,transform:`scale(${1+flicker*0.08})`}}/>
    {/* White hot center */}
    <div className="absolute rounded-full pointer-events-none transition-all duration-50" style={{bottom:'10%',right:'8%',width:R*0.22,height:R*0.22,background:`radial-gradient(circle, rgba(255,255,255,${op*0.9+flicker*0.4}) 0%, rgba(255,240,200,${op*0.5}) 50%, transparent 80%)`,transform:`scale(${1+flicker*0.15})`}}/>
    {/* Upward flame glow */}
    <div className="absolute pointer-events-none transition-all duration-100" style={{bottom:'10%',right:'8%',width:R*0.6,height:R*0.9,background:`linear-gradient(to top, rgba(255,180,60,${op*0.4}) 0%, rgba(255,200,80,${op*0.25}) 30%, transparent 70%)`,borderRadius:'50% 50% 50% 50% / 60% 60% 40% 40%',transform:`translateY(-${R*0.15}px) scaleY(${1+flicker*0.12})`}}/>
    <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/85 via-[#2C1A0E]/40 to-transparent"/>
    <div className="absolute bottom-[4%] right-[6%] opacity-[0.06] pointer-events-none"><CandleGlyph size={260} glow/></div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {IMGS.map((_,i)=>(<button key={i} onClick={()=>ss(i)} className="rounded-full border-none cursor-pointer transition-all duration-300 p-0" style={{width:i===slide?28:10,height:10,background:i===slide?'#F97316':'rgba(255,255,255,0.3)'}}/>))}
    </div>
    <div className="relative z-10 max-w-[1260px] mx-auto px-6 pt-36 pb-20 w-full">
      <div className="max-w-[680px]">
        <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${born?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`}><CandleGlyph size={20} glow/><span className="nunito font-extrabold text-[0.75rem] tracking-[0.2em] uppercase text-[#E8973A]">Sri Lanka · Since 1990</span></div>
        <h1 className={`lora font-bold text-white leading-[1.08] mb-7 transition-all duration-700 delay-150 ${born?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`} style={{fontSize:'clamp(2.6rem,7vw,5rem)',letterSpacing:'-0.02em'}}>A single candle.<br/><span className="text-[#E8973A] italic font-normal">Thirty years</span><br/>of light.</h1>
        <p className={`lora italic text-white/65 mb-3 leading-[1.85] max-w-[500px] transition-all duration-700 delay-300 ${born?'opacity-100':'opacity-0'}`} style={{fontSize:'clamp(1rem,2vw,1.2rem)'}}>&#8220;It is better by far to light a solitary candle than to curse the darkness.&#8221;</p>
        <p className={`nunito text-[0.88rem] text-white/40 mb-10 tracking-[0.04em] transition-all duration-700 delay-[400ms] ${born?'opacity-100':'opacity-0'}`}>— The principle that started it all, and still guides everything we do.</p>
        <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${born?'opacity-100':'opacity-0'}`}>
          <Link href="/about" className="nunito font-bold text-[1rem] px-8 py-3 rounded text-white border border-white/35 backdrop-blur-sm hover:border-white/70 hover:bg-white/10 transition-all duration-200 no-underline">Our Story →</Link>
          <Link href="/donate" className="nunito font-bold text-[1rem] px-8 py-3 rounded text-white bg-[#C1502E] hover:bg-[#A0441F] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline">Donate Now →</Link>
        </div>
      </div>
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-1 opacity-30 animate-bobble">
        <div className="w-px h-9" style={{background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))'}}/><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 6 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </div>
  </section>

  {/* IMPACT BAR */}
  <section ref={r1} className="bg-[#C1502E]"><div className="max-w-[1260px] mx-auto grid grid-cols-2 lg:grid-cols-4">
    {IMPACT.map((item,i)=>(<div key={i} className="py-10 px-6 text-center border-r border-white/15 last:border-r-0 even:border-r-0 lg:even:border-r lg:last:border-r-0" style={{opacity:v1?1:0,transform:v1?'none':'translateY(20px)',transition:`all 0.7s ease ${i*0.1}s`}}><div className="lora font-bold text-white leading-none mb-1" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)'}}>{item.n}</div><div className="nunito text-[0.78rem] text-white/75 tracking-[0.04em]">{item.sub}</div></div>))}
  </div></section>

  {/* STORY INTRO */}
  <section ref={r2} className="bg-[#FAF3E8] py-28 px-6"><div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div style={{opacity:v2?1:0,transform:v2?'none':'translateX(-24px)',transition:'all 0.85s ease'}}>
      <div className="relative pl-8 border-l-4 border-[#E8973A]"><div className="absolute -top-9 left-2 lora font-bold text-[8rem] text-[#E8973A] opacity-15 leading-none select-none">&#8220;</div><blockquote className="lora italic font-medium text-[#2C1A0E] leading-[1.5] relative z-10" style={{fontSize:'clamp(1.4rem,2.8vw,2rem)'}}>Poverty is not a lack of character. It is a lack of opportunity. We exist to create that opportunity.</blockquote><div className="mt-5 nunito font-bold text-[0.78rem] tracking-[0.14em] uppercase text-[#8C6845]">— CandleAid Lanka</div></div>
    </div>
    <div style={{opacity:v2?1:0,transform:v2?'none':'translateX(24px)',transition:'all 0.85s ease 0.15s'}}>
      <Eyebrow>Who We Are</Eyebrow>
      <h2 className="lora font-bold text-[#2C1A0E] leading-[1.3] mb-5" style={{fontSize:'clamp(1.8rem,3vw,2.4rem)'}}>A community of kindness, for Sri Lanka</h2>
      <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-4 font-light">CandleAid Lanka was founded in 1990 with a simple belief: that ordinary people, acting together with compassion, can change the lives of those around them. Over thirty years later, that belief is unchanged.</p>
      <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-7 font-light">We are entirely volunteer-run. Every rupee donated reaches a family, a patient, a student — nothing is taken for salaries or overheads.</p>
      <div className="flex flex-wrap gap-6 p-5 bg-[#F2E8D5] border-l-[3px] border-[#E8973A] rounded-r mb-7">
        {[['30+ years','of active service'],['100%','volunteer-operated'],['0 rupees','lost to overheads']].map(([n,l])=>(<div key={n}><div className="lora font-bold text-[1.3rem] text-[#C1502E]">{n}</div><div className="nunito text-[0.75rem] text-[#8C6845] font-semibold tracking-[0.04em]">{l}</div></div>))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/about" className="nunito font-bold text-[0.9rem] px-5 py-2 border-[1.5px] border-[#C4A882] text-[#5C3D25] hover:border-[#C1502E] hover:text-[#C1502E] rounded transition-all no-underline">About Us →</Link>
        <Link href="/about/board" className="nunito font-semibold text-[0.9rem] px-5 py-2 text-[#8C6845] hover:text-[#C1502E] hover:bg-[#C1502E]/07 rounded transition-all no-underline">Meet the Board →</Link>
      </div>
    </div>
  </div></section>

  {/* VOICES */}
  <section ref={r3} className="bg-[#F2E8D5] py-28 px-6 overflow-hidden"><div className="max-w-[1260px] mx-auto">
    <div className="text-center mb-16" style={{opacity:v3?1:0,transform:v3?'none':'translateY(20px)',transition:'all 0.7s ease'}}>
      <Eyebrow center>Real People. Real Stories.</Eyebrow>
      <h2 className="lora font-bold text-[#2C1A0E] leading-[1.25]" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>The human side of what we do</h2>
      <p className="nunito text-[1rem] text-[#8C6845] mt-3 max-w-lg mx-auto leading-[1.75]">Every number in our impact report is a human being. Here are some of them.</p>
    </div>
    <div key={story} className="grid grid-cols-1 md:grid-cols-3 bg-[#FDF8F0] overflow-hidden shadow-xl animate-story rounded-lg" style={{opacity:v3?1:0,transition:'opacity 0.7s ease 0.15s'}}>
      <div className="flex flex-col justify-center items-center text-center p-12 relative overflow-hidden" style={{background:`linear-gradient(160deg,${s.color},${s.color}cc)`}}>
        <div className="absolute w-48 h-48 rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <div className="absolute w-72 h-72 rounded-full border border-white/06 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <div className="text-5xl mb-4 relative">💬</div>
        <div className="lora font-bold text-white text-lg mb-1 relative">{s.name}</div>
        <div className="nunito font-bold text-[0.72rem] text-white/70 tracking-[0.08em] mb-3 relative">{s.location}</div>
        <div className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full nunito font-bold text-[0.68rem] text-white tracking-[0.06em] uppercase relative">{s.programme}</div>
      </div>
      <div className="md:col-span-2 p-12 flex items-center"><div>
        <div className="lora text-[4.5rem] leading-[0.6] mb-5 font-bold" style={{color:s.color,opacity:0.2}}>&#8220;</div>
        <p className="lora italic text-[#2C1A0E] leading-[1.7]" style={{fontSize:'clamp(1.1rem,2vw,1.4rem)'}}>{s.quote}</p>
        <div className="mt-6 w-9 h-[3px] rounded-full" style={{background:s.color}}/>
      </div></div>
    </div>
    <div className="flex justify-center items-center gap-5 mt-7">
      {['←','→'].map((arrow,d)=>(<button key={d} onClick={()=>sst((story+(d?1:-1)+STORIES.length)%STORIES.length)} className="w-11 h-11 rounded-full border-[1.5px] border-[#C4A882] flex items-center justify-center text-[#8C6845] hover:border-[#C1502E] hover:text-[#C1502E] transition-all cursor-pointer bg-transparent">{arrow}</button>))}
      <div className="flex gap-2">{STORIES.map((_,i)=>(<button key={i} onClick={()=>sst(i)} className="rounded-full border-none cursor-pointer transition-all duration-300 p-0" style={{width:story===i?28:10,height:10,background:story===i?STORIES[i].color:'#C4A882'}}/>))}</div>
    </div>
  </div></section>

  {/* PROGRAMMES */}
  <section ref={r4} className="bg-[#FAF3E8] py-28 px-6"><div className="max-w-[1260px] mx-auto">
    <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
      <div style={{opacity:v4?1:0,transform:v4?'none':'translateY(20px)',transition:'all 0.7s ease'}}><Eyebrow>How We Help</Eyebrow><h2 className="lora font-bold text-[#2C1A0E] leading-[1.25]" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Four ways we light candles</h2></div>
      <Link href="/programmes" className="nunito font-bold text-[0.9rem] px-5 py-2 border-[1.5px] border-[#C4A882] text-[#5C3D25] hover:border-[#C1502E] hover:text-[#C1502E] rounded transition-all no-underline">All Programmes →</Link>
    </div>
    <div className="flex border-b-2 border-[#EDE0CC] mb-10 overflow-x-auto">
      {PROGRAMMES.map((pg,i)=>(<button key={i} onClick={()=>spr(i)} className="bg-transparent border-none cursor-pointer px-7 py-4 nunito whitespace-nowrap transition-all duration-200 -mb-0.5" style={{borderBottom:`3px solid ${prog===i?pg.color:'transparent'}`,fontWeight:prog===i?800:600,color:prog===i?'#2C1A0E':'#8C6845',fontSize:'0.9rem'}}><span className="mr-2">{pg.emoji}</span>{pg.title}</button>))}
    </div>
    <div key={prog} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nunito font-extrabold text-[0.72rem] tracking-[0.08em] uppercase mb-4" style={{background:`${p.color}18`,color:p.color}}>{p.emoji} {p.tagline}</div>
        <h3 className="lora font-bold text-[#2C1A0E] leading-[1.3] mb-4" style={{fontSize:'clamp(1.7rem,3vw,2.3rem)'}}>{p.title} Programme</h3>
        <p className="nunito text-[0.97rem] text-[#5C3D25] leading-[1.9] mb-7 font-light">{p.body}</p>
        <Link href={p.href} className="inline-flex items-center gap-2 nunito font-bold text-[0.9rem] px-5 py-2.5 text-white rounded transition-all duration-200 no-underline hover:opacity-90 hover:-translate-y-px" style={{background:`linear-gradient(135deg,${p.color},${p.color}cc)`,boxShadow:`0 4px 16px ${p.color}40`}}>Learn More →</Link>
      </div>
      <div className="relative">
        {p.img?(<><div className="absolute inset-0 rounded-lg" style={{background:`${p.color}22`,transform:'translate(10px,10px)'}}/><Image src={p.img} alt={p.title} width={800} height={600} className="w-full rounded-md object-cover relative z-10" style={{aspectRatio:'4/3'}} quality={85}/></>):(<div className="w-full rounded-md flex items-center justify-center" style={{aspectRatio:'4/3',background:`linear-gradient(135deg,${p.color}22,${p.color}44)`}}><div className="text-center"><div className="text-7xl mb-2">{p.emoji}</div><div className="lora italic text-[1.1rem] font-semibold" style={{color:p.color}}>{p.tagline}</div></div></div>)}
      </div>
    </div>
  </div></section>

  {/* DONATE */}
  <section ref={r5} className="bg-[#F2E8D5] py-28 px-6"><div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div style={{opacity:v5?1:0,transform:v5?'none':'translateX(-24px)',transition:'all 0.8s ease'}}>
      <Eyebrow>Give Today</Eyebrow>
      <h2 className="lora font-bold text-[#2C1A0E] leading-[1.25] mb-5" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Your donation <span className="text-[#C1502E] italic font-normal">writes someone's story</span></h2>
      <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-7 font-light">CandleAid is entirely volunteer-run. Every single rupee you give flows directly to a family in need — nothing is taken for administration.</p>
      <div className="flex flex-col gap-3 mb-8">
        {[['LKR 500','Buys school books for a child for a full term'],['LKR 1,000','Feeds a struggling family for a week'],['LKR 2,500','Contributes to one kidney dialysis session'],['LKR 5,000','Sponsors a month of schooling for one student']].map(([a,d])=>(<div key={a} className="flex gap-3 items-start"><div className="nunito font-extrabold text-[0.72rem] px-2 py-1 rounded bg-[#EDE0CC] text-[#C1502E] flex-shrink-0 mt-0.5">{a}</div><p className="nunito text-[0.9rem] text-[#5C3D25] leading-[1.65] font-light">{d}</p></div>))}
      </div>
      <div className="p-5 bg-[#EDE0CC] border-l-[3px] border-[#C1502E] rounded-r"><div className="nunito font-extrabold text-[0.72rem] tracking-[0.1em] uppercase text-[#C1502E] mb-3">Become a Sponsor</div><div className="flex flex-wrap gap-2">{[['a Family','/sponsor#family'],['a Patient','/sponsor#patient'],['a Student','/sponsor#student']].map(([l,h])=>(<Link key={l} href={h} className="nunito font-bold text-[0.85rem] px-3 py-1.5 border-[1.5px] border-[#C4A882] text-[#C1502E] rounded hover:bg-[#C1502E] hover:text-white hover:border-[#C1502E] transition-all no-underline">Sponsor {l}</Link>))}</div></div>
    </div>
    <div style={{opacity:v5?1:0,transform:v5?'none':'translateX(24px)',transition:'all 0.8s ease 0.15s'}}>
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-10 shadow-xl rounded-xl">
        <div className="text-center mb-7"><CandleGlyph size={28} glow/><div className="lora font-bold text-[1.5rem] text-[#2C1A0E] mt-3">Make a Gift</div><div className="nunito text-[0.8rem] text-[#8C6845] mt-1">Choose an amount in LKR</div></div>
        <div className="grid grid-cols-2 gap-2.5 mb-2.5">{[500,1000,2500,5000].map(a=>(<button key={a} onClick={()=>{sa(a);sc('');}} className="py-3.5 nunito font-extrabold text-[0.95rem] cursor-pointer rounded-md transition-all duration-200" style={{border:`2px solid ${amt===a?'#C1502E':'#EDE0CC'}`,background:amt===a?'linear-gradient(135deg,#C1502E,#A0441F)':'white',color:amt===a?'white':'#2C1A0E',boxShadow:amt===a?'0 4px 16px rgba(193,80,46,0.3)':'none'}}>LKR {a.toLocaleString()}</button>))}</div>
        <input type="number" placeholder="Or enter custom amount (LKR)" value={custom} onChange={e=>{sc(e.target.value);sa(null);}} className="w-full px-4 py-3 nunito text-[0.9rem] text-[#2C1A0E] bg-white rounded-md mb-4 outline-none transition-all duration-200" style={{border:`2px solid ${custom?'#C1502E':'#EDE0CC'}`}}/>
        <Link href="/donate" className="flex items-center justify-center gap-2 w-full py-4 nunito font-extrabold text-[1rem] text-white rounded-md mb-4 no-underline transition-all hover:opacity-95 hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#C1502E,#A0441F)',boxShadow:'0 6px 24px rgba(193,80,46,0.35)'}}><CandleGlyph size={16}/> Donate Securely</Link>
        <p className="text-center nunito text-[0.75rem] text-[#8C6845] leading-relaxed">🔒 Secure payment &nbsp;•&nbsp; 100% reaches those in need &nbsp;•&nbsp; No overheads</p>
      </div>
    </div>
  </div></section>

  {/* BOARD NOTICE */}
  <section ref={r6} className="bg-[#F2E8D5] pb-20 px-6"><div className="max-w-[1260px] mx-auto">
    <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-10 shadow-sm rounded-md" style={{opacity:v6?1:0,transform:v6?'none':'translateY(20px)',transition:'all 0.7s ease'}}>
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="flex-1 min-w-[260px]">
          <div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 rounded-full bg-[#E8973A]"/><span className="nunito font-extrabold text-[0.72rem] tracking-[0.18em] uppercase text-[#E8973A]">Notice from the Board</span></div>
          <h3 className="lora font-bold text-[1.35rem] text-[#2C1A0E] mb-3">An important message about CandleAid's future</h3>
          <p className="nunito text-[0.92rem] text-[#5C3D25] leading-[1.8] max-w-2xl font-light">The Management of CandleAid Lanka has made a vital decision regarding the future of the organisation. While there are no immediate operational changes, the Board wanted to be transparent with the community that has supported us for thirty years.</p>
          {noticeOpen&&(<div className="mt-5 flex flex-col gap-2.5 animate-fade-in">{docs.map((d,i)=>(<a key={i} href={d.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 nunito font-bold text-[0.88rem] text-[#C1502E] no-underline hover:opacity-75 transition-opacity">📄 {d.label}</a>))}</div>)}
        </div>
        <button onClick={()=>sno(!noticeOpen)} className="nunito font-extrabold text-[0.82rem] px-5 py-2.5 rounded transition-all cursor-pointer tracking-[0.04em] flex-shrink-0" style={{background:noticeOpen?'#C1502E':'transparent',color:noticeOpen?'white':'#C1502E',border:'2px solid #C1502E'}}>{noticeOpen?'Hide Letters':'Read the Letters'}</button>
      </div>
    </div>
  </div></section>
  </>);
}
