import { FC } from 'react';
import { Brain, MessageSquare, Shield, Terminal } from 'lucide-react';

const Features: FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Autonomous Learning',
      description: 'Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Multi-Modal Intelligence',
      description: 'Advanced agents capable of processing text, voice, and visual data for comprehensive understanding'
    },
    {
      icon: <Terminal className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Cognitive Integration',
      description: 'Seamless integration with existing systems through advanced cognitive APIs and neural bridges'
    },
    {
      icon: <Shield className="w-8 h-8 text-white bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg" />,
      title: 'Ethical AI Framework',
      description: 'Built-in ethical guidelines and safety protocols ensuring responsible AI deployment'
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center'>
        <span className="text-4xl md:text-5xl font-bold text-center  mb-6 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
        Neural Capabilities
        </span>
        </div>
        <h5 className='text-xl text-center mb-12 text-gray-500'>
        Powered by next-generation artificial intelligence
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl border border-purple-900 hover:border-purple-600 p-6 rounded-xl bg-white/5 hover: ">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-md text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
