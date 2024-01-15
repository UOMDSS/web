import Link from "next/link";
import Logo from "../logo";
import { Discord, EnvelopeAt, Github, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="flex border-t border-neutral-900 border-opacity-10">
      <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo height={48} color="#0f0f0f" />
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="text-gray-800">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-800 sm:text-center">
            © 2024{" "}
            <Link href="https:uomdss.co.uk" className="hover:underline">
              MUDS™
            </Link>
            . All Rights Reserved. Made with{" "}
            <span className="text-red-500">❤</span> by{" "}
            <Link href="https://github.com/druvdub" className="font-bold">
              ddos
            </Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <Link href="#" className="text-gray-800">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-800">
              <Discord />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="text-gray-800">
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
