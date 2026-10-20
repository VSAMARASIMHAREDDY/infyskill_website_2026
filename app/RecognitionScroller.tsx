'use client';
import { useEffect, useRef } from 'react';
export default function RecognitionScroller({children}:{children:React.ReactNode}){
 const row=useRef<HTMLDivElement>(null);
 const paused=useRef(false);
 useEffect(()=>{
  const element=row.current;
  if(!element) return;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,last=0,direction=1,waitUntil=0,position=element.scrollLeft;
  function animate(time:number){
   if(!element) return;
   const elapsed=last?Math.min(time-last,40):0;last=time;
   const max=element.scrollWidth-element.clientWidth;
   if(!motion.matches&&!paused.current&&!document.hidden&&max>0&&time>=waitUntil){
    const next=position+direction*elapsed*.035;
    position=Math.max(0,Math.min(max,next));
    element.scrollLeft=Math.round(position);
    if(next>=max||next<=0){direction*=-1;waitUntil=time+1800;}
   }
   frame=requestAnimationFrame(animate);
  }
  const onInteraction=()=>{waitUntil=performance.now()+3500;};
  const syncPosition=()=>{if(paused.current||performance.now()<waitUntil) position=element.scrollLeft;};
  element.addEventListener('scroll',syncPosition,{passive:true});
  element.addEventListener('wheel',onInteraction,{passive:true});
  element.addEventListener('touchstart',onInteraction,{passive:true});
  frame=requestAnimationFrame(animate);
  return()=>{cancelAnimationFrame(frame);element.removeEventListener('scroll',syncPosition);element.removeEventListener('wheel',onInteraction);element.removeEventListener('touchstart',onInteraction);};
 },[]);
 return <div ref={row} className="ph-recognition-grid ph-recognition-auto" role="region" aria-label="Company recognitions — slowly scrolling, pauses on hover or focus" onMouseEnter={()=>{paused.current=true;}} onMouseLeave={()=>{paused.current=false;}} onFocusCapture={()=>{paused.current=true;}} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget)) paused.current=false;}}>{children}</div>;
}
