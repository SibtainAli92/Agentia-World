import { FaBrain, FaMicrochip, FaCode, FaGlobe } from "react-icons/fa";
import FeatureCard from "./Feature-Card";

const AdvancedAI = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
          Powered by Advanced AI
        </h2>
        <p className="text-gray-400 mt-5 text-sm sm:text-base">
          Built on cutting-edge neural architectures
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* Feature Cards */}
          <FeatureCard
            icon={<FaBrain size={36} />}
            title="Neural Networks"
            description="Advanced neural architectures for complex decision making"
          />
          <FeatureCard
            icon={<FaMicrochip size={36} />}
            title="Deep Learning"
            description="Sophisticated deep learning models for pattern recognition"
          />
          <FeatureCard
            icon={<FaCode size={36} />}
            title="Advanced ML"
            description="Cutting-edge machine learning algorithms"
          />
          <FeatureCard
            icon={<FaGlobe size={36} />}
            title="Global Scale"
            description="Distributed AI processing across global networks"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedAI;