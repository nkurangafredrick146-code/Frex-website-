export default function Vision() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To be the world's leading nexus for applied futuristic research, where theoretical 
            discoveries are rapidly translated into transformative technologies.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress by converging cutting-edge software technology with 
                pioneering research in quantum, doctrinal, and other frontier sciences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We build practical solutions for tomorrow's challenges while exploring the 
                fundamental questions that will define our future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Core Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Rigorous creativity over incremental improvement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Ethical by design in all systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Translational thinking between theory and practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold text-xl">Q</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-300">
                Developing the algorithms and software infrastructure for the quantum era, 
                from near-term applications to fault-tolerant quantum computing.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Doctrinal Systems</h3>
              <p className="text-gray-300">
                Creating the ethical and logical frameworks that will govern future AI systems, 
                ensuring safety, alignment, and verifiable decision-making.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold text-xl">E</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Emergent Sciences</h3>
              <p className="text-gray-300">
                Exploring frontier technologies beyond current paradigms, including neuromorphic 
                computing, synthetic biology, and next-generation cryptography.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}