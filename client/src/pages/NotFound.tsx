import { useNavigate } from "react-router-dom";
import { Interior_Design_Firm, Interior_Design_Firm1 } from "../assets/images";

export default function NotFound() {
   const navigate = useNavigate();

   return (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
         {/* Split backgrounds */}
         <div className="absolute inset-0 flex w-full h-full z-0">
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${Interior_Design_Firm})` }} />
            <div className="w-1/2 h-full bg-cover bg-center grayscale" style={{ backgroundImage: `url(${Interior_Design_Firm1})` }} />
            {/* Center divider */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/40 -translate-x-1/2" />
         </div>

         {/* Content */}
         <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-xl px-4">
            <div className="text-white/80 tracking-widest text-lg mb-2">ERROR 404</div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-2 leading-tight">
               Page Not
               <br />
               Found
            </h1>
            <div className="flex flex-col gap-4 mt-6 w-full max-w-xs mx-auto">
               <button
                  onClick={() => navigate("/careers")}
                  className="bg-[#A6FF9E] text-black font-semibold rounded-md py-3 text-lg flex items-center justify-center gap-2 transition hover:bg-[#8be88a]"
               >
                  JOIN OUR TEAM
                  <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                     <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
               </button>
               <button onClick={() => navigate("/")} className="border border-white text-white font-semibold rounded-md py-3 text-lg transition hover:bg-white/10">
                  VISIT HOMEPAGE
               </button>
            </div>
         </div>
      </div>
   );
}
