import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { InnovationItem } from "./innovation-item";

interface InnovationItemsListProps {
	items: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["innovationList"]>;
}

export function InnovationItemsList({ items }: InnovationItemsListProps) {
	return (
		<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{items.map((item) => (
				<InnovationItem item={item} key={item._key} />
			))}
		</div>
	);
}
