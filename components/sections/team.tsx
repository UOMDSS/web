import Image from "next/image";
import Section from "../section";
import Link from "next/link";
import { Linkedin } from "react-bootstrap-icons";
import { teamsBySection, Person } from "@/lib/team";

// Map section titles to nicer labels
const sectionLabels: Record<string, string> = {
  "Core Team": "Leadership Team", 
  "Workshop Team": "Workshop Team",
  "Events Team": "Events Team",
  "Graphics Team": "Graphics & Media Team",
};

const Team = () => {
  // Ensure "Core Team" (Leadership Team) is rendered first
  const orderedSections: [string, Person[]][] = [
    ["Core Team", teamsBySection["Core Team"]],
    ...Object.entries(teamsBySection)
      .filter(([title]) => title !== "Core Team")
      .map(([title, people]) => [title, people] as [string, Person[]]),
  ];

  return (
    <Section className="w-full min-h-screen mb-8 px-0.5 md:p-0" id="team">
      <div className="mx-auto w-full px-6">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Our Committee 25/26
        </h2>

        {orderedSections.map(([sectionTitle, people]) => (
          <div key={sectionTitle} className="mt-12">
            <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-6">
              {sectionLabels[sectionTitle] || sectionTitle}
            </h3>
            <ul
              className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-16 text-center"
              role="list"
            >
              {people.map((person, index) => (
                <li key={`${sectionTitle}-${person.name}-${index}`}>
                  <div className="flex flex-col items-center">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={300}
                      height={300}
                      className="rounded-full aspect-square object-cover object-center bg-gray-100"
                      priority
                      quality={100}
                    />
                    <p className="mt-2 text-sm md:text-base lg:text-xl font-semibold text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">{person.role}</p>
                    {person.degree && (
                      <p className="text-xs md:text-sm text-gray-400">{person.degree}</p>
                    )}
                    <Link href={person.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mt-2 text-gray-500 cursor-pointer hover:text-[#0077B5] transition-colors duration-300 ease-in-out" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
