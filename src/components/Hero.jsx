"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import hero from "/public/image/hero2.png";
import { HandleOutsideClickEvent } from "@/components/OutsideClick";
import {
  LeftArrowIcon,
  LocationTwoIcon,
  RightArrowIcon,
  DownIcon,
} from "@/assets/Icons";

const slides = [
  { image: "/image/hero.png" },
  { image: "/image/hero1.png" },
  { image: "/image/hero2.png" },
];

import { selectedData } from "./selectedData/SelectedData";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  const [activeButton, setAciveButton] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (buttonName) => {
    setAciveButton(buttonName);
  };

  const getButtonClass = (buttonName) => {
    return buttonName === activeButton
      ? "w-[110px] h-[36px] font-medium leading-6 text-white  bg-blue-500 hover:text-white rounded-md text-secondary duration-100 hover:border-none"
      : "w-[110px] h-[36px] font-medium leading-6 hover:bg-primary hover:text-white rounded-md bg-transparent text-secondary duration-100 border border-[#98A2B3] hover:border-none ";
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const [selected, setSelected] = useState("");
  const [select, setSelect] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  const [selectThree, setSelectThree] = useState("");
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  HandleOutsideClickEvent(dropdownRef, setOpen);
  HandleOutsideClickEvent(dropdownRef2, setOpenTwo);

  // useEffect(()=>{
  //   const handleClickOutsile =(event)=>{
  //     if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
  //       setOpen(false)

  //     }

  //   }
  //   document.addEventListener("mousedown",handleClickOutsile)
  //   return()=>{
  //     document.removeEventListener("mousedown",handleClickOutsile)
  //   }
  // },[])

  const handleItemClick = (item) => {
    setSelected(item.name);
    setOpen(false);
  };

  // const handleItemClickTwo = (property) => {
  //   setSelect(property.name);
  //   setOpenTwo(false);
  // };
  // const handleItemClickThree = (propertyThree) => {
  //   setSelectTwo(propertyThree.name);
  //   setOpenThree(false);
  // };
  // const handleItemClickFour = (propertyThree) => {
  //   setSelectThree(propertyThree.name);
  //   setOpenFour(false);
  // };

  return (
    <div className="bg-[#EFEFEF]  ">
      <div className="bg-white">
        <div className="mt-[70px] flex justify-between gap-[93px] w-[1320px] mx-auto pb-[126px] ">
          <div>
            <h1 className="text-6xl font-bold leading-[80px] text-secondary ">
              Discover Most
              <span className="block">
                Suitable <span className="text-primary">Property</span>
              </span>
              With Us
            </h1>
            <p className="pt-[10px] text-secondary text-base leading-6">
              Discover a wide range of properties that cater to all tastes and
              budgets.
              <span className="block">
                From cozy apartments in the heart of the city to luxurious
                estates in
              </span>
              serene suburbs, our extensive help.
            </p>
            <button className="w-[170px] h-[48px] bg-primary text-white rounded-[10px] font-semibold leading-5 mt-11 ">
              Get Started
            </button>

            <div className="mt-20">
              <div className="flex gap-10  items-center">
                <div>
                  <h4 className="text-secondary text-2xl font-semibold leading-[34px]">
                    1200 <span className="text-primary">+</span>
                  </h4>
                  <p className="text-[#475467] font-medium leading-6 pt-[6px]">
                    Listed Properties
                  </p>
                </div>
                <div>
                  <h4 className="text-secondary text-2xl font-semibold leading-[34px]">
                    5600 <span className="text-primary">+</span>
                  </h4>
                  <p className="text-[#475467] font-medium leading-6 pt-[6px]">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h4 className="text-secondary text-2xl font-semibold leading-[34px]">
                    120 <span className="text-primary">+</span>
                  </h4>
                  <p className="text-[#475467] font-medium leading-6 pt-[6px]">
                    Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-[683px] mx-auto">
              <div className="relative h-[474px]  overflow-hidden  ">
                {slides.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute  w-full  duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      width={683}
                      height={474}
                      src={src.image}
                      className="w-full"
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-5 relative justify-end -mt-12">
                <button onClick={prevSlide}>
                  <LeftArrowIcon></LeftArrowIcon>
                </button>
                <button onClick={nextSlide}>
                  <RightArrowIcon></RightArrowIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="w-[1056px] mx-auto h-[202px] heroBottomShadow bg-white -mt-[76px] px-14 py-[38px]">
          <div className="flex gap-[10px]">
            <button
              onClick={() => handleClick("buy")}
              className={getButtonClass("buy")}
            >
              Buy
            </button>
            <button
              onClick={() => handleClick("sell")}
              className={getButtonClass("sell")}
            >
              Sell
            </button>
            <button
              onClick={() => handleClick("rent")}
              className={getButtonClass("rent")}
            >
              Rent
            </button>
          </div>

          <div className="flex  pt-6 gap-6 ">
            <div className="flex flex-col gap-1 ">
              <p className="font-medium leading-[22px]">Location</p>

              <div ref={dropdownRef} className=" w-[245px] !bg-red-500 border">
                <div
                  onClick={() => setOpen(true)}
                  className="w-full border-[#98A2B3] border h-10  rounded-md px-[10px] text-xs leading-[14px] text-secondary flex items-center justify-between cursor-pointer"
                >
                  <p>{selected ? selected : "Bangladesh"}</p>
                  <LocationTwoIcon />
                </div>

                <ul
                  className={`w-full bg-[#FFFFFF] select-box-shadow  overflow-y-auto   rounded-md  text-xs leading-[14px] text-secondary mt-2 border border-[#E4E4E5] ${
                    open
                      ? "max-h-36 opacity-100 duration-200 "
                      : "max-h-0 opacity-0 duration-100"
                  }`}
                >
                  {selectedData.map((item) => (
                    <li
                      onClick={() => handleItemClick(item)}
                      className={` h-10 hover:bg-[#F2F7FF] flex flex-col items-center justify-center text-center cursor-pointer `}
                      key={item.code}
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-medium leading-[22px]">Property type</p>

              <div className="w-[245px]">
                <div
                ref={dropdownRef2}
                  onClick={() => setOpenTwo(!openTwo)}
                  className="border-[#98A2B3]  border h-10  rounded-md px-[10px] text-xs leading-[14px] text-secondary flex items-center justify-between cursor-pointer"
                >
                  <p>{select ? select : "Commercial Properties"}</p>
                  <FaChevronDown
                    className={`${openTwo ? "rotate-180 duration-300" : ""}`}
                  />

                  {/* <DownIcon className={`${openTwo ? "rotate-180 duration-300" : ""}`} /> */}
                </div>
                <ul
                  className={`w-full bg-[#FFFFFF] select-box-shadow   overflow-y-auto   rounded-md  text-xs leading-[14px] text-secondary mt-2 cursor-pointer ${
                    openTwo ? "max-h-36 duration-200" : "max-h-0  duration-100"
                  } `}
                >
                  {selectedData.map((property, i) => (
                    <li
                      onClick={() => handleItemClickTwo(property)}
                      className=" h-10 hover:bg-[#F2F7FF] flex flex-col items-center justify-center text-center cursor-pointer "
                      key={i}
                    >
                      {property.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium leading-[22px]">Property type</p>
              <div className="flex">
                <div className="w-[136px]">
                  <div
                    onClick={() => setOpenThree(!openThree)}
                    className="border-[#98A2B3] border-y border-l h-10  rounded-l-md px-[10px] text-xs leading-[14px] text-secondary flex items-center justify-between cursor-pointer"
                  >
                    <p>{selectTwo ? selectTwo : "$1,000"}</p>
                    <FaChevronDown
                      className={`${
                        openThree ? "rotate-180 duration-300" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`w-full bg-[#FFFFFF] select-box-shadow   overflow-y-auto   rounded-md  text-xs leading-[14px] text-secondary mt-2 cursor-pointer ${
                      openThree
                        ? "max-h-36 duration-200"
                        : "max-h-0 duration-100"
                    } `}
                  >
                    {selectedData.map((propertyThree, idx) => (
                      <li
                        onClick={() => handleItemClickThree(propertyThree)}
                        className="text-center py-2.5 hover:bg-[#F2F7FF] duration-100"
                        key={idx}
                      >
                        {propertyThree.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[136px]">
                  <div
                    onClick={() => setOpenFour(!openFour)}
                    className="border-[#98A2B3] border-y border h-10 rounded-r-md  px-[10px] text-xs leading-[14px] text-secondary flex items-center justify-between cursor-pointer"
                  >
                    <p>{selectThree ? selectThree : "$5,000"}</p>
                    <FaChevronDown
                      className={`${openFour ? "rotate-180 duration-300" : ""}`}
                    />
                  </div>
                  <ul
                    className={`w-full bg-[#FFFFFF] select-box-shadow   overflow-y-auto   rounded-md  text-xs leading-[14px] text-secondary mt-2 cursor-pointer ${
                      openFour
                        ? "max-h-36 duration-200"
                        : "max-h-0 duration-100"
                    } `}
                  >
                    {selectedData.map((propertyFour, edx) => (
                      <li
                        onClick={() => handleItemClickFour(propertyFour)}
                        className=" h-10 hover:bg-[#F2F7FF] flex flex-col items-center justify-center text-center cursor-pointer "
                        key={edx}
                      >
                        {propertyFour.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button className="w-[134px] h-[40px]  bg-primary text-white rounded-md font-medium leading-[22px] mt-[25.5px] ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
