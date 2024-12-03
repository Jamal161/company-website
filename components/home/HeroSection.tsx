import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="glass rounded-2xl p-8 max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Modern Website</h1>
          <p className="text-xl mb-8">
            Discover our amazing products and premium brands that will transform your life.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
          >
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}