import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Star, Shield, Truck } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        "https://images.unsplash.com/photo-1550226891-ef816aed4a98",
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25"
      ],
      title: "Modern Majlis Set",
      description: "Luxurious and comfortable majlis set perfect for modern homes",
      price: "Contact for Price",
      features: [
        "Premium quality fabric",
        "Ergonomic design",
        "Customizable colors",
        "Modular configuration"
      ],
      dimensions: "L: 300cm x W: 200cm x H: 75cm",
      materials: ["Premium Fabric", "Solid Wood", "High-density Foam"]
    },
    {
      images: [
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
        "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea"
      ],
      title: "Traditional Cushion Collection",
      description: "Handcrafted cushions with authentic traditional patterns",
      price: "Contact for Price",
      features: [
        "Hand-stitched details",
        "Traditional patterns",
        "Premium filling",
        "Removable covers"
      ],
      dimensions: "50cm x 50cm",
      materials: ["Cotton", "Silk", "Natural Filling"]
    },
    {
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1519961655809-34fa156820ff"
      ],
      title: "Contemporary Dining Set",
      description: "Modern dining set that combines style with functionality",
      price: "Contact for Price",
      features: [
        "Extendable table",
        "Comfortable seating",
        "Durable finish",
        "Easy maintenance"
      ],
      dimensions: "Table: L: 180cm x W: 90cm x H: 75cm",
      materials: ["Solid Wood", "Tempered Glass", "Stainless Steel"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Transform Your Space with Elegant Furniture
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our exclusive collection of premium mejlis furniture and modern home décor
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="float-animation"
            >
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013"
                alt="Luxury Furniture"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <Star className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials and attention to detail</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <Shield className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-2">Warranty Protected</h3>
              <p className="text-gray-600">All our products come with extended warranty coverage</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <Truck className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-2">Free Delivery</h3>
              <p className="text-gray-600">Complimentary delivery and installation service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Featured Collections
            </h2>
            <p className="text-gray-600">
              Explore our handpicked selection of premium furniture pieces
            </p>
          </motion.div>
          <div className="space-y-16">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Zemzem
            </h2>
            <p className="text-gray-600">
              Experience the difference of working with furniture experts
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Custom Design Service</h3>
              <p className="text-gray-600">
                Our expert designers work with you to create the perfect furniture pieces that match your style and space requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Professional Installation</h3>
              <p className="text-gray-600">
                Our trained team ensures proper installation and setup of your furniture, guaranteeing perfect placement and assembly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                We use only the highest quality materials, ensuring durability and longevity of every piece we create.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">After-Sales Support</h3>
              <p className="text-gray-600">
                Our commitment doesn't end with delivery. We provide comprehensive after-sales support and maintenance services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We'd love to hear from you. Contact us for inquiries and quotes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg text-center"
            >
              <Phone className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-gray-600">+1234567890</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg text-center"
            >
              <Mail className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-gray-600">info@zemzem.com</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg text-center"
            >
              <MapPin className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-primary mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Furniture Street, City</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/logo.png" alt="Zemzem Logo" className="h-12 mx-auto mb-4" />
            <p className="text-sm">
              © {new Date().getFullYear()} Zemzem Mejlis and Furniture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;