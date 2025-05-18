
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ServicePhotoSubmission = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would send data to a backend
    setTimeout(() => {
      toast({
        title: "Foto enviada com sucesso!",
        description: "Obrigado por compartilhar seu projeto. Após revisão, ele será adicionado à nossa galeria.",
      });
      setTitle("");
      setDescription("");
      setImageUrl("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <Image className="h-6 w-6 text-forest" />
        <h3 className="text-xl font-bold text-wood-dark">Compartilhe seu Projeto</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Nome do Projeto</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Cozinha Planejada"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Descrição Breve</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Conte um pouco sobre o projeto"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Link da Imagem</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
            required
            type="url"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-forest hover:bg-forest-dark text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Projeto"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ServicePhotoSubmission;
