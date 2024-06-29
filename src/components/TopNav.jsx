import { EmailIcon, FacebookIcon, GoogleIcon, LinkedinIcon, LocationIcon, PhoneIcon, TwitterIcon } from "@/assets/Icons";




const TopNav = () => {
  return (
    <div className="py-[10px] flex items-center justify-between w-[1320px] mx-auto">
      <div className="flex items-center gap-[14px]">
      <div className="flex items-center gap-1">
        <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <EmailIcon />
        </div>
        <p className="text-sm leading-4 text-secondary ">example2024@gmail.com</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <PhoneIcon />
        </div>
        <p className="text-sm leading-4 text-secondary">+01 (123) 456-7890</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <LocationIcon />
        </div>
        <p className="text-sm leading-4 text-secondary ">#4352, Stadium Market, Dhaka</p>
      </div>
      </div>
      <div className="flex gap-[14px]">
      <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <LinkedinIcon />

        </div>
      <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <TwitterIcon />
        </div>
      <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <GoogleIcon />
        </div>
      <div className="size-[26px] rounded-full bg-[#175CD31A] flex items-center justify-center">
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
