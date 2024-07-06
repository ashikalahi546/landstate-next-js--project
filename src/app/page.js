import CityCard from "@/components/CityCard";
import Hero from "@/components/Hero";
import SellProperty from "@/components/SellProperty";
import Services from "@/components/Services";
import Category from "@/components/Category";
import ChooseUs from "@/components/ChooseUs";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <main >
      <div>
        <Hero />
        <div className="bg-[#EFEFEF]">
          <Services />
          <CityCard/>
          <SellProperty/>
          <Category/>
          <ChooseUs/>
          <GetInTouch/>
        </div>
      </div>
    </main>
  );
}
