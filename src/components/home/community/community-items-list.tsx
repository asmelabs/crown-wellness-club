import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { CommunityItem } from "./community-item";

interface CommunityItemsListProps {
  items: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["communityList"]>;
}

export function CommunityItemsList({ items }: CommunityItemsListProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <CommunityItem key={item._key} item={item} />
      ))}
    </div>
  );
}
