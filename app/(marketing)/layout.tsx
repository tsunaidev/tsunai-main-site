import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Tsunai - Decentralized AI Agent for blockchain.",
  description:
    "Tsunai is a decentralized AI Agent Platform for blockchain. \
    Launch your own AI Agent on the blockchain in seconds.",
  openGraph: {
    images: ["https://tsunai.xyz/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
