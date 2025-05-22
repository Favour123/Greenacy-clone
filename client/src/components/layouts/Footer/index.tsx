import { InstagramLogo, LinkedinLogo, EnvelopeSimpleOpen } from "phosphor-react";
import { Link } from "react-router-dom";
import { FooterBg, GreenacyWhiteLogo } from "../../../assets/images";

const menuLinks = [
   { href: "/blogs", label: "Blog" },
   { href: "/about", label: "About" },
   { href: "/events", label: "Events" },
   { href: "/careers", label: "Program" },
];

const navLinks = [
   { href: "/", label: "Home" },
   { href: "/contact", label: "Contact" },
   { href: "/careers", label: "Careers" },
   { href: "/privacy-policy", label: "Privacy" },
];

const socialMediaPlatforms = [
   {
      link: "https://www.instagram.com/univyx",
      icon: <InstagramLogo size={24} />,
      name: "Instagram",
   },
   {
      link: "https://www.linkedin.com/company/univyx/",
      icon: <LinkedinLogo size={24} />,
      name: "Linkedin",
   },
   {
      link: "mailto:info@greenacy.org",
      icon: <EnvelopeSimpleOpen size={24} />,
      name: "Mail",
   },
];

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer aria-label="footer" className="w-full">
         <section className="w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${FooterBg})` }}>
            <div className="absolute inset-0 bg-[#00420C] mix-blend-multiply"></div>

            <div className="max-w-[1200px] w-full mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center md:items-start text-center md:text-left relative z-10">
               {/* Left: Logo & Description */}
               <div className="flex-1 min-w-[220px] flex flex-col gap-6 items-center md:items-start">
                  <img src={GreenacyWhiteLogo} alt="Greenacy logo" width={150} height={40} className="mb-2" />
                  <p className="text-white text-base max-w-xs">Promoting a greener future by providing innovative education initiatives that promote sustainability.</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                     {socialMediaPlatforms.map((platform) => (
                        <a
                           key={platform.name}
                           href={platform.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 border text-white border-white rounded-md hover:bg-[#00420C] transition"
                           aria-label={platform.name}
                        >
                           {platform.icon}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Center: Menu & Navigate */}
               <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
                  <div>
                     <h4 className="text-white font-bold mb-4">MENU</h4>
                     <ul className="flex flex-col gap-2">
                        {menuLinks.map((item) => (
                           <li key={item.href}>
                              <Link to={item.href} className="text-white hover:underline">
                                 {item.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold mb-4">NAVIGATE</h4>
                     <ul className="flex flex-col gap-2">
                        {navLinks.map((item) => (
                           <li key={item.href}>
                              <Link to={item.href} className="text-white hover:underline">
                                 {item.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Right: Subscribe */}
               <div className="flex-1 min-w-[260px] flex flex-col items-center md:items-start">
                  <h4 id="subscribe" className="text-white font-bold mb-4">SUBSCRIBE</h4>
                  <form className="flex flex-col sm:flex-col md:flex-row gap-3 w-full max-w-xs">
                     <input type="email" placeholder="Email" className="rounded-md px-4 py-2 bg-white text-black focus:outline-none" />
                     <button type="submit" className="bg-[#A6FF9E] text-black font-semibold rounded-md py-2 px-3 transition hover:bg-[#8be88a]">
                        SUBMIT
                     </button>
                  </form>
               </div>
            </div>
         </section>

         <section className="bg-[#001101] py-4 px-4">
            <div className="max-w-[1200px] mx-auto text-white text-sm text-center">
               <span>Copyright © {currentYear} Greenacy. All Rights Reserved</span>
            </div>
         </section>
      </footer>
   );
}
