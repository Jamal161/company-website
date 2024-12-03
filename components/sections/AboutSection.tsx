import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-72 h-72 rounded-full overflow-hidden">
            <Image
              src="/images/company-logo.jpg"
              alt="Company Logo"
              width={288}
              height={288}
              className="object-cover"
            />
          </div>
        </div>
        <div className="glass rounded-3xl p-8">
          <h3 className="text-sm font-medium mb-2">ABOUT US</h3>
          <h2 className="text-4xl font-bold mb-6">THE COMPANY</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="default">READ MORE</Button>
        </div>
      </div>
    </section>
  );
}