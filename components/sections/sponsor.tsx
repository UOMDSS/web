import Section from "../section";
import Image from "next/image";
import Datern from "../../public/sponsors/datern.svg"; // this works only because it's an SVG
import Peak from "../../public/sponsors/peak.svg";
import WB from "../../public/sponsors/wb.svg";
import BNY from "../../public/sponsors/bny-logo.svg";
import Link from "next/link";

const Sponsor = () => {
  return (
    <Section
      id="sponsors"
      className="scroll-mt-24 w-full min-h-[60vh] items-center mb-8 px-0.5 md:p-0"
    >
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Our Sponsors
        </h2>

        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 items-center justify-items-center">
          <Link href="https://datern.co.uk" target="_blank">
            <Image
              src={Datern}
              alt="Datern"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100"
              priority
            />
          </Link>
          <Link href="https://peak.ai" target="_blank">
            <Image
              src={Peak}
              alt="Peak"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100"
              priority
            />
          </Link>
          <Link href="https://wandb.ai/site" target="_blank">
            <Image
              src={WB}
              alt="Weights & Biases"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100"
              priority
            />
          </Link>
          <Link href="https://www.bnymellon.com/" target="_blank">
            <Image
              src={BNY}
              alt="BNY Mellon"
              width={220}
              height={80}
              className="h-12 md:h-14 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition"
              priority
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Sponsor;
