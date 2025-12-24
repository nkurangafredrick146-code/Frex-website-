export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-16"> {/* Added pt-16 for nav spacing */}
      <div className="text-center max-w-4xl mx-auto">
        {/* ... rest of the hero section remains the same ... */}
      </div>
      
      {/* Animated background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="frex-animation"></div>
      </div>
    </section>
  );
}