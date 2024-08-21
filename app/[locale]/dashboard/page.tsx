"use client"
import { UserButton } from "@clerk/nextjs"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export default function Home() {
  const t = useTranslations()
  const router = useRouter()
  return (
    <main className=" flex flex-col items-center justify-center gap-5 h-screen">
      <h3>{t("protected")}</h3>
      <UserButton />
      <div className="flex gap-3 flex-row rtl:flex-row-reverse">
        <button
          className="rounded-md bg-gray-300 p-2 hover:bg-gray-300/50"
          onClick={() => router.push("/en/dashboard")}
        >
          English
        </button>
        <button
          className="rounded-md bg-gray-300 p-2 hover:bg-gray-300/50"
          onClick={() => router.push("/ar/dashboard")}
        >
          العربية
        </button>
      </div>
      {t("title")}
    </main>
  )
}
