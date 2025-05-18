
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ReviewSubmission, { Testimonial } from "./ReviewSubmission";
import ServicePhotoSubmission, { Project } from "./ServicePhotoSubmission";

// Initial testimonials data
const initialTestimonials = [
  {
    id: "1",
    text: "Fiquei impressionada com a qualidade do armário da cozinha! Trabalho impecável e atendimento muito atencioso.",
    name: "Ana",
    location: "Campo Grande",
    rating: 5,
  },
  {
    id: "2",
    text: "Muito caprichoso e atencioso. Entregou antes do prazo e o móvel ficou incrível! Superou minhas expectativas.",
    name: "Rafael",
    location: "Campo Grande",
    rating: 5,
  },
  {
    id: "3",
    text: "Fiz o projeto do meu home office com a Marcenaria Pinheiro. O resultado ficou perfeito, exatamente como eu imaginava.",
    name: "Carla",
    location: "Campo Grande",
    rating: 5,
  },
];

// Initial sample projects
const initialProjects: Project[] = [];

const ClientFeedbackSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  // Add a new testimonial to the list
  const handleAddTestimonial = (testimonial: Testimonial) => {
    setTestimonials(prev => [testimonial, ...prev]);
  };

  // Add a new project to the list
  const handleAddProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

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
          <ServicePhotoSubmission onAddProject={handleAddProject} />
          <ReviewSubmission onAddTestimonial={handleAddTestimonial} />
        </div>
        
        {/* Carousel for Projects */}
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
              {projects.length > 0 ? (
                projects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-wood-dark">{project.title}</h4>
                          <p className="text-sm text-gray-500">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem className="md:basis-full">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all p-8 text-center">
                      <p className="text-gray-500">Seja o primeiro a compartilhar seu projeto!</p>
                    </div>
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>
        
        {/* Display testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-wood-dark">Depoimentos dos Nossos Clientes</h3>
            <div className="h-1 w-16 bg-forest mx-auto mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-forest text-white flex items-center justify-center font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-wood-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Import the Star component at the top of the file
import { Star } from "lucide-react";

export default ClientFeedbackSection;
