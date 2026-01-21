import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
