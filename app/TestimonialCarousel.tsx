'use client';

import { useEffect, useState } from 'react';

const feedback = Array.from({ length: 6 }, (_, index) => index + 1);

export default function TestimonialCarousel() {
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 640px)');
    const tablet = window.matchMedia('(max-width: 1000px)');
    const update = () => {
      setReducedMotion(motion.matches);
      const count = mobile.matches ? 1 : tablet.matches ? 2 : 3;
      setVisible(count);
      setPosition(current => Math.min(current, feedback.length - count));
    };
    update();
    [motion, mobile, tablet].forEach(query => query.addEventListener('change', update));
    return () => [motion, mobile, tablet].forEach(query => query.removeEventListener('change', update));
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion) return;
    const timer = setInterval(() => {
      if (!document.hidden) setPosition(current => current === 0 ? feedback.length - visible : current - 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, interacting, reducedMotion, visible, position]);

  function move(direction: number) {
    setPaused(true);
    setPosition(current => (current + direction + feedback.length - visible + 1) % (feedback.length - visible + 1));
  }

  return <div className="ph-feedback-carousel" role="region" aria-roledescription="carousel" aria-label="Student testimonials"
    onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <div className="ph-feedback-window"><div className="ph-feedback-track" style={{ transform: `translateX(calc(-${position} * (100% + 24px) / ${visible}))` }}>
      {feedback.map((number, index) => <a className="ph-testimonial-card" key={number} href={`/images/testimonial${number}.webp`} target="_blank" rel="noopener noreferrer"
        tabIndex={index >= position && index < position + visible ? 0 : -1} aria-hidden={index < position || index >= position + visible}
        aria-label={`View student feedback ${number} at full size (opens in a new tab)`}>
        <div className="ph-testimonial-photo"><img src={`/images/testimonial${number}.webp`} alt={`Student feedback shared with InfySkill, ${number} of 6`} width="600" height="600" loading="lazy" /></div>
        <div className="ph-testimonial-card-footer"><span>Student feedback {String(number).padStart(2, '0')}</span><span>Read full-size <span aria-hidden="true">↗</span></span></div>
      </a>)}
    </div></div>
    <div className="ph-feedback-navigation"><button onClick={() => move(-1)} aria-label="Previous testimonials">←</button><span aria-live={paused || reducedMotion ? 'polite' : 'off'}>Feedback {position + 1}{visible > 1 ? `–${position + visible}` : ''} of 6</span><button onClick={() => move(1)} aria-label="Next testimonials">→</button><button className="ph-feedback-pause" onClick={() => { setReducedMotion(false); setPaused(!(paused || reducedMotion)); }} aria-label={paused || reducedMotion ? 'Start automatic testimonial scrolling' : 'Pause automatic testimonial scrolling'}>{paused || reducedMotion ? 'Play' : 'Pause'}</button></div>
  </div>;
}
