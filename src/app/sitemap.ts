import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://port-folio-one-gules.vercel.app/";
  const pages = [
    "#",
    "#about",
    "#services",
    "#my work",
    "#contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}