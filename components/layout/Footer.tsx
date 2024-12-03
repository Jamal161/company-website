export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-dark rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-gray-300">
              We are committed to providing the best products and services to our customers.
            </p>
          </div>
          <div className="glass-dark rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/brands" className="text-gray-300 hover:text-white transition-colors">
                  Brands
                </a>
              </li>
            </ul>
          </div>
          <div className="glass-dark rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40 backdrop-blur-sm"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-gray-400 border-t border-white/10">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}