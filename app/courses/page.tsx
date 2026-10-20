'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../home.css';
import './courses.css';
import { courseData } from './catalog';
const categories = ['All courses', 'Programming & Web', 'Data & AI', 'Cloud & Security', 'Business & People', 'Engineering', 'Free in Telugu'];
function courseCategory(index: number) {
  if (index >= 22) return 'Free in Telugu';
  if ([0,1,2,3,9,10].includes(index)) return 'Programming & Web';
  if ([4,5,6].includes(index)) return 'Data & AI';
  if ([7,8].includes(index)) return 'Cloud & Security';
  if ([11,12,13,14,15].includes(index)) return 'Business & People';
  return 'Engineering';
}
export default function CoursesPage() {
  const [category, setCategory] = useState('All courses');
  const [search, setSearch] = useState('');
  const courses = courseData.map((course,index) => ({...course,category:courseCategory(index)}));
  const visible = courses.filter(course => (category === 'All courses' || category === course.category) && `${course.title} ${course.desc}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <div className="premium-home ph-courses">
    <a className="ph-skip" href="#courses-main">Skip to content</a>
      <Navbar />
    <main id="courses-main">
      <section className="cr-hero"><div className="ph-wrap cr-hero-grid"><div><p className="ph-eyebrow"><span className="ph-dot" /> FIND YOUR NEXT CHAPTER</p><h1>A skill today.<br /><span>A possibility tomorrow.</span></h1><p>Explore practical courses across technology, business and engineering. Find the path that fits your interests and goals.</p><a className="ph-button" href="#course-catalog">Explore courses ↓</a></div><div className="cr-guide"><p className="ph-eyebrow">YOUR STARTING POINT</p><h2>Curiosity is all<br />you need to begin.</h2><div><span>01</span><p>Find a subject that interests you.</p></div><div><span>02</span><p>Talk to our team about the right batch.</p></div><div><span>03</span><p>Learn, practise and build confidence.</p></div><Link href="/contact" className="ph-text-link">Help me choose ↗</Link></div></div></section>
      <section className="ph-section cr-catalog" id="course-catalog"><div className="ph-wrap"><div className="ph-section-head"><div><p className="ph-eyebrow">EXPLORE THE CATALOG</p><h2>Your direction. Your pace.</h2><p>26 courses, including four free Telugu learning playlists.</p></div><div className="cr-search"><label htmlFor="course-search">Search courses</label><input id="course-search" type="search" placeholder="Try Python, design or marketing" value={search} onChange={event => setSearch(event.target.value)} /></div></div><div className="ph-filters" role="group" aria-label="Course categories">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="cr-results" role="status">{visible.length} {visible.length === 1 ? 'course' : 'courses'} found</p><div className="cr-grid">{visible.map(course => <article className="cr-card" key={course.title}><div className="cr-image"><img src={course.img} alt={course.title} style={{objectFit: course.style ? "contain" : "cover"}} width="600" height="360" loading="lazy" />{course.free && <span className="cr-free">FREE · TELUGU</span>}</div><div className="cr-card-body"><p className="cr-category">{course.category}</p><h3>{course.title}</h3><p className="cr-description">{course.desc}</p><div className="cr-card-footer"><Link className="cr-details-link" href={`/courses/${course.slug}`}>View course details <span aria-hidden="true">↗</span></Link><a className="cr-enquire" href={course.youtube || `https://wa.me/919080087187?text=Hey%2C%20I%20want%20to%20enroll%20in%20${course.link}%20course`} target="_blank" rel="noopener noreferrer" aria-label={`${course.free ? 'Start learning' : 'Inquire about'} ${course.title} (opens in a new tab)`}>{course.free ? 'Start learning' : 'Inquire about course'} <span aria-hidden="true">↗</span></a>{!course.free && <span>Ask about fees &amp; upcoming batches</span>}</div></div></article>)}</div>{visible.length === 0 && <div className="cr-empty"><h3>No courses found.</h3><p>Try another search or explore all categories.</p><button onClick={() => {setSearch('');setCategory('All courses');}}>Show all courses</button></div>}</div></section>
      <section className="ph-section cr-support"><div className="ph-wrap"><div className="ph-section-head"><div><p className="ph-eyebrow">MORE THAN A COURSE</p><h2>Build skills with support.</h2><p>Practical learning, with guidance for your next step.</p></div></div><div className="cr-benefits">{[['01','Industry guidance','Learn from trainers with practical experience.'],['02','Career preparation','Get guidance on resumes and interview preparation.'],['03','Hands-on projects','Apply concepts and build work for your portfolio.'],['04','Course certification','Ask our team about completion and certification requirements.']].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ph-section"><div className="ph-wrap"><div className="ph-final"><div><p className="ph-eyebrow">LET’S FIND YOUR DIRECTION</p><h2>Not sure where to start?</h2><p>Tell us your interests and goals. Our team can help you choose.</p></div><div className="ph-final-actions"><Link className="ph-button ph-button-orange" href="/contact">Talk to our team ↗</Link><a href="https://whatsapp.com/channel/0029Vb6e6PzFnSz1v98Zrd1l" target="_blank" rel="noopener noreferrer">Follow course updates ↗</a></div></div></div></section>
    </main>    <Footer />
  </div>;
}
