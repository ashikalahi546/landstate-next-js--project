"use client";
import { LogoIcon } from "@/assets/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { useEffect } from "react";
const Navber = () => {
  const [scrollY, setScrollY] = useState(false);
  const handleScroll = () => {
    if(window.scrollY >=20){
      setScrollY(true)
    }else{
      setScrollY(false)
    }
  };
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

  const pathName = usePathname();
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Buy",
      path: "/buy",
    },
    {
      name: "Sell",
      path: "/sell",
    },
    {
      name: "Rent",
      path: "/rent",
    },
    {
      name: "Agents",
      path: "/agents",
    },
    {
      name: "About US",
      path: "/about",
    },
  ];




  return (
    <div className="bg-[#175CD30D]">
      <div className={`flex justify-between items-center h-[60px] w-[1320px] mx-auto mt-[10px]  transition-all duration-300  ${scrollY ? "bg-red-500 top-0 w-full   fixed z-50" : ""}`}>
        <div className="flex items-center gap-[10px]">
          <LogoIcon />
          <h3 className="text-2xl font-bold leading-[32px]">
            <span className="text-primary">Land</span>
            <span className="text-secondary">State</span>
          </h3>
        </div>
        <ul className="flex items-center text-base font-medium leading-5 gap-6">
          {routes.map((route, idx) => (
            <Link
              className={`${
                pathName === route.path ? "text-primary  mt-[8.50px]" : ""
              }`}
              href={route.path}
              key={idx}
            >
              {route?.name}
              <div>
                {pathName === route.path && (
                  <div className="navberBorder "></div>
                )}
              </div>
            </Link>
          ))}
        </ul>
        <button className="w-[87px] h-10  text-base font-medium leading-5 bg-primary text-white rounded-[10px]">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navber;
