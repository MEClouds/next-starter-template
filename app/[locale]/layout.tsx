import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { arSA, enUS } from "@clerk/localizations"
import { getLangDir } from "rtl-detect"
import { ClerkProvider } from "@clerk/nextjs"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next template",
  description: "Starter next-intl template",
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  const normalizeLocale = locale == "ar" ? arSA : enUS
  const direction = getLangDir(locale)
  return (
    <html lang={locale} dir={direction}>
      <body className={inter.className}>
        <ClerkProvider localization={normalizeLocale}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
