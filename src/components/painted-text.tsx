import { cn } from "@/lib/utils";

interface PaintedTextProps {
	text: string;
	color?: string;
	direction?: "left" | "right";
	className?: string;
	paintCount?: number | boolean | `${number}%`;
}

export function PaintedText({
	text,
	paintCount = 1,
	direction = "left",
	className,
	color = "primary",
}: PaintedTextProps) {
	// Split by spaces but keep the spaces
	const parts = text.split(/(\s+)/);

	// Calculate paint count
	const resolvedPaintCount =
		paintCount === true
			? parts.length
			: paintCount === false
				? 0
				: typeof paintCount === "number"
					? paintCount
					: resolvePercentage(paintCount, parts.length);

	// Divide the parts based on direction
	const paintedParts =
		direction === "left"
			? parts.slice(-resolvedPaintCount) // Take from the end
			: parts.slice(0, resolvedPaintCount); // Take from the beginning

	const nonPaintedParts =
		direction === "left"
			? parts.slice(0, -resolvedPaintCount) // Take from the beginning
			: parts.slice(resolvedPaintCount); // Take from the end

	return (
		<>
			{direction === "left" ? (
				<>
					{nonPaintedParts.join("")}
					<span className={cn(className, `text-${color}`)}>
						{paintedParts.join("")}
					</span>
				</>
			) : (
				<>
					<span className={cn(className, `text-${color}`)}>
						{paintedParts.join("")}
					</span>
					{nonPaintedParts.join("")}
				</>
			)}
		</>
	);
}

function resolvePercentage(paintCount: `${number}%`, total: number) {
	const percentage = Number.parseInt(paintCount.replace("%", ""), 10);
	return Math.round((percentage / 100) * total);
}
