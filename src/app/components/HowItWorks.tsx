import { Upload, ShoppingCart, Package } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Upload,
      title: 'Upload Your Pictures',
      description: 'Upload your pictures using our simple order form. We print your photos exactly as you upload them, with no alterations or additions.',
    },
    {
      number: '2',
      icon: ShoppingCart,
      title: 'Place Order',
      description: 'Fill in your shipping details including your address, email, and phone number, then complete payment to place your order.',
    },
    {
      number: '3',
      icon: Package,
      title: 'Track Your Order',
      description: "We'll print, cut, and create your magnets with care, then pack and ship them. You'll receive a confirmation with tracking information.",
    },
  ];

  return (
    <section id="how" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-3">Simple & Easy</p>
          <h2 className="text-4xl lg:text-5xl text-gray-900">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center relative">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white">
                    <Icon className="w-10 h-10 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
