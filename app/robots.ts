import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://aiub-website-cloning.vercel.app";
  
  return {
    rules: [
      {
        userAgent: "*", 
        allow: "/",     
        disallow: [
          "/api/",      
          "/dashboard/", 
          "/login/",    
          "/signup/",
          "/lib/"  
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}