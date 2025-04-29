import Image from "next/image";

export default function Home() {
  return (
    <>
    <div class="relative min-h-screen bg-gray-100  min-w-[300px]">
      <div class="rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/8 
              min-w-[300px] aspect-square bg-blue-500">

        <div className="w-100% rounded-t-lg h-1/8 bg-blue-950">
          <p className="p-2 text-center">OAuth Login</p>
        </div>

        <div className="min-w-[300px] mt-12 w-full flex flex-wrap gap-2 items-center justify-center">
          <div className=" min-w-[100px] w-3/4 flex items-center justify-evenly bg-slate-700 rounded-lg px-4 py-3">
            <Image
              src={"/icons/github.svg"}
              alt="Github Logo"
              width={30}
              height={30}
              className="invert-colors mr-2.5 object-contain"
            />
            <button className="rounded-full w-1/2 ">
              <span> Log in with Github</span>
            </button>
          </div>
          
          <div className="min-w-[100px] w-3/4 flex items-center justify-evenly  bg-slate-700 rounded-lg px-4 py-3">
            <Image
              src={"/icons/google.svg"}
              alt="Github Logo"
              width={30}
              height={30}
              className="invert-colors mr-2.5 object-contain"
            />
            <button className="rounded-full w-1/2 ">
              <span> Log in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>

   
    </>
    
  );
}
