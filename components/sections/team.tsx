import Image from "next/image";
import Section from "../section";
import Link from "next/link";
import { Linkedin } from "react-bootstrap-icons";
import { Committee } from "@/lib/team";

const Team = () => {
  return (
    <Section className="w-full min-h-screen mb-8 px-0.5 md:p-0" id="team">
      <div className="mx-auto w-full px-6">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Our Team
        </h2>
        <ul
          className="mx-auto grid mt-8 gap-x-8 gap-y-16 text-center lg:grid-cols-5 md:grid-cols-3"
          role="list"
        >
          {Committee.map((person, index) => {
            return (
              <li key={index}>
                <div className="flex flex-col items-center">
                  <Image
                    src={person.image}
                    alt={person.name}
                    style={{
                      objectFit: "cover",
                      width: "25vh",
                      height: "auto",
                    }}
                    className="rounded-full aspect-square object-center bg-gray-100"
                    priority
                    quality={100}
                  />
                  <p className="mt-2 text-sm md:text-base lg:text-xl font-semibold text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {person.role}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">
                    {person.degree}
                  </p>
                  <Link href={person.linkedin} target="_blank">
                    <Linkedin className="mt-2 text-gray-500 cursor-pointer hover:text-[#0077B5] transition-colors duration-300 ease-in-out" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Team;
