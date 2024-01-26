import Section from "../section";

const Hero = () => {
  return (
    <Section className="flex w-full min-h-screen mb-8">
      <div className="flex flex-col items-center justify-center w-full h-auto gap-6">
        <h1 className="text-4xl md:text-7xl lg:text-20xl font-black max-w-prose flex-wrap">
          Data Science Society
        </h1>
      </div>
    </Section>
  );
};

export default Hero;
