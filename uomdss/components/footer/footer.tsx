import Link from "next/link";
import Logo from "../logo";
import {
  Discord,
  EnvelopeFill,
  Github,
  Instagram,
  Linkedin,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="flex border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen px-3 py-4 md:px-4 md:py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo color="#0f0f0f" className="w-auto h-[36px] md:h-[48px]" />
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h3 className="mb-4 text-base md:text-lg font-bold">
                Contact Us
              </h3>
              <ul className="text-gray-800 font-medium text-xs text-wrap md:text-sm">
                <li className="mb-1">
                  University of Manchester, Oxford Rd, Manchester M13 9PL
                </li>
                <li className="mb-1">
                  <Link href="mailto:uomdss@gmail.com">
                    <EnvelopeFill className="inline-block mr-1" />
                    uomdss@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs md:text-sm text-gray-800 sm:text-center text-wrap">
            © 2024{" "}
            <Link
              href="https:uomdss.co.uk"
              className="hover:text-[#3C064F] font-semibold"
              title="MUDS"
            >
              MUDS™
            </Link>
            . All Rights Reserved. Made with{" "}
            <span className="text-gray-500">🐞</span> by{" "}
            <Link href="https://github.com/druvdub" className="font-medium">
              ddos
            </Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <Link
              href="https://www.instagram.com/uomdss/"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#e1306c]"
              title="Instagram"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://discord.gg/XFtW8nsRgv"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#7289da]"
              title="Discord"
            >
              <Discord />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/mudss-data-science-society/"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#0a66c2]"
              title="Linkedin"
            >
              <Linkedin />
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link
              href="https://github.com/UOMDSS"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110"
              title="Github"
            >
              <Github />
              <span className="sr-only">Github</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
