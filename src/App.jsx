import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const moments=[
  ['01','Rain Letter','A courtyard holds the last silver of the monsoon while marigold, silk and stone gather into one quiet frame.'],
  ['02','Saffron Hour','Warm ritual light travels across carved walls, wet leaves and hands carrying small inherited gestures.'],
  ['03','Procession Note','Music enters as a measured pulse: fabric, laughter and reflected lamps moving through the rain-dark architecture.'],
  ['04','Afterlight','The celebration softens into portraits, jasmine paper and a final amber trace after the weather has passed.']
];

export default function App(){
 const root=useRef(null);
 useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;const ctx=gsap.context(()=>{gsap.from('[data-reveal]',{y:28,opacity:0,duration:.85,stagger:.08,ease:'power2.out'});gsap.from('.hero-mark',{scale:.92,opacity:0,duration:1.1,ease:'power3.out'});},root);return()=>ctx.revert();},[]);
 return <main ref={root}>
  <section className="hero" aria-labelledby="hero-title">
   <div className="grain" aria-hidden="true"/>
   <nav data-reveal aria-label="Story navigation"><span>PF / 036</span><a href="#register">Field register</a></nav>
   <div className="hero-copy"><p data-reveal className="kicker">Indian wedding editorial · monsoon afterlight</p><h1 id="hero-title" data-reveal>Saffron<br/>Afterrain</h1><p data-reveal className="lede">A four-movement wedding study in wet stone, saffron cloth, jasmine ivory and the glow that remains after rain.</p></div>
   <div className="hero-mark" aria-hidden="true"><span>36</span></div>
   <p data-reveal className="scroll-note">Scroll to read the register ↓</p>
  </section>
  <section id="register" className="register" aria-labelledby="register-title">
   <header><p className="kicker">Field register / four movements</p><h2 id="register-title">Weather becomes memory.</h2></header>
   <div className="moments">{moments.map(([n,t,d])=><article key={n} data-reveal><span className="number">{n}</span><div className="photo" aria-hidden="true"><i/></div><div className="copy"><h3>{t}</h3><p>{d}</p></div></article>)}</div>
  </section>
  <section className="closing"><p data-reveal>Rain leaves the courtyard.</p><h2 data-reveal>The colour stays.</h2><p data-reveal className="signature">Saffron Afterrain · Project Factory 036</p></section>
 </main>
}
