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
    'I am a passionate Full-Stack Developer and Software Architect specializing in enterprise-level applications and innovative digital solutions. With proven expertise in MERN stack, React Native, and blockchain technologies, I have successfully delivered complex projects including comprehensive school management systems, healthcare applications, and enterprise platforms. I excel at transforming business requirements into scalable, secure, and user-centric applications that drive growth and efficiency.',
  resumeLink: '/Prince_Lee_Nna_CV.pdf',
};

export const openSource = {
  githubUserName: 'amazingprincelee',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://princelee.pro/',
  linkedin: 'https://www.linkedin.com/in/amazingprincelee',
  github: 'https://github.com/amazingprincelee',
  instagram: 'https://www.instagram.com/amazingprincelee/',
  facebook: 'https://web.facebook.com/amazingprincelee/',
  twitter: 'https://x.com/amazinprincelee',
  youtube: 'https://www.youtube.com/@amazingprincelee',
  tiktok: 'https://www.tiktok.com/@amazingprincelee'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    'Experienced Full-Stack Developer with a comprehensive skill set capable of working across a wide range of technology stacks.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs with Express & Nodejs'),
        emoji('⚡ Developing cross-platform mobile applications with React Native'),
        emoji('⚡ Creating intuitive UI/UX designs using Figma and Photoshop'),
        emoji('⚡ Managing state efficiently with Redux Toolkit'),
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
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Redux Toolkit',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Figma',
          iconifyTag: 'logos:figma',
        },
        {
          skillName: 'Photoshop',
          iconifyTag: 'logos:adobe-photoshop',
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
    company: 'Sonatech Global',
    companyLogo: '/img/icons/common/sonatech.jpg',
    date: 'May 2024 - Present',
    desc: 'I am the Full Stack developer, project manager, and software architect of this organization. Using the MERN stack, I designed and developed both the frontend and backend for enterprise-level solutions.',
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
    name: 'Prince Lee EduSuite - School Management System',
    desc: 'A comprehensive school management system featuring separate dashboards for administrators, teachers, and parents. Built with MERN stack, it includes student management, academic tracking, billing systems, examination management, and real-time communication. Features responsive design with role-based access control and secure payment integration.',
    github: 'https://github.com/amazingprincelee/school-management-system',
    link: 'http://localhost:5173',
    images: [
      '/img/admin/admin dashboard home.jpg',
      '/img/teacher/teachers dashboard.png',
      '/img/parent/parent potal dashboard.jpg',
      '/img/admin/admin dashboard manage student.jpg',
      '/img/admin/admin dashboard exams.jpg'
    ]
  },
  {
    name: 'Mobile Doctor App',
    desc: 'A revolutionary healthcare mobile application built with React Native and MERN stack. Features telemedicine consultations, appointment booking, medical records management, and real-time chat with healthcare providers. Includes secure payment processing and multi-platform compatibility.',
    link: 'https://mobiledoctorapp.com/',
    downloadLink: 'https://expo.dev/artifacts/eas/xdvc9rGufGWqdF1WbJDRsS.apk',
    images: [
      '/img/mobiledoctor/mobile doctor app.jpg',
      '/img/mobiledoctor/mobile doctor consultation.jpg',
      '/img/mobiledoctor/mobile doctor dashboard.jpg'
    ]
  },
  {
    name: 'Sonatech Global Enterprise Platform',
    desc: 'An enterprise-level business management platform developed for Sonatech Global. Features comprehensive dashboard analytics, project management tools, client relationship management, and automated reporting systems. Built with modern web technologies ensuring scalability and performance.',
    link: 'https://sanatetechglobal.com',
    images: [
      '/img/Sonatech/sonatech landing page.jpg',
      '/img/Sonatech/sonatech dashboard home.jpg',
      '/img/Sonatech/sonatech dashboard.jpg',
      '/img/Sonatech/sonatech about.jpg'
    ]
  },
  {
    name: 'CryptoSaver DApp (Coming Soon)',
    desc: 'An innovative decentralized application for strategic cryptocurrency savings. Users can deposit Solana, Ethereum, and WLFI tokens with time-locked smart contracts (minimum 2 years). Features secure vault mechanisms, yield optimization, and cannot be withdrawn until the specified time period. Built with Solidity and Web3 technologies.',
    github: 'https://github.com/amazingprincelee/cryptosaver-dapp',
    status: 'In Development',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Solana']
  },
  {
    name: 'Collobogig',
    desc: 'A collaborative platform leveraging modern web technologies to create an intuitive and efficient user experience. Built with React, TypeScript, and Redux Toolkit for robust state management.',
    link: 'https://collobogig.com',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Beatrice Oahmen',
    feedback:
      'Working with Prince Lee has been transformative for our business. His expertise in full-stack development helped us launch our e-commerce platform ahead of schedule. His profound understanding of both frontend and backend technologies, combined with his ability to optimize for performance, resulted in a 40% increase in our website conversion rate. His implementation of responsive design principles ensures our platform works flawlessly across all devices.',
  },
  {
    name: 'Chijioke Amadi',
    feedback:
      'Prince Lee is the epitome of technical excellence and professional reliability. As our lead developer, he architected and delivered our enterprise-level application that now serves over 50,000 daily users. His innovative approach to implementing real-time features and optimization of database queries reduced our server costs by 35%. Beyond his technical skills, his ability to communicate complex technical concepts to non-technical stakeholders made him invaluable to our project success.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Prince Lee | Full Stack Developer & Software Architect',
  description:
    'Prince Lee is an expert Full Stack Developer and Software Architect specializing in enterprise applications, school management systems, healthcare apps, and blockchain DApps. Proven track record in MERN stack, React Native, and Solidity development.',
  author: 'Prince Lee',
  image: 'https://princelee.pro/images/nnaprince.jpg',
  url: 'https://princelee.pro',
  keywords: [
    'Prince Lee',
    'Full Stack Developer',
    'Software Architect',
    'School Management System',
    'Healthcare App Developer',
    'React Developer',
    'React Native Developer',
    'Node.js Developer',
    'Express.js Developer',
    'Blockchain Developer',
    'DApp Developer',
    'Solidity Developer',
    'Enterprise Applications',
    'MERN Stack',
    'Mobile App Developer',
    'PostgreSQL',
    'MongoDB',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'RESTful API',
    'JavaScript Developer',
    'Portfolio',
    'Prince Lee Portfolio',
    'EduSuite',
    'Mobile Doctor',
    'Sonatech Global',
  ],
};
