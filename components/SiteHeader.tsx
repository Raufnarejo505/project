"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { href: "/research/", label: "Research" },
  { href: "/worlds/", label: "Worlds" },
  { href: "/engineering/", label: "Engineering" },
  { href: "/company/", label: "Company" },
];
function SymbolMark() {
  return <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="3.7" r="1.5" fill="currentColor"/>
    <circle cx="19.2" cy="16.1" r="1.5" fill="currentColor"/><circle cx="4.8" cy="16.1" r="1.5" fill="currentColor"/>
    <path d="M12 5.7v3.3m2.5 4.4 3.2 1.9m-8.1-1.9-3.2 1.9" stroke="currentColor" strokeWidth="1.6"/>
  </svg>;
}
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container navbar">
      <Link className="brand" href="/" aria-label="Sohjhro home" onClick={()=>setOpen(false)}>
        <span className="brand-symbol"><SymbolMark/></span><span className="brand-name">sohjhro<span className="brand-dot">.</span></span>
      </Link>
      <nav className="navlinks" id="primary-navigation" aria-label="Primary navigation" data-open={String(open)}>
        {links.map(link => <Link href={link.href} key={link.href} aria-current={pathname===link.href?"page":undefined} onClick={()=>setOpen(false)}>{link.label}</Link>)}
      </nav>
      <div className="nav-end"><span className="nav-tag">RESEARCH-LED AI</span>
        <Link href="/contact/" className="btn small">Get in touch <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-controls="primary-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button>
      </div>
    </div></header>
  </>;
}
