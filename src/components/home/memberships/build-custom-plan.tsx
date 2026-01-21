import { getTranslations } from "next-intl/server";

export async function BuildCustomPlan() {
	const t = await getTranslations("home.memberships");

	return (
		<div className="mt-12 flex justify-center">
			<div className="rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-base font-semibold text-primary shadow-sm">
				{t("build-custom-plan")}
			</div>
		</div>
	);
}
