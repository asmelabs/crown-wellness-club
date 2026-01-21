"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function ScrollDownIndicator() {
	const t = useTranslations("home.hero");

	const handleScroll = () => {
		window.location.href = "#services";
	};

	return (
		<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
			<Button
				className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors hover:bg-transparent!"
				variant="ghost"
				onClick={handleScroll}
			>
				<span className="text-xs tracking-[0.2em] uppercase">
					{t("scroll-down")}
				</span>
				<div className="flex flex-col items-center -space-y-3">
					<ChevronDown size={20} className="animate-bounce" />
					<ChevronDown
						size={20}
						className="animate-bounce opacity-60"
						style={{ animationDelay: "0.15s" }}
					/>
				</div>
			</Button>
		</div>
	);
}
