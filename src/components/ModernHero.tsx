
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernHero = () => {
  const whatsappNumber = "5567992422874";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto de marcenaria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581855339095-0c282d58527d?q=80&w=1970&auto=format&fit=crop')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 to-wood-dark/90 mix-blend-multiply"></div>
        </motion.div>
      </div>

      {/* Floating Wood Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0], 
            x: [0, 5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-[20%] left-[10%] w-20 h-20 bg-wood-tan/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -15, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-[60%] right-[15%] w-32 h-32 bg-forest-light/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0], 
            x: [0, -10, 0] 
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute bottom-[20%] left-[20%] w-24 h-24 bg-wood-beech/10 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto w-48 h-48 mb-6 relative"
          >
            <div className="absolute inset-0 bg-wood-light/10 rounded-full filter blur-xl"></div>
            <img 
              src="/lovable-uploads/6a944c34-59b2-4a7e-b86a-166a488e1363.png" 
              alt="Marcenaria Pinheiro Logo" 
              className="w-full h-full object-contain relative z-10"
            />
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Transformamos <span className="text-wood-beech">madeira</span> em<br/>
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="bg-gradient-to-r from-wood-beech via-white to-wood-beech bg-clip-text text-transparent bg-300%"
            >
              ambientes dos seus sonhos
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/80"
          >
            Mais de 30 anos criando móveis planejados com excelência em Campo Grande - MS
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-forest hover:bg-forest-dark text-white font-medium text-lg px-8 py-7 rounded-full shadow-lg shadow-forest/30"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Fale conosco no WhatsApp
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 py-7 rounded-full backdrop-blur-sm"
                onClick={scrollToAbout}
              >
                Conheça nosso trabalho
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
            <span className="mt-2 text-sm">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
