import { products } from "@/lib/data/products";
import ProductDetails from "@/components/products/ProductDetails";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}