import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "AiTech",
	description:
		"Soluzioni innovative di Intelligenza Artificiale e servizi tecnologici.",
	manifest: "/site.webmanifest",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F9F9F9" },
		{ media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/icons/favicon-32x32.png",
		apple: "/icons/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				url: "/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/icons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="it">
			<body className="antialiased">{children}</body>
		</html>
	);
}