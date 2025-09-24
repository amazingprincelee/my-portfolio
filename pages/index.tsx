import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import { GithubUserType } from '../types';

// Dynamic imports for better performance
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
const YouTubeSection = dynamic(() => import('../components/YouTubeSection'));

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
      <YouTubeSection />
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
  try {
    const githubProfileData: GithubUserType = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    ).then((res) => {
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }
      return res.json();
    });

    return {
      props: { 
        githubProfileData 
      },
      revalidate: 86400, // Revalidate once per day
    };
  } catch (error) {
    console.error('Error fetching GitHub profile data:', error);
    
    return {
      props: { 
        githubProfileData: null 
      },
      revalidate: 3600, // Retry after 1 hour on error
    };
  }
};
