// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import voisLogo from './assets/company_logo/vois.jpg';
import techLogo from './assets/company_logo/technophilia.png';
import tezpurLogo from './assets/company_logo/tezpur.jpg';

// Education Section Logo's
import DULogo from './assets/education_logo/DU.jpg';
import gtbaLogo from './assets/education_logo/gtba.jpg';
import pvcsLogo from './assets/education_logo/pvcs.jpg';

// Project Section Logo's
import bookLogo from './assets/work_logo/book.png';
import drawLogo from './assets/work_logo/draw.png';
import guessLogo from './assets/work_logo/guess.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: voisLogo,
      role: "Graduate Engineer Trainee",
      company: "VOIS (Vodafone Intelligent Solutions)",
      date: "October 2025 - March 2026",
      desc: "Completed an intensive Graduate Engineer Trainee program focused on software development, database management, cloud technologies, networking, and Agile methodologies. Gained hands-on experience with full-stack development concepts, REST APIs, SQL, Git, and collaborative software development while strengthening problem-solving and debugging skills.",
    },
    {
      id: 1,
      img: techLogo,
      role: "Machine Learning Intern",
      company: "Technolophilia (BClub IIT Kharagpur Collaboration)",
      date: "June 2024 - July 2024",
      desc: "Developed an Amazon Product Review Sentiment Analysis system using machine learning techniques. Performed data preprocessing, feature extraction, model training, and evaluation to classify customer reviews, gaining practical experience in real-world data analysis and predictive modeling.",     
    },
    {
      id: 2,
      img: tezpurLogo,
      role: "Academic Intern",
      company: "Tezpur University",
      date: "June 2023 - July 2023",
      desc: "Contributed to the development of an Electricity Billing Management System by designing and implementing modules for customer registration, bill generation, payment tracking, and database management. Collaborated with the team to develop a user-friendly application that streamlined billing operations and improved record management.",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: DULogo,
      school: "Dibrugarh University, Dibrugarh",
      date: "Sept 2021 - July 2025",
      grade: "8.66 CGPA",
      desc: "Completed my Bachelor's degree in Computer Science, building a strong foundation in programming, software development, data structures, algorithms, database management systems, operating systems, computer networks, and software engineering through academic coursework and projects.",
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    },
    {
      id: 1,
      img: pvcsLogo,
      school: "Purna Vikash Central School, Sivasagar",
      date: "Apr 2018 - March 2020",
      grade: "77.8%",
      desc: "Completed Higher Secondary education under the CBSE board with Physics, Chemistry, Mathematics, and Computer Science.",
      degree: "CBSE (Class XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: gtbaLogo,
      school: "Guru Teg Bahadur Academy, Tinsukia",
      date: "Apr 2016 - March 2018",
      grade: "92.8%",
      desc: "Completed Secondary education under the CBSE board with an excellent academic record.",
      degree: "CBSE (Class X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Book Store",
      description:
        "A full-stack bookstore management application built using the MERN stack. It allows users to view, add, update, and delete books through a responsive interface, with data stored in MongoDB and managed using RESTful APIs.",
      image: bookLogo,
      tags: ["React JS", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
      github: "https://github.com/Jagriti-17/BookStore-MERN-/tree/master",
      webapp: "https://mybookstore-umber.vercel.app/",
    },
    {
      id: 1,
      title: "Drawing App",
      description:
        "A web-based drawing application built with HTML5 Canvas that allows users to sketch, create digital signatures, customize brush and background colors, adjust brush size, clear the canvas, and download their artwork. It also supports saving and loading drawings using local storage.",
      image: drawLogo,
      tags: ["HTML", "CSS", "JavaScript", "Canvas API"],
      github: "https://github.com/Jagriti-17/signatureApp",
      webapp: "https://jagriti-17.github.io/signatureApp/",
    },
    
    {
      id: 2,
      title: "Number Guessing Game",
      description:
        "An interactive number guessing game built with JavaScript where players guess a randomly generated number with real-time feedback. The game tracks attempts and allows users to restart for a new challenge.",
      image: guessLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Jagriti-17/guessingGame",
      webapp: "https://jagriti-17.github.io/guessingGame/",
    },
  
  ];  