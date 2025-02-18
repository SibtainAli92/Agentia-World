import React from "react";
import PriceCard from "./Price-Card";

const pricing1: string[] = [
  "2 AI Agent Instances",
  "Basic Neural Processing",
  "24/7 Support",
  "Weekly Analytics",
  "Basic Integration Support",
];

const pricing2: string[] = [
  "10 AI Agent Instances",
  "Advanced Neural Networks",
  "Priority Support",
  "Real-time Analytics",
  "Custom Integration",
  "API Access",
  "Advanced Security",
];

const pricing3: string[] = [
  "Unlimited Agents",
  "Full Neural Suite",
  "Dedicated Support Team",
  "Advanced Analytics Dashboard",
  "Custom Development",
  "Full API Access",
  "Enterprise Security",
  "Custom Training",
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 my-10">
      <h2 className="md:text-5xl text-4xl font-bold text-purple-400 mb-4 text-center">
        Choose Your Plan
      </h2>
      <p className="text-gray-400 mb-8 md:text-2xl text-xl text-center">
        Scale your AI capabilities with our flexible pricing
      </p>
      <div className="flex gap-8 flex-wrap justify-center">
        <PriceCard
          title="Starter"
          price={499}
          offer={pricing1}
          buttonStyle="border border-purple-900 hover:border-purple-500"
        />
        <PriceCard
          title="Professional"
          price={999}
          offer={pricing2}
          boxStyle="bg-gradient-to-tr from-gray-900 to-purple-900 border-2 border-purple-500"
          buttonStyle="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        />
        <PriceCard
          title="Enterprise"
          price={"Custom"}
          offer={pricing3}
          buttonStyle="border border-purple-900 hover:border-purple-500"
        />
      </div>
    </div>
  );
};

export default Pricing;