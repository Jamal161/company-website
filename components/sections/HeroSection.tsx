import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/battery-bg.jpg"
          alt="Battery Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="glass rounded-3xl p-12 max-w-3xl">
          <h2 className="text-lg font-medium mb-2">RENEWABLE ENERGY</h2>
          <h1 className="text-6xl font-bold mb-8">SWITCHING<br />BATTERY</h1>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">
            CONTACT NOW
          </Button>
        </div>
      </div>
    </section>
  );
}