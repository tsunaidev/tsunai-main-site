"use client";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex items-center space-x-2 px-3 py-2 text-sm font-normal transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
    >
      <span className="text-2xl transition-transform group-hover:scale-110">🌊</span>
      <span className="font-semibold text-black dark:text-white">TSUNAI</span>
    </Link>
  );
};
