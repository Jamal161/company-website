import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Brand One",
    description: "Leading innovator in technology solutions.",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Brand Two",
    description: "Premium quality products for discerning customers.",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Brand Three",
    description: "Sustainable and eco-friendly manufacturing.",
    logo: "https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Brands() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Trusted Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{brand.name}</h2>
              <p className="text-gray-600">{brand.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Partners Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-600">
              Access to international markets and a diverse customer base.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous quality control and product testing standards.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Innovation Support</h3>
            <p className="text-gray-600">
              Access to cutting-edge technology and research facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our network of successful brand partners and grow your business with us.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Contact Our Partnership Team
        </button>
      </section>
    </div>
  );
}