import Logo from '@/components/ui/Logo';
import { SiDailydotdev, SiDiscord, SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <div id="footer" className="relative text-center p-8 pt-14 pb-14">
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col">
        <Logo className="text-[70px] md:text-[80px] z-10" />

        <div className="flex flex-row justify-center gap-10 m-4 z-10">
          <a
            href="https://github.com/DawnFallz"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="w-6 h-6 md:w-8 md:h-8" />
          </a>

          <a
            href="https://discord.com/users/1313878325613166662"
            target="_blank"
            rel="noreferrer"
          >
            <SiDiscord className="w-6 h-6 md:w-8 md:h-8" />
          </a>

          <a href="https://dly.to/wVz4xvqpiOd" target="_blank" rel="noreferrer">
            <SiDailydotdev className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>

        <p className="text-sm z-10">
          &copy; {new Date().getFullYear()} DawnFallz. All rights reserved.
        </p>
      </div>
    </div>
  );
}
