
import { useRef } from "react";
import { ChevronDown, Phone, MapPin, Mail, Instagram, Facebook, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappNumber = "5567992422874";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto de marcenaria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-wood-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/6a944c34-59b2-4a7e-b86a-166a488e1363.png')`,
            opacity: 0.25
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="mx-auto w-64 h-64 mb-6">
            <img 
              src="/lovable-uploads/6a944c34-59b2-4a7e-b86a-166a488e1363.png" 
              alt="Marcenaria Pinheiro Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Transformamos madeira em <span className="text-wood-beech">ambientes dos seus sonhos</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Mais de 30 anos criando móveis planejados com excelência em Campo Grande - MS
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-forest hover:bg-forest-dark text-white font-medium text-lg px-8 py-6"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Fale conosco no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6"
              onClick={scrollToAbout}
            >
              Conheça nosso trabalho
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-wood-beech/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-wood-dark">
              Mais de 30 anos de tradição em marcenaria artesanal
            </h2>
            <p className="text-lg mb-12 text-gray-700">
              A Marcenaria Pinheiro é especializada na criação de ambientes planejados, 
              com foco no trabalho artesanal e atenção aos detalhes. Cada projeto é único, 
              pensado e executado para atender as necessidades específicas de cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-forest/10 p-4 rounded-full mb-4">
                <Check className="h-6 w-6 text-forest" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-wood-dark">Madeira de alta qualidade</h3>
              <p className="text-gray-600">
                Utilizamos apenas madeiras selecionadas e materiais de primeira linha em todos os nossos projetos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-forest/10 p-4 rounded-full mb-4">
                <Check className="h-6 w-6 text-forest" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-wood-dark">Atendimento personalizado</h3>
              <p className="text-gray-600">
                Você é atendido diretamente pelo artesão, garantindo que todas as suas necessidades sejam atendidas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-forest/10 p-4 rounded-full mb-4">
                <Check className="h-6 w-6 text-forest" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-wood-dark">Projetos sob medida</h3>
              <p className="text-gray-600">
                Cada projeto é pensado exclusivamente para você, aproveitando ao máximo os espaços disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center text-wood-dark">
            Nossos Serviços
          </h2>
          <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            Conheça algumas das soluções que podemos criar para transformar sua casa ou escritório
          </p>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <div className="h-64 bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-wood-dark/10">
                          <div className="text-wood-dark text-5xl font-serif">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold mb-1 text-wood-dark">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-wood-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Nossos Diferenciais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="flex items-start p-4 hover:bg-black/10 rounded-lg transition-colors">
                <div className="mr-4 text-forest-light text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-wood-beech">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-wood-beech/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-wood-dark">
            O que nossos clientes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-2xl">★★★★★</div>
                </div>
                <p className="italic text-gray-600 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-wood-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center text-wood-dark">
            Como funciona o atendimento
          </h2>
          <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            Processo simples e transparente do início ao fim
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-forest-light flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wood-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Gostou do nosso trabalho?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Vamos conversar agora mesmo sobre o seu projeto!
          </p>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-forest font-medium text-lg px-8 py-6"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Clique aqui para falar no WhatsApp
          </Button>
          <p className="text-white/80 mt-6 flex items-center justify-center">
            <Clock className="h-5 w-5 mr-2" />
            Atendimento de segunda a sábado, das 8h às 18h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4 w-40 h-auto">
                <img 
                  src="/lovable-uploads/6a944c34-59b2-4a7e-b86a-166a488e1363.png" 
                  alt="Marcenaria Pinheiro Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-400">
                Há 30 anos transformando madeira em ambientes dos seus sonhos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-forest-light" />
                  <span>
                    R. Santo Augusto, 1122 – Campo Grande, MS – 79017-670
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-forest-light" />
                  <a href={`tel:+55${whatsappNumber}`} className="hover:text-forest-light transition-colors">
                    (67) 99242-2874
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-forest-light" />
                  <a href="mailto:marcenariapinheiro@exemplo.com" className="hover:text-forest-light transition-colors">
                    marcenariapinheiro@exemplo.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Serviços</h3>
              <ul className="space-y-2">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-forest-light transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-forest-light p-2 rounded-full transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-forest-light p-2 rounded-full transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Marcenaria Pinheiro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
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
  {
    name: "Escritórios e estantes",
    description: "Espaços de trabalho funcionais e estantes para livros e decoração.",
    icon: "📚",
  },
  {
    name: "Banheiros e lavabos",
    description: "Móveis sob medida para otimizar espaços em banheiros.",
    icon: "🛁",
  },
  {
    name: "Mesas e bancos rústicos",
    description: "Peças únicas com acabamento artesanal para sua casa.",
    icon: "🪑",
  },
];

// Differentials Data
const differentials = [
  {
    icon: "🪵",
    title: "30 anos de experiência",
    description: "Tradição e conhecimento na marcenaria tradicional.",
  },
  {
    icon: "✍️",
    title: "Projetos exclusivos",
    description: "Atendimento direto com o artesão para criar seu projeto único.",
  },
  {
    icon: "🧰",
    title: "Fabricação própria",
    description: "Produção artesanal com acabamento refinado em nossa oficina.",
  },
  {
    icon: "🚚",
    title: "Montagem e entrega",
    description: "Entregamos e montamos seu móvel no local com todo cuidado.",
  },
  {
    icon: "🕰️",
    title: "Pontualidade garantida",
    description: "Respeitamos prazos com confiança e profissionalismo.",
  },
];

// Testimonials Data
const testimonials = [
  {
    text: "Fiquei impressionada com a qualidade do armário da cozinha! Trabalho impecável e atendimento muito atencioso.",
    name: "Ana",
    location: "Campo Grande",
  },
  {
    text: "Muito caprichoso e atencioso. Entregou antes do prazo e o móvel ficou incrível! Superou minhas expectativas.",
    name: "Rafael",
    location: "Campo Grande",
  },
  {
    text: "Fiz o projeto do meu home office com a Marcenaria Pinheiro. O resultado ficou perfeito, exatamente como eu imaginava.",
    name: "Carla",
    location: "Campo Grande",
  },
];

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

export default Index;
