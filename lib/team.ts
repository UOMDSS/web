import president from "../public/committee/president.jpg";
import vice from "../public/committee/vice.jpg";
import treasurer from "../public/committee/treasurer.jpg";
import social from "../public/committee/social.jpg";
import marketing from "../public/committee/marketing.jpg";
import graphic from "../public/committee/graphic.jpg";
import video from "../public/committee/video.jpg";
import content from "../public/committee/content.jpg";
import workshops from "../public/committee/workshops.jpg";
import events from "../public/committee/events.jpg";
import { StaticImageData } from "next/image";

interface Person {
  name: string;
  role: string;
  image: StaticImageData | string;
  linkedin: string;
  degree: string;
}

const linkedinBaseUrl = "https://www.linkedin.com/in/";

const people: Person[] = [
  {
    name: "Waverli Leung",
    role: "President",
    degree: "2nd Yr CS & Maths",
    image: president,
    linkedin: `${linkedinBaseUrl}waverli-leung/`,
  },
  {
    name: "Nicole Fernandes",
    role: "Vice President & Inclusion Officer",
    degree: "3rd Yr CS & Maths",
    image: vice,
    linkedin: `${linkedinBaseUrl}nicole-fernandes-uk/`,
  },
  {
    name: "Ben Zan",
    role: "Treasurer & Podcast Host",
    degree: "2nd Yr CS & Maths",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}benjamin-zan/`,
  },
  {
    name: "Sean Lin",
    role: "Workshops Lead",
    degree: "2nd Yr CS & Maths",
    image: workshops,
    linkedin: `${linkedinBaseUrl}haol-co/`,
  },
  {
    name: "Peter Prescod",
    role: "Head of Events",
    degree: "2nd Yr CS & Maths",
    image: events,
    linkedin: `${linkedinBaseUrl}prescod/`,
  },
  {
    name: "Darwin Zhu",
    role: "Head of Strategy & Risk",
    degree: "2nd Yr Actuarial Science & Maths",
    image: marketing,
    linkedin: `${linkedinBaseUrl}zhecheng-zhu-darwin2006/`,
  },
  {
    name: "xxx",
    role: "Social Media Lead",
    degree: "xxx",
    image: social,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Content Creator",
    degree: "xxx",
    image: content,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Graphic Designer",
    degree: "xxx",
    image: graphic,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Video Editor",
    degree: "xxx",
    image: video,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
];

export { people as Committee };
