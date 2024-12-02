"use client";

import { Product } from "@/lib/data/products";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartForm from "@/components/forms/CartForm";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">{product.details}</p>

            {product.features && (
              <>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.specifications && (
              <>
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="font-medium text-gray-600">{key}</dt>
                        <dd className="text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <CartForm product={product} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}