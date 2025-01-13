import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export const Roadmap = () => {
  const data = [
    {
      title: "Jan 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Project ideation and foundation laying for Tsunai - The next generation AI Agent ecosystem
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Research and define AI agent architecture
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Develop technical whitepaper
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Form core development team
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Design tokenomics model
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Create project roadmap and milestones
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Establish legal framework
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Design initial UI/UX mockups
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Set up development environment
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Begin smart contract development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ⭕ Initialize community channels
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Major milestones achieved in Q1 2025
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Launch token presale platform
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Complete smart contract audits
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Deploy token contract
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Launch community governance platform
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Implement staking mechanisms
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Begin EVA Framework core development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Establish key strategic partnerships
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Deploy testnet infrastructure
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Launch developer documentation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              ✅ Initialize community incentive programs
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "June 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Launch of Genesis Agent#0 ADAM - Our flagship AI agent
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Complete ADAM core development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Implement advanced reasoning modules
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Develop decision-making algorithms
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Create agent interaction protocols
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Implement security measures
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Conduct extensive testing phase
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Deploy agent marketplace
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Launch agent monitoring dashboard
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Release API documentation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              🔄 Begin beta testing program
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sept 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Launch of permissionless AI Agent creation
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Release agent creation tools
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Launch developer SDK
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Implement agent verification system
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Deploy agent marketplace v2
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Launch agent templates library
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Implement revenue sharing model
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Release agent analytics platform
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Launch developer incentive program
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Deploy agent scaling solutions
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm py-1">
              📋 Initialize cross-chain integration
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
