
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const ModernAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Wood grain diagonal strips animation
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1635362548170-6327132ce6dd?q=80&w=1932&auto=format&fit=crop')`,
          backgroundSize: '40% auto',
          x: backgroundX,
          y: backgroundY
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-8 text-wood-dark"
          >
            <span className="relative inline-block">
              Mais de 30 anos de tradição
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-forest" 
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
            <br/>em marcenaria artesanal
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-12 text-gray-700"
          >
            A Marcenaria Pinheiro é especializada na criação de ambientes planejados, 
            com foco no trabalho artesanal e atenção aos detalhes. Cada projeto é único, 
            pensado e executado para atender as necessidades específicas de cada cliente.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-br from-forest to-forest-dark p-4 rounded-full text-white shadow-lg">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-wood-dark text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-wood-light/30 rounded-tl-2xl" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Wood working process visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1780&auto=format&fit=crop" 
              alt="Processo de trabalho em madeira" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 to-transparent flex items-center">
              <div className="ml-8 md:ml-16 max-w-md">
                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Processo artesanal</h3>
                <p className="text-white/90 mb-6">Cada peça é trabalhada com atenção aos detalhes, respeitando as características naturais da madeira e garantindo um resultado único.</p>
                <div className="flex space-x-2">
                  <div className="h-2 w-16 rounded-full bg-wood-beech"></div>
                  <div className="h-2 w-8 rounded-full bg-forest-light"></div>
                  <div className="h-2 w-4 rounded-full bg-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features data
const features = [
  {
    title: "Madeira de alta qualidade",
    description: "Utilizamos apenas madeiras selecionadas e materiais de primeira linha em todos os nossos projetos.",
  },
  {
    title: "Atendimento personalizado",
    description: "Você é atendido diretamente pelo artesão, garantindo que todas as suas necessidades sejam atendidas.",
  },
  {
    title: "Projetos sob medida",
    description: "Cada projeto é pensado exclusivamente para você, aproveitando ao máximo os espaços disponíveis.",
  },
];

export default ModernAbout;
