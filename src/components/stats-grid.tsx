"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STAGGER_DELAY = 0.1;
const VALUE_DELAY_OFFSET = 0.2;

interface Stat {
	value: string;
	label: string;
	description?: string;
}

interface StatsGridHeaderProps {
	title?: string;
	description?: string;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
}

export function StatsGridHeader({
	title,
	description,
	className,
	titleClassName,
	descriptionClassName,
}: StatsGridHeaderProps) {
	if (!title || title.length === 0) return null;

	return (
		<motion.div
			className={cn("mb-16 text-center", className)}
			initial={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<h2
				className={cn(
					"mb-4 font-bold text-3xl text-foreground lg:text-4xl",
					titleClassName,
				)}
			>
				{title}
			</h2>
			{description !== undefined && description.length > 0 && (
				<p
					className={cn(
						"mx-auto max-w-2xl text-foreground/70 text-lg",
						descriptionClassName,
					)}
				>
					{description}
				</p>
			)}
		</motion.div>
	);
}

interface StatsGridProps extends StatsGridHeaderProps {
	renderHeader?: boolean;
	stats?: Array<Omit<StatCardProps, "ref" | "index">>;
	className?: string;
	containerClassName?: string;
	gridClassName?: string;
	cardStyles?: Pick<
		StatCardProps,
		"className" | "valueClassName" | "labelClassName" | "descriptionClassName"
	>;
	headerStyles?: Pick<
		StatsGridHeaderProps,
		"className" | "titleClassName" | "descriptionClassName"
	>;
}

export function StatsGrid({
	title,
	description,
	stats,
	className,
	renderHeader = true,
	cardStyles,
	headerStyles,
	containerClassName,
	gridClassName,
}: StatsGridProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	if (!stats || stats.length === 0) return null;

	return (
		<section className={cn("py-20", className)}>
			<DynamicIcon name="camera" />

			<div className={cn("mx-auto max-w-7xl px-6", containerClassName)}>
				{renderHeader && (
					<StatsGridHeader
						title={title}
						description={description}
						className={headerStyles?.className}
						titleClassName={headerStyles?.titleClassName}
						descriptionClassName={headerStyles?.descriptionClassName}
					/>
				)}

				<div
					className={cn(
						"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
						gridClassName,
					)}
					ref={ref}
				>
					{stats.map((stat, index) => (
						<StatCard
							key={stat.label}
							ref={ref}
							value={stat.value}
							label={stat.label}
							description={stat.description}
							index={index}
							className={cn(cardStyles?.className, stat.className)}
							valueClassName={cn(
								cardStyles?.valueClassName,
								stat.valueClassName,
							)}
							labelClassName={cn(
								cardStyles?.labelClassName,
								stat.labelClassName,
							)}
							descriptionClassName={cn(
								cardStyles?.descriptionClassName,
								stat.descriptionClassName,
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

interface StatCardProps extends Stat {
	ref: React.RefObject<HTMLDivElement | null>;
	index: number;
	className?: string;
	valueClassName?: string;
	labelClassName?: string;
	descriptionClassName?: string;
}

export function StatCard({
	value,
	label,
	description,
	ref,
	index,
	className,
	valueClassName,
	labelClassName,
	descriptionClassName,
}: StatCardProps) {
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
			className={cn(
				"group relative overflow-hidden rounded-2xl border border-border bg-background p-8 text-center transition-all hover:border-primary hover:shadow-lg",
				className,
			)}
			initial={{ opacity: 0, y: 30 }}
			key={label}
			transition={{ duration: 0.6, delay: index * STAGGER_DELAY }}
		>
			<motion.div
				animate={isInView ? { scale: 1 } : { scale: 0.5 }}
				className={cn(
					"mb-2 font-bold text-4xl text-primary lg:text-5xl",
					valueClassName,
				)}
				initial={{ scale: 0.5 }}
				transition={{
					duration: 0.8,
					delay: index * STAGGER_DELAY + VALUE_DELAY_OFFSET,
					type: "spring",
					stiffness: 200,
				}}
			>
				{value}
			</motion.div>
			<h3
				className={cn(
					"mb-2 font-semibold text-foreground text-lg",
					labelClassName,
				)}
			>
				{label}
			</h3>
			{description && (
				<p className={cn("text-foreground/70 text-sm", descriptionClassName)}>
					{description}
				</p>
			)}
			{/* Hover effect background */}
			<motion.div
				className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
				initial={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				whileHover={{ opacity: 1 }}
			/>
		</motion.div>
	);
}
