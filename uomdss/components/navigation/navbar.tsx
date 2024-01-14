"use client";
import Link from "next/link";
import { Button } from "../button";
import Logo from "../logo";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    name: "Sponsors",
    href: "#sponsors",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

const FixedNavbar = () => {
  return (
    <header className="z-10 flex justify-between w-full px-4 py-2 top-2">
      <Logo color="#0f0f0f" />
      <nav>
        <ul className="flex items-center">
          {fixedNavLinks.map((link) => (
            <li key={link.name} className="px-2">
              <Button variant={"link"} asChild>
                <Link href={link.href} className="font-medium text-[18px]">
                  {link.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="rounded-full px-8" asChild>
        {/* placeholder link */}
        <Link href="https://discord.gg/2HfzJmK">Join Us</Link>
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
    <motion.header
      key={"scrollNav"}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between px-4 py-2 rounded-full left-1/2 top-10 bg-[rgba(60,6,79,0.36)] mix-blend-luminosity shadow-[0_0_6px_0_rgba(255,255,255,0.15)] backdrop-blur-[67.957px]"
    >
      <nav>
        <ul className="flex items-center">
          {scrollNavLinks.map((link) => (
            <li key={link.name} className="px-2">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li className="px-2">
            <Button className="rounded-full" asChild>
              {/* placeholder link */}
              <Link href="https://discord.gg/2HfzJmK">Join Us</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
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
