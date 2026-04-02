import { useState } from 'react';

export function Policies() {
  const [activeTab, setActiveTab] = useState('shipping');

  const tabs = [
    { id: 'shipping', label: 'Shipping Policy' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'terms', label: 'Terms & Services' },
  ];

  return (
    <section id="policies" className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-3">Our Commitments</p>
          <h2 className="text-4xl lg:text-5xl text-gray-900">Policies & Information</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-colors border-2 ${
                activeTab === tab.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          {activeTab === 'shipping' && (
            <div>
              <h2 className="text-3xl mb-6 pb-4 border-b-2 border-gray-200 text-gray-900">Shipping Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We are not responsible for any delays caused by the courier company or postal authorities.</p>
                <p>
                  Our commitment is to hand over your order to the courier company or postal authorities <strong>within 6–7 days</strong> from the date of order and payment, or by the delivery date agreed upon during order confirmation.
                </p>
                <p>All orders will be delivered to the address provided by the buyer, so please ensure you provide the correct address and contact information.</p>
                <p>Confirmation of our services will be sent to the email address specified during registration.</p>
                <div className="bg-gray-100 border-l-4 border-black p-5 rounded-r-lg mt-6">
                  <strong className="block mb-2">Questions?</strong> Contact us via WhatsApp at{' '}
                  <a href="https://wa.me/917795265279" className="font-bold hover:underline">
                    +91 7795265279
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div>
              <h2 className="text-3xl mb-6 pb-4 border-b-2 border-gray-200 text-gray-900">Refund Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We do not offer refunds, returns, or exchanges as our products are custom-made.</p>
                <p>At Blossoms Inspirella, we ensure that your ordered products are delivered to you in perfect condition without any defects or damage. We carefully pack and thoroughly inspect all products before shipping.</p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Damages & Issues</h3>
                <p>
                  Please inspect your order thoroughly when you receive it and <strong>contact us within 24 hours of delivery</strong> if the item is defective, damaged, or if you received the wrong item. This allows us to assess the issue and correct it.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Exceptions / Non-Returnable Items</h3>
                <p>Certain types of items cannot be returned, like custom products (such as special orders or personalized items). We also do not accept returns for hazardous materials, flammable liquids, or gases.</p>
                
                <div className="bg-gray-100 border-l-4 border-black p-5 rounded-r-lg mt-6">
                  <strong className="block mb-2">Questions about returns?</strong> Contact us via WhatsApp at{' '}
                  <a href="https://wa.me/917795265279" className="font-bold hover:underline">
                    +91 7795265279
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <h2 className="text-3xl mb-6 pb-4 border-b-2 border-gray-200 text-gray-900">Terms & Services</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Brief / Overview</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>This website is managed by Blossoms Inspirella. The terms "we," "us," and "our" pertain to Blossoms Inspirella.</li>
                  <li>By using this website and all the information, tools, and services it contains, you agree to all the terms, conditions, policies, and notices outlined here.</li>
                  <li>When you visit our site or buy something from us, you are using our "Service" and agree to follow these Terms of Service. These rules apply to everyone using the site.</li>
                  <li>Please read these Terms of Service carefully before using our website. By using any part of the site, you agree to these terms.</li>
                  <li>Any new features or tools added to the store will also follow these Terms of Service. We may update, change, or replace any part of these terms by posting updates on our website.</li>
                  <li>By agreeing to these Terms of Service, you confirm that you are at least the legal adult age in your state or province.</li>
                  <li>You must not use our products for any illegal or unauthorized activities, and you must comply with all laws in your area (including copyright laws).</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Services and Pricing</h3>
                <ol className="list-decimal pl-6 space-y-3" start={8}>
                  <li>Product prices may change at any time without prior notice. We reserve the right to alter or terminate the Service at our discretion and without notice.</li>
                  <li>We can refuse service to anyone at any time for any reason. Credit card information is always encrypted during network transfers.</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Products or Services</h3>
                <ol className="list-decimal pl-6 space-y-3" start={10}>
                  <li>Some products or services may be available only online through our website and might be limited in quantity.</li>
                  <li>We strive to show accurate colors and images of our products, but cannot guarantee that your monitor will display colors exactly as they appear.</li>
                  <li>We have the right to limit sales of our products or services to any person, location, or jurisdiction.</li>
                  <li>Product descriptions and prices can change at any time without notice.</li>
                  <li>We do not guarantee that the quality of any products or services will meet your expectations.</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Financial and Accounts Information</h3>
                <ol className="list-decimal pl-6 space-y-3" start={15}>
                  <li>We have the right to refuse any order you place. We may also limit or cancel the quantity of items purchased by an individual, household, or order.</li>
                  <li>This includes orders made with the same customer account, credit card, or shipping and billing address.</li>
                  <li>You agree to provide accurate and up-to-date information for all your purchases.</li>
                  <li>Please promptly update your account details so we can process your transactions and contact you if needed.</li>
                </ol>

                <div className="bg-gray-100 border-l-4 border-black p-5 rounded-r-lg mt-6">
                  <strong className="block mb-2">Contact Info:</strong> Questions about the Terms? Message us at{' '}
                  <a href="https://wa.me/917795265279" className="font-bold hover:underline">
                    +91 7795265279
                  </a>{' '}
                  or email{' '}
                  <a href="mailto:blossomsinspirella@gmail.com" className="font-bold hover:underline">
                    blossomsinspirella@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
