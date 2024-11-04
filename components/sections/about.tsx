import Section from "../section";
import aboutImage from "../../public/about.jpg";
import { Card } from "../ui/card";
import Image from "next/image";

const About = () => {
  return (
    <Section className="w-full min-h-screen mb-8 px-0.5 md:p-0" id="about">
      <div className="mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 uppercase">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <p className=" text-sm lg:text-2xl">
          
          Founded in 2020 at The University of Manchester, MUDS is dedicated to developing the next generation of Data Science and Machine Learning specialists. We bridge academia and industry through workshops that introduce foundational concepts with real-world applications across sectors like automotive and healthcare. Our Spotlight events spark curiosity, giving postgraduate students a platform to share research and inspire others in Machine Learning. We believe data is the future, in both its analysis and communication.
          <br />
          <br />
          Building on our STEM strengths, we help students enhance their skills and prepare for industry, growing a community of skilled young data scientists at Manchester.
            {/* line break and newline*/}
          </p>
          {/* add shadow around card */}
          <Card className="flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Image
              src={aboutImage}
              alt="About Us"
              style={{ objectFit: "cover" }}
              priority
              className="rounded-lg"
            />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
