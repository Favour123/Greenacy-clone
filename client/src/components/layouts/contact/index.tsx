import { Mail } from "lucide-react";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";
import { Background1, Person1, Person3, Person4, Person5, Person2 } from "../../../assets/images";

export default function ContactPage() {
   const imageList = [Person2, Person1, Person3, Person4, Person5];
   return (
      <>
         {/* Header Section */}

         <section
            className="w-full min-h-[300px] relative overflow-hidden py-12 px-4 flex flex-col items-center"
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
                  <div className="flex items-center justify-center gap-2 mb-2">
                     <span className="w-2 h-2 rounded-full bg-green-400" />
                     <span className="text-green-200 text-sm font-semibold tracking-widest">CONTACT</span>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
               </div>
            </div>
         </section>

         {/* Main Content Section */}
         <section className="w-full min-h-screen flex flex-col items-center justify-start bg-white">
            <div className="max-w-2xl w-full mx-auto text-center py-8 mb-6">
               <p className="text-gray-700 text-base mb-6">
                  Whether you're passionate about climate action, want to collaborate on a project, or have questions about our programs, we're here to help.
               </p>
            </div>
            {/* Contact Methods */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 w-full max-w-3xl">
               <div className="flex-1 min-w-[220px] bg-green-50 border border-green-500 rounded-lg p-4 flex flex-row items-center gap-4 shadow-sm">
                  <div className="bg-green-600 rounded-md p-2 mb-2">
                     <Mail className="text-white" size={23} />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-green-900 text-lg">EMAIL</span>
                     <span className="text-gray-700 text-sm">info@greenacy.org</span>
                  </div>
               </div>
               <div className="flex-1 min-w-[220px] bg-green-50 border border-green-500 rounded-lg p-4 flex flex-row items-center gap-4 shadow-sm">
                  <div className="bg-green-600 rounded-md p-2 mb-2">
                     <InstagramLogo size={23} weight="bold" className="text-white" />
                  </div>
                  <div className="flex flex-col ">
                     <span className="font-bold text-green-900 text-lg">INSTAGRAM</span>
                     <span className="text-gray-700 text-sm">Greenacy</span>
                  </div>
               </div>
               <div className="flex-1 min-w-[220px] bg-green-50 border border-green-500 rounded-lg p-4 flex flex-row items-center gap-4 shadow-sm">
                  <div className="bg-green-600 rounded-md p-2 mb-2">
                     <LinkedinLogo weight="bold" className="text-white" size={23} />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-green-900 text-lg">LINKEDIN</span>
                     <span className="text-gray-700 text-sm">Greenacy</span>
                  </div>
               </div>
            </div>
            {/* Contact Form */}
            <form className="w-full max-w-3xl flex flex-col gap-4 items-center">
               <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex-1 flex flex-col">
                     <label htmlFor="name" className="text-green-900 font-semibold mb-1 text-left">
                        Name <span className="text-red-500">*</span>
                     </label>
                     <input id="name" type="text" className="border border-green-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                  </div>
                  <div className="flex-1 flex flex-col">
                     <label htmlFor="email" className="text-green-900 font-semibold mb-1 text-left">
                        Email <span className="text-red-500">*</span>
                     </label>
                     <input id="email" type="email" className="border border-green-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                  </div>
               </div>
               <div className="flex flex-col w-full">
                  <label htmlFor="subject" className="text-green-900 font-semibold mb-1 text-left">
                     Subject <span className="text-red-500">*</span>
                  </label>
                  <input id="subject" type="text" className="border border-green-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
               </div>
               <div className="flex flex-col w-full">
                  <label htmlFor="details" className="text-green-900 font-semibold mb-1 text-left">
                     Share More Details
                  </label>
                  <textarea id="details" rows={5} className="border border-green-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
               </div>
               <button type="submit" className="mt-2 bg-green-200 hover:bg-green-300 text-green-900 font-bold py-2 px-8 rounded transition self-center border border-green-700">
                  SUBMIT
               </button>
            </form>
            <section className="w-full">
               {/* Image Gallery */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ms-1 pt-8 gap-4">
                  {imageList.map((src, index) => (
                     <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
                  ))}
               </div>

               {/* Embedded Map */}
               <div className="mt-5 w-full">
                  <iframe
                     title="2935 Byberry Rd, Hatboro, PA 19040, USA"
                     aria-label="2935 Byberry Rd, Hatboro, PA 19040, USA"
                     src="https://maps.google.com/maps?q=2935%20Byberry%20Rd%2C%20Hatboro%2C%20PA%2019040%2C%20USA&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                     className="w-full border-0 rounded-lg"
                     height="250"
                     loading="lazy"
                     allowFullScreen
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </section>
         </section>
      </>
   );
}
