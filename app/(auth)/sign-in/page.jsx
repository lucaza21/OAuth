"use client"
import { Button } from "@/components/ui/button";

import { toast } from "sonner";


import ROUTES from "@/app/constants/route";
import { signIn } from "next-auth/react";
import Image from "next/image";

function SignIn() {  
  const handleSignIn = async (provider) => {
    
    try{
      //throw new Error("Not implemented")
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true
      })
    } catch (error) {
      console.log(error)
      
      toast(error instanceof Error 
        ? error.message
        : "An error ocurred during sign-in"
      )
      /* toast({
        id: 1,
        title: "Sign In Failed",
        description:
        error instanceof Error 
          ? error.message
          : "An error ocurred during sign-in",
        variant: "destructive"
      }) */
    }
  }
  return (
    <>
    <div className="relative min-h-screen bg-gray-100  min-w-[300px]">
      <div className="rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/8 
              min-w-[300px] aspect-square bg-blue-500">

        <div className="w-100% rounded-t-lg h-1/8 bg-blue-950">
          <p className="p-2 text-center">OAuth Login</p>
        </div>

        <div className="min-w-[300px] mt-12 w-full flex flex-wrap gap-2 items-center justify-center">
          <div className="mt-5 flex-wrap gap-2 min-w-[100px] w-3/4 flex items-center justify-evenly bg-slate-700 rounded-lg px-4 py-3">
            <Button className='' onClick={() => handleSignIn("github")}>
              <Image
                src={"/icons/github.svg"}
                alt="Github Logo"
                width={30}
                height={30}
                className="invert-colors mr-2.5 object-contain"
              />
            
                <span> Log in with Github</span>
            </Button>
            
          </div>
          
          <div className="flex-wrap gap-2 min-w-[100px] w-3/4 flex items-center justify-evenly bg-slate-700 rounded-lg px-4 py-3">
             <Button className='' onClick={() => handleSignIn("google")}>
                <Image
              src={"/icons/google.svg"}
              alt="Github Logo"
              width={30}
              height={30}
              className="invert-colors mr-2.5 object-contain"
            />
              <span> Log in with Google</span>
             </Button>

          </div>
        </div>
      </div>
    </div>

   
    </>
    
  );
}

export default SignIn