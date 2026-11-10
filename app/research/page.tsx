import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { content } from "@/content/research";
export const metadata: Metadata = {title:"Research Agenda",description:"Explore Sohjhro's research directions: stateful agent environments, verifiable evaluation and generalization."};
export default function Page(){return <StaticContent html={content}/>;}
