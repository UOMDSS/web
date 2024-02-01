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
            Here at UOMDSS, we help students in Manchester build skills in data
            science and obtain internships and careers through workshops,
            hackathons and careers events. We adamantly believe that data is the
            future, whether that be its analysis or the communication of its
            results.
            {/* line break and newline*/}
            <br />
            <br />
            We build on the strength of our STEM faculties by providing students
            interested in data science the opportunity to further their data
            science capabilities and prepare themselves for careers in industry,
            ultimately growing our community of skilled young data scientists at
            the University of Manchester.
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
