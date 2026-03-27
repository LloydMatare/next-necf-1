import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Edge-level route guard for the admin dashboard.
 * Checks for a next-auth session-token cookie before allowing access.
 * The server-side `getServerSession` check in the dashboard layout is still
 * the authoritative guard — this proxy simply prevents the flash of the
 * dashboard UI for unauthenticated visitors.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only guard /dashboard routes
  if (!pathname.startsWith("/dashboard")) {
    return NextResponse.next()
  }

  // next-auth v4 sets one of these cookies depending on environment
  const hasSession =
    request.cookies.has("next-auth.session-token") ||
    request.cookies.has("__Secure-next-auth.session-token")

  if (!hasSession) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("next", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
