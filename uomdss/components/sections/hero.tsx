import Section from "../section";

const Hero = () => {
  return (
    <Section className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        <h1 className="text-center text-4xl md:text-7xl max-w-prose flex-wrap">
          Data Science Society
        </h1>
      </div>
    </Section>
  );
};

export default Hero;
