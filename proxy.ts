import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    url.pathname = "/design";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
