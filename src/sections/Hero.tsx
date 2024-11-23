import robotImg from "@/assets/images/robot.jpg";
import Image from "next/image";
import { Button } from "@/components/Button";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader.svg";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const Hero = () => {
  return (
    <section id="impact">
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>

            {/* Updated Orbit Section */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[300px] border-[2px] border-[var(--color-indigo-500)] opacity-30" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[500px] border-[2px] border-[var(--color-fuchsia-500)] opacity-25" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[700px] border-[2px] border-[var(--color-teal-500)] opacity-20" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[900px] border-[2px] border-[var(--color-amber-400)] opacity-15" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px] border-[2px] border-[var(--color-gray-500)] opacity-5" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Potential of Artificial Intelligence with{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI4Impact</span>
                <span
                  className="absolute w-full h-[11px] md:h-[14px] lg:h-[16px] left-0 top-full translate-y-[4px]"
                  style={{
                    WebkitMaskImage: `url(${underlineImage.src})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                    background:
                      "linear-gradient(to right, var(--color-amber-300), var(--color-teal-300), var(--color-violet-400), var(--color-fuchsia-400))",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Empowering the next generation of innovators through AI. Join us
              in creating cutting-edge solutions that tackle real-world
              challenges, from agriculture to education, health, and beyond.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Get Started
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[278px] -translate-y-[80px] rotate-135"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[176.9px] translate-x-[268px] -rotate-135"
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-y-[270px] -translate-x-[450px] rotate-135"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[270px] translate-x-[420px] -rotate-135"
                />
              </div>
              <div className="absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    What exactly is AI4Impact? I&apos;ve heard about it and would
                    love to know more!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    <strong>BrainZ:</strong> AI4Impact is a platform where
                    students collaborate to use the power of AI for social good
                    with creative AI-driven solutions.
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
                <Image src={robotImg} alt="Robot image" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-1px left-1/2 -translate-x-1/2 flex justify-center w-full px-4">
                  <div className="bg-gray-950/80 flex justify-center items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100 flex items-center">
                      AI is generating<span className="ml-1">...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
