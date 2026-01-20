const env = process.env.VERCEL_ENV || "development";

const isProduction = env === "production";

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-15";

export const dataset = isProduction ? "production" : "development";

export const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	"Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const siteUrl =
	isProduction && process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
