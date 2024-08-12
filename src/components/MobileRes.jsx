"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { IoMdList } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { Links } from "@/Constants/index";

function MobileRes() {
    const usePath = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <IoMdList className='text-2xl text-[#FF4C4C] ' />
      </SheetTrigger>

      <SheetContent className='flex flex-col gap-y-14 '>
       
        <div className='mt-20  text-center text-xl'>
          <Link href='/'>
            {" "}
            <h3 className='text-[#FF4C4C] font-semibold '>khalid.</h3>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-6  '>
          {Links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  item.path === usePath &&
                  "text-[#FF4C4C]  border-b-2 border-[#FF4C4C]  font-bold hover:text-cyan-500"
                }`}>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileRes;
