
import React from "react";
import { motion } from "framer-motion";

const ModernProcess = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-wood-light/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-wood-dark">
            Como funciona o <span className="text-forest">atendimento</span>
          </h2>
          <p className="text-lg text-center mb-6 text-gray-700 max-w-3xl mx-auto">
            Um processo simples e transparente do início ao fim
          </p>
          <div className="h-1 w-24 bg-forest mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between relative"
        >
          {/* Progress line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-forest-light via-forest to-wood-beech z-0"></div>
          
          {howItWorks.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="md:w-1/4 mb-10 md:mb-0 relative z-10 px-4"
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg text-center w-full h-44 flex flex-col justify-center hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-wood-dark">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </div>
              
              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 transform rotate-[-20deg] text-forest text-3xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 mb-2">
            Pronto para começar seu projeto?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href={`https://wa.me/5567992422874?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto de marcenaria.")}`}
              className="inline-block mt-4 bg-forest hover:bg-forest-dark text-white font-medium px-8 py-4 rounded-full shadow-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar conversa no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Data
const howItWorks = [
  {
    title: "Envie sua ideia",
    description: "Entre em contato pelo WhatsApp enviando suas ideias ou medidas.",
  },
  {
    title: "Receba proposta",
    description: "Em até 24h você receberá uma proposta personalizada.",
  },
  {
    title: "Escolha materiais",
    description: "Selecione acabamentos e aprove o projeto final.",
  },
  {
    title: "Receba seu móvel",
    description: "Fabricamos e entregamos no prazo combinado.",
  },
];

export default ModernProcess;
