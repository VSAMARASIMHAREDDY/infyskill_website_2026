'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../app/home.css';
const links = [
  ['HOME','/'],['ABOUT','/about'],['COURSES','/courses'],['PROJECTS','/projects'],
  ['OUR PLATFORMS','/platforms'],['VERIFY CERTIFICATE','/insights'],['INTERNSHIPS','/internships'],['CONTACT US','/contact'],
];
export default function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);
  const pathname = usePathname();
  return <header className="ph-header ph-site-header"><div className="ph-wrap ph-nav">
    <Link href="/" className="ph-logo" aria-label="InfySkill home"><img src="/images/logotwo.png" alt="InfySkill EduTech" width="168" height="40" /></Link>
    <button className="ph-menu-button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '✕' : '☰'}</button>
    <nav id="site-navigation" aria-label="Main navigation" className={`ph-links ${menuOpen ? 'is-open' : ''}`} onKeyDown={event => {if(event.key === 'Escape'){setMenuOpen(false);document.querySelector<HTMLButtonElement>('.ph-site-header .ph-menu-button')?.focus();}}}>
      {links.map(([label,href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
    </nav>
  </div></header>;
}
