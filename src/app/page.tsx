import Social from "../components/Social.jsx";
import Image from "next/image";
import BoxReveal from "@/components/magicui/box-reveal";

export default function Home() {
  return (
    <section className='h-full '>
      <div className='container mx-auto h-full '>
        <div className='flex flex-col justify-between items-center xl:flex-row gap-y-8'>
          <div className='text-center xl:text-left'>
            <span className='text-gray-300'>Full stack developer</span>
            <div className='flex  xl:justify-start justify-center '>
              <BoxReveal
                boxColor={"#FF4C4C"}
                duration={0.5}>
                <h3 className='font-bold '>
                  Hello I'm <br />
                  <span className='text-[#FF4C4C] font-bold '>Khalid Chater</span>
                </h3>
              </BoxReveal>
            </div>

            <p className='md:max-w-[500px] w-full text-white/80 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum
              deserunt et hic molestias minima illo quo quidem magni! Accusamus.
            </p>
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
