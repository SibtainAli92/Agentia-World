import { FC } from 'react';
import { Server, Shield } from 'lucide-react';
import { Globe } from "lucide-react";



const Solutions: FC = () => {
  const solutions = [
    {
      icon: <Globe className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Enterprise AI',
      description: 'Custom AI agents designed for enterprise-scale operations and decision-making'
    },
    {
      icon: <Server className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg"/>,
      title: 'Neural Operations',
      description: 'Automated workflow optimization through distributed neural networks'
    },
    {
      icon: <Shield className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Secure Intelligence',
      description: 'Privacy-first AI solutions with military-grade security protocols'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center'>
        <span className="text-4xl md:text-5xl font-bold text-center  mb-6 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
          AI Solutions
        </span>
        </div>
        <h5 className='text-xl text-center mb-12 text-gray-500'>
          Transforming industries with intelligent agents
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="border border-purple-900 hover:border-purple-600 p-6 rounded-xl bg-white/5 hover: transition-all"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
              <p className="text-md text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
