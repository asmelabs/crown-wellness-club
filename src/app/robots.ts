import type { MetadataRoute } from "next";
import { siteUrl } from "@/sanity/env";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/admin/", "/api/", "/_next/", "/_vercel/", "/_static/"],
			},
		],
		sitemap: `${siteUrl}/sitemap.xml`,
	};
}
