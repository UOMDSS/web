import { useState } from "react";
import Logo from "../logo";
import { MenuButtonWideFill, XLg } from "react-bootstrap-icons";
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import {
  MobileNavLinkAnimations,
  MenuAnimations,
  ContainerAnimations,
} from "@/lib/animations";

const NavLinks = [
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
  {
    name: "Contact",
    href: "#contact",
  },
];

const MobileNavLink = ({
  name,
  href,
  toggle,
}: {
  name: string;
  href: string;
  toggle: () => void;
}) => {
  return (
    <m.div
      variants={MobileNavLinkAnimations}
      className="text-2xl font-medium text-white hover:text-[#e1306c]"
    >
      <Link href={href} onClick={toggle}>
        {name}
      </Link>
    </m.div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="z-10 justify-between w-full flex lg:hidden items-center sticky top-0 bg-white py-4">
      <Logo color="#0f0f0f" className="w-auto h-[32px] md:h-[36px]" />
      <nav className="px-2">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <MenuButtonWideFill fontSize={20} />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <m.div
            variants={MenuAnimations}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white py-6 px-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <Logo color="#fff" className="w-auto h-[32px] md:h-[36px]" />
                <div className="cursor-pointer text-white" onClick={toggleMenu}>
                  <XLg fontSize={20} />
                </div>
              </div>
              <m.div
                variants={ContainerAnimations}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {NavLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        name={link.name}
                        href={link.href}
                        toggle={toggleMenu}
                      />
                    </div>
                  );
                })}
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Sidebar;
