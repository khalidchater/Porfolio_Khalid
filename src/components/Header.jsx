"use client"

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { RiCloseLargeFill } from "react-icons/ri";
import MobileRes from "./MobileRes"
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
function Header() {
  return (
    <header className=" py-8 xl:py-12 text-white ">
      <div className='container mx-auto flex items-center justify-between'>
        <Link
          href='/'
          className='no-underline'>
          <h1 className='text-3xl font-bold '>
            Khalid <span className='text-[#FF4C4C] dark:text-blue-500'>.</span>
          </h1>
        </Link>

        <div className=' hidden xl:flex text-white  gap-5 items-center'>
          <Nav />
          <Link href='/Contact'>
            <Button className='text-white bg-[#FF4C4C] rounded-2xl px-6 hover:text-white'>
              Her me
            </Button>
          </Link>
        </div>
        <div className='xl:hidden flex'>
          <MobileRes />
        </div>
      </div>
    </header>
  );
}

export default Header;
