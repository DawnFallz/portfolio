import { cn } from "@/lib/utils";

export default function Logo({
  className
}: {
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "m-3 font-lora font-bold",
        className ?? "",
      )}
    >
      <span
        className="
          bg-[url('/images/sunset.png')]
          bg-cover bg-center bg-clip-text
          text-transparent [-webkit-background-clip:text]
          [text-shadow:5px_5px_10px_#FF4433]
          [-webkit-text-stroke:0.2px_white]
        "
      >
        Dawn
      </span>

      <span 
        className="
          text-cyan-400 
          [text-shadow:5px_5px_10px_cyan]
          [-webkit-text-stroke:0.2px_white]
        "
      >
        Fallz
      </span>
    </div>
  );
}
