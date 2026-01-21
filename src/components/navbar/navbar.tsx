import { getSettings } from "@/lib/get-settings";
import { navbarItems } from "./data";
import { DesktopNavbar } from "./desktop-navbar";

export async function Navbar({ locale }: { locale: string }) {
	const settings = await getSettings(locale);

	const { phone, email, pageRendering } = settings ?? {};

	const items = navbarItems.filter((item) => pageRendering.includes(item.slug));

	return (
		<div>
			<DesktopNavbar phone={phone} email={email} items={items} />
		</div>
	);
}
