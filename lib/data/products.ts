export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  details?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Product 1",
    description: "High-quality product designed for maximum performance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$99.99",
    details: "Experience unparalleled quality with our flagship product. Designed for professionals who demand the best.",
    features: [
      "Premium build quality",
      "Advanced performance features",
      "Professional-grade components",
      "2-year warranty"
    ],
    specifications: {
      "Dimensions": "10 x 5 x 2 inches",
      "Weight": "1.5 lbs",
      "Material": "Aircraft-grade aluminum",
      "Battery Life": "Up to 12 hours"
    }
  },
  {
    id: 2,
    name: "Premium Product 2",
    description: "Innovative solution for modern needs.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$149.99",
    details: "The perfect blend of style and functionality. Ideal for both personal and professional use.",
    features: [
      "Sleek modern design",
      "Smart connectivity",
      "Customizable settings",
      "Extended warranty"
    ],
    specifications: {
      "Dimensions": "8 x 4 x 1.5 inches",
      "Weight": "1.2 lbs",
      "Material": "Premium composite",
      "Connectivity": "Bluetooth 5.0"
    }
  },
  {
    id: 3,
    name: "Premium Product 3",
    description: "Advanced features for professional use.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$199.99",
    details: "Professional-grade equipment for those who need the absolute best in performance and reliability.",
    features: [
      "Professional-grade performance",
      "Advanced customization",
      "Premium support included",
      "5-year warranty"
    ],
    specifications: {
      "Dimensions": "12 x 6 x 3 inches",
      "Weight": "2.0 lbs",
      "Material": "Carbon fiber composite",
      "Power Output": "1000W"
    }
  }
];