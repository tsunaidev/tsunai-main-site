"use client";
import * as React from "react";
import { Logo } from "@/components/logo";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../button";
import { NavBarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { useTheme } from "next-themes";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  // Handle hydration
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  // Determine the text color based on background and theme
  const textColor = showBackground
    ? theme === "dark" ? "text-white" : "text-black"
    : "text-white";

  return (
    <motion.div
      className={cn(
        "w-full flex relative justify-between px-4 py-3 rounded-md transition duration-200 bg-transparent mx-auto",
        !isClient ? "text-white" : textColor
      )}
      animate={{
        width: showBackground ? "90%" : "100%",
        backgroundColor: showBackground 
          ? theme === "dark" 
            ? "rgb(23, 23, 23)" // bg-neutral-900
            : "white"
          : "transparent",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className={cn(
              "absolute inset-0 h-full w-full pointer-events-none rounded-full -z-10",
              theme === "dark" ? "bg-neutral-900" : "bg-white"
            )}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-2 items-center relative z-10">
        <Logo />
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <NavBarItem comingSoon href={item.link} key={item.title} target={item.target}>
              {item.title}
            </NavBarItem>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 items-center relative z-10">
        <div className="shadow-sm">
          <ModeToggle />
        </div>
        <Button>LAUNCH</Button>
      </div>
    </motion.div>
  );
};
