import React from "react";
import {
  PhoneTwoIcon,
  EmailTwoIcon,
  ClockIcon,
  LocationThreeIcon,
} from "@/assets/Icons";
const GetInTouch = () => {
  return (
    <div className="bg-white w-[1320px] mx-auto py-[44.5px] px-[70px] rounded-[30px] ">
      <div className="grid grid-cols-2 gap-[68px] items-center">
        <div>
          <h1 className="text-[40px] font-semibold  leading-[60px] text-secondary">
            GET IN <span className="text-primary">TOUCH</span>{" "}
          </h1>
          <div className="">
            <div className="mt-[27px] flex flex-col gap-[26px]">
              <div className="flex items-center gap-[10px]">
                <PhoneTwoIcon />
                <p className="text-secondary leading-6 font-medium">
                  +0130583915
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <EmailTwoIcon />
                <p className="text-secondary leading-6 font-medium">
                  ashikalahi546@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <ClockIcon />
                <p className="text-secondary leading-6 font-medium">
                  10.00am - 8.30pm
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <LocationThreeIcon />
                <p className="text-secondary leading-6 font-medium">
                  Shop No.24, DHA Phase 2, Karachi
                </p>
              </div>
            </div>

            <div className="mt-[38px] flex flex-col gap-3">
              <div className="flex gap-4">
                <input
                  className=" w-full border-[#98A2B3] border outline-none h-12  rounded-[10px] px-4 text-xs leading-[14px] text-[#98A2B3] focus:border-primary"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className=" w-full border-[#98A2B3] border outline-none h-12  rounded-[10px] px-4 text-xs leading-[14px] text-[#98A2B3] focus:border-primary"
                  type="number"
                  placeholder="  Number"
                />
              </div>
              <input
                className=" w-full border-[#98A2B3] border outline-none h-12  rounded-[10px] px-4 text-xs leading-[14px] text-[#98A2B3] focus:border-primary"
                type="email"
                placeholder="Email address"
              />
              <textarea
                className="w-full border-[#98A2B3] border focus:border-primary outline-none h-[152px]  overflow-hidden resize-none rounded-[10px] px-4 text-xs leading-[14px] text-[#98A2B3] pt-4"
                id=""
                name=""
                rows="4"
                placeholder="Type your Message here..."
              ></textarea>

              <button className="h-12 text-white font-semibold  bg-primary leading-6  rounded-[10px] w-full">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="h-[630px] w-full rounded-[20px] outline-none border-none"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14509.738235559555!2d90.0268032!3d24.6087031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1719654288718!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
