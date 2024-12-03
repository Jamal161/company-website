import { Battery, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Best Energy Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "End-To-End Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Expertise",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">WE ARE BUILDING</h2>
          <p className="text-xl text-gray-600">A SUSTAINABLE FUTURE</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-2xl">
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}