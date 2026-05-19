import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { openSource, showContactUs, youtubeChannel } from '../portfolio';
import SEO from '../components/SEO';
import { GithubUserType } from '../types';
import { YouTubeVideoType } from '../types/sections';

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
  youtubeVideos: YouTubeVideoType[];
}

export default function Home({ githubProfileData, youtubeVideos }: HomeProps) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Projects />
      <YouTubeSection videos={youtubeVideos} />
      <Proficiency />
      {showContactUs && <Contact />}
      <Education />
      <Experience />
      <Feedbacks />
      {githubProfileData && <GithubProfileCard {...githubProfileData} />}
    </div>
  );
}

async function fetchYouTubeVideos(): Promise<YouTubeVideoType[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannel.channelId}`;
    const res = await fetch(rssUrl);
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = xml.split('<entry>').slice(1);
    return entries.slice(0, 6).map((entry) => {
      const getId = (tag: string) => {
        const m = entry.match(new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`));
        return m ? m[1].trim() : '';
      };
      const getAttr = (tag: string, attr: string) => {
        const m = entry.match(new RegExp(`<${tag}[^>]*${attr}="([^"]+)"`));
        return m ? m[1].trim() : '';
      };

      const videoId = getId('yt:videoId');
      return {
        id: videoId,
        title: getId('title'),
        published: getId('published'),
        thumbnail: getAttr('media:thumbnail', 'url') || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch {
    return [];
  }
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [githubProfileData, youtubeVideos] = await Promise.allSettled([
    fetch(`https://api.github.com/users/${openSource.githubUserName}`).then((res) => {
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      return res.json() as Promise<GithubUserType>;
    }),
    fetchYouTubeVideos(),
  ]);

  return {
    props: {
      githubProfileData: githubProfileData.status === 'fulfilled' ? githubProfileData.value : null,
      youtubeVideos: youtubeVideos.status === 'fulfilled' ? youtubeVideos.value : [],
    },
    revalidate: 86400,
  };
};
