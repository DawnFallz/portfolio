'use client';

import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber'; 
import { OrbitControls, useGLTF, Clone, Float, Environment } from '@react-three/drei';

import ModelLoader from '@/components/ui/ModelLoader';

import ShineBorder from '@/components/ui/ShineBorder';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

interface MainSkill {
  icon: string;
  name: string;
  description: string;
}

const mainSkills: MainSkill[] = [
  {
    icon: '/icons/typescript.glb',
    name: 'TypeScript',
    description: 'Building type-safe and maintainable applications.',
  },
  {
    icon: '/icons/react.glb',
    name: 'React',
    description: 'Building reusable and component-based user interfaces.',
  },
  {
    icon: '/icons/nextdotjs.glb',
    name: 'Next.js',
    description: 'Developing modern full-stack React applications.',
  },
  {
    icon: '/icons/nodedotjs.glb',
    name: 'Node.js',
    description:
      'Building backend services, APIs, and server-side applications.',
  },
  {
    icon: '/icons/python.glb',
    name: 'Python',
    description:
      'Developing scripts, backend functionality, and data-driven solutions.',
  },
  {
    icon: '/icons/git.glb',
    name: 'Git',
    description: 'Managing source code and maintaining development workflows.',
  },
];

function Model({ icon }: { icon: string }) {
  const { scene } = useGLTF(icon);

  return (
    <Float floatIntensity={4} speed={2} rotationIntensity={1}>
      <Clone object={scene} scale={5} />
    </Float>
  );
}

export default function MainSkills() {
  return (
    <div id="main-skills">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" What Skills Does He Have? "'
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover
          disabled={false}
        />
      </h1>

      <Title className="pl-2">Main Skills</Title>

      <ShineBorder
        shineColor={['#A07CFE', '#FE8FB5', '#FFAA40']}
        borderWidth={5}
        duration={14}
        className="rounded-lg m-2 p-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {mainSkills.map((skill) => (
          <div key={skill.name} className="hover-scale">
            <div
              className="grid grid-cols-1 gap-2 text-center border border-primary-accent shadow-2xl shadow-shadow rounded-lg p-4"
              data-aos="fade-up"
            >
              <div className="w-full h-48" data-aos="fade-up">
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{
                    position: [0, 0, 10],
                    fov: 50,
                  }}
                  gl={{ preserveDrawingBuffer: true }}
                >
                  <Suspense fallback={null}>
                    <OrbitControls
                      enableZoom={false}
                      maxPolarAngle={Math.PI / 2}
                      minPolarAngle={Math.PI / 2}
                    />
                    <Environment preset="dawn" />
                    
                    <Model icon={skill.icon} />
                  </Suspense>
                </Canvas>

                <ModelLoader />
              </div>

              <h2 className="text-2xl font-bold">{skill.name}</h2>

              <small className="text-gray-500">{skill.description}</small>
            </div>
          </div>
        ))}
      </ShineBorder>
    </div>
  );
}
