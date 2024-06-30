import Image from "next/image";
import { servicesData } from "./servicesData/ServicesData";

const Services = () => {
  return (
    <div className="bg-[#EFEFEF]  py-[120px]">
      <div className="w-[1320px] mx-auto bg-white rounded-[30px] py-[60px] px-[49px]">
        <h1 className="text-center text-[40px] font-bold leading-[56px]">
          OUR <span className="text-primary">SERVICES</span>
        </h1>

        <div className="grid grid-cols-3 mt-10">
          {servicesData?.map((service) => (
            <div
              className="w-[366px] flex flex-col items-center text-center"
              key={service.id}
            >
              <Image src={service?.image} alt="loading....?" />
              <h1 className="mt-[17px] font-medium text-[28px] leading-[38px] text-secondary">
                {service?.title}
              </h1>
              <p className="mt-[13px] leading-5 text-sm text-[#475467]">
                {service?.discription}
              </p>
              <button className="hover:bg-primary h-[55px] w-[156px] hover:font-medium font-regular mt-[26px] hover:text-white border-[#667085] border hover:border-none text-secondary duration-100  rounded-[10px] bg-transparent">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
