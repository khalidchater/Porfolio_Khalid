import { Description } from "@radix-ui/react-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaGit,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function resume() {
  // Aboute Data
  const Aboute = {
    title: "Aboute Me",
    Description:
      "I am a full stack web developer, capable of developing different, types of static or dynamic websites using HTML, CSS, Tailiwnd, JavaScript, React, Next, Laravel and MySQL.",
    info: [
      {
        fieldName: "Name",
        value: "khalid chater",
      },
      {
        fieldName: "phone",
        value: "(+212)619022619",
      },
      {
        fieldName: "Experience",
        value: "+2ans",
      },
      {
        fieldName: "Nationalty",
        value: "Morocco",
      },
      {
        fieldName: "Location",
        value: "Casablanca Ain Chock",
      },
      {
        fieldName: "languages",
        value: "English, Arabic, ",
      },
      {
        fieldName: "Email",
        value: "contact@khalidchater.com",
      },
    ],
  };
  // Experience Data
  const Experience = {
    title: "My Experience",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium modi error doloribus rem neque sint dolore iusto?",

    items: [
      {
        company: "Digital Agency Media talk",
        post: "Front End developper(Freelance)",
        duration: "2024",
      },
      {
        company: "Hosting Service (Hostinger)",
        post: "Hosting",
        duration: "2023-2024",
      },
      {
        company: "développer web fullStack",
        post: "Freelance",
        duration: "2023-2024",
      },
      {
        company: "Working in clothing trade",
        post: "Buy and sell clothes",
        duration: "2022-2023",
      },
    ],
  };
  // Education data
  const Education = {
    title: "My Education",
    discription:
      "Acquired a robust foundation in physics, specialized web development skills, and advanced knowledge in React.js through diverse educational experiences.",

    items: [
      {
        loren: "BACHELOR OF SCIENCE PHSYICS",
        post: "Lycee abdul Lkhaleq Al-taris Casablanca",
        duration: "2021-2022",
      },
      {
        loren: "Deplome technicien specialise",
        post: "Web Full Stack",
        duration: "2023-2024",
      },
      {
        loren: "Online course Reactjs (Meta)",
        post: "Coursera",
        duration: "2024",
      },
    ],
  };

  // Skills Data
  const Skills = {
    title: "My skills ",
    discription:
      "I bring a diverse set of skills to the table, specializing in modern web development technologies and tools. My expertise spans from front-end frameworks to back-end solutions and design tools, ensuring a comprehensive approach to building and maintaining robust web applications",
    ListSkilles: [
      {
        icone: <FaReact />,
        name: "Reactjs",
      },
      {
        icone: <FaCss3 />,
        name: "Css3",
      },
      {
        icone: <FaHtml5 />,
        name: "Html5",
      },
      {
        icone: <FaJs />,
        name: "Javascript",
      },
      {
        icone: <FaNodeJs />,
        name: "Nodejs",
      },
      {
        icone: <FaLaravel />,
        name: "Laravel",
      },
      {
        icone: <FaFigma />,
        name: "Figma",
      },
      {
        icone: <FaGit />,
        name: "Git",
      },
      {
        icone: <FaGithub />,
        name: "GitHub",
      },
    ],
  };

  return (
    <div className=' min-h-[80vh] flex  py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='abouteMe'>Aboute Me</TabsTrigger>
          </TabsList>
          <div className='content'>
            <TabsContent
              value='experience'
              className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold text-[#FF4C4C]'>{Experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto  xl:mx-0 '>
                  {Experience.discription}
                </p>
                <ScrollArea className='h-[488px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {Experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=' bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className=' text-[#FF4C4C]'>
                            {item.duration}
                          </span>
                          <hh3>{item.post}</hh3>
                          <div className='flex items-center '>
                            <span className='text-[#FF4C4C] font-bold '>.</span>
                            <h4>{item.company}</h4>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value='education'>
              {" "}
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold  text-[#FF4C4C]'>{Education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto  xl:mx-0 '>
                  {Education.discription}
                </p>
                <ScrollArea className='h-[488px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {Education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=' bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className=' text-[#FF4C4C] font-bold'>
                            {item.duration}
                          </span>
                          <hh3>{item.loren}</hh3>
                          <div className='flex items-start '>
                            <h4>{item.post}</h4>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold '>{Skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto  xl:mx-0 '>
                  {Skills.discription}
                </p>
                <ScrollArea className='h-[488px]'>
                  <ul className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]'>
                    {Skills.ListSkilles.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[110px] flex  justify-center items-center  text-center rounded-xl  '>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <div className='text-4xl hover:text-[#FF4C4C] transition-all duration-150'>
                                  {item.icone}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className=' '>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='abouteMe'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold '>{Aboute.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto  xl:mx-0 '>
                  {Aboute.Description}
                </p>
                <section>
                  <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px]'>
                    {Aboute.info.map((Item, index) => {
                      return (
                        <li
                          key={index}
                          className='flex justify-center xl:justify-start gap-1 items-center'>
                          <span className='text-gray-400 text-sm'>
                            {Item.fieldName}:
                          </span>
                          <span className='text-lg'>{Item.value}</span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default resume;
