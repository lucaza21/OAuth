import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import ROUTES from "./app/constants/route";

import bcrypt from "bcrypt"; // si tus passwords están hasheadas
import Credentials from "next-auth/providers/credentials";

// Simulación: podrías reemplazar esto con una llamada a tu base de datos
const fakeUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  password: "$2b$12$W3TT6KCM/xm7PkBKQyJe2.TxclcbLR9FJJ/aRTgnQkRfeaCpOV8Hi" // bcrypt hashed "My$tr0ngP@ssw0rd!"
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github, 
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials

        // 🔒 Aquí haces la validación real
        if (email === fakeUser.email) {
        const isValid = bcrypt.compareSync(password, fakeUser.password)
        if (isValid) {
          return {
            id: fakeUser.id,
            name: fakeUser.name,
            email: fakeUser.email,
          }
        }
      }
        // Si falla, retorna null
        throw new Error("Invalid credentials")

      }
    })
  ],
  pages: {
    signIn: ROUTES.SIGN_IN, // personalizada
  },
})