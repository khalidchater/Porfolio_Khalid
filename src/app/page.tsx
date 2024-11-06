// import Social from "../components/Social.jsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
const Social = dynamic(() => import("../components/Social.jsx"));

export default function Home() {
  return (
    <section className='h-full '>
      <div className='container mx-auto h-full '>
        <div className='flex flex-col justify-between items-center xl:flex-row gap-y-8'>
          <div className='text-center xl:text-left'>
            <span className='text-gray-300 text-2xl font-bold'>
              Full stack developer
            </span>
            <div className='flex  xl:justify-start justify-center '>
              <BoxReveal
                boxColor={"#FF4C4C"}
                duration={0.5}>
                <h3 className='font-bold '>
                  Hello I'm <br />
                  <span className='text-[#FF4C4C] font-bold '>
                    Khalid Chater
                  </span>
                </h3>
              </BoxReveal>
            </div>

            <p className='md:max-w-[500px] w-full text-white/80 '>
              I’m a Full Stack Web Developer 👨‍💻 with a passion for
              problem-solving and creating seamless, responsive applications 🌐.
              Dedicated to delivering innovative, efficient solutions that meet
              client needs.
            </p>
            <a
              href='/My_Cvv.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              <Button
                size='lg'
                className='max-w-60 mt-8 p-5 text-white'
                type='submit'>
                {" "}
                Download Cv
              </Button>
            </a>
          </div>
          <div>
            <Image
              src='/My_image.png'
              alt='MyProfil'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <Social />
    </section>
  );
}
