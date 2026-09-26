import { useProgress } from '@react-three/drei';
import { motion, type Variants } from 'motion/react';

const loaderVariant: Variants = {
  animate: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  },
};

export default function ModelLoader() {
  const { progress, active } = useProgress();

  if (!active) return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
      <span className="canvas-loader" />

      <div className="mt-10 flex w-50 flex-col place-items-center">
        <motion.div
          className="h-3 w-3 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
          variants={loaderVariant}
          animate="animate"
        />

        <p className="text-sm font-extrabold text-[#F1F1F1]">
          {progress.toFixed(2)}%
        </p>

        <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-[#333]">
          <motion.div
            className="h-full w-full origin-left rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
            style={{
              scaleX: progress / 100,
              transformOrigin: 'left',
            }}
          />
        </span>
      </div>
    </div>
  );
}
