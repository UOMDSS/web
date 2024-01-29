import Section from "../section";

interface Person {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const people: Person[] = [
  {
    name: "John Doe",
    role: "President",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Jane Doe",
    role: "Vice President",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/",
  },
];

const Team = () => {
  return (
    <Section className="flex w-full min-h-screen mb-8" id="team">
      <div className="mx-auto grid w-full gap-x-8">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-gray-900 uppercase">
          Our Team
        </h2>
      </div>
    </Section>
  );
};

export default Team;
