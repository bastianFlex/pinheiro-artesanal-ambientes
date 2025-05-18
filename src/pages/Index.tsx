
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ModernHero from "../components/ModernHero";
import ModernAbout from "../components/ModernAbout";
import AmbientGallery from "../components/AmbientGallery";
import ParallaxTestimonials from "../components/ParallaxTestimonials";
import ModernProcess from "../components/ModernProcess";
import CtaSection from "../components/CtaSection";
import ModernFooter from "../components/ModernFooter";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  // Preload images for better performance
  useEffect(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1581855339095-0c282d58527d?q=80&w=1970&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635362548170-6327132ce6dd?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1780&auto=format&fit=crop"
    ];
    
    preloadImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen">
        <Navbar />
        <ModernHero />
        <ModernAbout />
        <AmbientGallery />
        <ParallaxTestimonials />
        <ModernProcess />
        <CtaSection />
        <ModernFooter />
      </div>
    </AnimatePresence>
  );
};

export default Index;
