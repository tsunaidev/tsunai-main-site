import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

type LinkType = {
  name: string;
  href: string;
};

export const Footer = () => {
  const links: LinkType[] = [
    // {
    //   name: "News",
    //   href: "#",
    // },
    // {
    //   name: "Medium",
    //   href: "#",
    // },
    // {
    //   name: "Contact",
    //   href: "#",
    // },
  ];
  const legal: LinkType[] = [
    // {
    //   name: "Privacy Policy",
    //   href: "#",
    // },
    // {
    //   name: "Terms of Service",
    //   href: "#",
    // },
    // {
    //   name: "Refund Policy",
    //   href: "#",
    // },
  ];
  const socials: LinkType[] = [
    {
      name: "X",
      href: "https://x.com/tsunaixyz",
    },
    {
      name: "Telegram",
      href: "https://t.me/tsunaixyz",
    },
    {
      name: "GitHub",
      href: "https://github.com/tsunaidev",
    },
  ];
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2025 Cryptoleek AI labs</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            {links && (
              <div className="flex justify-center space-y-4 flex-col mt-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
            {legal && (
              <div className="flex justify-center space-y-4 flex-col mt-4">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        TSNUAI
      </p>
    </div>
  );
};
