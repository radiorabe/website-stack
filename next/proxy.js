import { NextResponse } from "next/server";

// Define paths that should not trigger the maintenance mode (e.g., maintenance page itself, API routes)
const maintenancePaths = ["/maintenance", "/_next"];

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|_next/favicon|_next/images|favicon.ico).*)",
  ],
};

export function proxy(req) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Bypass middleware for maintenance page and API routes
  if (maintenancePaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if maintenance mode is enabled
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenance) {
    // Redirect to the maintenance page
    url.pathname = "/maintenance";
    const response = NextResponse.redirect(url);
    response.headers.set("Retry-After", "3600"); // Retry after 1 hour
    return response;
  }

  return NextResponse.next();
}
