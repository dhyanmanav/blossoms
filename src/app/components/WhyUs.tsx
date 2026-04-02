import { Zap, Palette, Home, CheckCircle } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Making & Shipping',
    },
    {
      icon: Palette,
      title: 'Superior Quality Prints',
    },
    {
      icon: Home,
      title: 'Door Delivery',
    },
    {
      icon: CheckCircle,
      title: 'Thoroughly Inspected',
    },
  ];

  return (
    <section id="why" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-3">Why Blossoms Inspirella</p>
          <h2 className="text-4xl lg:text-5xl">Quality You Can Feel</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
