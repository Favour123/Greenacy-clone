import { Photo3, Photo4, Photo7 } from "../../../../assets/images";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";

export default function Counter() {
   return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center py-8 px-2">
         <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Left: Image grid */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
               <div className="relative w-full h-[320px] rounded-xl  shadow-md">
                  <img src={Photo7} alt="Charity Volunteers Save the Future" className="object-cover w-full h-full" />
                  <div className="absolute left-1/2 bottom-0 z-50 -translate-x-1/2 translate-y-1/2 bg-[#D9F5D9] border-2 border-white rounded-xl shadow-lg px-4 py-6 flex flex-col items-center min-w-[150px]">
                     <span className="text-4xl font-bold text-[#178A50] leading-none">13K+</span>
                     <span className="text-[#178A50] text-center text-lg font-medium ">Green Community</span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex-1 h-[120px] rounded-xl overflow-hidden shadow-md">
                     <img src={Photo3} alt="Save the Planet" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 h-[120px] rounded-xl overflow-hidden shadow-md">
                     <img src={Photo4} alt="Plant in Hand" className="object-cover w-full h-full" />
                  </div>
               </div>
            </div>
            {/* Right: Text and actions */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
               <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                  className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#178A50] leading-tight"
               >
                  Building a climate-conscious world through informed action
               </motion.h1>
               <p className="text-gray-700 text-lg">
                  Greenacy is a grassroots climate action movement focused on environmental education and community awareness. We work with schools, workplaces, and communities across developing
                  countries to promote practical climate knowledge and inspire local action. Our work is built on a simple idea: when people understand the challenges facing our planet, they are
                  better equipped to become part of the solution. We focus on real-world education, meaningful engagement, and community-driven programs that help people connect environmental issues
                  to their everyday lives. Greenacy exists to build a foundation of climate awareness that empowers individuals and strengthens communities.
               </p>
               <div className="flex flex-col gap-4 w-full max-w-lg md:max-w-sm">
                  <Link to="/about" className="bg-[#178A50] hover:bg-[#12703e] text-white font-semibold rounded-[0px_300px_300px_0px] py-4 px-6 flex items-center justify-between text-sm transition">
                     Learn What Greenacy Is All About
                     <span className="ml-3 bg-white rounded-full p-1 transform-[rotate(-25deg)]">
                        <svg width="24" height="24" fill="none" stroke="#178A50" strokeWidth="2" viewBox="0 0 24 24">
                           <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                     </span>
                  </Link>
                  <a href="/#subscribe" className="bg-[#178A50] hover:bg-[#12703e]  w-[60%] text-white font-semibold rounded-[0px_300px_300px_0px] py-4 px-6 flex items-center justify-between text-sm transition">
                     Join Our Newsletter
                     <span className="ml-3 bg-white rounded-full p-1 transform-[rotate(-25deg)]" >
                        <svg width="24" height="24" fill="none" stroke="#178A50" strokeWidth="2" viewBox="0 0 24 24">
                           <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
