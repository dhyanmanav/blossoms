export function Hero() {
  return (
    <section className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900">
              Print Your Memories on<br />Our <span className="italic">Magnets</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Struggling to find the perfect gift? Give something with a personal touch that will remind them of you for a lifetime. Transform plain surfaces with charming photo magnets that stick to any metal surface.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJD2JxAZcsmwOVk9jYk5fXXXowSMUD3Z2FmPjjpv_rK1FM2A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                🛒 Place Your Order
              </a>
              <a
                href="#products"
                className="border-2 border-black text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right Image - Single Large Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1624448445915-97154f5e688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTA1OTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Memories"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}