
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "./ReviewSubmission";

interface ParallaxTestimonialsProps {
  userTestimonials?: Testimonial[];
}

const ParallaxTestimonials: React.FC<ParallaxTestimonialsProps> = ({ userTestimonials = [] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 0]);

  // Combine default testimonials with user submitted ones
  const [displayTestimonials, setDisplayTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Default testimonials if no user submitted ones are available
    const defaultTestimonials = [
      {
        id: "1",
        text: "Fiquei impressionada com a qualidade do armário da cozinha! Trabalho impecável e atendimento muito atencioso.",
        name: "Ana",
        location: "Campo Grande",
        rating: 5
      },
      {
        id: "2",
        text: "Muito caprichoso e atencioso. Entregou antes do prazo e o móvel ficou incrível! Superou minhas expectativas.",
        name: "Rafael",
        location: "Campo Grande",
        rating: 5
      },
      {
        id: "3",
        text: "Fiz o projeto do meu home office com a Marcenaria Pinheiro. O resultado ficou perfeito, exatamente como eu imaginava.",
        name: "Carla",
        location: "Campo Grande",
        rating: 5
      },
    ];

    // If we have user testimonials, prioritize the most recent ones
    if (userTestimonials.length > 0) {
      // Get the two most recent user testimonials
      const recentUserTestimonials = [...userTestimonials]
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .slice(0, 2);
      
      // Combine with one default testimonial if needed
      const combined = [
        ...recentUserTestimonials,
        ...defaultTestimonials.slice(0, Math.max(0, 3 - recentUserTestimonials.length))
      ];
      
      setDisplayTestimonials(combined.slice(0, 3));
    } else {
      setDisplayTestimonials(defaultTestimonials);
    }
  }, [userTestimonials]);

  // Animations for testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Calculate rotation for 3D effect
  const rotate = (index: number) => {
    const middle = Math.floor(displayTestimonials.length / 2);
    const distance = index - middle;
    return distance * 5; // Rotate by 5 degrees per position from middle
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wood-light/10 to-white/0"></div>
        <motion.div 
          className="absolute inset-0 bg-forest/5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100%', '110%']
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(215, 204, 200, 0.3) 8px, transparent 8px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-wood-dark">
            O que nossos clientes <span className="text-forest">dizem</span>
          </h2>
          <div className="h-1 w-24 bg-forest mx-auto"></div>
        </motion.div>

        <div className="relative h-[500px] mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* 3D Testimonial Carousel */}
            <div className="relative w-full max-w-5xl h-full">
              {displayTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute top-1/2 left-1/2 w-full max-w-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  custom={index}
                  style={{
                    translateX: `-50%`,
                    translateY: `-50%`,
                    zIndex: displayTestimonials.length - index,
                    rotateY: rotate(index) + 'deg',
                    translateZ: (-100 * Math.abs(index - Math.floor(displayTestimonials.length / 2))) + 'px'
                  }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform-gpu backface-hidden border border-wood-light/10">
                    <div className="flex items-center mb-6">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg 
                            key={i} 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-6 h-6 text-yellow-400"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </motion.svg>
                        ))}
                      </div>
                    </div>
                    
                    <p className="italic text-gray-700 mb-6 text-lg">"{testimonial.text}"</p>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-forest to-forest-dark text-white flex items-center justify-center font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-wood-dark">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <svg 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-forest/10"
                      >
                        <path 
                          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" 
                          fill="currentColor" 
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700">
            Mais de <span className="font-bold text-forest-dark">300 clientes satisfeitos</span> nos últimos anos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxTestimonials;
