"use client";
import { useState } from "react";
type Scenario={name:string;title:string;description:string;tools:string;variation:string;check:string;steps:string[]};
const scenarios:Record<string,Scenario> = {
 refund:{name:"Refund request",title:"Resolve a billing dispute without issuing a duplicate refund.",description:"An account has a pending cancellation and a previous partial refund. The agent must verify eligibility before changing billing and CRM records.",tools:"CRM · Billing · Helpdesk",variation:"Prior refund exists",check:"No duplicate transaction",steps:["Verify authorized account","Check eligibility and existing transactions","Reconcile final state across systems"]},
 access:{name:"Account access",title:"Restore account access without changing the wrong user.",description:"Two users share similar names across a company workspace. The agent receives an access request but must distinguish identity from display labels and respect the correct role.",tools:"CRM · Identity · Helpdesk",variation:"Ambiguous user records",check:"Only authorized user updated",steps:["Resolve account identity","Enforce role and scope constraints","Detect unrelated permission changes"]},
 policy:{name:"Policy amendment",title:"Apply an updated refund policy to an older support case.",description:"A policy amendment becomes effective after a customer submitted a request. The agent must evaluate the applicable version rather than automatically choosing the newest document.",tools:"Policies · Billing · Helpdesk",variation:"Effective-date conflict",check:"Correct policy version used",steps:["Identify date of request","Select applicable policy version","Verify amount and audit trail"]}
};
export function WorldsExplorer() {
 const [selected,setSelected] = useState<keyof typeof scenarios>("refund");
 const s=scenarios[selected];
 return <section className="section deep"><div className="container"><div className="section-head">
  <div className="eyebrow">A fictional environment</div>
  <h2>One task. Multiple systems. Real consequences inside the simulation.</h2>
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
