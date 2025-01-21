import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PathJam",
	description:
		"link shortening app with multiple links on a single page with a short shareable link",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.variable} ${mont.variable} antialiased font-sans bg-gray-950 text-white`}
			>
				{children}
			</body>
		</html>
	);
}
