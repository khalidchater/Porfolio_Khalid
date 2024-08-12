"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Ecommerc from "../../../public/E-commerc website.png";
import FullStack from "../../../public/full_Stack.png";
import WATHER from "../../../public/WEATHERAPP.png";
import Portfolio from "../../../public/Porfolio.png";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { BsArrowDownRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "@/components/WorkSlide";

// Import Swiper styles
import "swiper/css";

function Page() {
  const projects = [
    {
      Num: "01",
      Category: "Front End",
      title: "Project 1",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      stack: [{ name: "Html 5" }, { name: "Css3" }, { name: "javascript" }],
      image: Ecommerc,
      live: "",
      Git: "/git",
    },
    {
      Num: "02",
      Category: "WordPress",
      title: "Project 2",
      description: "website using Wordpress Elementor",
      stack: [{ name: "Elemntor" }, { name: "javascript" }],
      image: "",
      live: "",
      Git: "/git",
    },
    {
      Num: "03",
      Category: "Weather App",
      title: "Project 3",
      description: " Weather application using API ",
      stack: [
        { name: "Html 5" },
        { name: "Css3" },
        { name: "javascript" },
        { name: "Api" },
      ],
      image: WATHER,
      live: "",
      Git: "/git",
    },
    {
      Num: "04",
      Category: "Full Stack",
      title: "Project 4",
      description: "  WebSite marketing agency",
      stack: [
        { name: "Reactjs" },
        { name: "tailwind css" },
        { name: "Laravel" },
      ],
      image: FullStack,
      live: "",
      Git: "",
    },
    {
      Num: "05",
      Category: "PortFolio",
      title: "Project 4",
      description: "My PortFolio",
      stack: [{ name: "Nextjs" }, { name: "tailwind css" }, { name: "shadcn" }],
      image: Portfolio,
      live: "",
      Git: "",
    },
  ];
  const [project, setproject] = useState(projects[0]);
  const handelslidechange = (swiper) => {
    let current = swiper.activeIndex;
    console.log(current);
    setproject(projects[current]);
  };

  return (
    <div className='min-h-[80vh] flex   justify-center py-12 xl:px-0'>
      <div className=' container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[10px]'>
              <section className='text-6xl leading-none font-bold text-transparent text-outline'>
                {project.Num}
              </section>
              <h2 className=' group-hover:text-accent text-white font-primary font-bold'>
                {project.Category}
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-x-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className=' text-red-500'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-2'>
                <Link
                  href={project.live}
                  className='text-3xl '>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 flex  justify-center items-center group'>
                        <BsArrowDownRight />
                      </TooltipTrigger>
                      <TooltipContent className='bg-white/40 text-black'>
                        <p className='text-[14px]'>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.Git}
                  className='text-3xl '>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 flex  justify-center items-center group'>
                        <BsGithub />
                      </TooltipTrigger>
                      <TooltipContent className='bg-white/40 text-black'>
                        Git Hub
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handelslidechange}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className='w-full'>
                    <div className='h-[460px]  relative group flex justify-center  items-center bg-pink-50/20 '>
                      <div className=' relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          quality={100}
                          className='object-cover'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <Slide
                containerStyle='flex gap-2 absolute right-0  bottom-[50%] xl:bottom-0  z-50 w-full justify-between xl:w-max xl:justify-none'
                btnStyle=' bg-[#FF4C4C] p-2'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
