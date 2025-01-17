import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

const locales = ["ar", "en"]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./locale/${locale}/common.json`)).default,
  }
})
