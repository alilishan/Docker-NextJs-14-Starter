import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';

import '../sass/index.scss';
import {Providers} from "./providers";
import NavBar from '@/components/NavBar';

const poppins = Poppins({ weight: "400", style: 'normal', subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Ounch Logs Application',
    description: 'Search and filter logs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} text-foreground bg-background`}>
                <Providers>
                    <NavBar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
