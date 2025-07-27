import president from "../public/committee/president.jpg";
import vice from "../public/committee/vice.jpg";
import treasurer from "../public/committee/treasurer.jpg";
import workshop from "../public/committee/workshop.jpg";
import operation from "../public/committee/operation.jpg";
import inclusion from "../public/committee/inclusion.jpg";
import social from "../public/committee/social.jpg";
import marketing from "../public/committee/marketing.jpg";
import graphic from "../public/committee/graphic.jpg";
import photo from "../public/committee/photo.jpg";
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
    name: "Waverli Leung",
    role: "President",
    image: president,
    linkedin: `${linkedinBaseUrl}waverli-leung/`,
  },
  {
    name: "Nicole Fernandes",
    role: "Vice President",
    image: vice,
    linkedin: `${linkedinBaseUrl}nicole-fernandes-uk/`,
  },
  {
    name: "xxx",
    role: "Treasurer",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}saeyoungher/`,
  },
  {
    name: "Ben Zan",
    role: "Workshop Lead",
    image: workshop,
    linkedin: `${linkedinBaseUrl}benjamin-zan/`,
  },
  {
    name: "xxx",
    role: "Operation Lead",
    image: operation,
    linkedin: `${linkedinBaseUrl}tengku-dzariff-iman-0ba39b2ab/`,
  },
  {
    name: "Constanza Hay",
    role: "Social Media Lead",
    image: social,
    linkedin: `${linkedinBaseUrl}constanza-soto-hay/`,
  },
  {
    name: "Darwin Zhu",
    role: "Marketing Lead",
    image: marketing,
    linkedin: `${linkedinBaseUrl}zhecheng-zhu-darwin2006/`,
  },
  {
    name: "xxx",
    role: "Graphic Lead",
    image: graphic,
    linkedin: `${linkedinBaseUrl}tahaejaz1/`,
  },
  {
    name: "xxx",
    role: "Inclusion Officer",
    image: inclusion,
    linkedin: `${linkedinBaseUrl}hamzakhan47/`,
  },
  {
    name: "Sean Lin",
    role: "Photographer Lead",
    image: photo,
    linkedin: `${linkedinBaseUrl}haol-co/`,
  },
];

export { people as Committee };
