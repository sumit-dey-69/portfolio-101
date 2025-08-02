import { Icon } from "@/app/svgs/Icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  className?: string;
  elements?: {
    icon: ReactNode;
    name: string;
  }[];
};

const TechStacks: { icon: ReactNode; name: string }[] = [
  {
    icon: <Icon name="react" />,
    name: "ReactJS",
  },
  {
    icon: <Icon name="nextjs" />,
    name: "NextJS",
  },
  {
    icon: <Icon name="tailwind" />,
    name: "Tailwind CSS",
  },
  {
    icon: <Icon name="figma" />,
    name: "Figma",
  },
  {
    icon: <Icon name="typescript" />,
    name: "Typescript",
  },
  {
    icon: <Icon name="javascript" />,
    name: "Javascript",
  },
  {
    icon: <Icon name="html" />,
    name: "HTML",
  },
  {
    icon: <Icon name="css" />,
    name: "CSS",
  },
  {
    icon: <Icon name="prisma" />,
    name: "Prisma",
  },
  {
    icon: <Icon name="python" />,
    name: "Python",
  },
] as const;

const elements = TechStacks.concat(TechStacks)

function MovingSlider({ className }: Props) {
  return (
    <div className={cn("absolute bottom-0 h-30 w-full z-10", className)}>
      <div className={"bg-[#ff6200] w-full whitespace-nowrap rotate-3"}>
        <motion.span
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-10 text-white font-extrabold h-12 items-center w-full"
        >
          {elements?.map((el, i) => (
            <div className="inline-flex gap-[0.25em] items-center mx-8 text-xl" key={i}>
              <p>{el.icon}</p>
              <p>{el.name}</p>
            </div>
          ))}
        </motion.span>
      </div>
    </div>
  );
}

export default MovingSlider;
