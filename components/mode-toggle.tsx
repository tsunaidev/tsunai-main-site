"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
import { IconSunLow } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center">
        <IconSunLow className="h-4 w-4 flex-shrink-0 dark:text-neutral-500 text-neutral-700" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden"
    >
      {theme === "light" ? (
        <motion.div
          key="light"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <IconSunLow className="h-4 w-4 flex-shrink-0 dark:text-neutral-500 text-neutral-700" />
        </motion.div>
      ) : (
        <motion.div
          key="dark"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MoonIcon className="h-4 w-4 flex-shrink-0 dark:text-neutral-500 text-neutral-700" />
        </motion.div>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
