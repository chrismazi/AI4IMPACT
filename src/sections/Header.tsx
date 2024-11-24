"use client";

import { useState } from "react";
import { Button, ButtonProps } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { Orbit } from "@/components/Orbit";

export const navItems = [
  {
    name: "Our Impact",
    href: "#impact",
  },
  {
    name: "Mission",
    href: "#mission",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Get Involved",
    href: "#involve",
  },
];

export const loginItems = [
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "https://forms.gle/F3UoFpMeS83YEyFR9", // Updated link
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps['variant'];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Smooth scroll function
  const smoothScroll = (targetPosition: number, duration: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Scroll to section with smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      setIsMobileNavOpen(false);

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      smoothScroll(offsetPosition, 800); // Smooth scroll duration of 800ms
    }
  };

  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-extrabold text-2xl">AI4Impact</div>
            </div>
            <div>
              <div className="h-full hidden lg:block">
                <nav className="h-full">
                  {navItems.map(({ name, href }) => (
                    <a
                      href={href}
                      key={href}
                      className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center hover:text-gray-200 transition-colors before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                      onClick={(e) => scrollToSection(e, href)}
                    >
                      {name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, name, href }) => (
                <a
                  href={href}
                  key={name}
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Security enhancement
                >
                  <Button variant={buttonVariant}>{name}</Button>
                </a>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative"
                onClick={() => setIsMobileNavOpen((curr) => !curr)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                      isMobileNavOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                      isMobileNavOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
              {navItems.map(({ name, href }) => (
                <a
                  href={href}
                  key={name}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                  onClick={(e) => scrollToSection(e, href)}
                >
                  {name}
                </a>
              ))}
              {loginItems.map(({ buttonVariant, name, href }) => (
                <a
                  href={href}
                  key={name}
                  className="w-full max-w-xs"
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Security enhancement
                >
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
