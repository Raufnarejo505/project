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
    const trace = hero?.querySelector<SVGPathElement>(".signal-main-line");
    const dot = hero?.querySelector<SVGCircleElement>(".signal-progress-dot");
    const halo = hero?.querySelector<SVGCircleElement>(".signal-progress-ring");
    const stage = hero?.querySelector<HTMLElement>(".signal-stage");
    let frame=0;
    const draw=() => {
      frame=0;
      if (!hero || !trace) return;
      const progress=Math.max(.40, Math.min(1, .40 + window.scrollY / Math.max(1, hero.offsetHeight*.75)*.60));
      trace.style.strokeDashoffset=String(1000*(1-progress));
      const point=trace.getPointAtLength(trace.getTotalLength()*progress);
      for (const circle of [dot,halo]) {
        circle?.setAttribute("cx",String(point.x));
        circle?.setAttribute("cy",String(point.y));
      }
      stage?.setAttribute("data-complete",progress>.97?"true":"false");
    };
    const schedule=() => { if (!frame) frame=window.requestAnimationFrame(draw); };
    if (trace && hero) {
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
