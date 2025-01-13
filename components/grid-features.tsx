import { cn } from "@/lib/utils";
import {
  IconUsers,
  IconBrain,
  IconCoin,
  IconChartBar,
  IconShoppingCart,
  IconRobot,
  IconCode,
  IconArrowsExchange,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Community Owned",
      description: "Built for the community with no VC funding. True decentralization.",
      icon: <IconUsers />,
    },
    {
      title: "EVA Framework",
      description: "Advanced AI agent framework inspired by Neon Genesis Evangelion.",
      icon: <IconBrain />,
    },
    {
      title: "BNB Chain Native",
      description: "Built on BNB Chain to make BNB great again with innovative AI tech.",
      icon: <IconCoin />,
    },
    {
      title: "Fair Tokenomics",
      description: "Initial taxes for sustainability, removed once platform is self-sufficient.",
      icon: <IconChartBar />,
    },
    {
      title: "Agent Marketplace",
      description: "Create, trade and co-own AI agents in a decentralized marketplace.",
      icon: <IconShoppingCart />,
    },
    {
      title: "ADAM Integration",
      description: "First AI agent powered by EVA framework with NGE-inspired capabilities.",
      icon: <IconRobot />,
    },
    {
      title: "Public Development",
      description: "Fully transparent development process to build community trust.",
      icon: <IconCode />,
    },
    {
      title: "Cross-Chain Future",
      description: "Starting on BNB Chain with plans to expand across networks.",
      icon: <IconArrowsExchange />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 lg:border-t lg:border-l dark:border-neutral-800">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r lg:border-b py-10 relative group dark:border-neutral-800",
      )}
    >
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
