import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-dark rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">GIVE US A CHANCE TO MAKE</h2>
            <p className="text-xl text-gray-300 mb-8">US A DIFFERENCE</p>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              CONTACT US NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}