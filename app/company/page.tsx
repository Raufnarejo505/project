import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { content } from "@/content/company";
export const metadata: Metadata = {title:"About Sohjhro",description:"An independent early-stage AI research and engineering initiative."};
export default function Page(){return <StaticContent html={content}/>;}
