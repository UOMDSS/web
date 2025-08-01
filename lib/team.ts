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
    role: "Vice President & Inclusion Officer",
    image: vice,
    linkedin: `${linkedinBaseUrl}nicole-fernandes-uk/`,
  },
  {
    name: "Ben Zan",
    role: "Treasurer & Podcast Host",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}benjamin-zan/`,
  },
  {
    name: "xxx",
    role: "Head of Workshops",
    image: workshops,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Head of Events",
    image: events,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Marketing & Strategy Lead",
    image: marketing,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Social Media Lead",
    image: social,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Content Creator",
    image: content,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Graphic Designer",
    image: graphic,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Video Editor",
    image: video,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
];

export { people as Committee };
