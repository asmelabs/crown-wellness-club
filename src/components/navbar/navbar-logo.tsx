"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LogoIcon } from "../brand/logo";

interface NavbarLogoProps {
	setIsScrolled: (isScrolled: boolean) => void;
}

export function NavbarLogo({ setIsScrolled }: NavbarLogoProps) {
	const [showNavbarText, setShowNavbarText] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window === "undefined") return;

			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			setIsScrolled(scrollY > 20);

			const startTransition = windowHeight * 0.3;
			const endTransition = windowHeight * 0.8;
			const showTextThreshold =
				startTransition + (endTransition - startTransition) * 0.7;
			setShowNavbarText(scrollY > showTextThreshold);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setIsScrolled]);

	return (
		<div className="flex items-center justify-center">
			<Link
				href="/"
				className="flex flex-col items-center space-y-1 text-foreground"
			>
				<LogoIcon width={50} />
				<motion.div
					className="text-center overflow-hidden"
					initial={{ height: 0, opacity: 0, scale: 0.8 }}
					animate={{
						height: showNavbarText ? "auto" : 0,
						opacity: showNavbarText ? 1 : 0,
						scale: showNavbarText ? 1 : 0.8,
					}}
					transition={{
						duration: 0.4,
						ease: "easeOut",
						opacity: { duration: 0.2, delay: showNavbarText ? 0.1 : 0 },
					}}
				>
					<div className="font-bold text-sm leading-tight whitespace-nowrap">
						CROWN WELLNESS
					</div>
				</motion.div>
			</Link>
		</div>
	);
}
