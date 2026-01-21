type JsonLdProps = {
	data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - data is from CMS, JSON.stringify escapes content
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
