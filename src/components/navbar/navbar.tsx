import { getSettings } from "@/lib/get-settings";
import { navbarItems } from "./data";
import { DesktopNavbar } from "./desktop-navbar";

export async function Navbar() {
	const settings = await getSettings();

	const { phone, email, pageRendering } = settings ?? {};

	const items = navbarItems.filter((item) => pageRendering.includes(item.slug));

	return (
		<div>
			<DesktopNavbar phone={phone} email={email} items={items} />
		</div>
	);
}
