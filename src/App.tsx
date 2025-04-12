import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Star, Shield, Truck, ChevronDown, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Map from './components/Map';
import { cn } from './utils/cn';
import hero from './assets/hero.jpg';
import modern1 from './assets/modern1.jpg'
import modern2 from './assets/modern2.jpg'
import modern3 from './assets/modern3.jpg'
import modern4 from './assets/modern4.jpg'
import modern5 from './assets/modern5.jpg'
import modern6 from './assets/modern6.jpg'
import mejlis1 from './assets/mejlis1.jpg'
import mejlis2 from './assets/mejlis2.jpg'
import mejlis3 from './assets/mejlis3.jpg'
import mejlis4 from './assets/mejlis4.jpg'
import mejlis5 from './assets/mejlis5.jpg'
import mejlis6 from './assets/mejlis6.jpg'
import dining1 from './assets/dining1.jpg'
import dining2 from './assets/dining2.jpg'
import dining3 from './assets/dining3.jpg'
import dining4 from './assets/dining4.jpg'
import dining5 from './assets/dining5.jpg'
import dining6 from './assets/dining6.jpg'
import logo from './assets/logo.png';


function App() {
  const products = [
    {
      images: [
        modern1,
        modern2,
        modern3,
        modern4,
        modern5,
        modern6
      ],
      // TODO: Replace with local paths:
      // images: [
      //   "/assets/products/majlis-set/main.jpg",
      //   "/assets/products/majlis-set/detail-1.jpg",
      //   "/assets/products/majlis-set/detail-2.jpg"
      // ],
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
        mejlis1,
        mejlis2,
        mejlis3,
        mejlis4,
        mejlis5,
        mejlis6
      ],
      // TODO: Replace with local paths:
      // images: [
      //   "/assets/products/cushions/main.jpg",
      //   "/assets/products/cushions/detail-1.jpg",
      //   "/assets/products/cushions/detail-2.jpg"
      // ],
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
        dining1,
        dining2,
        dining3,
        dining4,
        dining5,
        dining6
      ],
      // TODO: Replace with local paths:
      // images: [
      //   "/assets/products/dining-set/main.jpg",
      //   "/assets/products/dining-set/detail-1.jpg",
      //   "/assets/products/dining-set/detail-2.jpg"
      // ],
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
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block"
              >
                <span className="bg-primary/5 text-primary px-6 py-2 rounded-full text-sm font-medium border border-primary/10">
                  Redefining Luxury Living
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-gradient">Timeless</span> <br />
                Elegance for <br />
                Your Space
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 text-balance"
              >
                Experience the perfect blend of traditional craftsmanship and contemporary design with our exclusive collection of premium mejlis furniture.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#products"
                  className={cn(
                    "group relative px-8 py-4 rounded-full overflow-hidden bg-primary text-white",
                    "transition-all duration-300",
                    "hover:shadow-lg hover:shadow-primary/20",
                    "active:scale-95"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Explore Collection
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className={cn(
                    "group px-8 py-4 rounded-full",
                    "border-2 border-primary text-primary",
                    "transition-all duration-300",
                    "hover:bg-primary hover:text-white",
                    "active:scale-95"
                  )}
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/3] w-full max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl -rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <motion.img
                  src={hero}
                  // TODO: Replace with local path:
                  // src="/assets/hero/hero-image.jpg"
                  alt="Luxury Furniture"
                  className="w-full h-full object-cover image-fade"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              
             
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -right-8 top-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
              >
                <p className="text-primary font-medium">Premium Quality</p>
                <p className="text-2xl font-bold text-gradient">Guaranteed</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#products"
            className="flex flex-col items-center text-primary hover:text-accent transition-colors"
          >
            <span className="text-sm font-medium mb-2">Discover More</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gray-50"
            >
              <Star className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials and attention to detail</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-gray-50"
            >
              <Shield className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Warranty Protected</h3>
              <p className="text-gray-600">All our products come with extended warranty coverage</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-8 rounded-2xl bg-gray-50"
            >
              <Truck className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Free Delivery</h3>
              <p className="text-gray-600">Complimentary delivery and installation service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Featured Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Discover our handpicked selection of premium furniture pieces, each crafted to perfection
            </p>
          </motion.div>
          <div className="space-y-24">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
              Why Choose Zemzem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Experience the difference of working with furniture experts who understand your vision
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Custom Design Service</h3>
              <p className="text-gray-600">
                Our expert designers work with you to create the perfect furniture pieces that match your style and space requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Professional Installation</h3>
              <p className="text-gray-600">
                Our trained team ensures proper installation and setup of your furniture, guaranteeing perfect placement and assembly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                We use only the highest quality materials, ensuring durability and longevity of every piece we create.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">After-Sales Support</h3>
              <p className="text-gray-600">
                Our commitment doesn't end with delivery. We provide comprehensive after-sales support and maintenance services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Experience our collection in person at our elegant showroom
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Map />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              We'd love to hear from you. Contact us for inquiries and quotes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 rounded-2xl text-center"
            >
              <Phone className="mx-auto text-primary mb-6" size={32} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Call Us</h3>
              <p className="text-gray-600">+251969332032</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 rounded-2xl text-center"
            >
              <Mail className="mx-auto text-primary mb-6" size={32} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Email Us</h3>
              <p className="text-gray-600">zemzemmejilis@gmail.com</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 rounded-2xl text-center"
            >
              <MapPin className="mx-auto text-primary mb-6" size={32} />
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">Visit Us</h3>
              <p className="text-gray-600">Bethel Square, Addis Ababa</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-white space-y-6">
              <img src={logo} alt="Zemzem Logo" className="h-28 w-auto" />
              <p className="text-white/80">
                Crafting timeless elegance for your living spaces since 2020.
              </p>
            </div>
            <div className="text-white">
              <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="font-serif text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-white/80">+251969332032</li>
                <li className="text-white/80">zemzemmejilis@gmail.com</li>
                <li className="text-white/80">Bethel Square, Addis Ababa</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Zemzem Mejlis and Furniture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;