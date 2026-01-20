import { UsersIcon } from "lucide-react";
import { Banner } from "@/components/banner";
import type { LocalizedValue } from "@/lib/utils";

interface ServiceBannerProps {
	title?: LocalizedValue;
	description?: LocalizedValue;
}

export function ServiceBanner({ title, description }: ServiceBannerProps) {
	return (
		<Banner
			title={title}
			titleProps={{ enablePaintedText: true }}
			description={description}
			header={<UsersIcon className="size-20 text-primary" />}
		/>
	);
}
