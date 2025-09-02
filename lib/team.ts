import president from "../public/committee/president.jpg";
import vice from "../public/committee/vice.jpg";
import treasurer from "../public/committee/treasurer.jpg";
import social from "../public/committee/social.jpg";
import marketing from "../public/committee/marketing.jpg";
import graphic1 from "../public/committee/graphic1.jpg";
import graphic2 from "../public/committee/graphic2.jpg";
import video from "../public/committee/video.jpg";
import content from "../public/committee/content.jpg";
import workshops1 from "../public/committee/workshops1.jpg";
import workshops2 from "../public/committee/workshops2.jpg";
import events1 from "../public/committee/events.jpg";
import events2 from "../public/committee/events2.jpg";
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
    image: workshops1,
    linkedin: `${linkedinBaseUrl}haol-co/`,
  },
  {
    name: "xxx",
    role: "Workshops Officer",
    degree: "xxx",
    image: workshops2,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "Peter Prescod",
    role: "Head of Events",
    degree: "2nd Yr CS & Maths",
    image: events1,
    linkedin: `${linkedinBaseUrl}prescod/`,
  },
  {
    name: "xxx",
    role: "Events Officer",
    degree: "xxx",
    image: events2,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "Darwin Zhu",
    role: "Head of Strategy & Risk",
    degree: "2nd Yr Actuarial Science & Maths",
    image: marketing,
    linkedin: `${linkedinBaseUrl}zhecheng-zhu-darwin2006/`,
  },
  {
    name: "Yichen Liu",
    role: "Digital Marketing Lead",
    degree: "3rd Yr Criminology & Data Analytics",
    image: social,
    linkedin: `${linkedinBaseUrl}yichensusyliu/`,
  },
  {
    name: "xxx",
    role: "Content Creator",
    degree: "xxx",
    image: content,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "Ayesha Khan",
    role: "Graphic Lead",
    degree: "2nd Yr Psycology",
    image: graphic1,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "xxx",
    role: "Graphic Designer",
    degree: "xxx",
    image: graphic2,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "Taran Patel",
    role: "Video Editor",
    degree: "3rd Yr CS",
    image: video,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
];

export { people as Committee };
