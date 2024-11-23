// File: components/Companies.tsx

import Image from "next/image";
import UnipodLogo from "../assets/images/unipod.png";
import Urlogo from "../assets/images/urlogo.webp";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

// List of companies with their names and logo imports
export const companies = [
  {
    name: "Unipod",
    logo: UnipodLogo,
  },
  {
    name: "University of Rwanda",
    logo: Urlogo,
  },
];

export const Companies = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder>
          <SectionContent className="!pt-0">
            <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Inspiring students to make an impact with AI.
            </h2>
            <div className="flex mt-20 overflow-x-clip -mx-4 lg:-mx-8">
              <div className="flex flex-none gap-18 md:gap-36 px-18">
                {/* Loop through an array of 6 items (to repeat the pattern of logos) */}
                {[...Array(6)].map((_, index) => {
                  const company = companies[index % companies.length]; // Alternate between the two logos
                  return (
                    <div key={index}>
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-16" // Adjusted height class
                        width={160} // Increased width
                        height={64} // Increased height
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
