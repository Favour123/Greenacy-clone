import PolicyPage from "../components/layouts/Policy/PolicyPage";
import { Background1 } from "../assets/images";

export default function Policy() {
  return (
    <>
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
              <span className="text-green-200 text-sm font-semibold tracking-widest">LEGAL</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h2>
          </div>
        </div>
      </section>

      <PolicyPage />
    </>
  );
}
