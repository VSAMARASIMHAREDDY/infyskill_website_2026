'use client';

import { useEffect, useRef, useState } from 'react';

const communityPhotos = Array.from({ length: 24 }, (_, index) => index + 1)
  .filter(number => ![11, 23, 24].includes(number))
  .map(number => `/images/image${String(number).padStart(2, '0')}.jpg`);

const testimonials = Array.from({ length: 6 }, (_, index) => `/images/testimonial${index + 1}.webp`);

export default function PhotoBook({ feedback = false }: { feedback?: boolean }) {
  const photos = feedback ? testimonials : communityPhotos;
  const itemLabel = feedback ? 'student feedback' : 'community photo';
  const thumbnailsId = feedback ? 'feedback-thumbnails' : 'community-thumbnails';
  const [page, setPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [allVisible, setAllVisible] = useState(false);
  const [turn, setTurn] = useState<{ direction: number; from: number } | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const book = useRef<HTMLDivElement>(null);
  const step = mobile || feedback ? 1 : 2;
  const lastPage = Math.floor((photos.length - 1) / step) * step;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 640px)');
    const update = () => {
      setMobile(query.matches);
      setPage(current => query.matches || feedback ? current : Math.floor(current / 2) * 2);
      setTurn(null);
      if (timer.current) clearTimeout(timer.current);
    };
    update();
    query.addEventListener('change', update);
    return () => {
      query.removeEventListener('change', update);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [feedback]);

  useEffect(() => {
    if (!autoplay || interacting || feedback || turn || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const automatic = setInterval(() => {
      if (document.hidden) return;
      const next = page >= lastPage ? 0 : page + step;
      setTurn({ direction: 1, from: Math.min(page + step - 1, photos.length - 1) });
      timer.current = setTimeout(() => setTurn(null), 650);
      setPage(next);
    }, 4000);
    return () => clearInterval(automatic);
  }, [autoplay, interacting, feedback, turn, page, lastPage, step, photos.length]);
  function navigate(direction: number) {
    setAutoplay(false);
    const next = page + direction * step;
    if (turn || next < 0 || next > lastPage) return;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTurn({ direction, from: direction > 0 ? Math.min(page + step - 1, photos.length - 1) : page });
      timer.current = setTimeout(() => setTurn(null), 650);
    }
    setPage(next);
  }

  function photo(index: number) {
    return index < photos.length ? <>
      <a href={photos[index]} target="_blank" rel="noopener noreferrer" aria-label={`View ${itemLabel} ${index + 1} at full size (opens in a new tab)`}>
        <img src={photos[index]} alt={`InfySkill ${itemLabel} ${index + 1}`} width="1280" height="960" loading="lazy" />
      </a>
      <div className="ph-book-caption"><span>{feedback ? 'INFYSKILL · STUDENT STORIES' : 'INFYSKILL · SHARED MOMENTS'}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
    </> : <div className="ph-book-ending"><span className="ph-eyebrow">THE NEXT CHAPTER</span><h3>More memories.<br />More possibilities.</h3><p>Keep learning, together.</p></div>;
  }

  return <section className={feedback ? "ph-feedback-book" : "ph-section"} id={feedback ? "student-feedback" : "community-book"}>
    <div className={feedback ? "ph-feedback-book-inner" : "ph-wrap"}>
      {!feedback && <div className="ph-section-head"><div><p className="ph-eyebrow">LIFE AT INFYSKILL</p><h2>Every moment, a new chapter.</h2><p>Turn through memories from our workshops, college events and learner community.</p></div><span className="ph-book-label">THE COMMUNITY ALBUM · 21 PHOTOS</span></div>}
      <div className="ph-book-stage" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
        <div ref={book} className={`ph-book ${feedback ? "ph-book-single" : ""}`} role="region" aria-label={feedback ? "InfySkill student testimonial book" : "InfySkill community photo book"} tabIndex={0}
          onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); navigate(event.key === 'ArrowRight' ? 1 : -1); } }}
          onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
          onTouchEnd={event => { const start = touch.current; touch.current = null; if (!start) return; const dx = event.changedTouches[0].clientX - start.x; const dy = event.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) navigate(dx < 0 ? 1 : -1); }}>
          <div className="ph-book-page">{photo(page)}</div>
          {step === 2 && <div className="ph-book-page">{photo(page + 1)}</div>}
          {turn && <div aria-hidden="true" className={`ph-book-turn ${turn.direction > 0 ? 'forward' : 'backward'}`}><img src={photos[turn.from]} alt="" width="1280" height="960" /></div>}
        </div>
      </div>
      <div className="ph-book-toolbar">
        <button onClick={() => navigate(-1)} disabled={page === 0 || !!turn} aria-label={feedback ? "Previous testimonial page" : "Previous book page"}>← <span>Previous</span></button>
        <div><p aria-live={autoplay ? 'off' : 'polite'}>{feedback ? 'Feedback' : 'Photo'} {page + 1}{step === 2 && page + 1 < photos.length ? `–${page + 2}` : ''} of {photos.length}</p><span>{mobile ? 'Swipe or tap to turn a page' : 'Use the arrows to turn a page'}</span></div>
        <button onClick={() => navigate(1)} disabled={page === lastPage || !!turn} aria-label={feedback ? "Next testimonial page" : "Next book page"}><span>Next</span> →</button>
      </div>
      {!feedback && <div className="ph-book-auto-control"><button type="button" onClick={() => setAutoplay(current => !current)} aria-pressed={autoplay}>{autoplay ? 'Pause page turns' : 'Play page turns'}</button><span>Automatic page turns every 4 seconds</span></div>}
      <div className="ph-book-browse"><button aria-expanded={allVisible} aria-controls={thumbnailsId} onClick={() => setAllVisible(current => !current)}>{feedback ? (allVisible ? 'Hide all feedback' : 'View all feedback') : (allVisible ? 'Hide all photos' : 'View all 21 photos')} <span aria-hidden="true">{allVisible ? '−' : '+'}</span></button><p>{feedback ? 'Select the testimonial to read it at full size.' : 'Select any photo in the book to view it at full size.'}</p></div>
      <div id={thumbnailsId} hidden={!allVisible}>{allVisible && <div className={`ph-photo-grid ${feedback ? "ph-feedback-thumbnails" : ""}`} aria-label={feedback ? "All student feedback" : "All InfySkill community photos"}>{photos.map((src, index) => <button key={src} aria-label={`Open book at ${itemLabel} ${index + 1}`} aria-pressed={index >= page && index < page + step} onClick={() => { setAutoplay(false); if (timer.current) clearTimeout(timer.current); setTurn(null); setPage(Math.floor(index / step) * step); book.current?.focus({ preventScroll: true }); book.current?.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}><img src={src} alt={`InfySkill ${itemLabel} ${index + 1}`} width="400" height="300" loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div>}</div>
    </div>
  </section>;
}
