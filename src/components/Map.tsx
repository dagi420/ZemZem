import { motion } from 'framer-motion';

export default function Map() {
  // Replace with your actual showroom coordinates
  const latitude = "9.003561775989475";
  const longitude = "38.69387206163938";
  const zoom = 80; // Adjust zoom level as needed

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
    >
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?layer=satellite&marker=${latitude},${longitude}&zoom=${zoom}`}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Zemzem Mejlis Location"
        className="w-full h-full"
        loading="lazy"
      />
    </motion.div>
  );
}