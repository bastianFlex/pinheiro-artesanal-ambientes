
import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Instagram, Facebook, Clock } from "lucide-react";

const ModernFooter = () => {
  const whatsappNumber = "5567992422874";

  return (
    <footer className="bg-gradient-to-b from-wood-dark to-black text-white relative overflow-hidden">
      {/* Wood grain pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635362548170-6327132ce6dd?q=80&w=1932&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(120%) brightness(80%)'
          }}
        ></div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 w-40 h-auto">
              <img 
                src="/lovable-uploads/6a944c34-59b2-4a7e-b86a-166a488e1363.png" 
                alt="Marcenaria Pinheiro Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Há 30 anos transformando madeira em ambientes dos seus sonhos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-forest p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-forest p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 font-serif">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-forest-light" />
                <span className="text-gray-300">
                  R. Santo Augusto, 1122 – Campo Grande, MS – 79017-670
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-forest-light" />
                <a href={`tel:+55${whatsappNumber}`} className="text-gray-300 hover:text-forest-light transition-colors">
                  (67) 99242-2874
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-forest-light" />
                <a href="mailto:marcenariapinheiro@exemplo.com" className="text-gray-300 hover:text-forest-light transition-colors">
                  marcenariapinheiro@exemplo.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-forest-light" />
                <span className="text-gray-300">
                  Seg - Sáb: 8h às 18h
                </span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 font-serif">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-forest-light transition-colors flex items-center">
                  <span className="h-1 w-1 bg-forest-light rounded-full mr-2"></span>
                  Cozinhas planejadas
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-forest-light transition-colors flex items-center">
                  <span className="h-1 w-1 bg-forest-light rounded-full mr-2"></span>
                  Closets e guarda-roupas
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-forest-light transition-colors flex items-center">
                  <span className="h-1 w-1 bg-forest-light rounded-full mr-2"></span>
                  Painéis e racks para TV
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-forest-light transition-colors flex items-center">
                  <span className="h-1 w-1 bg-forest-light rounded-full mr-2"></span>
                  Escritórios e estantes
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-forest-light transition-colors flex items-center">
                  <span className="h-1 w-1 bg-forest-light rounded-full mr-2"></span>
                  Banheiros e lavabos
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 font-serif">Newsletter</h3>
            <p className="text-gray-400 mb-4">Receba novidades e inspirações para o seu ambiente.</p>
            <form className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest text-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-forest hover:bg-forest-dark transition-colors duration-300 text-white font-medium py-3 rounded-lg"
              >
                Inscrever-se
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Marcenaria Pinheiro. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;
