import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import { GithubUserType } from '../types';

const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const Contact = dynamic(() => import('../components/ContactUs'));
const GithubProfileCard = dynamic(() => import('../components/GithubProfileCard'));
const PhilosophySection = dynamic(() => import('../components/PhilosophySection'));

interface HomeProps {
  githubProfileData: GithubUserType | null;
}

export default function Home({ githubProfileData }: HomeProps) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Projects />
      <PhilosophySection />
      <Proficiency />
      {showContactUs && <Contact />}
      <Education />
      <Experience />
      <Feedbacks />
      {githubProfileData && <GithubProfileCard {...githubProfileData} />}
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const githubResult = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => {
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    return res.json() as Promise<GithubUserType>;
  }).catch(() => null);

  return {
    props: {
      githubProfileData: githubResult,
    },
    revalidate: 86400,
  };
};
