import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from '@/assets/images/underline.svg?url';
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";



export const CallToAction = () => {
  return (
  <section id="involve">
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent className="relative isolate">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"/>
          <div className="absolute -z-10 inset-0">
            <Orbit className="size-[200px] absolute-center"/>
            <Orbit className="size-[350px] absolute-center"/>
            <Orbit className="size-[500px] absolute-center"/>
            <Orbit className="size-[650px] absolute-center"/>
            <Orbit className="size-[800px] absolute-center"/>
          </div>

          <div className="absolute-center -z-10">
            <Planet size="lg" color="violet" className="translate-y-[200px] -translate-x-[200px] rotate-45" />
          </div>
          <div className="absolute-center -z-10">
            <Planet size="lg" color="violet" className="translate-x-[200px] -translate-y-[200px] -rotate-135" />
          </div>
          <div className="absolute-center -z-10">
            <Planet size="md" color="teal" className="-translate-x-[500px] rotate-90" />
          </div>
          <div className="absolute-center -z-10">
            <Planet size="md" color="teal" className=" translate-x-[500px] -translate-y-[100px] -rotate-135" />
          </div>
          <div className="absolute-center -z-10">
            <Planet size="sm" color="fuchsia" className="-translate-x-[400px] -translate-y-[250px] rotate-135" />
          </div>
          <div className="absolute-center -z-10">
            <Planet size="sm" color="fuchsia" className="translate-x-[400px] translate-y-[150px]  -rotate-45" />
          </div>
          <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
            Join the AI Revolution with {" "}
            <span className="relative isolate">
              <span>AI4Impact</span>
              <span className="absolute top-full left-0 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
              style={{
                maskImage: `url(${underlineImage.src})`,
                maskSize: 'contain',
                maskPosition: 'top',
                maskRepeat: 'no-repeat',
              }}
              ></span>
              </span>
          </h2>
          <p className="text-center text-xl mt-8  max-w-2xl mx-auto">
          Shape the future with AI4Impact. Be part of a community driving innovation in AI to tackle global challenges. Together, we can create solutions that make a real difference.
          </p>
          <div className="flex justify-center mt-10">
          <Button variant="secondary" href="https://forms.gle/Rxy64nUVpxVmekEd9">Get Started</Button>
          </div>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>
  );
};

export default CallToAction;
