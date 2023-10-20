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
    "I'm a professional Full-Stack Web Developer with six years of experience. My skills encompass Python, Django, React.js, Next.js, Nodejs for web development, and Solidity, Web3.js, Ether.js, and Hardhat for Ethereum blockchain development.",
  resumeLink:
    'https://drive.google.com/file/d/1mZMn7GYGrA5V47T-lFmrRoSqoYLDYRPu/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'amazingprincelee',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://amazingprincelee.github.io/my-portfolio/',
  linkedin: 'https://www.linkedin.com/in/amazingprincelee',
  github: 'https://github.com/amazingprincelee',
  instagram: 'https://www.instagram.com/amazingprincelee',
  facebook: 'https://web.facebook.com/amazingprincelee',
  twitter: 'https://twitter.com/amazinprincelee',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Experienced Full-Stack Developer with a comprehensive skill set capable of working across a wide range of technology stacks.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
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
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experienced in working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
      
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
       
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
       
       
       
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experienced in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Expert in building scripts for automated testing & deployment of Smart Contracts'
        ),
        emoji(
          '⚡ Experienced in using Openzeppelin Smart Contract Standards'
        ),
        emoji('⚡ Expert in developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js/nextjs & Solidity using Web3.js/ether.js, '
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Blockchain',
    progressPercentage: '80',
  },
  {
    Stack: 'Dapps',
    progressPercentage: '90',
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
    duration: 'June 2006 - December 2011',
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
    role: 'Lead Developer',
    company: 'Winbulk',
    companyLogo: '/img/icons/common/winbulk-logo.jpg',
    date: 'June 2023 - Present',
    desc: 'Lead the design and architecture of software projects, making decisions on technologies, frameworks, and patterns.',
  },
  {
    role: 'Site Engineering',
    company: 'Newpal Nig. Limited',
    companyLogo: '/img/icons/common/newpal.jpg',
    date: 'Aug 2018 - Jan 2019',
    desc: 'Site remediation and equipment maintenance and management/ Web Developer',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Lead Smart Contract and Dapp Developer',
    company: 'George Stojkovic',
    companyLogo: '/img/icons/common/goerge.jpg',
    date: 'Jan 2023 - Jun 2023',
    desc: 'As the lead Smart Contract and Dapp developer , my role was to oversee and lead the development of smart contracts and decentralized applications (Dapps) for the team.',
  },
  {
    role: 'Director/Wed Developer',
    company: 'BEDETELS Triumphant International Academy',
    companyLogo: '/img/icons/common/bedetels.png',
    date: 'Sept 2020 - Jul 2023',
    desc: 'School administrator, In charge of the School ICT Department and Web development.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'WinBulk',
    desc: 'Winbulk is a decentralized application (Dapp) meticulously crafted using a stack of web technologies, including HTML, CSS, JavaScript, TypeScript, React, and Next.js. This sophisticated Dapp offers three distinct utilities, thoughtfully implemented through Solidity and Ethereum development frameworks.',
    github: 'https://github.com/amazingprincelee/winbulk-main',
    link: 'https://www.winbulk.com/',
  },
  {
    name: 'Newage Staking',
    desc: 'The Newage Staking Dapp represents a decentralized application meticulously deployed on the Polygon network. It seamlessly interfaces with a frontend user interface constructed using the Next.js framework. This harmonious integration underscores our commitment to providing efficient and user-friendly blockchain solutions.',
    link: 'https://www.newagecoin.cash/',
  },
  {
    name: 'Burn Dashboard',
    desc: 'The Burndash is an Ethereum project designed to enable users to monitor token burn processes effectively. It achieves this by fetching data from Etherscan API endpoints, providing users with real-time insights into the burning activities associated with specific tokens',
    github: 'https://github.com/amazingprincelee/1776-burn-dashboard',
  },
  {
    name: 'ToDo list',
    desc: 'The Voting App project is an advanced Next.js application designed to facilitate secure and transparent voting processes. By utilizing Next.js, it offers a user-friendly frontend interface that ensures a seamless and accessible voting experience for users',
    github: 'https://github.com/amazingprincelee/react-todo-list/',
    link: 'https://react-todo-list-one-ecru.vercel.app/',
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

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Prince Lee',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Prince Lee',
  image: 'https://drive.google.com/file/d/1hSr1as2F9jfGWvjF12LybdeOSn73lhVK/view?usp=sharing',
  url: 'https://my-portfolio-4try7vpcq-amazingprincelee.vercel.app/',
  keywords: [
    'princelee',
    'Prince Lee',
    '@amazingprincelee',
    'amazingprincelee',
    'Portfolio',
    'Prince Lee Portfolio ',
    'Prince Portfolio',
  ],
};
