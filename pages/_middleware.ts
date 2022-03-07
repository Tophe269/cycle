import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    url.pathname = `/design`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
