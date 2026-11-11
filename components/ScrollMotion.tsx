"use client";
import { useEffect } from "react";

/** Progressive enhancement: content stays visible without JavaScript. */
export function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const selector = [
      ".section .section-head", ".section .research-card",
      ".section .info-panel", ".section .grid-side > div",
      ".section .timeline-item", ".section .line-item",
      ".section .statement", ".page-hero .container",
      ".contact-band-inner", ".simulator"
    ].join(", ");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold:.08, rootMargin:"0px 0px -25px 0px" });
    document.querySelectorAll<HTMLElement>(selector).forEach(target => {
      if (target.getBoundingClientRect().top < window.innerHeight*.9) return;
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });
    const hero = document.querySelector<HTMLElement>(".hero");
    const links = hero?.querySelector<SVGPathElement>(".story-links");
    let frame=0;
    const draw=() => {
      frame=0;
      if (!hero || !links) return;
      const progress=Math.max(.18, Math.min(1, window.scrollY / Math.max(1, hero.offsetHeight*.65)));
      links.style.strokeDashoffset=String(1-progress);
    };
    const schedule=() => { if (!frame) frame=window.requestAnimationFrame(draw); };
    if (links && hero) {
      hero.classList.add("story-active");
      draw();
      window.addEventListener("scroll",schedule,{passive:true});
      window.addEventListener("resize",schedule);
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll",schedule);
      window.removeEventListener("resize",schedule);
      if(frame)window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
