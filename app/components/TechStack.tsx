'use client';

import { motion } from 'motion/react';

import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiDaisyui,
  SiGsap,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiDiscorddotjs,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiVercel,
  SiLinux,
  SiNetlify,
  SiSupabase,
  SiNeon,
  SiVuedotjs,
  SiWebpack,
  SiVite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import PythonIcon from '@/components/ui/PythonIcon';
import MotionIcon from '@/components/ui/MotionIcon';
import TurbopackIcon from '@/components/ui/TurbopackIcon';

import ShineBorder from '@/components/ui/ShineBorder';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

interface Tech {
  icon: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  color: string;
}

interface TechCategory {
  name: string;
  technologies: Tech[];
}

interface TechGroup {
  icon: string;
  name: string;
  categories: TechCategory[];
}

const techStack: TechGroup[] = [
  {
    icon: '🌐',
    name: 'Frontend',
    categories: [
      {
        name: 'Languages',
        technologies: [
          {
            icon: SiHtml5,
            name: 'HTML',
            color: '#E34F26',
          },
          {
            icon: SiCss,
            name: 'CSS',
            color: '#663399',
          },
          {
            icon: SiJavascript,
            name: 'JavaScript',
            color: '#F7DF1E',
          },
          {
            icon: SiTypescript,
            name: 'TypeScript',
            color: '#3178C6',
          },
        ],
      },
      {
        name: 'Frameworks & Libraries',
        technologies: [
          {
            icon: SiReact,
            name: 'React.js',
            color: '#61DAFB',
          },
          {
            icon: SiNextdotjs,
            name: 'Next.js',
            color: '#FFFFFF',
          },
          {
            icon: SiVuedotjs,
            name: 'Vue.js',
            color: '#4FC08D',
          },
          {
            icon: SiTailwindcss,
            name: 'Tailwind CSS',
            color: '#06B6D4',
          },
          {
            icon: SiBootstrap,
            name: 'Bootstrap',
            color: '#7952B3',
          },
          {
            icon: SiDaisyui,
            name: 'DaisyUI',
            color: '#FFC63A',
          },
          {
            icon: SiGsap,
            name: 'GSAP',
            color: '#0AE448',
          },
          {
            icon: MotionIcon,
            name: 'Motion',
            color: '#FFFFFF',
          },
        ],
      },
    ],
  },

  {
    icon: '⚙️',
    name: 'Backend',
    categories: [
      {
        name: 'Languages',
        technologies: [
          {
            icon: PythonIcon,
            name: 'Python',
            color: '#3776AB',
          },
          {
            icon: SiGo,
            name: 'Golang',
            color: '#00ADD8',
          },
          {
            icon: FaJava,
            name: 'Java',
            color: '#ED8B00',
          },
        ],
      },
      {
        name: 'Runtime',
        technologies: [
          {
            icon: SiNodedotjs,
            name: 'Node.js',
            color: '#5FA04E',
          },
        ],
      },
      {
        name: 'Frameworks & Libraries',
        technologies: [
          {
            icon: SiExpress,
            name: 'Express.js',
            color: '#FFFFFF',
          },
          {
            icon: SiFlask,
            name: 'Flask',
            color: '#3BABC3',
          },
          {
            icon: SiDiscorddotjs,
            name: 'Discord.js',
            color: '#5865F2',
          },
        ],
      },
    ],
  },

  {
    icon: '🗄️',
    name: 'Data',
    categories: [
      {
        name: 'Databases',
        technologies: [
          {
            icon: SiPostgresql,
            name: 'PostgreSQL',
            color: '#4169E1',
          },
          {
            icon: SiSqlite,
            name: 'SQLite',
            color: '#003B57',
          },
        ],
      },
      {
        name: 'ORM',
        technologies: [
          {
            icon: SiPrisma,
            name: 'Prisma',
            color: '#2D3748',
          },
          {
            icon: SiDrizzle,
            name: 'Drizzle',
            color: '#C5F74F',
          },
        ],
      },
    ],
  },

  {
    icon: '🛠️',
    name: 'Tools',
    categories: [
      {
        name: 'Version Control',
        technologies: [
          {
            icon: SiGit,
            name: 'Git',
            color: '#F05032',
          },
          {
            icon: SiGithub,
            name: 'GitHub',
            color: '#FFFFFF',
          },
        ],
      },
      {
        name: 'Backend / Cloud',
        technologies: [
          {
            icon: SiSupabase,
            name: 'Supabase',
            color: '#3FCF8E',
          },
          {
            icon: SiNeon,
            name: 'Neon',
            color: '#00E599',
          },
        ],
      },
      {
        name: "Build Tools",
        technologies: [
          {
            icon: SiWebpack,
            name: 'Webpack',
            color: '#8DD6F9',
          },
          {
            icon: TurbopackIcon,
            name: 'Turbopack',
            color: '#0096FF',
          },
          {
            icon: SiVite,
            name: 'Vite',
            color: '#646CFF',
          },
        ],
      },
      {
        name: 'Deployment',
        technologies: [
          {
            icon: SiVercel,
            name: 'Vercel',
            color: '#FFFFFF',
          },
          {
            icon: SiNetlify,
            name: 'Netlify',
            color: '#00C7B7',
          },
        ],
      },
      {
        name: 'Operating Systems',
        technologies: [
          {
            icon: SiLinux,
            name: 'Linux',
            color: '#FCC624',
          },
        ],
      },
    ],
  },
];

export default function TechStack() {
  return (
    <div id="tech-stack">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" What&apos;s His Tech Stack? "'
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover={true}
          disabled={false}
        />
      </h1>

      <Title className="pl-2">Tech Stack</Title>

      <ShineBorder
        shineColor={['#A07CFE', '#FE8FB5', '#FFAA40']}
        borderWidth={5}
        duration={14}
        className="rounded-lg m-2 p-4 space-y-28 overflow-x-clip"
      >
        {techStack.map((group) => (
          <div key={group.name}>
            <div className="flex justify-center items-center border-t border-b border-gradient p-1">
              <h2 className="text-2xl font-bold mr-4">{group.icon}</h2>
              <h2 className="text-2xl font-bold font-slab">{group.name}</h2>
            </div>

            {group.categories.map((category) => (
              <div key={category.name}>
                <div className="mt-8 border border-gradient p-4 shadow-lg shadow-shadow rounded-xl hover-translate">
                  <h3 className="text-lg font-semibpold font-slab border-b border-gradient">
                    {category.name}
                  </h3>

                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {category.technologies.map((tech) => (
                      <li
                        key={tech.name}
                        className="relative z-0 hover:z-10"
                        data-aos="fade-up"
                      >
                        <motion.div
                          className="
                            flex flex-col space-y-3 justify-center items-center 
                            aspect-square max-w-xs max-h-xs m-2 mx-3 
                            bg-background shadow-lg shadow-zinc-700 
                            hover:shadow-(color:--tech-color) 
                            border hover:border-(--tech-color) 
                            hover:*:text-(--tech-color) 
                            hover:*:*:opacity-100 
                            hover:*:*:grayscale-0 rounded-xl 
                            hover-scale hover-translate-children"
                          style={
                            {
                              '--tech-color': tech.color,
                            } as React.CSSProperties
                          }

                          drag
                          dragConstraints={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <div className="bg-zinc-800 p-3 md:p-5 rounded-xl hover-translate-child">
                            <tech.icon className="h-12 w-12 md:h-20 md:w-20 opacity-60 grayscale" />
                          </div>

                          <p className="text-zinc-700 font-semibold font-slab md:text-lg">
                            {tech.name}
                          </p>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </ShineBorder>
    </div>
  );
}
