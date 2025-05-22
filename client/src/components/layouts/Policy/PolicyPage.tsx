import React from "react";
import { policySections } from "../../data/Policy";

const PolicyPage: React.FC = () => {
   return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h3 className="text-lg mb-3 "><strong>Effective Date:</strong> January 15, 2023</h3>
         <h3 className="text-lg  mb-8 ">
            Greenacy (“we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us through our website, greenacy.org. This Privacy Policy
            outlines how we collect, use, disclose, and protect your information. By using our website, you agree to the practices described in this policy.
         </h3>

         {policySections.map((section) => (
            <div key={section.id} className="mb-10">
               <h2 className="text-2xl font-semibold mb-4">{`${section.id}. ${section.title}`}</h2>

               {Array.isArray(section.content) && typeof section.content[0] === "object" ? (
                  // If content has subsections
                  section.content.map((sub: any, index: number) => (
                     <div key={index} className="mb-6">
                        <h3 className="text-lg font-medium mb-2">{sub.subtitle}</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                           {sub.items.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  ))
               ) : (
                  // If content is just a list
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     {(section.content as string[]).map((item, idx) => (
                        <li key={idx}>{item}</li>
                     ))}
                  </ul>
               )}
            </div>
         ))}
      </div>
   );
};

export default PolicyPage;
