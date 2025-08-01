import Section from "../section";

const Hero = () => {
  return (
    <Section className="w-full min-h-screen pb-8 md:mb-20 flex">
      <div className="flex flex-col justify-center py-8 w-full">
        <h4 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold uppercase pl-1 xl:pl-4 md:pl-2 lg:pl-3 lg:pb-1 xl:bottom-0">
          THE University of Manchester
        </h4>
        <h1 className="text-sm-xl md:text-md-xl lg:text-lg-xl xl:text-xl-xl font-black max-w-prose flex-wrap text-wrap pt-1 pb-20 bg-clip-text text-transparent bg-supergradient bg-[length:200%_auto] animate-gradient cursor-default">
          Data Science and AI Society (muds_ai)
        </h1>
      </div>
    </Section>
  );
};

export default Hero;
