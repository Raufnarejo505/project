"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { href: "/research/", label: "Research" },
  { href: "/worlds/", label: "Worlds" },
  { href: "/engineering/", label: "Engineering" },
  { href: "/company/", label: "Company" },
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container navbar">
      <Link className="brand" href="/" aria-label="Sohjhro home" onClick={()=>setOpen(false)}>
        <span className="brand-symbol"><Image src="/logo-mark.svg" alt="" width={44} height={44} priority unoptimized /></span><span className="brand-name">sohjhro<span className="brand-dot">.</span></span>
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
