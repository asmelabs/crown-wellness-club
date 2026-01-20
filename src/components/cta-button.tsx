"use client";

import { motion } from "framer-motion";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CTAButtonProps extends React.ComponentProps<typeof Button> {
	containerClassName?: string;
	effectClassName?: string;
	contentClassName?: string;
}

export function CTAButton({
	children,
	className,
	containerClassName,
	effectClassName,
	contentClassName,
	...props
}: CTAButtonProps) {
	return (
		<motion.div
			className={cn("inline-flex", containerClassName)}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 280, damping: 18 }}
		>
			<Button
				size="xl"
				className={cn(
					"group relative min-w-[300px] min-h-[60px] overflow-hidden rounded-full font-semibold",
					"bg-primary text-primary-foreground shadow-primary/30 shadow-lg",
					"hover:shadow-primary/40 transition-[transform,box-shadow] duration-300",
					className,
				)}
				{...props}
			>
				<span
					className={cn(
						"absolute inset-0 -z-10 opacity-0 transition-opacity duration-300",
						"bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]",
						"group-hover:opacity-100",
						effectClassName,
					)}
				/>
				<span
					className={cn(
						"absolute inset-0 -z-10 translate-x-[-120%] transition-transform duration-500",
						"bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)]",
						"group-hover:translate-x-[120%]",
						effectClassName,
					)}
				/>
				<span
					className={cn(
						"relative z-10 inline-flex items-center gap-2",
						contentClassName,
					)}
				>
					{children}
				</span>
			</Button>
		</motion.div>
	);
}
