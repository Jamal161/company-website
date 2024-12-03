import { Battery, Zap, Globe, Cpu, Shield, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Battery className="w-12 h-12" />,
    title: "Best Energy Solutions",
    description: "Comprehensive energy solutions tailored to your specific needs with cutting-edge technology."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "End-To-End Services",
    description: "Complete service coverage from initial consultation to implementation and maintenance."
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Global Expertise",
    description: "International experience and knowledge in handling diverse energy projects worldwide."
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Smart Technology",
    description: "Advanced technological solutions for optimal energy management and efficiency."
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Reliable Support",
    description: "24/7 technical support and maintenance services to ensure continuous operation."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Quick Response",
    description: "Rapid response times and efficient problem resolution for minimal downtime."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Services Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="glass-dark rounded-3xl p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive energy solutions tailored to meet your needs with cutting-edge technology
                and expert support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-dark rounded-2xl p-8">
                <div className="text-red-500 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how we can help with your energy needs.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}