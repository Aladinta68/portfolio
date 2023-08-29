import {
  khalil,
  azizsaidi,
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  bootstrap,
  java,
  mysql,
  meta,
  starbucks,
  tesla,
  shopify,
  gantt,
  algeriajob,
  mailsender,
  tabara3,
  tabara3dashbord
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
    id: "projects",
    title: "Projects",
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
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "ExpressJs Developer",
    icon: backend,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
      "I thought it was impossible to make a website as beautiful as our product, but Alae proved me wrong.",
    name: "Meziane khalil",
    image: khalil,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Alae does.",
    name: "Saidi omar abdelaziz",
    image: azizsaidi,
  },
  {
    testimonial:
      "After Alae optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kreifeur khalifa",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Algeria job",
    description:
      "Web-based platform that allows users to search, and applys job .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: algeriajob,
    source_code_link: "https://github.com/",
    project_url_link: "https://tabara3.vercel.app/",
  },
  {
    name: "Gantt",
    description:
      "Web app that  manage dependencies and prioritize anything into an  project timeline.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: gantt,
    source_code_link: "https://github.com/",
    project_url_link: "https://tabara3.vercel.app/",
  },
  {
    name: "Mail sender",
    description:
      "A web app that allow users and companies to send same email to multiple contact .",
    tags: [
      {
        name: "Python-flask",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: mailsender,
    source_code_link: "https://github.com/",
    project_url_link: "https://tabara3.vercel.app/",
  },
  {
    name: "Tabara3",
    description:
      "A web application that allow user and associations to find blod donors .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
      {
        name: "sqllite",
        color: "white",
      },
    ],
    image: tabara3,
    source_code_link: "https://github.com/Aladinta68/tabara3",
    project_url_link: "https://tabara3.vercel.app/",
  },
  {
    name: "Tabara3 dashboard",
    description:
      "A web application that allow admin to manage  tabara3 app  .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
      {
        name: "sqllite",
        color: "green-text-gradient",
      },
    ],
    image: tabara3dashbord,
    source_code_link: "https://github.com/Aladinta68/tabara3dashboard",
    project_url_link: "https://tabara3dashboard.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
