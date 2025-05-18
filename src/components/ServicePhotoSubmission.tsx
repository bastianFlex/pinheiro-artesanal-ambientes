
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Define our project type
export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Define props to receive and update projects
interface ServicePhotoSubmissionProps {
  onAddProject: (project: Project) => void;
}

const ServicePhotoSubmission: React.FC<ServicePhotoSubmissionProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if file is an image
      if (!file.type.match('image.*')) {
        toast({
          title: "Formato inválido",
          description: "Por favor, envie apenas arquivos de imagem (jpg, png, etc)",
          variant: "destructive"
        });
        return;
      }
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!previewImage) {
      toast({
        title: "Imagem necessária",
        description: "Por favor, selecione uma imagem para enviar",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create new project object
    const newProject: Project = {
      id: Date.now().toString(),
      title,
      description,
      imageUrl: previewImage
    };
    
    // In a real app, this would send data to a backend
    setTimeout(() => {
      // Add the project to the list via the callback
      onAddProject(newProject);
      
      toast({
        title: "Foto enviada com sucesso!",
        description: "Obrigado por compartilhar seu projeto. Após revisão, ele será adicionado à nossa galeria.",
      });
      setTitle("");
      setDescription("");
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
          <Label htmlFor="image">Foto do Projeto</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
            <div className="space-y-1 text-center">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              
              {previewImage ? (
                <div className="relative">
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    className="mx-auto h-40 object-cover rounded-md" 
                  />
                  <div className="absolute top-0 right-0 bg-forest text-white rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreviewImage(null)}
                    className="mt-2 text-sm text-red-600 hover:text-red-700"
                  >
                    Remover
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    <Label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-forest hover:text-forest-dark"
                    >
                      <span>Faça upload de uma foto</span>
                    </Label>
                    <span className="pl-1">ou arraste e solte</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF até 10MB
                  </p>
                </>
              )}
            </div>
          </div>
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
