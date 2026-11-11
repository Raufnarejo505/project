import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";
export const metadata: Metadata = {
 title: {default:"Sohjhro — Applied AI Research & Engineering",template:"%s | Sohjhro"},
 description:"Sohjhro explores stateful agent environments, verifiable AI evaluation and applied engineering for intelligent systems.",
 metadataBase:new URL("https://www.sohjhro.com"),
 openGraph:{type:"website",siteName:"Sohjhro",locale:"en_US"},
 icons:{icon:[{url:"/favicon.svg?v=3",sizes:"any",type:"image/svg+xml"},{url:"/favicon.svg?v=3",sizes:"any",type:"image/svg+xml"}],shortcut:"/favicon.svg?v=3"},

 robots:{index:true,follow:true},
};
export const viewport: Viewport = {themeColor:"#F5EFE3"};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>;
}
