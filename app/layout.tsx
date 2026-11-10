import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";
export const metadata: Metadata = {
 title: {default:"Sohjhro — Applied AI Research & Engineering",template:"%s | Sohjhro"},
 description:"Sohjhro explores stateful agent environments, verifiable AI evaluation and applied engineering for intelligent systems.",
 metadataBase:new URL("https://www.sohjhro.com"),
 openGraph:{type:"website",siteName:"Sohjhro",locale:"en_US"},
 robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>;
}
