import Link from "next/link";
import Image from "next/image";
export function SiteFooter() { return <footer className="footer"><div className="container">
  <div className="footer-grid">
    <div><Link href="/" className="footer-brand"><Image src="/logo-mark.svg" alt="" width={37} height={37} unoptimized />sohjhro<span>.</span></Link><p className="footer-intro">An early-stage applied AI research and engineering initiative exploring how intelligent systems act, learn and improve in the world.</p></div>
    <div><div className="footer-title">Explore</div><Link href="/research/">Research agenda</Link><Link href="/worlds/">Worlds concept</Link><Link href="/engineering/">Engineering</Link><Link href="/company/">Company</Link></div>
    <div><div className="footer-title">Connect</div><Link href="/contact/">Contact</Link><a href="https://github.com/Raufnarejo505" rel="noopener noreferrer" target="_blank">GitHub ↗</a><a href="mailto:arauf.bscsses21@iba-suk.edu.pk">Email ↗</a></div>
  </div>
  <div className="footer-bottom"><span>© 2026 SOHJHRO · RESEARCH / ENGINEERING</span><span>Independent initiative · Research directions are exploratory; no product launch implied.</span></div>
</div></footer>; }
