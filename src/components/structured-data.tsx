type JsonLdProps = {
	data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
	const json = JSON.stringify(data).replace(/</g, "\\u003c");

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - data is from CMS, JSON.stringify escapes content
			dangerouslySetInnerHTML={{ __html: json }}
		/>
	);
}
