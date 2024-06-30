// "use client";
// import { LeftArrowIcon, RightArrowIcon } from "@/assets/Icons";

// import { useState } from "react";

// const Carousel = ({ children: slides }) => {
//   const [curr, setCurr] = useState(0);

// const prev =()=>{
//   setCurr((curr)=>(curr === 0 ? slides.length -1 : curr -1))
// }


//   const next = () => {
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//   };

//   return (
//     <div className="overflow-hidden ">
//       <div className={`flex  transition-transform ease-in-out duration-500 `} style={{transform: `translateX(-${curr * 100} %)`}}>{slides[curr]}</div>
//       <div className="flex    gap-5 justify-end items-center -mt-14 ">
//         <button onClick={prev}>
//           <LeftArrowIcon />
//         </button>

//         <button onClick={next}>
//           <RightArrowIcon />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
