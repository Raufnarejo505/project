"use client";
import { useEffect, useRef, useState } from "react";

const chapters = [
  { eyebrow:"01 / TASK", title:"Start with a precise task.",
    description:"Give an agent a scoped objective inside a synthetic software environment. A plausible answer alone is not evidence of success.",
    signal:"Task defined", detail:"Repair a failing unit test in an isolated workspace", meta:"Scope: fixture repository" },
  { eyebrow:"02 / ACTION", title:"Let the agent act.",
    description:"Allow tool calls in a resettable sandbox. Record the actions and observe what changes—not only what the agent says.",
    signal:"Sandbox execution", detail:"Agent inspects files, applies a patch and runs tests", meta:"Tools: editor · test runner" },
  { eyebrow:"03 / STATE", title:"Inspect the resulting state.",
    description:"Collect the file diff, execution trace and test artifacts. Separate expected changes from unintended side effects.",
    signal:"State captured", detail:"File diff and test outcomes become inspectable", meta:"Evidence: diff · trace · artifacts" },
  { eyebrow:"04 / VERIFICATION", title:"Check the evidence independently.",
    description:"Compare the final environment with explicit checks. The verifier—not the agent's own explanation—determines whether the objective was met.",
    signal:"Independent check", detail:"Validate the target behavior and unchanged files", meta:"Outcome: verified against checks" }
] as const;
const nodes = ["Task", "Sandbox", "State", "Verify"] as const;

export function ScrollNarrative() {
  const [active, setActive] = useState(0);
  const sections = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const focusLine = window.innerHeight * 0.47;
      let nearest = 0, distance = Number.POSITIVE_INFINITY;
      sections.current.forEach((section, index) => {
        if (!section) return;
        const box = section.getBoundingClientRect();
        const gap = Math.abs(box.top + box.height / 2 - focusLine);
        if (gap < distance) { nearest = index; distance = gap; }
      });
      setActive(current => current === nearest ? current : nearest);
    };
    const queue = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", queue, { passive:true });
    window.addEventListener("resize", queue);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const chapter = chapters[active];
  return (
    <section className="motion-narrative" aria-labelledby="motion-narrative-heading">
      <div className="container">
        <div className="motion-narrative-heading">
          <div className="eyebrow">From action to evidence</div>
          <h2 id="motion-narrative-heading">A reliable agent must <em>show its work.</em></h2>
          <p>Explore a proposed evaluation sequence. Scroll to see how a task becomes an independently checkable outcome.</p>
        </div>
        <div className="motion-narrative-grid">
          <div className="motion-visual" aria-hidden="true">
            <div className="motion-visual-top">
              <span>SOHJHRO / EVALUATION TRACE</span><span className="motion-concept-indicator">CONCEPT ONLY</span>
            </div>
            <div className="motion-flow">
              <div className="motion-flow-track"><span style={{ width: String((active / (nodes.length - 1)) * 100) + "%" }} /></div>
              {nodes.map((node,index) => (
                <div key={node} className={"motion-flow-node" + (index === active ? " is-current" : "") + (index < active ? " is-complete" : "")}>
                  <span className="motion-flow-number">{String(index+1).padStart(2,"0")}</span>
                  <span>{node}</span>
                </div>
              ))}
            </div>
            <div key={active} className="motion-output">
              <div className="motion-output-label">{chapter.signal}</div>
              <div className="motion-output-line">{chapter.detail}</div>
              <div className="motion-output-meta">{chapter.meta}</div>
            </div>
            <div className="motion-visual-bottom">
              <span>SIMULATED RESEARCH WORKFLOW</span><span>{String(active+1).padStart(2,"0")} / 04</span>
            </div>
          </div>
          <div className="motion-chapters">
            {chapters.map((item,index) => (
              <article key={item.eyebrow}
                className={"motion-chapter" + (index === active ? " is-active" : "")}
                ref={node => { sections.current[index]=node; }}>
                <span className="motion-chapter-index">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="motion-narrative-note">Illustrative design sequence. No agent is running and no empirical performance is claimed.</p>
      </div>
    </section>
  );
}
