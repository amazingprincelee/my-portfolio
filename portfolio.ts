import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Prince Lee Nna',
  title: "Hi all, I'm Prince Lee",
  description:
    'I am a passionate Full-Stack Developer with expertise in building dynamic, responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I bring a comprehensive approach to developing scalable and maintainable solutions',
  resumeLink: 'https://princelee.pro/documents/CV_Prince_Nna.pdf',
};

export const openSource = {
  githubUserName: 'amazingprincelee',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://princelee.pro/',
  linkedin: 'https://www.linkedin.com/in/amazingprincelee',
  github: 'https://github.com/amazingprincelee',
  facebook: 'https://www.facebook.com/amazingprincelee1/',
  discord: 'https://discord.com/users/amazingprincelee',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    'Experienced Full-Stack Developer with a comprehensive skill set capable of working across a wide range of technology stacks.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs with Express & Nodejs'),
        emoji('⚡ Crafting server-side applications and APIs with NestJS for scalable solutions'),
        emoji('⚡ Managing and integrating databases like MongoDB, PostgreSQL, and MySQL'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'Node',
          iconifyTag: 'vscode-icons:file-type-node',
        },
      ],
    },
    
    
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '100',
  },
  {
    Stack: 'Android',
    progressPercentage: '95',
  },
  {
    Stack: 'IOS',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Liverpool John Moores University',
    subHeader: 'B.Eng in Electronics and Control Systems',
    duration: 'September 2011 - Feb 2013',
    desc: 'interconnection of devices that influences the behaviour of other devices or systems.',
    grade: 'Grade B',
    descBullets: [
      'Proficient in programming languages such as javaScript, Nodejs,Python, and Solidity for smart contract and blockchain development',
      'Designed and implemented responsive functions for specific applications.',
    ],
  },
  {
    schoolName: 'Institut Megatech Malaysia',
    subHeader: 'Advance Deploma in Electrical & Electronics Engr.',
    duration: 'June 2006 - September 2011',
    desc: 'design and develop complex electrical systems and electronic components',
    grade: 'Grade B',
    descBullets: [
      'Skilled in using lab equipment such as oscilloscopes, multimeters, and function generators for testing and troubleshooting.',
      'Designed and optimized power distribution systems for specific applications',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'FullStack Developer',
    company: 'Phylee Travel and Tours Limited',
    companyLogo: '/img/icons/common/phylee.jpg',
    date: 'May 2024 - Present',
    desc: 'I am the Full Stack developer, project manager, and software architect of this organization. Using the MERN stack, I designed and developed both the frontend and backend.',
  },
  {
    role: 'Back End Developer / project manager',
    company: 'First Start Consults',
    companyLogo: '/img/icons/common/first-star.png',
    date: 'Dec 2023 - Present',
    desc: 'I specialize in backend development using the MERN stack and have led the design and architecture of various software projects. I make critical decisions on technologies, frameworks, and patterns to ensure robust and efficient solutions.',
  },

  {
    role: 'Lead Smart Contract and Dapp Developer',
    company: 'George Stojkovic',
    companyLogo: '/img/icons/common/goerge.jpg',
    date: 'Jan 2023 - Jul 2023',
    desc: 'As the lead Smart Contract and Dapp developer , my role was to oversee and lead the development of smart contracts and decentralized applications (Dapps) for the team.',
  },
  {
    role: 'Director/Web Developer',
    company: 'BEDETELS Triumphant International Academy',
    companyLogo: '/img/icons/common/bedetels.png',
    date: 'Sept 2020 - Jan 2023',
    desc: 'School administrator, In charge of the School ICT Department and Web development.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Phylee Travel and Tours Limited',
    desc: 'This project is a thorough demonstration of full-stack development skills, incorporating a range of technologies. It uses Atlas for cloud-based data storage, Node.js and Express for creating the backend, and sets up RESTful APIs for communication between the server and client. The frontend is built with React, ensuring a dynamic interface. ',
    github: 'https://github.com/amazingprincelee/phyleeTravels-FrontEnd',
    link: 'https://phyleejourneys.com/',
  },

  {
    name: 'Mobile Doctor App',
    desc: 'Mobile Doctor is a health provider mobile application developed by First Star Consult Limited. I oversee the application as both its manager and lead developer. I implemented the backend using Node.js and Express, supervised the Figma UI design, and developed the frontend using React Native.',
    link: 'https://firststarconsults.online/',
  },
  {
    name: 'Newage Staking',
    desc: 'The Newage Staking Dapp represents a decentralized application meticulously deployed on the Polygon network. It seamlessly interfaces with a frontend user interface constructed using the Next.js framework. This harmonious integration underscores our commitment to providing efficient and user-friendly blockchain solutions.',
    link: 'https://www.newagecoin.cash/',
  },

  {
    name: 'Nestjs Authentication and Communication',
    desc: 'The project features a robust backend designed to handle user authentication and communication. It includes a secure and scalable email and password-based authentication system for managing user identities.',
    github: 'https://github.com/amazingprincelee/nestjs-auth-systems',
    
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Bar. Evans Dule',
    feedback:
      'Prince Lee Nna is an exceptional full-stack developer. His technical skills are exemplary, and he consistently delivers high-quality code. His ability to collaborate with the team, meet deadlines, and find creative solutions to complex problems is truly commendable. Prince dedication and professionalism make him a key asset to our organization. Keep up the fantastic work!.',
  },
  {
    name: 'SomMoney',
    feedback:
      'Prince Lee Nna is a stellar full-stack developer. His technical prowess and attention to detail shine through in his work. He consistently goes above and beyond to meet project goals and demonstrates a strong commitment to the team success. Prince ability to handle complex challenges and deliver results makes him a valuable asset to our organization. Keep up the fantastic work!',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Prince Lee | Full Stack Developer & Freelancer',
  description:
    'Prince Lee is a versatile Full Stack Developer specializing in React, React Native, Node.js, Express.js, PostgreSQL, MongoDB, and more. Offering exceptional web and mobile app development services.',
  author: 'Prince Lee',
  image: 'https://princelee.pro/images/nnaprince.jpg',
  url: 'https://princelee.pro',
  keywords: [
    'Prince Lee',
    'Full Stack Developer',
    'React Developer',
    'React Native Developer',
    'Node.js Developer',
    'Express.js Developer',
    'Freelance Developer',
    'Web Developer',
    'Mobile App Developer',
    'PostgreSQL',
    'MongoDB',
    'NestJS',
    'TypeScript',
    'Next.js',
    'Bootstrap',
    'Tailwind CSS',
    'RESTful API',
    'JavaScript Developer',
    'Portfolio',
    'Prince Lee Portfolio',
  ],
};
