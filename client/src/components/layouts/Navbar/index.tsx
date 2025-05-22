import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GreenacyWhiteLogo } from "../../../assets/images";

interface Navlink {
  href: string;
  menu: string;
}

const navlinks: Navlink[] = [
  {
    href: "/about",
    menu: "About",
  },
  {
    href: "/events",
    menu: "Events",
  },
  {
    href: "/blogs",
    menu: "Blog",
  },
  {
    href: "/careers",
    menu: "Careers",
  },
  {
    href: "/contact",
    menu: "Contact",
  },
];

export default function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileNavbar = () => {
    setMobileNavbar(!mobileNavbar);
    document.body.style.overflow = !mobileNavbar ? "hidden" : "unset";
  };

  const handleMobileLinkClick = (href: string) => {
    navigate(href);
    setMobileNavbar(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header className="w-full bg-[#00330D] border-b border-[#A6FF9E]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={GreenacyWhiteLogo}
            alt="Greenacy logo"
            className="h-8 w-auto md:h-6"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 ml-8">
          {navlinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  to={link.href}
                  className={`relative text-white font-semibold px-2 py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#1B1B1B]"
                      : "hover:text-[#A6FF9E]"
                  }`}
                >
                  {link.menu}
                  {isActive && (
                    <span className="absolute top-0 left-0 w-full h-[1px] bg-[#A6FF9E]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Join Us Button */}
        <Link
          to="/careers"
          className="hidden md:flex items-center gap-2 border border-[#A6FF9E] text-[#A6FF9E] px-4 py-2 rounded-full hover:bg-[#A6FF9E] hover:text-[#00330D] transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
          </svg>
          <span className="font-semibold">Join Us</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={handleMobileNavbar}
          aria-label="Open mobile menu"
        >
          {mobileNavbar ? (
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileNavbar && (
        <div className="fixed inset-0 bg-[#00330D] z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4">
            <Link to="/" className="flex items-center gap-2">
          <img
            src={GreenacyWhiteLogo}
            alt="Greenacy logo"
            className="h-8 w-auto md:h-6"
          />
        </Link>
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={handleMobileNavbar}
              aria-label="Close mobile menu"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-4 bg-white px-6 py-6 flex-1">
            {navlinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleMobileLinkClick(link.href)}
                    className={`text-[#00330D] text-lg font-semibold w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-[#BEDFB8] text-white"
                        : "hover:bg-[#E6F1E4]"
                    }`}
                  >
                    {link.menu}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
