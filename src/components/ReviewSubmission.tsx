
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  location: z.string().min(2, { message: "Localização é obrigatória" }),
  rating: z.number().min(1, { message: "Por favor, selecione uma avaliação" }).max(5),
  comment: z.string().min(10, { message: "Comentário deve ter pelo menos 10 caracteres" }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

const ReviewSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();
  
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: 0,
      comment: "",
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    setIsSubmitting(true);
    
    // In a real app, this would send data to a backend
    setTimeout(() => {
      toast({
        title: "Avaliação enviada!",
        description: "Agradecemos por compartilhar sua experiência com a Marcenaria Pinheiro.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const StarRating = () => {
    const rating = form.watch("rating");
    
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`cursor-pointer transition-all ${
              star <= (hoveredStar || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => form.setValue("rating", star)}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-6 w-6 text-forest" />
        <h3 className="text-xl font-bold text-wood-dark">Deixe Sua Avaliação</h3>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Maria Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Campo Grande" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="rating"
            render={() => (
              <FormItem>
                <FormLabel>Sua Avaliação</FormLabel>
                <FormControl>
                  <StarRating />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Comentário</FormLabel>
                <FormControl>
                  <textarea 
                    className="w-full min-h-[100px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest" 
                    placeholder="Conte sua experiência com a Marcenaria Pinheiro..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-forest hover:bg-forest-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ReviewSubmission;
