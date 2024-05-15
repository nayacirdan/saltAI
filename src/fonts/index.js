import { Inter, Metrophobic } from '@next/font/google'
import localFont from '@next/font/local'
export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
})

export const metrophobic = Metrophobic({
    subsets: ['latin'],
    weight: ['400'],
})
export const clashGroteskMedium = localFont({ src: './ClashGrotesk-Medium.woff2', weight:'500' })
export const clashGroteskSemibold = localFont({ src: './ClashGrotesk-Semibold.woff2', weight:'600' })
