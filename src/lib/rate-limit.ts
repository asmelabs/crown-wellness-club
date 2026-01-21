import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const contactFormRatelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(3, "10 m"),
	analytics: true,
	prefix: "ratelimit:contact-form",
});
