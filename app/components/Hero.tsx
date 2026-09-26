'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import { motion, type Variants } from 'motion/react';

import ModelLoader from '@/components/ui/ModelLoader';

import { ArrowDownIcon } from '@heroicons/react/24/outline';

import LightTunnel from '@/components/ui/LightTunnel';
import SpecularButton from '@/components/ui/SpecularButton';
import Logo from '@/components/ui/Logo';
import LetterGlitch from '@/components/ui/LetterGlitch';
import TextType from '@/components/ui/TextType';
import { RippleButton } from '@/components/ui/RippleButton';

import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';

const buttonVariant: Variants = {
  animate: {
    y: [0, 10],

    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
        delay: 0.5,
        ease: 'easeInOut',
      },
    },
  },
};

function Model() {
  const { scene } = useGLTF('/models/gaming_desktop_pc.glb');
  const isLargeScreen = useIsLargeScreen();

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-10, 30, 8]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} />
      <primitive
        object={scene}
        scale={isLargeScreen ? 2 : 1.05}
        position={isLargeScreen ? [-1, -3, -2.2] : [-1, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

export default function Hero() {
  const router = useRouter();
  const isLargeScreen = useIsLargeScreen();

  return (
    <div
      className="hero relative w-full h-dvh flex flex-col place-items-center"
      id="hero"
    >
      {/* Background */}
      <section className="absolute inset-0">
        {typeof isLargeScreen === 'boolean' ? (
          isLargeScreen ? (
            <LightTunnel
              cableColor="#A855F7"
              pulseColor="#A855F7"
              tunnelColor="#5227FF"
              tunnelOpacity={0}
              speed={0.2}
              flowDirection="outward"
              pulseSpeed={2}
              pulseLength={0.26}
              pulseBlend={1}
              pulseWidth={1}
              cableCount={15}
              thickness={0.35}
              rimWidth={0.15}
              waviness={0.3}
              sway={0.5}
              size={1}
              centerX={0}
              centerY={0}
              glow={1}
              fadeNear={0.5}
              fadeFar={2}
              brightness={1}
              colorVariance
              grain
              grainIntensity={0.05}
              opacity={1}
              mouseInteraction
              mouseStrength={0.5}
            />
          ) : (
            <div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center "
              >
                <source src="/videos/tunnel.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 hero-overlay z-5" />

              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,1)_100%)] z-10" />
            </div>
          )
        ) : (
          <div className="bg-background" />
        )}
      </section>

      {/* Content */}
      <div
        className="absolute top-0 left-0 pt-6 md:pt-10 sm:px-16 px-3 flex flex-row items-start gap-5 z-20 bg-[linear-gradient(180deg,oklch(0.400_0.235_307.9)_0%,oklch(0.627_0.275_308.9/0)_100%)] w-full"
        data-aos="fade-right"
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary-accent" />
          <div className="w-1 sm:h-80 h-40 bg-[linear-gradient(180deg,oklch(0.627_0.265_303.9)_0%,oklch(0.627_0.265_303.9/0)_100%)]" />
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="flex place-items-center font-semibold text-[50px] sm:text-[60px] lg:text-[80px] leading-12 lg:leading-24 mt-2">
            Hi, I&apos;m&nbsp;
            <motion.span
              className="relative flex place-items-center h-18 w-62 shadow-xl rounded-[40px] shadow-green-500/50 hover-scale"
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <LetterGlitch className="rounded-[40px]" />

              <span className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  src="/favicons/favicon.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="h-12! w-12! rounded-full inline-block"
                />
                <Logo className="inline-block" />
              </span>
            </motion.span>
          </h1>

          <span className="text-[#efd9ff] font-medium font-pixel! text-8 lg:text-[24px] sm:text-[18px] lg:leading-10">
            <TextType
              text={[
                'Welcome to my portfolio.',
                "I'm a self-taught developer that creates 3D visuals, user interfaces and full-stack web applications.",
              ]}
              typingSpeed={150}
              pauseDuration={3000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={20}
              cursorBlinkDuration={0.3}
            />
          </span>
        </div>
      </div>

      <div className="w-full flex-1 z-15">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{
            position: [22, 5, 5],
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
            <Model />
          </Suspense>
        </Canvas>

        <ModelLoader />
      </div>

      {/* Buttons */}
      <div
        className="absolute bottom-30 z-20 flex place-items-center flex-row gap-5 md:gap-20"
        data-aos="fade-up"
      >
        {isLargeScreen ? (
          <>
            <SpecularButton
              size="lg"
              radius={20}
              tint="#7C3AED"
              tintOpacity={1}
              blur={0}
              textColor="#f5f5f5"
              lineColor="#A855F7"
              baseColor="#ffffff"
              intensity={1}
              shineSize={35}
              shineFade={35}
              thickness={3}
              speed={0.4}
              followMouse
              proximity={300}
              autoAnimate={false}
              onClick={() => {
                window.open(
                  'https://github.com/DawnFallz',
                  '_blank',
                  'noopener,noreferrer',
                );
              }}
              className="text-xl m-3 p-8 px-24 shadow-lg shadow-shadow hover-scale"
            >
              My GitHub
            </SpecularButton>

            <SpecularButton
              size="lg"
              radius={20}
              tint="#ffffff"
              tintOpacity={0.08}
              blur={0.5}
              textColor="#f5f5f5"
              lineColor="#A855F7"
              baseColor="#A855F7"
              intensity={1}
              shineSize={35}
              shineFade={35}
              thickness={2}
              speed={0.4}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => router.push('/#contact')}
              className="text-xl m-3 p-8 px-24 shadow-lg shadow-shadow hover-scale"
            >
              Contact Me
            </SpecularButton>
          </>
        ) : (
          <>
            <RippleButton
              className="text-xl m-3 md:p-8 md:px-24 rounded-full border border-primary-accent shadow-lg shadow-shadow hover-scale"
              size="lg"
              rippleColor="#A855F7"
              onClick={() => {
                window.open(
                  'https://github.com/DawnFallz',
                  '_blank',
                  'noopener,noreferrer',
                );
              }}
            >
              My GitHub
            </RippleButton>

            <RippleButton
              className="text-xl m-3 md:p-8 md:px-24 rounded-full border border-primary-accent shadow-lg shadow-shadow hover-scale"
              size="lg"
              rippleColor="#A855F7"
              onClick={() => router.push('/#contact')}
            >
              Contact Me
            </RippleButton>
          </>
        )}
      </div>

      <Link href="#about" className="absolute bottom-5 z-20">
        <motion.button
          type="button"
          className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-full m-none"
          variants={buttonVariant}
          animate="animate"
        >
          <ArrowDownIcon className="w-6 h-6" />
        </motion.button>
      </Link>
    </div>
  );
}
