import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api", "/login", "/register"],
        },
        sitemap: "https://example.com/sitemap.xml",
    }
}