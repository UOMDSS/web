import Section from "../section";
import colors from "@/lib/colors";

const Hero = () => {
  return (
    <Section className="w-full min-h-screen pb-8 md:mb-20 flex">
      <div className="flex flex-col justify-center py-8 w-full bg-clip-text text-transparent bg-supergradient bg-[length:200%_auto] animate-gradient">
        <h4 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold uppercase pl-1 xl:pl-4 md:pl-2 lg:pl-3 lg:pb-1 xl:bottom-0">
          University of Manchester
        </h4>
        <h1 className="text-sm-xl md:text-md-xl lg:text-lg-xl xl:text-xl-xl font-black max-w-prose flex-wrap text-wrap pb-20">
          Data Science Society
        </h1>
      </div>
    </Section>
  );
};

export default Hero;
