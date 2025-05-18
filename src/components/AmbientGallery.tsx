
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AmbientImage {
  url: string;
  title: string;
  description: string;
}

const ambientImages: AmbientImage[] = [
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
    title: "Cozinha Americana",
    description: "Design moderno com acabamento premium para sua cozinha"
  },
  {
    url: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1770&auto=format&fit=crop",
    title: "Closet Personalizado",
    description: "Organize seus pertences com estilo e praticidade"
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
    title: "Home Office",
    description: "Espaço de trabalho funcional e elegante"
  },
  {
    url: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1915&auto=format&fit=crop",
    title: "Sala de Estar",
    description: "Ambientes aconchegantes para reunir família e amigos"
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1770&auto=format&fit=crop",
    title: "Banheiro Planejado",
    description: "Soluções inteligentes para maximizar o espaço"
  }
];

const AmbientGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === ambientImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? ambientImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-wood-light/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-wood-dark">
            Ambientes Cuidadosamente <span className="text-forest">Planejados</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Cada projeto é personalizado para atender às suas necessidades e estilo de vida
          </p>
        </motion.div>

        <div className="relative overflow-hidden px-4">
          <motion.div 
            ref={carousel}
            className="overflow-hidden cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              className="flex"
              animate={{ x: -currentIndex * (100 / ambientImages.length) + '%' }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {ambientImages.map((image, index) => (
                <motion.div 
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0.7,
                    scale: currentIndex === index ? 1 : 0.9,
                    y: currentIndex === index ? -20 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-80 md:h-96 relative overflow-hidden rounded-xl group">
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 font-serif">{image.title}</h3>
                      <p className="text-white/90">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-6">
            <Button 
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-forest hover:bg-forest hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-forest hover:bg-forest hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-forest">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-wood-dark">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Services Data
const services = [
  {
    name: "Cozinhas planejadas",
    description: "Cozinhas sob medida que unem funcionalidade e beleza para seu espaço.",
    icon: "🍳",
  },
  {
    name: "Closets e guarda-roupas",
    description: "Soluções personalizadas para organizar suas roupas e acessórios.",
    icon: "👕",
  },
  {
    name: "Painéis e racks para TV",
    description: "Móveis que integram tecnologia e decoração em seu ambiente.",
    icon: "📺",
  },
];

export default AmbientGallery;
