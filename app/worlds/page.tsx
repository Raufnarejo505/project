import type { Metadata } from "next";
import { StaticContent } from "@/components/StaticContent";
import { WorldsExplorer } from "@/components/WorldsExplorer";
import { before, after } from "@/content/worlds";
export const metadata: Metadata = {title:"Sohjhro Worlds — Exploratory Concept",description:"A proposed research concept for executable simulations of software workflows for AI agents."};
export default function Page(){return <><StaticContent html={before}/><WorldsExplorer/><StaticContent html={after}/></>;}
