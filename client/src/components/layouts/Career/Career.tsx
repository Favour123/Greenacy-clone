import React from "react";
import { careerData } from "../../data/career";
import { Closed } from "../../../assets/images";
import { CheckCircle, MapPin, CurrencyDollarSimple } from "phosphor-react";

// Your existing icon components
const BriefcaseIcon = () => (
   <div className="border border-green-600 rounded p-2 inline-flex items-center justify-center">
      <svg className="w-6 h-6 text-green-600 " fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 6V4a3 3 0 0 1 6 0v2m-9 4h12M4 10v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
      </svg>
   </div>
);
const GlobeIcon = () => (
   <div className="border border-green-600 rounded p-2 inline-flex items-center justify-center">
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
   </div>
);
const LocationIcon = () => (
   <div className="border border-green-600 rounded p-2 inline-flex items-center justify-center">
      <MapPin size={20}  className="w-6 h-6 bold text-green-600 " />
   </div>
);
const DollarIcon = () => (
   <div className="border border-green-600 rounded p-2 inline-flex items-center justify-center">
     <CurrencyDollarSimple size={20} className="w-6 h-6 bold text-green-600 "  />
   </div>
);

// Responsibility item component for consistent styling
interface ResponsibilityItemProps {
   text: string;
}

const ResponsibilityItem: React.FC<ResponsibilityItemProps> = ({ text }) => {
   return (
      <li className="flex items-start gap-2 mb-4">
         <CheckCircle size={24} weight="fill" className="text-green-500 flex-shrink-0 mt-0.5" />
         <span className="text-gray-600 text-sm md:text-base">{text}</span>
      </li>
   );
};

// Job detail component for the right sidebar
interface JobDetailProps {
   icon: React.ReactNode;
   title: string;
   value: string;
}

const JobDetail: React.FC<JobDetailProps> = ({ icon, title, value }) => {
   return (
      <div className="flex items-center mb-4">
         <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center">{icon}</div>
         <div className="ml-3">
            <p className="text-gray-500 text-xs">{title}</p>
            <p className="text-gray-700 font-medium">{value}</p>
         </div>
      </div>
   );
};

const Career: React.FC = () => {
   const { jobType, workMode, location, monthlyPay, intro, responsibilities, eligibility, benefits, deadline } = careerData;

   // Split responsibilities into two columns for layout
   const halfwayPoint = Math.ceil(responsibilities.length / 2);
   const firstColumnResponsibilities = responsibilities.slice(0, halfwayPoint);
   const secondColumnResponsibilities = responsibilities.slice(halfwayPoint);

   return (
      <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans">
         {/* Job Details Section at the top */}
         <div className="block md:hidden bg-green-50 p-4 rounded-lg mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
               <JobDetail icon={<BriefcaseIcon />} title="Job Type" value={jobType} />

               <JobDetail icon={<GlobeIcon />} title="Work Mode" value={workMode} />

               <JobDetail icon={<LocationIcon />} title="Location" value={location} />

               <JobDetail icon={<DollarIcon />} title="Monthly Pay" value={monthlyPay} />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
               <p className="text-gray-600 mb-8 leading-relaxed">{intro}</p>

               <h2 className="text-xl font-bold mb-6 text-gray-800">Responsibilities</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <div>
                     <ul>
                        {firstColumnResponsibilities.map((resp, index) => (
                           <ResponsibilityItem key={index} text={resp} />
                        ))}
                     </ul>
                  </div>
                  <div>
                     <ul>
                        {secondColumnResponsibilities.map((resp, index) => (
                           <ResponsibilityItem key={index + halfwayPoint} text={resp} />
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Only rendering Eligibility and Benefits if they exist in the data */}
               {eligibility && eligibility.length > 0 && (
                  <section className="mt-10">
                     <h2 className="text-xl font-bold mb-6 text-gray-800">Eligibility</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        {eligibility.map((item, index) => (
                           <ResponsibilityItem key={index} text={item} />
                        ))}
                     </div>
                  </section>
               )}

               {benefits && benefits.length > 0 && (
                  <section className="mt-10">
                     <h2 className="text-xl font-bold mb-6 text-gray-800">Benefits</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        {benefits.map((item, index) => (
                           <ResponsibilityItem key={index} text={item} />
                        ))}
                     </div>
                  </section>
               )}

               {deadline && (
                  <div className="text-lg font-semibold mt-8">
                     Application Deadline: <span className="text-black">{deadline}</span>
                  </div>
               )}
            </div>

            <div className="hidden  md:block border rounded-lg shadow-sm bg-green-50 p-6  h-fit">
               <JobDetail icon={<BriefcaseIcon />} title="Job Type" value={jobType} />

               <JobDetail icon={<GlobeIcon />} title="Work Mode" value={workMode} />

               <JobDetail icon={<LocationIcon />} title="Location" value={location} />

               <JobDetail icon={<DollarIcon />} title="Monthly Pay" value={monthlyPay} />
            </div>
         </div>
         {/* Display the Closed sign if image is available */}
         {typeof Closed === 'string' && (
            <div className="mt-6">
               <img src={Closed} alt="Closed Sign" className="w-55 h-26 filter hue-rotate-90" loading="lazy" />
            </div>
         )}
      </div>
   );
};

export default Career;
