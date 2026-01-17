"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { NavbarItemType } from "./types";

export function SidebarItem({
	item,
	onNavigate,
}: {
	item: NavbarItemType;
	onNavigate?: () => void;
}) {
	const pathname = usePathname();
	const isSection = item.href.includes("#");

	const handleClick = () => {
		if (isSection) {
			if (pathname === "/") {
				const target = document.querySelector(item.href.replace("/", ""));
				if (target) target.scrollIntoView({ behavior: "smooth" });
			} else {
				window.location.href = item.href;
			}
			onNavigate?.();
			return;
		}
		onNavigate?.();
	};

	if (isSection) {
		return (
			<button
				type="button"
				onClick={handleClick}
				className="block w-full text-left text-2xl font-light text-foreground hover:text-primary transition-colors duration-300 py-2 relative overflow-hidden group"
			>
				<span className="relative z-10">{item.title}</span>
				<div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-out" />
			</button>
		);
	}

	return (
		<Link
			href={item.href}
			onClick={handleClick}
			className="block text-2xl font-light text-foreground hover:text-primary transition-colors duration-300 py-2 relative overflow-hidden group"
		>
			<span className="relative z-10">{item.title}</span>
			<div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-out" />
		</Link>
	);
}
