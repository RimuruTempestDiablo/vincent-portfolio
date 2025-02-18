import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  psau,
  threejs,
  next,
  php,
  sql,
  WaterTemp,
  CowSell,
  AmGold,
  Dreambit,
  BNB,
  ghweb,
  Qube
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Tailwind CSS", icon: tailwind },
  { title: "Node JS", icon: nodejs },
  { title: "Next JS", icon: next },
  { title: "PHP", icon: php },
  { title: "My Sql", icon: sql },
  { title: "Git", icon: git },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "GH Web Development Services",
    icon: ghweb,
    iconBg: "#214158",
    date: "Jan 2024 - Jan 2025",
    points: [
      "Acquired hands-on knowledge of web designing, web development, web services, and deployment.",
      "Also gaining a solid foundation in Web development, covering website layout, data structure, and data management.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Biosytem Office | Pampanga State Agricultural University",
    icon: psau,
    iconBg: "#214158",
    date: "Jan 2023 - May 2023",
    points: [
      "Completed internship, gaining a strong foundation in IT tasks, including web development and setting up IT hardwares.",
      "Acquired practical skills in setting up networks, web development, image processing, and data analysis.",
    ],
  },
];

export const projects = [
  {
    name: "QuBe",
    description:
      "A Web-based Quiz Bee Competition Platform",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "NodeJS", color: "pink-text-gradient" },
    ],
    image: Qube,
    source_code_link: "",
  },
  {
    name: "WaterTemp",
    description:
      "Web-based platform that allows users to access water temperature information for their fish in the field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: WaterTemp,
    source_code_link: "",
  },
  {
    name: "Cow Sell",
    description:
      "A web-system that automates the manual way of ordering cows. From farm to factories to goods down to customer food products made of cow.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "JQuery", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: CowSell,
    source_code_link: "",
  },
  {
    name: "AM Gold",
    description:
      "A web-system that automates the manual way of ordering gold. This features different variety of bundles of gold ranging in different prices from affordable ones and luxurious offers.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "JQuery", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: AmGold,
    source_code_link: "",
  },
  {
    name: "BNB135",
    description:
      "A option trading platform for cryptocurrencies. Betting if the token will go up or go down in different intervals 1, 3, 5 minutes respectively",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "JQuery", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: BNB,
    source_code_link: "",
  },
  {
    name: "DreamBit",
    description:
      "A crypto exchange platform running from the web environment. This system caters token trading, p2p, setting leverage, tweaking TP/SL and so on.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: Dreambit,
    source_code_link: "",
  },
];
