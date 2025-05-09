import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "./constants/route";

export default async function Home() {

   const session = await auth();
    console.log(session)
  return (
    <>
    <div className="relative min-h-screen bg-gray-100  min-w-[300px]">
      <div className="rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/8 
              min-w-[300px]">
        <h1 className="text-blue-600 dark:text-sky-400 text-center">
          Home Page
        </h1>
        <form>
          <Button
            type="submit"
            className="px-10 pt-[10px] flex justify-center"
            formAction={async () => {
              "use server";
              await signOut({ redirectTo: ROUTES.SIGN_IN})
            }}
            >
              Log Out
            </Button>
          </form>
      </div>
    </div>

   
    </>
    
  );
}
