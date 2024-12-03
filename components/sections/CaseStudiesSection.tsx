import Image from "next/image";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="glass-dark rounded-2xl p-8">
              <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                25+ YEARS EXPERIENCE
              </div>
              <h2 className="text-3xl font-bold mb-4">OUR RECENT<br />CASE STUDIES</h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Case Study"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}