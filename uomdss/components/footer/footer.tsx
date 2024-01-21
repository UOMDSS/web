import Link from "next/link";
import Logo from "../logo";
import { Discord, Github, Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="flex border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo height={48} color="#0f0f0f" />
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
              <ul className="text-gray-800 font-medium">
                <li className="mb-1">
                  University of Manchester, Oxford Rd, Manchester M13 9PL
                </li>
                <li className="mb-1">
                  <Link href="mailto:uomdss@gmail.com">uomdss@gmail.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-800 sm:text-center">
            © 2024{" "}
            <Link href="https:uomdss.co.uk" className="hover:underline">
              MUDS™
            </Link>
            . All Rights Reserved. Made with{" "}
            <span className="text-gray-500">🐞</span> by{" "}
            <Link href="https://github.com/druvdub" className="font-semibold">
              ddos
            </Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <Link
              href="https://www.instagram.com/uomdss/"
              target="_blank"
              className="text-gray-800"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://discord.gg/XFtW8nsRgv"
              target="_blank"
              className="text-gray-800"
            >
              <Discord />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/mudss-data-science-society/"
              target="_blank"
              className="text-gray-800"
            >
              <Linkedin />
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link
              href="https://github.com/UOMDSS"
              target="_blank"
              className="text-gray-800"
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
