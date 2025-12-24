export default function Doctry() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Doctry
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Science of Systems Governance
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Definition</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              <strong>Doctry</strong> is the formal study of the rules, logics, and ethical frameworks 
              that govern complex autonomous systems. In a world of increasingly intelligent AI and 
              interconnected networks, the "doctrine" a system follows is as critical as its underlying code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We develop the mathematical foundations and practical implementations for systems 
              that can reason about their own constraints, verify their ethical compliance, and 
              align with human values at scale.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Challenge We Solve</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Current State</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>AI systems make decisions through opaque processes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Ethical constraints are often afterthoughts or add-ons</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>No formal verification for complex system behavior</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Alignment problems scale with system complexity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Approach</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Doctrine-first system design</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Formal verification of ethical constraints</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Transparent, auditable decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Scalable alignment architectures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">AI Alignment</h3>
              <p className="text-gray-300">
                Developing systems that robustly pursue human-intended goals even in novel situations.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Formal Verification</h3>
              <p className="text-gray-300">
                Mathematical proof of system properties and constraint compliance.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Ethical Reasoning</h3>
              <p className="text-gray-300">
                Architectures for value-aligned decision-making in complex environments.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Policy Governance</h3>
              <p className="text-gray-300">
                Scalable enforcement of complex regulatory and ethical frameworks.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Symbolic AI</h3>
              <p className="text-gray-300">
                Integrating classical AI reasoning with modern machine learning approaches.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">System Safety</h3>
              <p className="text-gray-300">
                Guarantees of safe operation even under adversarial conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}