import { EmailThreeIcon, LocationFourIcon, PhoneThreeIcon } from "@/assets/Icons";
import logo from "/public/image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[120px] bg-[#EFEFEF]">
      <div className="bg-[#101010E6] py-[30px]">
        <div className="w-[1180px] mx-auto ">
          <div className="grid grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-[10px]">
                <Image src={logo} alt="loading" />
                <h2 className="text-primary text-2xl leading-[32px] font-bold">
                  Land
                  <span className="text-[#FFFFFF]">State</span>
                </h2>
              </div>
              <p className="text-xs text-[#FFFFFF] leading-5 pt-4">
                At Medicare, we are dedicate d to providing exceptional care and
                improving the health and well-being of our community. Our
                state-of-the-art facilities.
              </p>
            </div>
            <ul className="text-[#FFFFFF]">
              <h1 className="font-semibold leading-[22px] pb-5">Property:</h1>
              <li className="text-sm leading-5">Buy</li>
              <li className="py-4 text-sm leading-5">Sell</li>
              <li className="text-sm leading-5">Rent</li>
            </ul>
            <ul className="text-[#FFFFFF]">
              <h1 className="font-semibold leading-[22px] pb-5">Company Policy:</h1>
              <li className="text-sm leading-5">Teams & Conditions</li>
              <li className="py-4 text-sm leading-5">Privacy Policy</li>
              <li className="text-sm leading-5">Disclaimer</li>
            </ul>
            <ul className="text-[#FFFFFF]">
              <h1 className="font-semibold leading-[22px] pb-5">Contact List:</h1>
              <li className="text-sm leading-5 flex items-center gap-[10px]"><PhoneThreeIcon/> +013 456 789</li>
              <li className="text-sm leading-5 flex items-center gap-[10px] py-4"><EmailThreeIcon/> skyline_property_sell@gmail.com</li>
              <li className="text-sm leading-5 flex items-center gap-[10px]"><LocationFourIcon/> Shop No.24, DHA Phase 2, Karachi</li>
              
            </ul>
            
          </div>
          <div className="border-b pt-10">

            </div>
            <p className="text-center text-sm leading-5 font-medium mt-3 text-[#FFFFFF]">Copyright 2024 LandState Properties. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
