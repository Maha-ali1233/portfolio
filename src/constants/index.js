import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  wordpress,
  upwork,
  shopify,
  aina,
  carrent,
  jobit,
  awaara,
  designpub,
  vault,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "WordPress Developer",
    company_name: "Freelancer on Fiverr",
    icon: wordpress,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and customizing WordPress themes and plugins to meet client requirements.",
      "Ensuring websites are responsive, user-friendly, and optimized for performance.",
      "Integrating third-party services and APIs to enhance website functionality.",
      "Conducting website maintenance, updates, and troubleshooting to resolve technical issues.",
      "Collaborating with clients to gather requirements and provide technical recommendations.",
      "Implementing SEO best practices to improve website visibility and search engine rankings.",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Cipher Tech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Feb 2024  -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Maha proved me wrong.",
    name: "Samiha Ali",
    designation: "CEO",
    company: "Cipher Tech Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Maha does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Maha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Moiz Banoori",
    designation: "COO",
    company: "NeverStopMedia",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Awaara Tours",
    description:
      "Awaara Tours is a travel agency application built on React, offering seamless travel planning and booking services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: awaara,
    source_code_link: "https://github.com/",
  },
  {
    name: "Aina Renovation",
    description:
      "Aina Renovation and Interior Designing. This website is made using 3d models and ThreeJS library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aina,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vault911",
    description:
      "Vault911 is a file encryption software built with React and Tailwind, providing robust security for sensitive data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: vault,
    source_code_link: "https://github.com/",
  },
  {
    name: "DesignPub",
    description:
      "DesignPub is a drawing app built on React, allowing users to create and share their artwork on a community page.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: designpub,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };