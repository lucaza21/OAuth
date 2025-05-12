import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import ROUTES from "./app/constants/route"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, Google],
  pages: {
    signIn: ROUTES.SIGN_IN, // personalizada
  },
})