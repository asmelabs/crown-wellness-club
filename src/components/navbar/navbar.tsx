import { getSettings } from "@/lib/get-settings";
import { navbarItems } from "./data";
import { DesktopNavbar } from "./desktop-navbar";

export async function Navbar({ locale }: { locale: string }) {
	const settings = await getSettings(locale);

	const { phone, email } = settings ?? {};

	return (
		<div>
			<DesktopNavbar phone={phone} email={email} items={navbarItems} />
		</div>
	);
}
