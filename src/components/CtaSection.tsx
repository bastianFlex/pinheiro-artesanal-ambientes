
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsappLogo } from "./IconsCollection";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 1, 0.8]);

  const whatsappNumber = "5567992422874";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto de marcenaria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background with perspective effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-forest opacity-90"></div>
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <svg 
            className="absolute top-0 left-0 w-full h-full opacity-10" 
            width="100%" 
            height="100%"
            preserveAspectRatio="none"
          >
            <pattern 
              id="wood-pattern" 
              x="0" 
              y="0" 
              width="100" 
              height="100" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M0 50 C 20 80, 50 80, 100 50 L 100 100 L 0 100 Z" 
                fill="white" 
              />
            </pattern>
            <rect x="0" y="0" width="100%" height="200%" fill="url(#wood-pattern)" />
          </svg>
        </motion.div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white"
          >
            Gostou do nosso trabalho?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 mb-10"
          >
            Vamos conversar agora mesmo sobre o seu projeto!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              {/* Pulsing animation */}
              <div className="absolute -inset-4 rounded-full opacity-0 bg-white animate-ping"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-white hover:bg-gray-100 text-forest font-medium text-xl px-10 py-8 rounded-full shadow-xl flex items-center space-x-3"
                >
                  <WhatsappLogo className="h-8 w-8" />
                  <span>Enviar mensagem no WhatsApp</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center text-white/80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Atendimento de segunda a sábado, das 8h às 18h</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] rotate-180"
          style={{ fill: '#5D4037' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
