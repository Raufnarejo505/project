import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { content } from "@/content/home";

export const metadata: Metadata = {
  title: "Sohjhro — Applied AI Research & Engineering",
  description: "Sohjhro explores stateful agent environments, verifiable AI evaluation and applied engineering.",
};

export default function Page() {
  const [before, after] = content.split("<!-- SOHJHRO_SCROLL_NARRATIVE -->");
  return <><StaticContent html={before} /><ScrollNarrative /><StaticContent html={after} /></>;
}
