import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Product Manager",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CEO",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Technical Lead",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">WHAT CLIENT</h2>
        <p className="text-center text-xl text-gray-600 mb-12">SAYS</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}