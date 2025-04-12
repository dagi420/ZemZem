import { motion } from 'framer-motion';
import ProductGallery from './ProductGallery';

interface ProductCardProps {
  images: string[];
  title: string;
  description: string;
  price: string;
  features?: string[];
  dimensions?: string;
  materials?: string[];
}

export default function ProductCard({ 
  images, 
  title, 
  description, 
  price, 
  features,
  dimensions,
  materials 
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <ProductGallery images={images} title={title} />
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Features</h4>
            <ul className="list-disc list-inside text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {dimensions && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Dimensions</h4>
            <p className="text-gray-600">{dimensions}</p>
          </div>
        )}
        
        {materials && materials.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Materials</h4>
            <div className="flex flex-wrap gap-2">
              {materials.map((material, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-6">
          <span className="text-accent font-bold text-xl">{price}</span>
          <a href="tel:+25196933032" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition-colors">
            Request Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
}