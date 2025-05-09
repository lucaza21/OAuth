"use client"
import ROUTES from "@/app/constants/route"
import { signOut } from "next-auth/react"
import toast from "react-hot-toast"
import { Button } from "./ui/button"
 
export function SignOut() {
    const salir = async () => {
      toast.success("Exit successfully", {
        duration: 3000,
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
  
      // Espera 3 segundos y luego ejecuta signOut
      setTimeout(() => {
        signOut({ callbackUrl: ROUTES.SIGN_IN, redirect: true })
      }, 3000)
    }
  
    return <Button onClick={salir}>Sign Out</Button>
  }