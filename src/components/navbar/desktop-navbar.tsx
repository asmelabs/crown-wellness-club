"use client";

import { motion } from "framer-motion";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./language-selector";
import { NavbarLogo } from "./navbar-logo";
import { NavbarSheet } from "./navbar-sheet";
import type { NavbarItemType } from "./types";

interface DesktopNavbarProps {
	phone?: string | null;
	email?: string | null;
	items: NavbarItemType[];
}

export function DesktopNavbar({ phone, email, items }: DesktopNavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "backdrop-blur-md bg-background/70 border-b border-border/60"
					: "bg-transparent"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-3 items-center h-16 lg:h-20">
					<div className="flex items-center justify-start gap-4">
						{items.length > 0 && (
							<NavbarSheet phone={phone} email={email} items={items} />
						)}
						<div className="hidden xl:flex items-center gap-6 text-xs text-muted-foreground">
							{phone && (
								<a
									href={`tel:${phone}`}
									className="flex items-center gap-2 hover:text-primary transition-colors duration-300 whitespace-nowrap"
								>
									<PhoneIcon className="size-3.5" />
									<span>{phone}</span>
								</a>
							)}
							{email && (
								<a
									href={`mailto:${email}`}
									className="flex items-center gap-2 hover:text-primary transition-colors duration-300 whitespace-nowrap"
								>
									<MailIcon className="size-3.5" />
									<span>{email}</span>
								</a>
							)}
						</div>
					</div>
					<NavbarLogo setIsScrolled={setIsScrolled} />
					<div className="flex items-center justify-end">
						<LanguageSelector />
					</div>
				</div>
			</div>
		</motion.header>
	);
}
