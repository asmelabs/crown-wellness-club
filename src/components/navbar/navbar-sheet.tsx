"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MailIcon, PhoneIcon, XIcon } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { usePathname } from "@/i18n/navigation";
import { navbarItems } from "./data";
import { HamburgerMenu } from "./hamburger-menu";
import { SidebarItem } from "./sidebar-item";

interface NavbarSheetProps {
	phone?: string | null;
	email?: string | null;
}

export function NavbarSheet({ phone, email }: NavbarSheetProps) {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useQueryState(
		"sidebar-open",
		parseAsBoolean.withDefault(false),
	);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isSidebarOpen) return;
		const originalOverflow = document.body.style.overflow;
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsSidebarOpen(false);
			}
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeydown);
		return () => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [isSidebarOpen, setIsSidebarOpen]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is used to close the sidebar when navigating to a new page
	useEffect(() => {
		if (!isSidebarOpen) return;
		setIsSidebarOpen(false);
	}, [pathname, setIsSidebarOpen]);

	return (
		<>
			<HamburgerMenu
				isOpen={!!isSidebarOpen}
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			/>
			{isMounted &&
				createPortal(
					<AnimatePresence>
						{isSidebarOpen && (
							<>
								<motion.div
									className="fixed inset-0 z-90 bg-black/50 backdrop-blur-sm"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									onClick={() => setIsSidebarOpen(false)}
								/>
								<motion.aside
									className="fixed top-0 left-0 h-full w-80 sm:w-96 z-100 bg-background/95 backdrop-blur-xl border-r border-border/60 shadow-2xl"
									initial={{ x: -400 }}
									animate={{ x: 0 }}
									exit={{ x: -400 }}
									transition={{ duration: 0.4, ease: "easeInOut" }}
								>
									<div className="flex h-full flex-col p-8">
										<div className="flex items-center justify-between">
											<div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
												Menu
											</div>
											<Button
												type="button"
												size="icon"
												variant="ghost"
												aria-label="Close menu"
												onClick={() => setIsSidebarOpen(false)}
											>
												<XIcon />
											</Button>
										</div>
										<motion.nav
											className="flex-1"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ duration: 0.3, delay: 0.1 }}
										>
											<div className="space-y-6 mt-10">
												{navbarItems.map((item, index) => (
													<motion.div
														key={item.href}
														className="relative group"
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{
															duration: 0.3,
															delay: 0.2 + index * 0.05,
														}}
													>
														<SidebarItem
															item={item}
															onNavigate={() => setIsSidebarOpen(false)}
														/>
													</motion.div>
												))}
											</div>
										</motion.nav>
										{(phone || email) && (
											<div className="mt-8 border-t border-border/60 pt-6 text-xs text-muted-foreground">
												<div className="space-y-3">
													{phone && (
														<a
															href={`tel:${phone}`}
															className="flex items-center gap-2 hover:text-primary transition-colors"
														>
															<PhoneIcon className="size-3.5" />
															<span>{phone}</span>
														</a>
													)}
													{email && (
														<a
															href={`mailto:${email}`}
															className="flex items-center gap-2 hover:text-primary transition-colors"
														>
															<MailIcon className="size-3.5" />
															<span>{email}</span>
														</a>
													)}
												</div>
											</div>
										)}
									</div>
								</motion.aside>
							</>
						)}
					</AnimatePresence>,
					document.body,
				)}
		</>
	);
}
