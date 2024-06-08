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
  cpp,
  octanet,
  prodigy,
  codsoft,
  chatai,
  cms,
  gmeet,
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
    title: "ReactJS + NextJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Programmer",
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
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "React.js Developer Intern",
    company_name: "Octanet Services Pvt Ltd",
    icon: octanet,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing data-driven solutions using Python and machine learning techniques.",
      "Collaborating with cross-functional teams to extract insights from data.",
      "Implementing interactive data visualizations for effective communication.",
      "Contributing to code reviews and continuous improvement of data pipelines.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developing Java-based applications and solutions for real-time projects.",
      "Collaborating with teams to design, implement, and deploy scalable software solutions.",
      "Participating in code reviews and contributing to the continuous improvement of code quality.",
      "Working with frameworks like Spring Boot to build robust and efficient applications.",
    ],
  },

];

const projects = [
  {
    name: "ChatAI - ChatGPT Clone",
    description:
      "ChatGPT Clone a chatbot application powered by OpenAI's Chat Completion API and built with Next.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "auth0",
        color: "pink-text-gradient",
      },
    ],
    image: chatai,
    source_code_link: "https://github.com/Sarthak2064/ChatGPT-Clone-NextJS-And-OpenAI-API-Key",
  },
  {
    name: "Contact Management System",
    description:
        "Simple MERN Stack Application For Managing Contacts with Both optimized Frontend and Backend",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/Sarthak2064/Contact-Management-System",
  },
  {
    name: "GMeet Clone",
    description:
        "Google Meet Clone, developed from scratch with WebRTC, Socket.io, and JavaScript. Seamlessly manage meetings, share files, and broadcast messages with advanced WebRTC techniques and personalized message delivery.",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: gmeet,
    source_code_link: "https://github.com/Sarthak2064/GMeet-Clone",
  },
];

export { services, technologies, experiences, projects };
