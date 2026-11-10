import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { content } from "@/content/contact";
export const metadata: Metadata = {title:"Contact Sohjhro",description:"Get in touch about research and engineering collaborations."};
export default function Page(){return <StaticContent html={content}/>;}
