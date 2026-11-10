import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { content } from "@/content/engineering";
export const metadata: Metadata = {title:"Engineering & Collaboration",description:"Explore technical and research collaborations with Sohjhro."};
export default function Page(){return <StaticContent html={content}/>;}
