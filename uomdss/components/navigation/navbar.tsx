"use client";
import Link from "next/link";
import { Button } from "../button";
import Logo from "../logo";
import React from "react";
import { AnimatePresence, m } from "framer-motion";
import { NavAnimations } from "@/lib/animations";

const fixedNavLinks = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Events",
    href: "#events",
  },

  {
    name: "Team",
    href: "#team",
  },

  {
    name: "Sponsors",
    href: "#sponsors",
  },
];

const FixedNavbar = () => {
  return (
    <header className="z-10 justify-between w-full md:px-4 md:py-2 md:top-2 hidden lg:flex">
      <Logo
        color="transparent"
        className="w-auto h-[36px] lg:h-[40px] bg-clip-content fill-transparent bg-supergradient bg-[length:200%_auto] animate-gradient"
      />
      <nav>
        <ul className="flex items-center">
          {fixedNavLinks.map((link) => (
            <li key={link.name} className="px-2">
              <Button variant={"link"} asChild>
                <Link
                  href={link.href}
                  className="font-medium lg:text-lg md:text-base text-xs"
                >
                  {link.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="rounded-full px-8" asChild>
        <Link href="https://discord.gg/XFtW8nsRgv" target="_blank">
          Join Us
        </Link>
      </Button>
    </header>
  );
};

const ScrollNavbar = () => {
  const scrollNavLinks = [
    {
      name: "Home",
      href: "/",
    },
    ...fixedNavLinks,
  ];

  return (
    <m.header
      key={"scrollNav"}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimations}
      className={`fixed z-10 justify-between px-4 py-2 rounded-full left-1/2 top-10 bg-[rgba(60,6,79,0.36)] mix-blend-luminosity shadow-[0_0_6px_0_rgba(255,255,255,0.15)] backdrop-blur-[67.957px] hidden lg:flex`}
    >
      <nav>
        <ul className="flex items-center">
          {scrollNavLinks.map((link) => (
            <li key={link.name}>
              <Button variant={"link"} className="md:text-base text-xs px-3">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </li>
          ))}
          <li className="px-2">
            <Button className="rounded-full px-6" asChild>
              <Link href="https://discord.gg/XFtW8nsRgv" target="_blank">
                Join Us
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </m.header>
  );
};

const Navbar = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? <ScrollNavbar /> : <FixedNavbar />}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
