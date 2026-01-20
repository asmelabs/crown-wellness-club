import { getSettings } from "@/lib/get-settings";
import { DesktopNavbar } from "./desktop-navbar";

export async function Navbar() {
	const settings = await getSettings();

	const { phone, email } = settings ?? {};

	return (
		<div>
			<DesktopNavbar phone={phone} email={email} />
		</div>
	);
}
