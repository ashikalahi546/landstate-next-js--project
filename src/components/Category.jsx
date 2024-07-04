"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";

// import required modules
import { Pagination } from "swiper/modules";

import { cityDetails } from "./cityCardData/CityCardData";
import Image from "next/image";
import {
  RoomIcon,
  BatroomIcon,
  LocationThreeIcon,
  FireIcon,
} from "./../assets/Icons";

const Category = () => {
  const routes = [
    { id: 1, name: "Chicago" },
    { id: 2, name: "New York" },
    { id: 3, name: "San Francisco " },
    { id: 4, name: "Los Angeles" },
    { id: 5, name: "Las Vegas" },
    { id: 6, name: "Seattle" },
    { id: 7, name: "Austin" },
  ];

  const [activeTab, setActiveTab] = useState(null);

  const filterData = activeTab
    ? cityDetails.filter((city) => city.id === activeTab)
    : cityDetails;

  return (
    <div className="w-[1320px] mx-auto py-[120px]">
      <h1 className="text-secondary text-[40px] font-semibold leading-[56px]">
        BROWSE PROPERTY BY <span className="text-primary">CATEGORY</span>
      </h1>
      <div className="flex items-center mt-5 gap-10">
        <button
          onClick={() => setActiveTab(null)}
          className={`text-sm font-medium leading-[21px] 
            ${
              activeTab === null
                ? "bg-primary text-white rounded-md  py-[7px] px-[22px]"
                : "text-secondary"
            }`}
        >
          All Cities
        </button>
        <button className="flex items-center gap-10">
          {routes?.map((route, idx) => (
            <div
              onClick={() => setActiveTab(route.name)}
              key={idx}
              className={`text-sm font-medium text-secondary flex items-center justify-center   leading-[21px] ${
                activeTab === route.name
                  ? "bg-primary text-white py-[7px] px-[22px] rounded-md"
                  : ""
              } `}
            >
              {route?.name}
            </div>
          ))}
        </button>
      </div>
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
          {filterData.map((singleCard) => (
            <SwiperSlide key={singleCard.id} className="mt-10 cursor-pointer">
              <div className="">
                <div className="relative ">
                  <Image
                    src={singleCard?.image}
                    alt="loading"
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
                <div className="border rounded-b-3xl py-4 px-4 bg-white w-[312px] h-[273px]">
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
                        {singleCard?.bathroom}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-[10px]">
                    <LocationThreeIcon />
                    <p className="text-[#475467] text-sm">
                      {singleCard?.location}
                    </p>
                  </div>
                  <button className="text-[#101010] absolute bottom-5  left-4   border border-[#D0D5DD] h-[41px] w-[280px] rounded-lg hover:bg-primary hover:border-none text-sm font-medium hover:text-white duration-100 ">
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
