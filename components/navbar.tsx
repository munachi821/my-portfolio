"use client";
import { Home, Briefcase, Mailbox, DocText } from "reicon-react";
import { LiquidGlassCard } from "./uilayouts/liquid-glass";
import { GithubIcon } from "./svg";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

const NavItem = ({
  icon: Icon,
  label,
  isCustomIcon = false,
  isActive = false,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const showLabel = isActive || isHovered;

  return (
    <div
      className={`flex items-center cursor-pointer group px-3 py-2 rounded-full transition-colors duration-300 ${
        isActive ? "bg-white/40" : "hover:bg-white/40"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center shrink-0">
        {isCustomIcon ? (
          <Icon className="w-6 h-6 text-gunmetal transition-colors duration-300" />
        ) : (
          <Icon
            weight="Filled"
            size={25}
            className="text-gunmetal group-hover:text-sky-surge transition-colors duration-300"
          />
        )}
      </div>

      <AnimatePresence initial={false}>
        {showLabel && (
          <motion.div
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="overflow-hidden whitespace-nowrap"
          >
            <span className="text-gunmetal">{label}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed z-50 bottom-8 inset-x-0 flex items-center justify-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <LiquidGlassCard
          glowIntensity="none"
          shadowIntensity="none"
          blurIntensity="sm"
          draggable={false}
        >
          <nav className="relative z-50 px-4 py-2 rounded-full border border-khaki-beige/50">
            <ul className="flex items-center gap-2">
              <NavItem icon={Home} label="Home" isActive={true} />
              <NavItem icon={Briefcase} label="Projects" />
              <NavItem icon={GithubIcon} label="Github" isCustomIcon={true} />
              <NavItem icon={Mailbox} label="Contact" />
              <div className="h-8 w-px bg-khaki-beige/50"></div>
              <NavItem icon={DocText} label="Resume" />
            </ul>
          </nav>
        </LiquidGlassCard>
      </div>
    </motion.header>
  );
};

export default Navbar;
