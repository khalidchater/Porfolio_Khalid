import {Service} from "@/Constants/index";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col  justify-center py-12 xl:py-0'>
      <div className=' container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '>
          {Service.map((Item, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-2 group hover:text-[#FF4C4C]'>
                <div className='flex  justify-between items-center'>
                  <div className='text-3xl font-bold text-outline text-transparent '>
                    {Item.num}
                  </div>
                  <Link
                    href={Item.href}
                    className=' bg-gray-300 hover:bg-[#FF4C4C] p-4 rounded-full  text-black transition-all duration-500 md:text-xl hover:-rotate-45'>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h3 className='text-3xl font-bold'>{Item.title}</h3>
                <p className='text-[13px]'>{Item.description}</p>
                <div className='border-b border-gray-400'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
