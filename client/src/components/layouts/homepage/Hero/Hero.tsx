import React, { useState, useEffect } from "react";
// import { Play, Instagram, Linkedin, Mail } from 'lucide-react';
import { InstagramLogo, LinkedinLogo, EnvelopeSimpleOpen, PlayCircle } from "phosphor-react";
import { HeroBg, Logo1, Logo2, Logo3, Logo4, Logo5 } from "../../../../assets/images";

// Define types for the Hero component props
interface HeroProps {
   title?: string;
   span?: string;
   subtitle?: string;
   ctaText?: string;
   onCtaClick?: () => void;
   onPlayClick?: () => void;
   backgroundImage?: string;
   companyLogos?: CompanyLogo[];
   socialLinks?: SocialLink[];
   className?: string;
}

interface CompanyLogo {
   id: string;
   name: string;
   logoSrc: string;
}

interface SocialLink {
   platform: string;
   url: string;
   icon: React.ReactNode;
}

// Default company logos data
const defaultCompanyLogos: CompanyLogo[] = [
   {
      id: "1",
      name: "ORGANICS",
      logoSrc: Logo1,
   },
   {
      id: "2",
      name: "MODETREE",
      logoSrc: Logo2,
   },
   {
      id: "3",
      name: "GREEN PLANET",
      logoSrc: Logo3,
   },
   {
      id: "4",
      name: "eco wings",
      logoSrc: Logo4,
   },
   {
      id: "5",
      name: "ECOIDEAS",
      logoSrc: Logo5,
   },
];

// Default social links
const defaultSocialLinks: SocialLink[] = [
   {
      platform: "instagram",
      url: "#",
      icon: <InstagramLogo size={20} />,
   },
   {
      platform: "linkedin",
      url: "#",
      icon: <LinkedinLogo size={20} />,
   },
   {
      platform: "email",
      url: "#",
      icon: <EnvelopeSimpleOpen size={20} />,
   },
];

// Add this before the Hero component
const flipWords = [
   "Climate Education",
   "Sustainable Future",
   "Green Innovation",
   "Environmental Care"
];

const Hero: React.FC<HeroProps> = ({
   title = "Planting Seeds of Change Through ",
   span = "Climate Education",
   subtitle = "We're raising a generation that understands, protects, and restores the planet by spreading the message of sustainability, one heart at a time.",
   ctaText = "Be The Change",
   onCtaClick,
   onPlayClick,
   backgroundImage = HeroBg,
   companyLogos = defaultCompanyLogos,
   socialLinks = defaultSocialLinks,
   className = "",
}) => {
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [isFlipping, setIsFlipping] = useState(false);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setIsFlipping(true);
         setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % flipWords.length);
            setIsFlipping(false);
         }, 150);
      }, 3000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className={`relative min-h-40 md:min-h-screen ${className}`}>
         {/* Hero Section */}
         <section
            className="relative min-h-40 md:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat  md:rounded-[0px_0px_200px_0px] "
            style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
            }}
         >
            {/* Social Media Icons - Right Side */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
               {socialLinks.map((social, index) => (
                  <a
                     key={index}
                     href={social.url}
                     className="w-12 h-12  bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                     aria-label={`Follow us on ${social.platform}`}
                  >
                     {social.icon}
                  </a>
               ))}
            </div>

            {/* Main Hero Content */}
            <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-6xl py-6 sm:py-12 lg:py-16">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white space-y-6 sm:space-y-8">
                     <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight">
                        {title} 
                        <span className={`inline-block transition-all duration-150 ${isFlipping ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                           {flipWords[currentWordIndex]}
                        </span>
                     </h1>

                     <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-[-50%]">{subtitle}</p>

                     {/* CTA Buttons */}
                     <div className="flex gap-4 sm:gap-6 items-center pt-4 sm:pt-6">
                        <button
                           onClick={onCtaClick}
                           className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
                        >
                           {ctaText}
                        </button>

                        <button
                           onClick={onPlayClick}
                           className="w-12 h-12 bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                           aria-label="Play video"
                        >
                           <PlayCircle size={24} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Company Logos Section */}
         <section className="bg-white ">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center">
                  {companyLogos.map((logo) => (
                     <div key={logo.id} className=" space-y-2 group">
                        <div className="flex items-center space-x-3  0">
                           {/* Logo Icon/Image */}
                           <div className="w-35 h-35 ">
                              <img
                                 src={logo.logoSrc}
                                 alt={`${logo.name} logo`}
                                 className="w-full h-full object-contain"
                              />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default Hero;

// Export types for use in other components
export type { HeroProps, CompanyLogo, SocialLink };
