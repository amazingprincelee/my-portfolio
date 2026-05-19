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
  title: "Hi, I'm Prince Lee",
  description:
    'Senior Full-Stack Engineer & Head of IT specialising in enterprise application development and software architecture. I architect and deliver complex systems from the ground up — including full ERP platforms, real estate apps, healthcare solutions, and AI-powered trading platforms. Specialist in the MERN stack, TypeScript, React Native, Docker, and real-time systems. Available for remote full-stack and IT leadership roles worldwide.',
  resumeLink: '/Prince_Lee_Nna_CV.html',
};

export const openSource = {
  githubUserName: 'amazingprincelee',
};

export const youtubeChannel = {
  channelId: 'PASTE_YOUR_CHANNEL_ID_HERE', // Replace with your UC... channel ID
  handle: '@techgistwithprincelee',
  displayName: 'TechGist with Prince Lee',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://princelee.pro/',
  linkedin: 'https://www.linkedin.com/in/amazingprincenna',
  github: 'https://github.com/amazingprincelee',
  upwork: 'https://www.upwork.com/freelancers/~01f5e085fce3ca17bd?mp_source=share',
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
    Stack: 'Frontend/Design',
    progressPercentage: '98',
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
    progressPercentage: '95',
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
    role: 'Head of IT / Lead Software Engineer',
    company: 'Newpal Nigeria Limited',
    companyLogo: '/img/newpal/logo.png',
    date: 'Dec 2024 - Present',
    desc: 'Sole architect and developer of Newpal\'s full enterprise ERP system from the ground up. The system spans 10+ integrated modules — procurement, finance, inventory (raw, finished, assets), production, dispatch, sales, QA, weighbridge, and gate management — serving an entire manufacturing operation end-to-end.',
  },
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
    name: 'PamProperty — Real Estate Mobile & Web Platform',
    desc: 'A full-stack real estate platform trusted for transparent property transactions. Features property listings (land, rentals, hotels), a built-in escrow system for secure buyer-seller dealings, real-time chat, inspection scheduling, KYC verification, and a wallet system. Available as a mobile app (Android) and web app.\n\nHighlight: The escrow system removes the fear of fraud in Nigerian property deals — buyers only release funds after inspection approval.\n\nTech: React · Redux Toolkit · Node.js · Express · MongoDB · Socket.io · React Native · JWT · Cloudinary',
    link: 'https://pamproperty.com/',
    downloadLink: 'https://www.pamproperty.com/download',
    status: 'Featured',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    images: [
      '/img/pamprop/splash.svg',
      '/img/pamprop/home.jpeg',
      '/img/pamprop/login.jpeg',
      '/img/pamprop/wallet.jpeg',
      '/img/pamprop/request.jpeg',
    ]
  },
  {
    name: 'Newpal ERP System — Enterprise Resource Planning',
    desc: 'A full enterprise ERP system built solo for Newpal Nigeria Limited (a manufacturing company), where I serve as Head of IT. This is one of the most complex projects I have delivered — 10+ integrated modules covering every operational department in a manufacturing company.\n\nModules: Procurement · Finance & Accounts · Inventory (Raw, Finished, Assets) · Production · Quality Assurance · Dispatch · Sales · Weighbridge · Gate Management · Super Admin\n\nEvery module talks to the others in real-time. Role-based access ensures each department sees only what they need. Built from scratch — architecture, database design, UI, API, deployment — all by me.',
    status: 'Enterprise',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'REST API'],
    images: [
      '/img/newpal/logo.png',
      '/img/newpal/flow.jpg',
      '/img/newpal/procurement-flow.jpg',
    ]
  },
  {
    name: 'ExpertHub Workspace — Expert Workspace & Learning Platform',
    desc: 'A professional workspace booking and expert learning platform that connects trainers, professionals, and businesses. Users can book physical workspace rooms (boardroom, meeting room, training room), join expert-led sessions, manage memberships, and access curated learning resources.\n\nKey features: Smart workspace reservation with availability calendar · Expert-led training programs · Membership tiers with subscription billing · Provider & client role system · Wallet & payment integration · Real-time notifications\n\nTech: Next.js · Node.js · Express · MongoDB · Socket.io · Flutterwave · TypeScript',
    link: 'https://workspace.experthubllc.com/',
    status: 'Live',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Flutterwave', 'Socket.io'],
    images: [
      '/img/experthub/hero.png',
      '/img/experthub/board-room.png',
      '/img/experthub/meeting-room.png',
      '/img/experthub/training-room.png',
      '/img/experthub/mockup.jpg',
    ]
  },
  {
    name: 'Prince Lee EduSuite - School Management System',
    desc: 'A comprehensive school management system featuring separate dashboards for administrators, teachers, and parents. Built with MERN stack, it includes student management, academic tracking, billing systems, examination management, and real-time communication. Features responsive design with role-based access control and secure payment integration.',
    link: 'https://princelee-school-management.vercel.app/',
    status: 'Live',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Redux'],
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
    status: 'Live',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    images: [
      '/img/mobiledoctor/mobile doctor app.jpg',
      '/img/mobiledoctor/mobile doctor consultation.jpg',
      '/img/mobiledoctor/mobile doctor dashboard.jpg'
    ]
  },
  {
    name: 'SmartStrategy — AI Crypto Trading Platform',
    desc: 'SmartStrategy is a full-stack AI-powered crypto trading platform. It combines a real-time signal engine, automated trading bots, and multi-exchange arbitrage scanning into one dashboard.\n\nKey features:\n- AI + technical analysis signal engine (RSI, EMA, MACD, multi-timeframe alignment) that generates LONG/SHORT signals with entry, stop-loss, and take-profit levels\n- Automated SmartSignal bots — user picks a signal at setup, bot opens and manages the trade on their exchange\n- Cross-exchange and triangular arbitrage scanner with live profit alerts\n- Demo mode with virtual balance for risk-free testing\n- Premium subscription system with crypto payments (Coinbase Commerce, NOWPayments)\n- Real-time WebSocket updates for signals, bot ticks, P&L, and arbitrage opportunities\n- Admin dashboard with user management, subscription tracking, and full transaction audit trail\n\nStack: React + Redux (frontend), Node.js + Express + MongoDB (backend), TensorFlow.js for AI inference, Socket.IO for real-time, CCXT for multi-exchange connectivity. Deployed on Vercel (frontend) with a cloud backend.',
    link: 'https://smartstrategy.vercel.app/',
    status: 'Live',
    technologies: ['React', 'TensorFlow.js', 'Node.js', 'MongoDB', 'Socket.io', 'CCXT'],
    images: [
      '/img/smartstrategy/home.jpg',
      '/img/smartstrategy/dashboard.jpg',
      '/img/smartstrategy/vault.jpg',
      '/img/smartstrategy/login.jpg',
      '/img/smartstrategy/login-success.jpg'
    ]
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
