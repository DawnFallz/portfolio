import { cn } from "@/lib/utils";

export default function Title({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "mt-6 underline text-gradient font-slab font-semibold hover-translate",
        className,
      )}
      data-aos="slide-right"
    >
      {children}
    </h3>
  );
}
