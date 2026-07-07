import { motion } from "motion/react";
import {
  GithubIcon,
  TiktokIcon,
  XIcon,
  CssIcon,
  Html5Icon,
  JavascriptIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  FigmaIcon,
  NetlifyIcon,
  RailwayIcon,
  SupabaseIcon,
  TypescriptIcon,
  VercelIcon,
} from "@/components/svg";

const techStack = [
  { icon: Html5Icon, name: "HTML5" },
  { icon: ReactIcon, name: "React" },
  { icon: NextJsIcon, name: "Next.js" },
  { icon: TailwindCssIcon, name: "Tailwind CSS" },
  { icon: CssIcon, name: "CSS" },
  { icon: FigmaIcon, name: "Figma" },
  { icon: SupabaseIcon, name: "Supabase" },
  { icon: JavascriptIcon, name: "JavaScript" },
  { icon: VercelIcon, name: "Vercel" },
  { icon: NetlifyIcon, name: "Netlify" },
  { icon: RailwayIcon, name: "Railway" },
  { icon: TypescriptIcon, name: "TypeScript" },
  { icon: GithubIcon, name: "Github" },
];

function TechStack() {
  return (
    <div className="w-60 py-4 overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)]">
      <div className="flex items-center w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, i) => (
          <motion.div
            key={i}
            className="mx-3 shrink-0 cursor-pointer"
            whileHover={{ y: -3, scale: 1.15 }}
            transition={{ type: "tween", stiffness: 400, damping: 10 }}
            title={tech.name}
          >
            <tech.icon className="size-6 opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
