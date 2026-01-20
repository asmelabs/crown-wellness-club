import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { ScaleItem } from "./scale-item";

interface ScaleGridProps {
	items: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["scaleList"]>;
}

export function ScaleGrid({ items }: ScaleGridProps) {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{items.map((item) => (
				<ScaleItem key={item._key} item={item} />
			))}
		</div>
	);
}
