import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  details: {
    description: string;
    pricing?: Array<{ quantity: string; price: string }>;
  };
}

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'premium',
      name: 'Premium Photo Magnets',
      description: 'Charming 2" square photo magnets on semi-glossy Epson photo paper. Perfect for fridges, lockers, and any metal surface.',
      price: 'Starting ₹499 for 6 photos',
      badge: 'Best Seller',
      badgeColor: 'bg-black',
      image: 'https://images.unsplash.com/photo-1686644823126-7ed947386b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMG1hZ25ldHMlMjBmcmlkZ2V8ZW58MXx8fHwxNzc1MTQzNjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Charming 2" square photo magnets on semi-glossy Epson photo paper. Perfect for fridges, lockers, and any metal surface.',
        pricing: [
          { quantity: '6 photos', price: '₹499' },
          { quantity: '12 photos', price: '₹899' },
          { quantity: '18 photos', price: '₹1,299' },
        ],
      },
    },
    {
      id: 'custom',
      name: 'Custom Photo Magnets',
      description: 'Personalized photo magnets perfect for displaying cherished memories. Turn your camera roll into a real-life showcase.',
      price: 'Multiple sizes available',
      image: 'https://images.unsplash.com/photo-1531684096782-1af8c28ddb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwaG90byUyMHByaW50c3xlbnwxfHx8fDE3NzUxNDM2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Personalized photo magnets perfect for displaying cherished memories. Turn your camera roll into a real-life showcase.',
      },
    },
    {
      id: 'retro',
      name: 'Retro Photo Magnets',
      description: 'Vintage-style fridge magnets with a white bottom frame — perfect for adding quotes, dates, or anything meaningful.',
      price: 'Bulk orders available',
      badge: 'Vintage',
      badgeColor: 'bg-gray-700',
      image: 'https://images.unsplash.com/photo-1620084817896-7593f69463f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGluc3RhbnQlMjBjYW1lcmF8ZW58MXx8fHwxNzc1MTQzNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Vintage-style fridge magnets with a white bottom frame — perfect for adding quotes, dates, or anything meaningful.',
      },
    },
    {
      id: 'polaroid',
      name: 'Polaroid Prints',
      description: 'Classic instant photo prints with white borders and rectangular shape for that nostalgic iconic feel.',
      price: 'Perfect for gifting',
      image: 'https://images.unsplash.com/photo-1632387958032-3b563a92091f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xhcm9pZCUyMHBob3RvcyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzc1MTQzNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Classic instant photo prints with white borders and rectangular shape for that nostalgic iconic feel.',
      },
    },
    {
      id: 'savedate',
      name: 'Save the Dates',
      description: 'Unique and elegant wedding announcement magnets personalized with names, date and custom design.',
      price: 'Perfect wedding gift',
      badge: 'Wedding',
      badgeColor: 'bg-gray-800',
      image: 'https://images.unsplash.com/photo-1717435860330-f9fc106809c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2F2ZSUyMGRhdGV8ZW58MXx8fHwxNzc1MTQzNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Unique and elegant wedding announcement magnets personalized with names, date and custom design.',
      },
    },
    {
      id: 'personalized',
      name: 'Personalized Photo Magnets',
      description: 'Premium-quality personalized magnets built to last for years. Ideal for family photos, vacation snapshots or graduation pictures.',
      price: 'For every occasion',
      image: 'https://images.unsplash.com/photo-1645075409459-e271a8dd7689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMG1lbW9yaWVzfGVufDF8fHx8MTc3NTA0NjQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        description: 'Premium-quality personalized magnets built to last for years. Ideal for family photos, vacation snapshots or graduation pictures.',
      },
    },
  ];

  return (
    <section id="products" className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-3">Our Collection</p>
          <h2 className="text-4xl lg:text-5xl text-gray-900">Choose Your Perfect Magnet</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="text-gray-900 font-bold mb-4">{product.price}</div>
                <button className="w-full text-center border-2 border-gray-200 text-gray-900 py-2.5 rounded-lg font-bold text-sm hover:bg-black hover:text-white hover:border-black transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 text-3xl leading-none"
            >
              ×
            </button>

            <h2 className="text-3xl mb-2 text-gray-900">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-6">{selectedProduct.details.description}</p>

            {selectedProduct.details.pricing && (
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 text-sm font-bold text-gray-900 uppercase tracking-wide">Quantity</th>
                      <th className="text-left p-3 text-sm font-bold text-gray-900 uppercase tracking-wide">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.details.pricing.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="p-3 text-gray-700">{item.quantity}</td>
                        <td className="p-3 text-gray-700">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJD2JxAZcsmwOVk9jYk5fXXXowSMUD3Z2FmPjjpv_rK1FM2A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-black text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Place Order
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
