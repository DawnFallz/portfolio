'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';
import Galaxy from '@/components/ui/Galaxy';

import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Python Developer',
    body: (
      <ul className="space-y-2 list-disc hover-translate">
        <li className="hover-scale origin-left">
          Developed core logic using Python, focusing on algorithms and data
          structures.
        </li>
        <li className="hover-scale origin-left">
          Built interactive command-line applications including a &quot;Guess
          the Number&quot; game and a feature-rich Calculator.
        </li>
        <li className="hover-scale origin-left">
          Automated repetitive tasks and processed data using Python scripts.
        </li>
      </ul>
    ),
  },
  {
    title: 'Frontend Developer',
    body: (
      <ul className="space-y-2 list-disc hover-translate">
        <li className="hover-scale origin-left">
          Crafted responsive user interfaces using HTML and CSS.
        </li>
        <li className="hover-scale origin-left">
          Implemented interactive features and dynamic content updates using
          JavaScript.
        </li>
        <li className="hover-scale origin-left">
          Applied modern design principles to ensure cross-browser compatibility
          and mobile-first layouts.
        </li>
      </ul>
    ),
  },
  {
    title: 'Flask Developer',
    body: (
      <ul className="space-y-2 list-disc hover-translate">
        <li className="hover-scale origin-left">
          Integrated backend logic with frontend interfaces to create seamless
          end-to-end applications.
        </li>
        <li className="hover-scale origin-left">
          Managed data flow between client-side interactions and server-side
          operations.
        </li>
        <li className="hover-scale origin-left">
          Architected full-stack workflows, ensuring smooth communication
          between the database and the UI.
        </li>
      </ul>
    ),
  },
  {
    title: 'Full Stack Developer',
    body: (
      <ul className="space-y-2 list-disc hover-translate">
        <li className="hover-scale origin-left">
          Integrated backend logic with frontend interfaces to create seamless
          end-to-end applications.
        </li>
        <li className="hover-scale origin-left">
          Managed data flow between client-side interactions and server-side
          operations.
        </li>
        <li className="hover-scale origin-left">
          Architected full-stack workflows, ensuring smooth communication
          between the database and the UI.
        </li>
      </ul>
    ),
  },
  {
    title: 'Next.js Developer',
    body: (
      <ul className="space-y-2 list-disc hover-translate">
        <li className="hover-scale">
          Built performant web applications leveraging server-side rendering
          (SSR) and static site generation.
        </li>
        <li className="hover-scale">
          Utilized React-based components to create reusable and modular
          frontend architectures.
        </li>
        <li className="hover-scale">
          Optimized application performance and SEO to ensure fast load times
          and better user engagement.
        </li>
      </ul>
    ),
  },
];

export default function LearningJourney() {
  const isLargeScreen = useIsLargeScreen();

  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;

    if (!section || !progress) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom 70%',
            scrub: 2.5,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full p-6 pt-50 pb-50 animate-shake"
      id="learning-journey"
    >
      <div className="absolute inset-0 pointer-events-none">
        {!isLargeScreen ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/videos/particles.mp4" type="video/mp4" />
          </video>
        ) : (
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1.5}
            glowIntensity={0.4}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.28}
            rotationSpeed={0.2}
            repulsionStrength={3}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        )}
      </div>

      <div className="z-10" data-aos="zoom-in">
        <h1 className="text-center text-balance font-black animate-shake [animate-delay:0.3s]">
          <ShinyText
            text='" Tell Me About His Learning Experience "'
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

        <Title className="animate-shake [animate-delay:0.7s]">
          Learning Journey
        </Title>

        <ol className="relative mx-auto mt-20 max-w-3xl list-none p-0">
          {/* Progress bar */}
          <div
            aria-hidden="true"
            className="absolute left-3.25 top-0 h-full w-2 bg-pink-400/20 rounded-lg"
          />

          <div
            ref={progressRef}
            aria-hidden="true"
            className="absolute left-3.25 top-0 h-full w-2 origin-top bg-linear-to-b from-violet-500 via-fuchsia-500 to-pink-500 shadow-[0_0_10px_rgb(217_70_239/10)] rounded-lg"
          />

          {steps.map((step, i) => (
            <li
              key={i}
              className="relative pb-8 pl-10 pt-20 md:pt-26 last:pb-0 z-0"
            >
              {/* Dot */}
              <span className="absolute -left-px top-18 md:top-24 grid size-8.5 place-items-center rounded-full bg-linear-to-br from-pink-500 to-violet-400 shadow-[0_0_10px_rgb(217_70_239/10)] animate-shake [animation-delay:0.2s]">
                <span className="size-4 rounded-full bg-background" />
              </span>

              {/* Number */}
              <p className="ml-4 text-md md:text-lg text-zinc-500 animate-shake [animation-delay:1s]">
                0{i + 1}
              </p>

              {/* Content */}
              <h2
                className="mb-4 ml-3 font-semibold animate-shake [animation-delay:0.5s]"
                data-aos="fade-up"
              >
                {step.title}
              </h2>

              <motion.div
                className="p-2 pl-10 w-full text-md text-neutral-400 border-b-3 border-l-3 border-gradient rounded-xl z-10"
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
              >
                {step.body}
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
