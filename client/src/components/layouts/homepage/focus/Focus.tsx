import React from "react";
import { focusDataRight, focusDataLeft } from "../../../data/Focus";
import { Iconblog, Backgroud } from "../../../../assets/images";

export default function Focus() {
   return (
      <section className="w-full relative overflow-hidden py-12 px-4" style={{ backgroundImage: `url(${Backgroud})`, backgroundSize: "cover", backgroundPosition: "center" }}>
         {/* Overlay */}
         <div className="absolute inset-0 bg-[#00420C] mix-blend-multiply opacity-90 pointer-events-none" />
         <div className="relative z-10 max-w-5xl mx-auto text-center mb-10">
            <h3 className="text-green-200 text-sm font-semibold mb-2 tracking-widest">OUR FOCUS</h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">Real-World Climate Action</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">We help schools, workplaces, and communities build habits and systems that support long-term environmental change.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  justify-center gap-2">
            <div className="relative z-10 grid grid-cols-1 pb-2  gap-8 max-w-5xl mx-auto">
               {focusDataRight.map((item, idx) => (
                  <div key={item.title} className="flex flex-col md:flex-row  bg-[#199C38]/80 rounded-[30px]  md:rounded-[30px_300px_300px_300px] border border-[#ECECEC] border-solid border-3 p-6 gap-6 shadow-lg hover:scale-[1.02] transition">
                     <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-green-200">
                        <img src={item.icon} alt={item.title + " icon"} className="w-10 h-10 object-contain" />
                     </div>
                     <div className="text-center md:text-left items-center">
                        <h4 className="text-green-100 text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-green-50 text-sm leading-relaxed">{item.description}</p>
                     </div>
                  </div>
               ))}
            </div>
            {/* Center Iconblog */}
            <div className="relative z-10 hidden md:flex items-center justify-center ">
               <img src={Iconblog} alt="Greenacy Globe Icon" className="w-40 h-40 sm:w-50 sm:h-50 md:w-65 md:h-60 rounded-full shadow-lg bg-white/80 p-4 border-8 border-green-200" />
            </div>
            <div className="relative z-10 grid grid-cols-1  gap-8 max-w-5xl  mx-auto">
               {focusDataLeft.map((item, idx) => (
                  <div key={item.title} className="flex flex-col md:flex-row items-center bg-[#199C38]/80 rounded-[30px] md:rounded-[300px_30px_300px_300px] border border-[#ECECEC] border-solid border-3  p-6 gap-6 shadow-lg hover:scale-[1.02] transition">
                    <div className=" flex-shrink-0 md:hidden w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-green-200">
                        <img src={item.icon} alt={item.title + " icon"} className="w-10 h-10 object-contain" />
                     </div>
                     <div className="text-center md:text-left ">
                        <h4 className="text-green-100 text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-green-50 text-sm leading-relaxed">{item.description}</p>
                     </div>
                     <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-green-200">
                        <img src={item.icon} alt={item.title + " icon"} className="w-10 h-10 object-contain" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
