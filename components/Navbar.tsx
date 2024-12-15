import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";


const Navbar = () => {
  return (
    <nav className="border-2  flex items-center justify-between max-container padding-container relative py-5 pb-[5px]">
     <Link href="/"> 
       <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
     </Link>
     <ul className="hidden h-full gap-12 lg:flex">
        
        {NAV_LINKS.map((link) =>
          (
           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex items-center justify-center cursor-pointer pb-[6px] transition-all hover:font-bold">
           {link.label}
           </Link>
           ))}  
          
     </ul>
      <div className="lg:flex items-center justify-center hidden ">
      <Button
       type="button"
       title="Login"
       icon="/user.svg"
       variant="bg-green-90 px-8 py-4 text-white transition-all hover:bg-black"
       />
    </div>

    <Image 
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
}

export default Navbar;



