'use client';
import React from "react";
import PrinceChris from "@/assets/images/prince.png";
import ShyakaFrank from "@/assets/images/shyaka.png";
import Arlette from "@/assets/images/arlette.png";
import DismasM from "@/assets/images/dis.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const testimonials = [
  {
    quote:
      "Chris Mazimpaka leads AI4Impact with a unique blend of leadership, advanced math and top-notch programming skills. He transforms complex challenges into innovative  solutions, inspiring the team to push boundaries and make an impact",
    name: "Prince Chris Mazimpaka",
    title: "President & AI engineer",
    image: PrinceChris,
  },
  {
    quote:
      "Our GIS Lead turns maps and data into powerful tools. His skills help us understand problems better and make smarter decisions for every project.",
    name: "Shyaka Frank",
    title: "Lead GIS",
    image: ShyakaFrank,
  },
  {
    quote:
      "Our Community Manager builds strong connections with people and organizations. They make sure AI4Impact grows as a team and stays inspired by new ideas",
    name: "Igihozo Arlette",
    title: "Community Manager/Outreach Lead",
    image: Arlette,
  },
  {
    quote:
      "The Creative Designer brings our ideas to life with amazing visuals.Their work ensures that every interface, visual, or outreach effort resonates with clarity and purpose, making technology feel accessible and engaging.",
    name: "Dismas Mutambiyineza",
    title: "Creative Design",
    image: DismasM,
  },
];


const SELECTED_TESTIMONIAL_INDEX = 0;
export const Testimonials = () => {
  return <section id="team">
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent>
          <div className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row items-center gap-12 md:mx-10 lg:mx-20">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"/>

            {testimonials.map((testimonial,index) => (
              <React.Fragment key={testimonial.name} >
             
              {SELECTED_TESTIMONIAL_INDEX === index && (
                <blockquote key={testimonial.name} className="flex flex-col lg:flex-row gap-12">
              <p className="text-xl md:text-2xl font-medium">
                {testimonial.quote}
              </p>
              <cite className="not-italic lg:text-right">
                <Image src={testimonial.image} alt={testimonial.name} className="rounded-xl size-28 max-w-none"/>
                <div className="font-bold mt-4">{testimonial.name}</div>
                <div className="text-xs text-gray-400 mt-2">{testimonial.title}</div>
              </cite>
            </blockquote>
              )}
               </React.Fragment>
              
            ))}
            <div className="flex gap-2 md:flex-col justify-center ">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name}  className="size-6 relative isolate inline-flex items-center justify-center">
                  {SELECTED_TESTIMONIAL_INDEX === index && (
                                      <div className="absolute border-gradient size-full rounded-full -z-10"></div>

                  )}
                  <div className="size-1.5 bg-gray-200 rounded-full"> </div>
                  </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>;
};

export default Testimonials;
