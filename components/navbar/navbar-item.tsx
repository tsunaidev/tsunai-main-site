"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

type Props = {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: "_blank";
  comingSoon?: boolean;
};

export function NavBarItem({
  children,
  href,
  active,
  target,
  className,
  comingSoon,
}: Props) {
  const pathname = usePathname();
  const { theme, systemTheme, resolvedTheme } = useTheme();
  
  // If theme is not yet determined (during initial load), default to dark theme styles
  const isDark = !resolvedTheme || resolvedTheme === 'dark';

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md transition duration-200 relative group",
        isDark
          ? "hover:bg-neutral-800 text-white hover:text-white/80" 
          : "hover:bg-gray-100 text-neutral-700 hover:text-neutral-900",
        (active || pathname?.includes(href)) && "bg-transparent",
        className
      )}
      target={target}
    >
      {children}
      {comingSoon && (        
        <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          COMING
        </span>        
      )}
    </Link>
  );
}
