import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const csp = [
	"default-src 'self'",
	"script-src 'self' 'unsafe-inline' 'unsafe-eval'",
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob: https://cdn.sanity.io",
	"font-src 'self' data:",
	"connect-src 'self' https://cdn.sanity.io https://*.sanity.io",
	"frame-src 'self' https://www.google.com https://maps.google.com",
	"frame-ancestors 'self'",
	"form-action 'self'",
	"base-uri 'self'",
	"upgrade-insecure-requests",
];

const nextConfig: NextConfig = {
	reactCompiler: true,
	typedRoutes: true,

	poweredByHeader: false,
	productionBrowserSourceMaps: false,

	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.devtool = false;
		}

		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},

	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value:
							"camera=(), microphone=(), geolocation=(), interest-cohort=()",
					},
					{
						key: "Content-Security-Policy",
						value: csp.join("; "),
					},
				],
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
