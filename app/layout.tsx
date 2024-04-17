import '@/app/global.css';

import { Poppins } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const poppins = Poppins({
	weight: ['400', '500'],
	style: 'normal',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ShodhLab - A platform for research and development',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
