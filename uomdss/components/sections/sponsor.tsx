import Section from "../section";
import Image from "next/image";
import Datern from "../../public/sponsors/datern.svg";
import Peak from "../../public/sponsors/peak.svg";
import WB from "../../public/sponsors/wb.svg";
import Link from "next/link";

const Sponsor = () => {
  return (
    <Section
      className="w-full min-h-[75vh] items-center mb-8 px-0.5 md:p-0"
      id="sponsors"
    >
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Our Sponsors
        </h2>
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center justify-items-center">
          <Link href={"https://datern.co.uk"} passHref={true} target="_blank">
            <Image
              src={Datern}
              alt="Datern"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 aspect-square"
              priority
            />
          </Link>
          <Link href={"https://peak.ai"} passHref={true} target="_blank">
            <Image
              src={Peak}
              alt="Peak"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 aspect-square"
              priority
            />
          </Link>
          <Link href={"https://wandb.ai/site"} passHref={true} target="_blank">
            <Image
              src={WB}
              alt="WB"
              className="transition ease-in-out delay-100 duration-250 p-1 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 aspect-square"
              priority
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Sponsor;
