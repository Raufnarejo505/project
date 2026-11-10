import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["", "/research", "/worlds", "/engineering", "/company", "/contact"].map(path=>({url:"https://www.sohjhro.com"+path+"/",changeFrequency:"monthly",priority:path?0.7:1}));
}
