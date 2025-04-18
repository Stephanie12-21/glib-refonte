"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  Bell,
  Shield,
  Clock,
  Map,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();

  // Assurer que le composant est monté avant d'utiliser le thème
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="relative overflow-hidden ">
        <div className="container relative px-4 py-16 md:px-6 md:py-24 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Votre{" "}
                  <span className="text-gradient">compagnon de voyage</span>{" "}
                  idéal
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Glib organise et évite les imprévus pendant votre voyage en
                  temps réels grâce à l'IA.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 group"
                >
                  <Link href="/fonctionnalite" className="flex items-center">
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center md:justify-end"
            >
              {/* Image directement affichée sans la carte */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px]"
              >
                <Image
                  src="/hero.png"
                  alt="Glib App Screenshot"
                  width={578}
                  height={625}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Voyagez en <span className="text-gradient">toute sécurité</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Recevez des alertes en temps réel et évitez les imprévus pendant
              votre voyage
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <AlertCircle className="h-10 w-10 text-purple-500" />,
                title: "Alerte en temps réel",
                description:
                  "Recevez des notifications instantanées sur les incidents ou problèmes qui pourraient affecter votre voyage.",
              },
              {
                icon: <Shield className="h-10 w-10 text-purple-500" />,
                title: "Prévention",
                description:
                  "Anticipez les risques potentiels grâce à notre système d'analyse prédictive basé sur l'IA.",
              },
              {
                icon: <Phone className="h-10 w-10 text-purple-500" />,
                title: "Assistance 24/7",
                description:
                  "Bénéficiez d'une assistance disponible à tout moment pour vous aider en cas d'urgence.",
              },
              {
                icon: <Map className="h-10 w-10 text-purple-500" />,
                title: "Navigation intelligente",
                description:
                  "Trouvez les meilleurs itinéraires et évitez les zones à risque grâce à notre cartographie en temps réel.",
              },
              {
                icon: <Bell className="h-10 w-10 text-purple-500" />,
                title: "Notifications personnalisées",
                description:
                  "Configurez vos alertes selon vos préférences et recevez uniquement les informations pertinentes.",
              },
              {
                icon: <Clock className="h-10 w-10 text-purple-500" />,
                title: "Gestion du temps",
                description:
                  "Optimisez votre planning de voyage avec des suggestions basées sur les conditions en temps réel.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="glass-card overflow-hidden border-none h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="mb-4 rounded-full bg-purple-500/10 p-3"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="mb-2 font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-purple-950/50 dark:via-purple-900/50 dark:to-black/50 light:opacity-50"></div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h2 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Système d'affluence{" "}
                  <span className="text-gradient">intelligent</span>
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Trouvez un restaurant pour dîner en évitant les longues files
                  d'attente grâce à notre système d'affluence en temps réel.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 group"
                >
                  <Link href="/fonctionnalite" className="flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center md:justify-end"
            >
              {/* Image directement affichée sans la carte */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px]"
              >
                <Image
                  src="https://static.wixstatic.com/media/5171cc_851029fec3fa40e583191bfb5089d931~mv2.png/v1/fill/w_720,h_540,al_c,lg_1,q_90,enc_avif,quality_auto/5171cc_851029fec3fa40e583191bfb5089d931~mv2.png"
                  alt="Glib App Screenshot"
                  width={608}
                  height={725}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Téléchargez <span className="text-gradient">gratuitement</span>{" "}
              Glib !
            </h2>
            <p className="mt-4 text-muted-foreground">
              Disponible sur iOS et Android, commencez dès maintenant à voyager
              en toute sérénité.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button className="w-full justify-start gap-2 sm:w-auto hover-lift">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M3 11h18" />
                <path d="M18 16.5v3.5" />
                <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Télécharger sur</span>
                <span>l'App Store</span>
              </div>
            </Button>
            <Button className="w-full justify-start gap-2 sm:w-auto hover-lift">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Disponible sur</span>
                <span>Google Play</span>
              </div>
            </Button>
          </motion.div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Application disponible prochainement !
          </p>
        </div>
      </section>
    </>
  );
}
