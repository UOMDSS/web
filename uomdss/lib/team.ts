import president from "../public/committee/prez.jpeg";
import vp from "../public/committee/vp.jpg";
import treasurer from "../public/committee/treasurer.jpg";
import spons from "../public/committee/spons.jpeg";
import pr from "../public/committee/pr.jpeg";
import events from "../public/committee/events.jpeg";
import workshop from "../public/committee/workshop.jpg";
import graphics from "../public/committee/graphics.png";
import dev from "../public/committee/dev.png";
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
    name: "Saurav Maheshkar",
    role: "President",
    image: president,
    linkedin: `${linkedinBaseUrl}sauravmaheshkar/`,
  },
  {
    name: "Mohammad Altaisan",
    role: "Vice President",
    image: vp,
    linkedin: `${linkedinBaseUrl}mohammad-a-049284268/`,
  },
  {
    name: "Satwik Goyal",
    role: "Treasurer",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}satwik-goyal/`,
  },
  {
    name: "Samarth Jain",
    role: "Sponsorship Lead",
    image: spons,
    linkedin: `${linkedinBaseUrl}yashikagandhi2023/`,
  },
  {
    name: "Yashika Gandhi",
    role: "Public Relations Lead",
    image: pr,
    linkedin: `${linkedinBaseUrl}`,
  },
  {
    name: "Mohd Monish Rainy",
    role: "Events Lead",
    image: events,
    linkedin: `${linkedinBaseUrl}mohd-monish-rainy/`,
  },
  {
    name: "Labeebah Islaam",
    role: "Workshops Lead",
    image: workshop,
    linkedin: `${linkedinBaseUrl}labeebah-islaam/`,
  },
  {
    name: "Hanin Amri",
    role: "Graphics Lead",
    image: graphics,
    linkedin: `${linkedinBaseUrl}haninsofia/`,
  },
  {
    name: "Dhruv Sharma",
    role: "Dev Lead",
    image: dev,
    linkedin: `${linkedinBaseUrl}dsio/`,
  },
];

export { people as Committee };
