export default function Labs() {
  const researchAreas = [
    {
      title: "Quantum Computing",
      description: "Developing algorithms and software for the quantum era",
      projects: [
        "Quantum machine learning architectures",
        "Error correction methodologies", 
        "Near-term quantum applications",
        "Quantum compiler optimization"
      ],
      icon: "⚛️"
    },
    {
      title: "Doctrinal Systems",
      description: "Creating ethical frameworks for autonomous systems",
      projects: [
        "AI alignment research",
        "Formal verification tools",
        "Ethical reasoning engines",
        "Policy governance systems"
      ],
      icon: "📜"
    },
    {
      title: "Emergent Sciences",
      description: "Exploring frontier technologies beyond current paradigms",
      projects: [
        "Neuromorphic computing",
        "Advanced cryptography",
        "Synthetic biology interfaces",
        "Post-quantum security"
      ],
      icon: "🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frex Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where theoretical research meets tangible prototypes at the frontier of possible.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Project Q-Shield</h3>
              <p className="text-gray-300 mb-4">
                An open-source toolkit for quantum vulnerability assessment and post-quantum cryptography migration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Quantum</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Open Source</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Project Decree</h3>
              <p className="text-gray-300 mb-4">
                A formal specification language for encoding ethical constraints into AI decision-making processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">AI Ethics</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Formal Methods</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers and contribute to groundbreaking work that defines our technological future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/careers" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Research Positions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Research Collaboration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}