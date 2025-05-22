import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/Blog";
import NotFound from "../../../pages/NotFound";
import {FacebookLogo,TelegramLogo,WhatsappLogo,TwitterLogo } from "phosphor-react"

const Blogpage: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const blog = blogs.find((b) => b.id === Number(id));

   if (!blog) return <div className="text-center"><NotFound/></div>;

   return (
      <div className="min-h-screen bg-white">
         {/* Hero Section */}
         <section
            className="w-full min-h-[300px] relative overflow-hidden py-12 px-4 flex flex-col items-center"
            style={{
               backgroundImage: `linear-gradient(240deg, rgba(0, 66, 12, 0.7) 70%, rgba(25, 156, 56, 0.7) 100%), url(${blog.image})`,
               backgroundSize: "cover",
               backgroundPosition: "center left",
            }}
         >
            <div className="absolute inset-0 bg-[#00420C] mix-blend-multiply opacity-90 pointer-events-none z-0" />
            <div className="relative z-10 w-full flex flex-col items-center">
               <div className="max-w-2xl mx-auto text-center mb-8 mt-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                     <span className="w-2 h-2 rounded-full bg-green-400" />
                     <span className="text-green-200 text-sm font-semibold tracking-widest">GREEN BLOG</span>
                  </div>
                  <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
                  <div className="text-green-100 text-base font-medium">&#128197; {blog.date}</div>
               </div>
            </div>
         </section>
         {/* Blog Content */}
         <div className="flex flex-col items-center mt-5">
            <img src={blog.image} alt={blog.title} className="w-[420px] max-w-[90vw] rounded-lg shadow-lg" />
            <div className="max-w-2xl w-full bg-white rounded-lg px-4 md:px-0 pt-0 pb-8 mt-8 text-left">
               <div className="text-gray-700 text-base leading-relaxed mt-6">
                  {blog.content.split("\n").map((line, idx) => (
                     <React.Fragment key={idx}>
                        {line.trim().startsWith("1.") ? <br /> : null}
                        {line}
                        <br />
                     </React.Fragment>
                  ))}
               </div>
            </div>
         </div>
         {/* Share This Article Section */}
         <div className="max-w-2xl mx-auto w-full mt-12 border-t border-b border-gray-200 py-6 px-4">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
               <span className="font-bold text-gray-400 text-base mr-4 mb-2 md:mb-0">SHARE THIS ARTICLE</span>
               <div className="flex gap-3 flex-wrap">
                  <a
                     href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-blue-500 text-white rounded-full px-4 py-1 font-medium text-base flex items-center hover:bg-blue-600 transition-colors"
                  >
                     <span className="mr-1"><FacebookLogo size={20} /></span> Facebook
                  </a>
                  <a
                     href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-black text-white rounded-full px-4 py-1 font-medium text-base flex items-center hover:bg-gray-800 transition-colors"
                  >
                     <span className="mr-1"><TwitterLogo size={20} /></span> Twitter
                  </a>
                  <a
                     href={`https://wa.me/?text=${window.location.href}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-green-400 text-white rounded-full px-4 py-1 font-medium text-base flex items-center hover:bg-green-500 transition-colors"
                  >
                     <span className="mr-1"><WhatsappLogo size={20} /></span> Whatsapp
                  </a>
                  <a
                     href={`https://t.me/share/url?url=${window.location.href}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-blue-400 text-white rounded-full px-4 py-1 font-medium text-base flex items-center hover:bg-blue-500 transition-colors"
                  >
                     <span className="mr-1"><TelegramLogo size={20} /></span> Telegram
                  </a>
               </div>
            </div>
         </div>
         {/* Newsletter Section */}
         <div className="max-w-4xl mx-auto w-full flex flex-col items-center py-16">
            <h2 className="text-green-900 text-3xl font-bold mb-2 text-center">Join Our Newsletter</h2>
            <p className="text-gray-500 text-base mb-8 text-center max-w-2xl">Get the latest climate news, advocacy updates to stay informed and take action in the fight against climate change.</p>
            <form className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
               <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-md px-4 py-3 w-72 focus:outline-none focus:ring-2 focus:ring-green-700" />
               <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-3 w-72 focus:outline-none focus:ring-2 focus:ring-green-700" />
               <button type="submit" className="bg-green-900 text-white rounded-full px-12 py-3 font-medium text-lg hover:bg-green-800 transition-colors w-72 md:w-auto">
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default Blogpage;
