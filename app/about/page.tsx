import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Our team"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6">
            We are a passionate team dedicated to delivering exceptional products and services
            to our customers. With years of experience in the industry, we understand what it
            takes to create solutions that make a difference.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
          <p className="mb-6">
            Our mission is to provide innovative solutions that help our customers achieve
            their goals. We believe in building long-lasting relationships based on trust,
            quality, and exceptional service.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Excellence in everything we do</li>
            <li>Customer satisfaction is our top priority</li>
            <li>Innovation and continuous improvement</li>
            <li>Integrity and transparency</li>
            <li>Teamwork and collaboration</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our History</h2>
          <p className="mb-6">
            Founded in 2010, we have grown from a small startup to a leading provider in our
            industry. Our journey has been marked by continuous innovation, strategic
            partnerships, and a commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
}