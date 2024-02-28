import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
        name:"john"
      })
    } catch (err) {
      console.error(err)
    }
  }
  return NextResponse.next()
}

export const matcher = {
  matcher: ['/'],
};
