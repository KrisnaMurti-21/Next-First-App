import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  // const isLogin = true;
  // if (!isLogin) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  const res = NextResponse.next();
  return res;
}

// export const config = {
//   matcher: ["/dashboard", "/about/:path*"],
// };

export default withAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
