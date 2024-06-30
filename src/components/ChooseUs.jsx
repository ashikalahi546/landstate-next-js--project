import Image from 'next/image'
import { chooseUsData } from './chooseUsData/ChooseUsData';

function ChooseUs() {
  
  return (
    <div className="bg-white py-[42px] mb-[120px]">
  <h1 className="text-[#101010] text-[40px] font-semibold leading-[60px] text-center">WHY CHOOSE <span className="text-primary">US</span> </h1>
  <div className="w-[1320px] mx-auto">
    <div className="grid grid-cols-3 gap-[93px] mt-9">
      {
        chooseUsData.map((item,i)=>(
          <div key={i} className="flex flex-col items-center justify-center text-center ">
<Image src={item?.image} alt="loading"/>
<h2 className="text-[28px] font-medium leading-10 text-secondary my-[18px]">{item?.title}</h2>
<p className="text-[#667085] text-sm leading-5">{item?.discription}</p>

          </div>
        ))
      }
    </div>
  </div>
    </div>
  )
}

export default ChooseUs