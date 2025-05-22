// import React from "react";
import Career from "../components/layouts/Career/Career";
import { Background1, Closed } from "../assets/images";

export default function CareerPage() {
   return (
      <>
         <section
            className="w-full min-h-[300px] relative overflow-hidden py-12 px-4 flex flex-col items-center " 
            style={{
               backgroundImage: `linear-gradient(240deg, rgba(0, 66, 12, 0.7) 70%, rgba(25, 156, 56, 0.7) 100%), url(${Background1})`,
               backgroundSize: "cover",
               backgroundPosition: "center left",
            }}
         >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00420C] mix-blend-multiply opacity-90 pointer-events-none z-0" />
            <div className="relative z-10 w-full flex flex-col items-center">
               <div className="max-w-2xl mx-auto text-center mb-8 mt-5">
                  {/* This filter changes red to green */}
                  <div className="w-full h-full text-center flex flex-row justify-center">
                     <img src={Closed} alt="Closed Sign" className="w-55 h-26 filter hue-rotate-90" loading="lazy" />
                  </div>
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">
                     Client Success <br /> Application Over
                  </h2>
               </div>
            </div>
         </section>
         <Career />
      </>
   );
}
