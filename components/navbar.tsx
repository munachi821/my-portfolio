"use client";
import { Home, Briefcase, Mailbox, DocText } from "reicon-react";
import { LiquidGlassCard } from "./uilayouts/liquid-glass";
import { GithubIcon } from "./svg";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";

const NavItem = ({
  icon: Icon,
  label,
  isCustomIcon = false,
  isActive = false,
  href,
  download,
  isDark = false,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const showLabel = isActive || isHovered;

  const textColor = isDark ? "text-soft-linen!" : "text-gunmetal!";
  const hoverTextColor = isDark
    ? "hover:text-soft-linen!"
    : "hover:text-gunmetal!";

  const content = (
    <div
      className={`flex items-center cursor-pointer group px-2 md:px-3 py-1.5 md:py-2 rounded-full transition-colors duration-300 ${textColor} ${hoverTextColor} ${
        isActive
          ? isDark
            ? "bg-white/10"
            : "bg-white/40"
          : isDark
            ? "hover:bg-white/10"
            : "hover:bg-white/40"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center shrink-0">
        {isCustomIcon ? (
          <Icon
            className={`w-5 h-5 md:w-6 md:h-6 ${textColor} transition-colors duration-300`}
          />
        ) : (
          <Icon
            weight="Filled"
            size={25}
            className={`${textColor} transition-colors duration-300 [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-[25px] md:[&_svg]:h-[25px]`}
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
            <span
              className={`${textColor} font-medium font-google_sans text-sm`}
            >
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (href) {
    if (href.startsWith("http") || download) {
      return (
        <a
          href={href}
          download={download}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={hoverTextColor}
          aria-label={label}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={hoverTextColor} aria-label={label}>
        {content}
      </Link>
    );
  }

  return content;
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isHoveredNav, setIsHoveredNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);

      // Direct overlap check: is the navbar physically over the dark contact section?
      const contactEl = document.getElementById("contact");
      if (contactEl && headerRef.current) {
        const navRect = headerRef.current.getBoundingClientRect();
        const contactRect = contactEl.getBoundingClientRect();
        // The navbar center is over the contact section
        const navCenter = navRect.top + navRect.height / 2;
        setIsOverDark(
          navCenter >= contactRect.top && navCenter <= contactRect.bottom,
        );
      } else {
        setIsOverDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startTimer = () => {
      clearTimeout(timeoutId);
      if (!isHoveredNav) {
        timeoutId = setTimeout(() => {
          setHidden(true);
        }, 5000);
      }
    };

    const handleScrollTimer = () => {
      setHidden(false);
      startTimer();
    };

    window.addEventListener("scroll", handleScrollTimer);

    startTimer();

    return () => {
      window.removeEventListener("scroll", handleScrollTimer);
      clearTimeout(timeoutId);
    };
  }, [isHoveredNav]);

  return (
    <motion.header
      ref={headerRef}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed z-50 bottom-8 inset-x-0 flex items-center justify-center pointer-events-none"
    >
      <div
        className="pointer-events-auto"
        onMouseEnter={() => setIsHoveredNav(true)}
        onMouseLeave={() => setIsHoveredNav(false)}
      >
        <LiquidGlassCard
          glowIntensity="none"
          shadowIntensity="none"
          blurIntensity="sm"
          draggable={false}
        >
          <nav className="relative z-50 px-2 md:px-4 py-1.5 md:py-2 rounded-full border border-khaki-beige/50">
            <ul className="flex items-center gap-1 md:gap-2">
              <NavItem
                icon={Home}
                label="Home"
                isActive={activeSection === "home"}
                href="#home"
                isDark={isOverDark}
              />
              <NavItem
                icon={Briefcase}
                label="Projects"
                isActive={activeSection === "projects"}
                href="#projects"
                isDark={isOverDark}
              />
              <NavItem
                icon={GithubIcon}
                label="Github"
                isCustomIcon={true}
                href="https://github.com/munachi821"
                isDark={isOverDark}
              />
              <NavItem
                icon={Mailbox}
                label="Contact"
                isActive={activeSection === "contact"}
                href="#contact"
                isDark={isOverDark}
              />
              <div
                className={`h-8 w-px transition-colors duration-300 ${isOverDark ? "bg-soft-linen/20" : "bg-khaki-beige/50"}`}
              ></div>
              <NavItem
                icon={DocText}
                label="Resume"
                href="/Munachi_Onyebuchi_Bright_Resume.pdf"
                download="Munachi_Onyebuchi_Resume.pdf"
                isDark={isOverDark}
              />
            </ul>
          </nav>
        </LiquidGlassCard>
      </div>
    </motion.header>
  );
};

export default Navbar;
