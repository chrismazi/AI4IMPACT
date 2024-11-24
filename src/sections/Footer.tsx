"use client";

import React from "react";
import { faYoutube, faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Navigation items
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
    name: "Sign Up",
    href: "https://forms.gle/F3UoFpMeS83YEyFR9", // Updated link
  },
];

// Social links
export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#",
  },
];

// Custom smooth scroll function
const smoothScroll = (targetPosition: number, duration: number) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smooth animation
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    window.scrollTo(0, startPosition + distance * ease(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};

// Footer component
export const Footer = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Custom smooth scroll function with 800ms duration
      smoothScroll(offsetPosition, 800);
    }
  };

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="font-extrabold text-2xl">AI4Impact</div>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map(({ name, href }) => (
              <a
                href={href}
                key={href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
                onClick={(e) => name === "Sign Up" ? null : scrollToSection(e, href)}
                target={name === "Sign Up" ? "_blank" : undefined} // Open "Sign Up" link in a new tab
                rel={name === "Sign Up" ? "noopener noreferrer" : undefined}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ name, icon, href }) => (
              <a href={href} key={name}>
                <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; Chris Mazimpaka, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
