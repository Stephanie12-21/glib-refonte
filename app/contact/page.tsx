"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("contact");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "rejoindre") {
      setActiveTab("rejoindre");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      toast({
        title: "Erreur",
        description:
          "Veuillez compléter la vérification captcha avant d'envoyer le formulaire.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Formulaire envoyé",
        description:
          "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
      });
      setIsSubmitting(false);

      // Réinitialiser le formulaire
      const form = e.target as HTMLFormElement;
      form.reset();
      setIsCaptchaVerified(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-gradient">Contact</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour
            toute question.
          </p>
        </motion.div>

        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-3xl"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="rejoindre">Rejoindre Glib</TabsTrigger>
          </TabsList>
          <TabsContent value="contact" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="text-muted-foreground">Contact@glib.fr</p>
                  </div>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom</Label>
                        <Input
                          id="prenom"
                          placeholder="Votre prénom"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom</Label>
                        <Input
                          id="nom"
                          placeholder="Votre nom"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Votre message"
                        className="min-h-[120px] bg-background/50"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 hover-lift"
                        disabled={!isCaptchaVerified || isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="rejoindre" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      Vous souhaitez rejoindre Glib
                    </h2>
                    <p className="text-muted-foreground">
                      Remplissez ce formulaire, nous vous recontacterons sous
                      24h !
                    </p>
                  </div>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <Label>Votre activité principale</Label>
                      <RadioGroup
                        defaultValue="restauration"
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="restauration"
                            id="restauration"
                          />
                          <Label
                            htmlFor="restauration"
                            className="cursor-pointer"
                          >
                            Restauration
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hotellerie" id="hotellerie" />
                          <Label
                            htmlFor="hotellerie"
                            className="cursor-pointer"
                          >
                            Hôtellerie
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="activites" id="activites" />
                          <Label htmlFor="activites" className="cursor-pointer">
                            Activités touristiques
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="autres" id="autres" />
                          <Label htmlFor="autres" className="cursor-pointer">
                            Autres
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="prenom-pro">
                          Prénom <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="prenom-pro"
                          placeholder="Votre prénom"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nom-pro">
                          Nom <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="nom-pro"
                          placeholder="Votre nom"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="telephone">
                          Numéro de téléphone{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="telephone"
                          placeholder="Votre numéro"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="entreprise">
                          Entreprise <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="entreprise"
                          placeholder="Nom de votre entreprise"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="poste">
                          Intitulé du poste{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="poste"
                          placeholder="Votre poste"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-pro">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email-pro"
                          type="email"
                          placeholder="votre@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        J'accepte les conditions générales d'utilisation
                      </Label>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 hover-lift"
                        disabled={!isCaptchaVerified || isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Valider"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
