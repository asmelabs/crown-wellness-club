import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Crown Wellness Club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return children;
}
