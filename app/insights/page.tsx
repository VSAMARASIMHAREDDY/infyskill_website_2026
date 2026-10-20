'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../home.css';
import './verify.css';
interface CertificateData { Certificateid: string; Name: string; Workshopname: string; Designation: string; Duration: string; }
export default function InsightsPage(){
 const [certificateId,setCertificateId]=useState('');
 const [result,setResult]=useState<CertificateData|null>(null);
 const [status,setStatus]=useState<'idle'|'loading'|'found'|'missing'|'error'>('idle');
 async function verify(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();
  if(status==='loading') return;
  const id=certificateId.trim();
  if(!id) return;
  setStatus('loading');setResult(null);
  try{
   const response=await fetch('https://opensheet.elk.sh/1qBC88TxFjuINhXS14C3_e_3-yvushF0F6dr1lZfuD3s/Sheet1',{signal:AbortSignal.timeout(15000)});
   if(!response.ok) throw new Error('Verification service unavailable');
   const data:unknown=await response.json();
   if(!Array.isArray(data)) throw new Error('Unexpected verification response');
   const match=data.find((item:CertificateData)=>typeof item.Certificateid==='string' && item.Certificateid.trim()===id);
   setResult(match||null);setStatus(match?'found':'missing');
  }catch{setStatus('error');}
 }
 return <div className="premium-home ph-verify"><Navbar /><main>
  <section className="vc-main"><div className="ph-wrap vc-layout"><div className="vc-intro"><p className="ph-eyebrow"><span className="ph-dot" /> INFYSKILL CERTIFICATE VERIFICATION</p><h1>Learning earned.<br /><span>Credentials verified.</span></h1><p className="vc-lead">Check a certificate against InfySkill’s records using the ID printed on the certificate.</p><ol className="vc-steps">{[['Find the certificate ID','Locate the unique ID on your InfySkill certificate.'],['Enter it exactly','Copy the full ID, including any letters, numbers and separators.'],['Review the record','Compare the returned name and course details with the certificate.']].map(([title,text],index)=><li key={title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><Link className="ph-text-link" href="/contact">Need help finding your ID? →</Link></div>
  <div className="vc-panel"><div className="vc-panel-heading"><span className="vc-symbol" aria-hidden="true">✓</span><div><p className="ph-eyebrow">CHECK A CREDENTIAL</p><h2>Verify your certificate.</h2></div></div><p className="vc-panel-copy">Enter the certificate ID to look up its associated record.</p><form onSubmit={verify} aria-busy={status==='loading'}><label htmlFor="certificateId">Certificate ID</label><input id="certificateId" name="certificateId" value={certificateId} onChange={event=>{setCertificateId(event.target.value);setStatus('idle');setResult(null);}} disabled={status==='loading'} autoComplete="off" autoCapitalize="off" spellCheck={false} required placeholder="Enter the ID from your certificate" aria-describedby="certificate-hint" /><p id="certificate-hint">Use the ID exactly as printed. IDs are case-sensitive.</p><button className="ph-button" type="submit" disabled={status==='loading'||!certificateId.trim()}>{status==='loading'?'Checking certificate…':'Verify certificate'} <span aria-hidden="true">↗</span></button></form>
  <div className="vc-result" aria-live="polite" aria-atomic="true">
   {status==='idle'&&<div className="vc-idle"><span aria-hidden="true">◎</span><p>Your verification result will appear here.</p></div>}
   {status==='loading'&&<p className="vc-loading">Checking InfySkill’s certificate records…</p>}
   {status==='found'&&result&&<div className="vc-success"><p className="vc-result-label">✓ MATCH FOUND</p><h3>Certificate verified.</h3><p>This certificate ID matches a record issued by InfySkill.</p><dl>{[['Certificate ID',result.Certificateid],['Name',result.Name],['Course / workshop',result.Workshopname],['Designation',result.Designation],['Duration',result.Duration]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value||'Not provided'}</dd></div>)}</dl></div>}
   {status==='missing'&&<div className="vc-notice"><p className="vc-result-label">NO MATCH FOUND</p><h3>We couldn’t find this ID.</h3><p>Check for typing errors and try again. If the details look correct, contact our team for help.</p><Link href="/contact" className="ph-text-link">Contact support →</Link></div>}
   {status==='error'&&<div className="vc-notice"><p className="vc-result-label">CHECK UNAVAILABLE</p><h3>We couldn’t complete the check.</h3><p>The verification service may be temporarily unavailable. Try again shortly or contact our team.</p><Link href="/contact" className="ph-text-link">Contact support →</Link></div>}
  </div></div></div></section>
  <section className="ph-section"><div className="ph-wrap"><div className="ph-section-head"><div><p className="ph-eyebrow">CLARITY YOU CAN CHECK</p><h2>A record behind every credential.</h2><p>Verification helps learners, employers and institutions confirm certificate details.</p></div></div><div className="vc-benefits">{[['01','For learners','Confirm the name and course associated with your certificate ID.'],['02','For employers','Compare the returned record with the credential shared by a candidate.'],['03','For institutions','Check the course or workshop information held in InfySkill’s records.']].map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 </main><Footer /></div>;
}
