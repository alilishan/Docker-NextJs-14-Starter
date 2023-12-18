'use client'

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem={true}
                enableColorScheme={true}
                storageKey="next-theme"
                themes={['dark', 'light']}
            >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}
