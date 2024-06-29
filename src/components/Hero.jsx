import Image from "next/image";
import hero from "/public/image/hero.png";
import { LeftArrowIcon, LocationTwoIcon, RightArrowIcon } from "@/assets/Icons";
const Hero = () => {
  return (
    <div className="bg-[#EFEFEF]  ">
      <div className="bg-white">
        <div className="mt-[70px] flex justify-between w-[1320px] mx-auto pb-[126px] ">
          <div>
            <h1 className="text-6xl font-bold leading-[80px] text-secondary">
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
            <Image src={hero} alt="loading" priority />
            <div className="flex  gap-5 justify-end items-center -mt-14 ">
              <LeftArrowIcon/>

              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="w-[1056px] mx-auto h-[202px] heroBottomShadow bg-white -mt-[76px] px-14 py-[38px]">
          <div>
            <button className="w-[110px] h-[36px] font-medium leading-6 hover:bg-primary hover:text-white rounded-md bg-transparent text-secondary duration-100 delay-150 border border-secondary hover:border-none">
              Buy
            </button>
            <button className="mx-[10px] w-[110px] h-[36px] font-medium hover:bg-primary hover:text-white rounded-md bg-transparent text-secondary duration-100 delay-150 border border-secondary hover:border-none">
              Sell
            </button>
            <button className="w-[110px] h-[36px] font-medium hover:bg-primary hover:text-white rounded-md bg-transparent text-secondary duration-100 delay-150 border border-secondary hover:border-none">
              Rent
            </button>
          </div>

          <div className="flex items-center pt-6 gap-6 ">
            <div className="flex flex-col gap-1 ">
              <label className="font-medium leading-[22px]" htmlFor="">
                Location
              </label>
              <div className="relative w-[245px]">
                <input
                  className=" w-full border-[#98A2B3] border outline-none h-10  rounded-md px-[10px] text-xs leading-[14px] text-[#98A2B3] relative"
                  type="text"
                  placeholder="Select your city"
                />
                <div className="absolute top-3 right-[10px]">
                  <LocationTwoIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium leading-[22px]">Property type</p>
              <select
                className="w-[245px] border-[#98A2B3] text-xs border outline-none h-10 rounded-md px-[10px]    leading-[14px] text-[#98A2B3]"
                name=""
                id=""
              >
                <option value="Choses property type ">
                  Choses property type
                </option>
                <option value="Choses property type ">
                  Choses property type
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium leading-[22px]">Property type</p>
              <div className="flex">
                <select
                  className="w-[136px] border-[#98A2B3] border  outline-none h-10 rounded-l-md px-[10px]  text-[12px] leading-[14px] text-[#98A2B3]"
                  name=""
                  id=""
                >
                  <option value="Choses property type ">Set min budget</option>
                  <option value="Choses property type ">Set min budget</option>
                </select>
                <select
                  className="w-[136px] border-[#98A2B3] border-y border-r text-[12px] outline-none h-10 rounded-r-md px-[10px]   leading-[14px] text-[#98A2B3]"
                  name=""
                  id=""
                >
                  <option value="Choses property type ">Set max budget</option>
                  <option value="Choses property type ">Set max budget</option>
                </select>
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
