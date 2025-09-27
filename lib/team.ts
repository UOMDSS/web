// team.ts (data only)
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
import workshops3 from "../public/committee/workshops3.jpg";
import events1 from "../public/committee/events1.jpg";
import events2 from "../public/committee/events2.jpg";
import events3 from "../public/committee/events3.jpg";
import bnyMellonLogo from "../public/sponsors/bny-logo.svg"; // <-- sponsor logo
import { StaticImageData } from "next/image";

export interface Person {
  name: string;
  role: string;
  image: StaticImageData | string;
  linkedin: string;
  degree: string;
}

export interface Sponsor {
  name: string;
  logo: StaticImageData | string;
  url: string;
}

const linkedinBaseUrl = "https://www.linkedin.com/in/";

// Core Team (Leadership, Finance, Strategy, Marketing)
export const coreTeam: Person[] = [
  {
    name: "Waverli Leung",
    role: "President",
    degree: "2nd Yr Computer Science & Maths",
    image: president,
    linkedin: `${linkedinBaseUrl}waverli-leung/`,
  },
  {
    name: "Nicole Fernandes",
    role: "Vice President & Inclusion Officer",
    degree: "3rd Yr Computer Science & Maths",
    image: vice,
    linkedin: `${linkedinBaseUrl}nicole-fernandes-uk/`,
  },
  {
    name: "Ben Zan",
    role: "Treasurer & Podcast Host",
    degree: "2nd Yr Computer Science & Maths",
    image: treasurer,
    linkedin: `${linkedinBaseUrl}benjamin-zan/`,
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
];

// Workshop Team
export const workshopTeam: Person[] = [
  {
    name: "Sean Lin",
    role: "Workshops Lead",
    degree: "2nd Yr Computer Science & Maths",
    image: workshops1,
    linkedin: `${linkedinBaseUrl}haol-co/`,
  },
  {
    name: "Arjun Kukadia",
    role: "Workshops Officer",
    degree: "2nd Yr Maths & Physics",
    image: workshops2,
    linkedin: `${linkedinBaseUrl}arjun-kukadia-b3548b324/`,
  },
  {
    name: "Leena Dany",
    role: "Workshops Officer",
    degree: "1st Yr Computer Science",
    image: workshops3,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
];

// Events Team
export const eventsTeam: Person[] = [
  {
    name: "Mannat Kinra",
    role: "Head of Events",
    degree:
      "1st Yr MSc Human Resource Management",
    image: events1,
    linkedin: `${linkedinBaseUrl}mannat-kinra/`,
  },
  {
    name: "Shaiem Amin",
    role: "Events Officer",
    degree: "2nd Yr Computer Science & Maths",
    image: events2,
    linkedin: `${linkedinBaseUrl}shaiem-amin-13329124a/`,
  },
  {
    name: "Weizhou Wang",
    role: "Events Officer",
    degree: "2nd Yr Actuarial Science & Maths",
    image: events3,
    linkedin: `${linkedinBaseUrl}weizhou-wang/`,
  },
];

// Graphics Team
export const graphicsTeam: Person[] = [
  {
    name: "Qistina Shafizul",
    role: "Graphic Designer",
    degree: "2nd Yr Computer Science",
    image: graphic1,
    linkedin: `${linkedinBaseUrl}qistinashafizul/`,
  },
  {
    name: "Ayesha Khan",
    role: "Graphic Designer",
    degree: "2nd Yr Psychology", // fixed typo
    image: graphic2,
    linkedin: `${linkedinBaseUrl}xxx/`,
  },
  {
    name: "Taran Patel",
    role: "Video Editor",
    degree: "3rd Yr Computer Science",
    image: video,
    linkedin: `${linkedinBaseUrl}tarpat/`,
  },
];

// Sponsors
export const sponsors: Sponsor[] = [
  {
    name: "BNY Mellon",
    logo: bnyMellonLogo,
    url: "https://www.bnymellon.com/",
  },
];

// Grouped + combined exports for convenience
export const teamsBySection = {
  "Workshop Team": workshopTeam,
  "Events Team": eventsTeam,
  "Graphics Team": graphicsTeam,
  "Core Team": coreTeam,
} as const;

export const Committee: Person[] = [
  ...coreTeam,
  ...workshopTeam,
  ...eventsTeam,
  ...graphicsTeam,
];

// Optional: site sections object (teams + sponsors)
export const siteSections = {
  teams: teamsBySection,
  sponsors,
} as const;
