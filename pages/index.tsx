import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const Contact = dynamic(() => import('../components/ContactUs'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
// import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';
import FreelancerProfiles from '../components/FreelancerLink';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <FreelancerProfiles />
      <Projects />
      <Proficiency />
      <Contact />
      <Education />
      <Experience />
      <Feedbacks />
      
      {/* {showContactUs ? <Contact /> : null} */}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

// export async function getStaticProps() {
//   const githubProfileData: GithubUserType = await fetch(
//     `https://api.github.com/users/${openSource.githubUserName}`
//   ).then((res) => res.json());

//   return {
//     props: { githubProfileData },
//   };
// }
