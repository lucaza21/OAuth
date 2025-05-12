//export { auth as middleware } from "@/auth";

import { auth } from "@/auth"
import { NextResponse } from "next/server"
import ROUTES from "./app/constants/route"


// Lista de rutas públicas
const publicRoutes = ["/sign-in", "/about", "/blog", "/api/public"]

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Permitir acceso a rutas públicas exactas o con subrutas
  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )

  if (isPublic) {
    return NextResponse.next()
  }

  // Verifica la sesión para rutas protegidas
  const session = await auth()

  if (!session) {
    const signInUrl = new URL(ROUTES.SIGN_IN, request.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // proteger páginas raíz o anidadas
    "/dashboard/:path*",      // protege /dashboard y /dashboard/123
    "/profile/:path*",        // protege /profile y /profile/john
    "/settings/:path*",       // protege /settings y subrutas
    "/admin/:path*",          // ejemplo: proteger /admin/*
    // cualquier otra ruta que no sea pública ni estática
    //"/((?!_next|images|favicon.ico).*)",
  ],
}
