// Example in Next.js with Tailwind CSS
export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Building the Foundational Layer for Tomorrow
        </h1>
        
        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Frex converges cutting-edge software, quantum computing, and doctrinal research to engineer the core systems on which our future will be built.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/labs" 
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
          >
            Explore Frex Labs
          </a>
          <a 
            href="/solutions" 
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
          >
            Partner with Frex Solutions
          </a>
        </div>
      </div>
      
      {/* Animated background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="frex-animation"></div>
      </div>
    </section>
  );
}
