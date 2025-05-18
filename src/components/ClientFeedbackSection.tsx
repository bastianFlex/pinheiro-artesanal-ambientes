
import React from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ReviewSubmission from "./ReviewSubmission";
import ServicePhotoSubmission from "./ServicePhotoSubmission";

const ClientFeedbackSection = () => {
  return (
    <section id="feedback" className="py-24 bg-gradient-to-br from-white to-wood-light/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-wood-dark">
            Sua Opinião <span className="text-forest">Importa</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Compartilhe seus projetos e conte sua experiência com a Marcenaria Pinheiro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServicePhotoSubmission />
          <ReviewSubmission />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-wood-dark">Projetos Enviados pelos Clientes</h3>
            <div className="h-1 w-16 bg-forest mx-auto mt-2"></div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {/* This would be populated dynamically in a real app */}
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <Image className="w-10 h-10 text-gray-400" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-wood-dark">Projeto do Cliente</h4>
                        <p className="text-sm text-gray-500">Enviado recentemente</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
