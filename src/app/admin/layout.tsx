export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="apple-mobile-web-app-title" content="Crown Wellness" />
			</head>
			<body>{children}</body>
		</html>
	);
}
