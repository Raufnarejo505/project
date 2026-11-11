"use client";
import { useState } from "react";
type Scenario={name:string;title:string;description:string;tools:string;variation:string;check:string;steps:string[]};
const scenarios:Record<string,Scenario> = {
 repair:{
  name:"Test repair",title:"Repair a failing test without changing unrelated code.",
  description:"An agent receives a synthetic repository with a failing unit test. It must identify the cause, make a scoped change and preserve unrelated project state.",
  tools:"Code sandbox · Test runner · Git diff",variation:"Misleading failure message",
  check:"Target test passes; unrelated files unchanged",
  steps:["Inspect the failing test and its dependencies","Apply a minimal patch inside the sandbox","Verify the final diff and test outcomes"]
 },
 reproduce:{
  name:"Experiment replay",title:"Reproduce an experiment with the expected configuration.",
  description:"A research task references a checkpoint, a dataset split and a configuration. The agent must reproduce the specified run rather than silently substituting different artifacts.",
  tools:"Experiment runner · Config store · Artifacts",variation:"Stale configuration reference",
  check:"Correct configuration and artifacts selected",
  steps:["Resolve the exact run configuration","Execute in a resettable environment","Check the output manifest against the task"]
 },
 isolation:{
  name:"State isolation",title:"Complete a task without leaking state into the next run.",
  description:"Two evaluation tasks share an environment template. The agent must finish one task without leaving changes that could influence the next agent's result.",
  tools:"State snapshot · Task runner · Verifier",variation:"Residual files from a prior run",
  check:"Environment resets to the expected snapshot",
  steps:["Inspect the initial snapshot","Perform the authorized task","Compare final and reset state independently"]
 }
};
export function WorldsExplorer() {
 const [selected,setSelected] = useState<keyof typeof scenarios>("repair");
 const s=scenarios[selected];
 return <section className="section deep"><div className="container"><div className="section-head">
  <div className="eyebrow">A synthetic test environment</div>
  <h2>One task. Multiple tools. Verifiable changes.</h2>
  <p>Explore an illustrative scenario specification. The panel below is a concept explorer, not an executable agent or verified benchmark.</p>
 </div><div className="simulator" id="concept-explorer">
  <div className="sim-toolbar"><span>SOHJHRO WORLDS / DESIGN PREVIEW</span><span className="sim-status">● ILLUSTRATIVE</span></div>
  <div className="sim-body"><div className="sim-list"><strong>SELECT A SCENARIO</strong>
   {(Object.keys(scenarios) as (keyof typeof scenarios)[]).map(key=><button key={key} type="button" className="sim-choice" aria-pressed={key===selected} onClick={()=>setSelected(key)}>{scenarios[key].name}</button>)}
  </div><div className="sim-content"><div className="eyebrow">SIMULATED AGENT TASK</div>
  <h3 className="goal">{s.title}</h3><p className="body">{s.description}</p>
  <div className="sim-details"><div className="sim-detail"><small>CONNECTED TOOLS</small><b>{s.tools}</b></div>
  <div className="sim-detail"><small>STATE VARIATION</small><b>{s.variation}</b></div>
  <div className="sim-detail"><small>KEY CHECK</small><b>{s.check}</b></div></div>
  <div className="sim-checks" aria-live="polite">{s.steps.map(t=><span key={t}>→ {t}</span>)}</div>
  <p className="concept-disclaimer">DESIGN CONCEPT ONLY. NO AGENT IS BEING RUN AND NO PERFORMANCE RESULTS ARE SHOWN.</p>
  </div></div></div></div></section>;
}
