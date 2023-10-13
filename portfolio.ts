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
    "Im a professional full stack web developer with 8years or 10 years of experience in web applications. My expertise lies in using python Django, React.js, Next.js for Web development and Solidity, Web3.js, either.js, hardhart for Blockchain development on etherum.",
  resumeLink:
    'https://drive.google.com/file/d/1m4GvKzSItfCAYDMPiY6iRduO9ANFwNVC/view?usp=sharing',
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
  subTitle: 'Professional Full stack Developer who has the ability to work on every Tech Stack',
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
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
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
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
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
          '⚡ Experienced in using Openzeppelin Smart Contract Standards & Chainlink Oracles'
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
    Stack: 'Programming',
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
      'Proficient in programming languages such as C, C++, Python, and MATLAB for control system design and analysis',
      'Designed and implemented closed-loop control systems for specific applications.',
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
    role: 'Lead Developer/Founder',
    company: 'Winbulk',
    companyLogo: '/img/icons/common/winbulk.png',
    date: 'June 2023 - Present',
    desc: 'I am the visionary behind the project, responsible for generating innovative ideas and overseeing the entire development process.',
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
    name: 'Developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
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
  author: 'Hanzla Tauqeer',
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
