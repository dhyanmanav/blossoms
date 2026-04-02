import { Phone, Mail, ShoppingBag } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: 'WhatsApp / Phone',
      link: 'https://wa.me/917795265279',
      text: '+91 7795265279',
    },
    {
      icon: Mail,
      title: 'Email',
      link: 'mailto:blossomsinspirella@gmail.com',
      text: 'blossomsinspirella@gmail.com',
    },
    {
      icon: ShoppingBag,
      title: 'Place an Order',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJD2JxAZcsmwOVk9jYk5fXXXowSMUD3Z2FmPjjpv_rK1FM2A/viewform?usp=dialog',
      text: 'Click Here to Order',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg mb-3">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl">Contact Us</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform min-w-[280px]"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl mb-3">{contact.title}</h3>
                <a
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-white transition-colors break-words"
                >
                  {contact.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
