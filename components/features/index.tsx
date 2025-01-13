import React from "react";
import { GradientContainer } from "@/components/gradient-container";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaBolt, FaChartLine } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { SkeletonOne } from "./skeletons/first";  
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";

export const Features = () => {
  return (
    <GradientContainer className="md:my-10">
      <Container className="py-20 max-w-7xl mx-auto relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-purple-500" />
        </FeatureIconContainer>
        <Heading className="pt-4 text-neutral-900 dark:text-white">
          Launch Your EVA Unit
        </Heading>
        <Subheading className="text-neutral-600 dark:text-neutral-300">
          Create, deploy, and monetize advanced AI agents on the BNB Chain with our EVA framework
        </Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">
          <Card className="lg:col-span-2">
            <CardTitle>ADAM: The First Deployment</CardTitle>
            <CardDescription>
              Experience our flagship AI agent ADAM, powered by the revolutionary EVA framework and inspired by Neon Genesis Evangelion
            </CardDescription>
            <CardSkeletonContainer className="mt-6">
              <SkeletonOne />
            </CardSkeletonContainer>
          </Card>
          <Card>
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <SkeletonTwo />
            </CardSkeletonContainer>
            <CardTitle>Advanced Analytics Dashboard</CardTitle>
            <CardDescription>
              Monitor your AI agent&apos;s performance, track engagement metrics, and optimize your deployment strategy
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonThree />
            </CardSkeletonContainer>
            <CardTitle>EVA Framework Integration</CardTitle>
            <CardDescription>
              Leverage our cutting-edge EVA framework to create sophisticated AI agents with advanced capabilities
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer
              showGradient={false}
              className="max-w-[16rem] mx-auto"
            >
              <SkeletonFour />
            </CardSkeletonContainer>
            <CardTitle>Community Collaboration</CardTitle>
            <CardDescription>
              Co-own and develop AI agents with the community through our decentralized governance system
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonFive />
            </CardSkeletonContainer>
            <CardTitle>BNB Chain Integration</CardTitle>
            <CardDescription>
              Deploy your AI agents on BNB Chain with built-in tokenomics and monetization capabilities
            </CardDescription>
          </Card>          
        </div>
      </Container>
    </GradientContainer>
  );
};
