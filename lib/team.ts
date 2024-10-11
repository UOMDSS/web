import president from "../public/committee/president.jpg";
import vice from "../public/committee/vice.jpg";
import treasurer from "../public/committee/treasurer.jpg";
import inclusion from "../public/committee/inclusion.jpg";
import pr from "../public/committee/pr.jpg";
import events from "../public/committee/events.jpg";
import hackathon from "../public/committee/hackathon.jpg";
import marketing from "../public/committee/marketing.jpg";
import dev from "../public/committee/dev.jpg";
import { StaticImageData } from "next/image";

interface Person {
  name: string;
  role: string;
  image: StaticImageData | string;
  linkedin: string;
}

const linkedinBaseUrl = "https://www.linkedin.com/in/";

const people: Person[] = [
  {
    name: "Alexandru Buburuzan",
    role: "President",
    image: president,
    linkedin: `${linkedinBaseUrl}alexbubu/`,
  },
  {
    name: "Aylin Demirdaș",
    role: "Vice President",
    image: vice,
    linkedin: `${linkedinBaseUrl}aylindemirdas/`,
  },
  {
    name: "Saeyoung Her",
    role: "Treasurer",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}saeyoungher/`,
  },
  {
    name: "Manoj Manikandan",
    role: "Inclusion Officer",
    image: inclusion,
    linkedin: `${linkedinBaseUrl}manojmanikandan/`,
  },
  {
    name: "Tengku Iman",
    role: "Public Relations Lead",
    image: pr,
    linkedin: `${linkedinBaseUrl}tengku-dzariff-iman-0ba39b2ab/`,
  },
  {
    name: "Hamza Khan",
    role: "Events Lead",
    image: events,
    linkedin: `${linkedinBaseUrl}hamzakhan47/`,
  },
  {
    name: "Moeed Chughtai",
    role: "Hackathon Lead",
    image: hackathon,
    linkedin: `${linkedinBaseUrl}moeed-chughtai/`,
  },
  {
    name: "Muhammad Kalmani",
    role: "Marketing Lead",
    image: marketing,
    linkedin: `${linkedinBaseUrl}muhammadkalmani/`,
  },
  {
    name: "Taha Ejaz",
    role: "Dev Lead",
    image: dev,
    linkedin: `${linkedinBaseUrl}tahaejaz1/`,
  },
];

export { people as Committee };
