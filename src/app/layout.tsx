import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Lapor Cepat',
	description:
		'Platform pelaporan, pemantauan, dan verifikasi keluhan fasilitas umum di kabupaten Bandung'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="id"
			className={`${inter.className} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col px-3 md:px-4">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
