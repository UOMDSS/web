import Link from "next/link";
import Logo from "../logo";
import {
  Discord,
  EnvelopeFill,
  Github,
  Instagram,
  Linkedin,
  Tiktok, 
  Youtube
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="flex border-t border-gray-200" id="contact">
      <div className="mx-auto w-full max-w-screen px-3 py-4 md:px-4 md:py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo color="#0f0f0f" className="w-auto h-[32px] md:h-[36px]" />
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h3 className="mb-4 text-sm md:text-lg font-bold">Contact Us</h3>
              <ul className="text-gray-800 font-medium text-xs text-wrap md:text-sm">
                <li className="mb-1">
                  University of Manchester, Oxford Rd, Manchester M13 9PL
                </li>
                <li className="mb-1">
                  <Link href="mailto:mdsaisoc@gmail.com">
                    <EnvelopeFill className="inline-block mr-1" />
                    mdsaisoc@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <Link
              href="https://www.instagram.com/muds_ai/?hl=en-gb"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#E1306C]"
              title="Instagram"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>

            <Link
              href="https://discord.gg/p4FYacHYDF"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#5865F2]"
              title="Discord"
            >
              <Discord />
              <span className="sr-only">Discord</span>
            </Link>

            <Link
              href="https://www.linkedin.com/company/mudsai/"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#0A66C2]"
              title="LinkedIn"
            >
              <Linkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/UOMDSS"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#181717]"
              title="GitHub"
            >
              <Github />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://www.tiktok.com/@muds_ai?_t=ZN-8yVy5HvjV5S&_r=1"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#010101]"
              title="TikTok"
            >
              <Tiktok />
              <span className="sr-only">TikTok</span>
            </Link>

            <Link
              href="https://www.youtube.com/@muds_ai"
              target="_blank"
              className="text-gray-800 transition ease-in-out delay-100 duration-200 hover:-translate-y-1 hover:scale-110 hover:text-[#FF0000]"
              title="YouTube"
            >
              <Youtube />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
