import Section from "../section";

const About = () => {
  return (
    <Section className="flex w-full min-h-screen mb-8" id="about">
      <div className="mx-auto grid w-full">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-gray-900 uppercase">
          About Us
        </h2>
        <p className="text-gray-600">
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
      </div>
    </Section>
  );
};

export default About;
