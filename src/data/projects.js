import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript
} from "react-icons/bi";

import { SiNodedotjs, SiHtml5 ,SiBootstrap  } from "react-icons/si"
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress ,SiPostgresql  } from "react-icons/si";
import { MdDashboard } from "react-icons/md"; // يمكن استخدامها كأيقونة للماتيريال يو أي

const ProjectsData = [
  {
    id: "1",
    name: "Easy Learning",
    image: require("../assets/Images/Screenshot 2025-03-08 174730.png"),
    icons: [BiLogoMongodb , BiLogoReact, SiBootstrap,SiNodedotjs],
    description: "An e-learning platform connecting students and teachers, with access to lessons, comments, and saving options.",
    github: "https://github.com/C13-NatherBaneSalameh/MERAKI_Academy_Project_4.git",
    demo: "https://easylearningp.netlify.app/",
  },
  {
    id: "2",
    name: "Mech2U",
    image: require("../assets/Images/Screenshot 2025-03-08 181115 Mech3U.png"),
    icons: [BiLogoReact, BiLogoTailwindCss, SiNodedotjs, SiPostgresql],
    description: "Mech2U connects customers with auto maintenance services, allowing easy service selection and scheduling.",
    github: "https://github.com/The-Full-Snack-Devs/MERAKI_Academy_Project_5.git",
    demo: "https://Mech2ujo.netlify.app",
  },
  // {
  //   id: "3",
  //   name: "Chat Application",
  //   image: "./chatapp.png",
  //   icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
  //   description: "This chat application provides an interface to the users to interact with their friends.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
  //   demo: "https://vchat4whisperchat.vercel.app",
  // },
  // {
  //   id: "4",
  //   name: "Expense Tracker",
  //   image: "./expense-tracker.png",
  //   icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
  //   description: "This application provides an interface for users to track their expenses .",
  //   github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  //   demo: "https://vtrack-expense.vercel.app",
  // },
  // {
  //   id: "5",
  //   name: "Car Rental Website",
  //   image: "./car-rental-app.png",
  //   icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
  //   description: "This is an online platform that allows users to rent cars for personal or business use.",
  //   github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  //   demo: "https://car-rental-application.vercel.app",
  // },
  // {
  //   id: "8",
  //   name: "Blog Application",
  //   image: "./blog-app.png",
  //   icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
  //   description: "This application allows users to express their thoughts and experiences through blogs.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
  //   demo: "https://write-ur-blog.vercel.app",
  // },
];

export default ProjectsData;
