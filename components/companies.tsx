"use client";
import { useEffect, useState, useCallback } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export const Companies = () => {
  const { theme } = useTheme();
  
  let [logos, setLogos] = useState([
    [
      {
        title: "ai16z",
        src: "/logos/ai16z.svg",
      },
      {
        title: "amazon",
        src: "/logos/amazon.png",
      },
      {
        title: "anthropic",
        src: theme === "dark" ? "/logos/anthropic_light.png" : "/logos/anthropic_dark.png",
      },
      {
        title: "openai",
        src: theme === "dark" ? "/logos/openai_light.png" : "/logos/openai_dark.png",
      },
    ],
    [
      {
        title: "bsc",
        src: "/logos/bsc.png",
      },
      {
        title: "google",
        src: "/logos/google.webp",
      },
      {
        title: "meta",
        src: "/logos/meta.png",
      },
      {
        title: "swarms",
        src: "/logos/swarms.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or isAnimating changes
    }
  }, [isAnimating]);

  const updateLogoSrcForTheme = useCallback((title: string, currentTheme: string | undefined) => {
    switch (title) {      
      case "anthropic":
        return currentTheme === "dark" ? "/logos/anthropic_light.png" : "/logos/anthropic_dark.png";     
      case "openai":
        return currentTheme === "dark" ? "/logos/openai_light.png" : "/logos/openai_dark.png";
      default:
        return `/logos/${title.replace(" ", "-")}.${getFileExtension(title)}`;
    }
  }, []);

  const getFileExtension = (title: string) => {
    switch (title) {
      case "ai16z":
        return "svg";
      case "google":
        return "webp";
      default:
        return "png";
    }
  };

  useEffect(() => {
    setLogos(currentLogos => {
      const updatedLogos = currentLogos.map(set =>
        set.map(logo => ({
          ...logo,
          src: updateLogoSrcForTheme(logo.title, theme)
        }))
      );
      setActiveLogoSet(updatedLogos[0]);
      return updatedLogos;
    });
  }, [theme, updateLogoSrcForTheme]);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Built with the best AI DAO and Frameworks</Heading>
      <Subheading className="text-center text-gray-600 dark:text-gray-400">
        Tsunai is inspired and learnt from people in the AI Crypto space.
      </Subheading>

      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width="100"
                height="100"
                className="md:h-20 md:w-40 h-10 w-20 object-contain filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
