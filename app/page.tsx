import {
  AcademicCapIcon,
  ChartBarIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
  MapIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import {
  SiGithub,
  SiNeon,
  SiNetlify,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import Sidebar from '@/components/ui/Sidebar';
import ListItem, { type ListItems } from '@/components/primitives/ListItem';

import PageContainer from '@/components/ui/PageContainer';
import ScrollProgress from '@/components/ui/ScrollProgress';

import ClickSpark from '@/components/ui/ClickSpark';
import SplashCursorWrapper from './components/SplashCursorWrapper';
import LogoLoop from '@/components/ui/LogoLoop';

import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import MainSkills from './components/MainSkills';
import TechStack from './components/TechStack';
import LearningJourney from './components/LearningJourney';
import Stats from './components/Stats';
import Certificates from './components/Certificates';
import FunFacts from './components/FunFacts';
import Contact from './components/Contact';
import Footer from './components/Footer';

const menuItems: ListItems[] = [
  {
    label: 'Home',
    icon: HomeIcon,
    href: '/#hero',
  },
  {
    label: 'About Me',
    icon: UserIcon,
    href: '/#about',
  },
  {
    label: 'Stats',
    icon: ChartBarIcon,
    href: '/#stats',
  },
  {
    label: 'Skills',
    icon: WrenchScrewdriverIcon,
    href: '/#main-skills',
    dropdown: [
      {
        label: 'Main Skills',
        icon: CodeBracketIcon,
        href: '/#main-skills',
      },
      {
        label: 'Tech Stack',
        icon: Squares2X2Icon,
        href: '/#tech-stack',
      },
    ],
  },
  {
    label: 'Learning Journey',
    icon: MapIcon,
    href: '/#learning-journey',
  },
  {
    label: 'Certificates',
    icon: AcademicCapIcon,
    href: '/#certificates',
  },
  {
    label: 'Fun Facts',
    icon: SparklesIcon,
    href: '/#fun-facts',
  },
  {
    label: 'Contact Me',
    icon: EnvelopeIcon,
    href: '/#contact',
  },
];

const techLogos = [
  {
    node: <SiReact />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <SiNextdotjs />,
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: <SiPython />,
    title: 'Python',
    href: 'https://www.python.org',
  },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <SiGithub />,
    title: 'GitHub',
    href: 'https://github.com',
  },
  {
    node: <SiVercel />,
    title: 'Vercel',
    href: 'https://vercel.com',
  },
  {
    node: <SiNetlify />,
    title: 'Netlify',
    href: 'https://www.netlify.com',
  },
  {
    node: <SiSupabase />,
    title: 'Supabase',
    href: 'https://supabase.com',
  },
  {
    node: <SiNeon />,
    title: 'Neon',
    href: 'https://neon.tech',
  },
];

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#A855F7"
      sparkSize={20}
      sparkRadius={20}
      sparkCount={10}
      duration={400}
    >
      <SplashCursorWrapper />

      <ScrollProgress />

      <Sidebar>
        <ListItem
          items={menuItems}
          className="transition-colors text-gray-300 hover:text-foreground"
        />
      </Sidebar>

      {/* Hero */}
      <header>
        <Hero />
      </header>

      {/* Main Content */}
      <main className="overflow-hiden">
        <PageContainer className="relative z-10 space-y-20 md:space-y-40 ">
          <About />
          <Stats />
          <Quotes />

          <div>
            <p className="text-xs text-center">Tools & technologies I use:</p>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="right"
              logoHeight={60}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#121212"
              ariaLabel="Tech Stack Logos"
            />
          </div>

          <MainSkills />
          <TechStack />
        </PageContainer>

        <div className="relative z-10">
          <LearningJourney />
        </div>

        <PageContainer className="relative z-10 space-y-20 md:space-y-40">
          <Certificates />
          <FunFacts />
          <Contact />
        </PageContainer>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </ClickSpark>
  );
}
