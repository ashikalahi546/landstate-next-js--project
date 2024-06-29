"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { cityCardData } from "./cityCardData/CityCardData";
import Image from "next/image";
import {
  RoomIcon,
  BatroomIcon,
  LocationThreeIcon,
  FireIcon,
} from "./../assets/Icons";

const Category = () => {
  const pathName = usePathname();
  const routes = [
    {
      name: "House",
      path: "/",
    },
    {
      name: "Flats",
      path: "/flats",
    },
    {
      name: "Plots ",
      path: "/Plots ",
    },
    {
      name: "Shops",
      path: "/shops",
    },
    {
      name: "Offices",
      path: "/offices",
    },
    {
      name: "Building",
      path: "/building",
    },

  ];
  return (
    <div className="w-[1320px] mx-auto py-[120px]">
      <h1 className="text-secondary text-[40px] font-semibold leading-[56px]">
      BROWSE PROPERTY BY  <span className="text-primary">CATEGORY</span>
      </h1>

      <ul className="mt-5 flex items-center gap-10">
        {routes?.map((route, idx) => (
          <Link
            href={route.path}
            key={idx}
            className={`text-sm font-medium text-secondary flex items-center justify-center  leading-[21px] ${
              pathName === route.path &&
              "w-[100px] h-[35px] bg-primary rounded-md text-white"
            }`}
          >
            {route?.name}
          </Link>
        ))}
      </ul>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cityCardData.map((singleCard) => (
            <SwiperSlide key={singleCard.id} className="mt-10 cursor-pointer">
              <div>
                <div className="relative">
                  <Image
                    src={singleCard?.image}
                    alt=""
                    width={312}
                    height={194}
                  />
                  <div className="absolute top-4 left-4 rounded-[10px] bg-white w-[83px] h-6 flex items-center gap-1 justify-center">
                    <FireIcon />
                    <p className="text-xs font-medium leading-4 text-secondary">
                      {singleCard?.sell}
                    </p>
                  </div>
                </div>
                <div className="border rounded-b-3xl py-4 px-4 bg-white ">
                  <div className="flex items-center justify-between	">
                    <h1 className="text-lg font-semibold">
                      ${singleCard?.price}
                    </h1>
                    <p className="text-sm text-[#475467]">
                      ({singleCard?.rating})
                    </p>
                  </div>
                  <h3 className="pt-6">{singleCard?.fashion}</h3>
                  <div className="flex items-center gap-[29px] pt-4">
                    <div className="flex items-center gap-2">
                      <RoomIcon />
                      <p className="text-[#475467] text-sm">
                        {singleCard?.room}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BatroomIcon />
                      <p className="text-[#475467] text-sm">
                        {singleCard?.batroom}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-[10px]">
                    <LocationThreeIcon />
                    <p className="text-[#475467] text-sm">
                      {singleCard?.location}
                    </p>
                  </div>
                  <button className="text-[#101010] mt-6  border border-[#D0D5DD] h-[41px] w-full rounded-lg hover:bg-primary hover:border-none text-sm font-medium hover:text-white duration-100 delay-150">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-[176px] mx-auto mt-10">
          <button className="h-[59px] text-white font-semibold  bg-primary rounded-xl w-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
