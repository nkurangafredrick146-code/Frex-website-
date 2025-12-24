export default function Solutions() {
  const services = [
    {
      title: "AI Governance & Assurance",
      description: "Ensure your AI systems are ethical, transparent, and compliant with emerging regulations.",
      features: [
        "Ethical AI audit and assessment",
        "Bias detection and mitigation",
        "Transparency and explainability frameworks",
        "Regulatory compliance (EU AI Act, etc.)"
      ],
      icon: "🛡️"
    },
    {
      title: "Quantum Readiness Consulting",
      description: "Prepare your organization for the quantum computing era with strategic assessment and migration planning.",
      features: [
        "Quantum vulnerability assessment",
        "Post-quantum cryptography migration",
        "Quantum advantage use-case identification",
        "Quantum algorithm development"
      ],
      icon: "⚛️"
    },
    {
      title: "Advanced Software Engineering",
      description: "Bespoke, high-performance software systems solving complex computational challenges.",
      features: [
        "Distributed systems architecture",
        "High-performance computing",
        "Real-time data processing",
        "Secure system design"
      ],
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frex Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tomorrow's technology, applied today. Transformative solutions powered by cutting-edge research.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-lg">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Global Financial Institution</h3>
                  <p className="text-gray-400 text-sm">Quantum Risk Assessment</p>
                </div>
              </div>
              <p className="text-gray-300">
                Conducted comprehensive quantum vulnerability analysis for critical financial infrastructure, 
                developing a 5-year migration strategy to post-quantum cryptography.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare AI Startup</h3>
                  <p className="text-gray-400 text-sm">Ethical AI Framework</p>
                </div>
              </div>
              <p className="text-gray-300">
                Implemented comprehensive AI governance framework ensuring compliance with healthcare regulations 
                and building trust through transparent, auditable decision-making systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Frex Solutions can help you harness tomorrow's technology for today's challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}