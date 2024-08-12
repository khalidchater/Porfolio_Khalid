'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];
function Nav() {
    const usePath = usePathname()
  return (
    <nav className="flex gap-6 text-white">
      {Links.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${
              item.path === usePath &&
              "text-[#FF4C4C]  border-b-2 border-[#FF4C4C] "
            }`}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
