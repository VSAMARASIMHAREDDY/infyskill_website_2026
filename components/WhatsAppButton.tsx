'use client';
import { usePathname } from 'next/navigation';
import './WhatsAppButton.css';
export default function WhatsAppButton(){
 const pathname=usePathname();
 if(pathname==='/internships') return null;
 return <a className="whatsapp-floating" href="https://wa.me/919080087187?text=Hello%20InfySkill%20Team%2C%20I%20would%20like%20some%20information." target="_blank" rel="noopener noreferrer" aria-label="Chat with InfySkill on WhatsApp (opens in a new tab)" title="Chat on WhatsApp"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.44 0 .08 5.36.08 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.95 11.95 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.24-6.2-3.48-8.41ZM12.05 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.7.97.99-3.6-.24-.37a9.9 9.9 0 0 1-1.52-5.28c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.14 1.04 7.02 2.91a9.86 9.86 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.48-1.78-1.65-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.68-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.71.31 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg></a>;
}
