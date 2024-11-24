'use client';
import React, { useState } from "react";
import PrinceChris from "@/assets/images/prince.png";
import ShyakaFrank from "@/assets/images/shyaka.png";
import Arlette from "@/assets/images/arlette.png";
import DismasM from "@/assets/images/dis.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {motion, AnimatePresence, LayoutGroup} from 'framer-motion';

export const testimonials = [
  {
    quote:
      "Chris Mazimpaka leads AI4Impact with a unique blend of leadership, advanced math and top-notch programming skills. He transforms complex challenges into innovative  solutions, inspiring the team to push boundaries, forge meaningful partnerships  and make an impact.",
    name: "Prince Chris Mazimpaka",
    title: "Team lead & AI engineer",
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
      "Our Community Manager builds strong connections with people and organizations. They make sure AI4Impact grows as a team and stays inspired by new ideas.",
    name: "Igihozo Arlette",
    title: "Community Manager/Outreach Lead",
    image: Arlette,
  },
  {
    quote:
      "Our Workshop and Training Coordinator ensures that members, regardless of skill level, can actively participate and learn. They also collaborate with external speakers or trainers to deliver advanced sessions.",
    name: "Dismas Mutambiyineza",
    title: "Workshop/Training co-ordinator",
    image: DismasM,
  },
];


export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return <section id="team">
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent>
          <LayoutGroup>
          <motion.div  layout className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row  gap-12 md:mx-10 lg:mx-20">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"/>

            <AnimatePresence mode="wait" initial={false}>
            {testimonials.map((testimonial,index) => 
              
             
              testimonialIndex === index ? (
                <motion.blockquote 
                initial = {{ opacity: 0, y:25 }}
                animate = {{opacity: 1, y:0}}
                exit={{opacity:0, y:25 }}
                transition={{duration: 0.5}}
                key={testimonial.name} 
                layout
                className="flex flex-col lg:flex-row gap-12">
              <p className="text-xl md:text-2xl font-medium">
                {testimonial.quote}
              </p>
              <cite className="not-italic lg:text-right">
                <Image src={testimonial.image} alt={testimonial.name} className="rounded-xl size-28 max-w-none"/>
                <div className="font-bold mt-4">{testimonial.name}</div>
                <div className="text-xs text-gray-400 mt-2">{testimonial.title}</div>
              </cite>
            </motion.blockquote>
              ) : null  
            )}
            </AnimatePresence>
            <motion.div layout="position" className="flex gap-2 md:flex-col  ">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name}  className="size-6 relative isolate inline-flex items-center justify-center"
                onClick={() => setTestimonialIndex(index)}
                >
                  {testimonialIndex
                   === index && (
                                      <motion.div className="absolute border-gradient size-full rounded-full -z-10"
                                      layoutId="testimonial-dot"></motion.div>

                  )}
                  <div className="size-1.5 bg-gray-200 rounded-full"> </div>
                  </div>
              ))}
            </motion.div>
          </motion.div>
          </LayoutGroup>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>;
};

export default Testimonials;
