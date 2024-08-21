import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import createMiddleware from "next-intl/middleware"

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "never",
})

// Ensure that locale-specific sign in pages are public
const isProtectedRoute = createRouteMatcher([
  "/:locale/dashboard(.*)",
  "/dashboard(.*)",
])
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect()
  }
  return intlMiddleware(req)
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(ar|en)/:path*",
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)",
  ],
}
