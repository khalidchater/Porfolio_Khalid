"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Information = [
  {
    Icone: <FaPhoneAlt />,
    title: "phone",
    description: "(+212)619022619",
  },
  {
    Icone: <FaEnvelope />,
    title: "Email",
    description: "Contact@khalidchater.com",
  },
  {
    Icone: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Morocco, Casablanca",
  },
];
function Contact() {
  return (
    <section className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='order-2 xl:order-none xl:w-[64%] '>
            <form
              action='/NOTFUOND'
              className='flex flex-col bg-[#27272C] p-10 gap-6 rounded-xl'>
              <h3 className='text-[#FF4C4C] font-semibold'>Contact Me</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, nesciunt?
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  type='First Name'
                  placeholder='FistName'
                />
                <Input
                  type='LastName'
                  placeholder='LastName'
                />
                <Input
                  type='Email'
                  placeholder='Email'
                />
                <Input
                  type='Phone Number'
                  placeholder='Phone Number'
                />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service  ' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web development</SelectItem>
                    <SelectItem value='cst'>UI/UX </SelectItem>
                    <SelectItem value='mst'>WordPress </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-[200px]'
                placeholder='type your message here.'></Textarea>
              <Button
                size='lg'
                className='max-w-40'
                type='submit'
                >
                {" "}
                Send Message
              </Button>
            </form>
          </div>
          <div className='flex-1 flex xl:justify-end  items-center order-1'>
            <ul className='flex flex-col gap-10 '>
              {Information.map((info, index) => {
                return (
                  <li
                    className='flex  items-center gap-6 '
                    key={index}>
                    <section className='flex items-center justify-center p-3 xl:p-4 bg-[#27272c] text-[#FF4C4C]'>
                      <span className='text-[28px]'>{info.Icone}</span>
                    </section>
                    <div>
                      <h4 className='text-white/60 text-lg'>{info.title}</h4>
                      <p>{info.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
