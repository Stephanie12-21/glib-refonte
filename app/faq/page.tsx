"use client";

import type React from "react";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const faqCategories = [
    { id: "general", name: "Général" },
    { id: "alerts", name: "Alertes" },
    { id: "account", name: "Compte" },
    { id: "app", name: "Application" },
    { id: "partners", name: "Partenaires" },
  ];

  const faqs = {
    general: [
      {
        question: "Comment s'inscrire sur Glib?",
        answer: (
          <div className="space-y-3">
            <p>
              En tant que voyageur/voyageuse vous pouvez télécharger
              l'application Glib sur l'App Store ou le Playstore. Vous pourrez
              trouver après avoir téléchargé l'application, la page
              d'inscription où vous pourrez vous inscrire.
            </p>
            <p>
              En tant que professionnel, vous pouvez télécharger l'application
              Glib sur l'App Store ou le Playstore. Vous pourrez trouver après
              avoir téléchargé l'application, la page d'inscription où vous
              pourrez vous inscrire.
            </p>
          </div>
        ),
      },
      {
        question: "Comment fonctionne l'application Glib?",
        answer:
          "Glib est une application qui vous aide à organiser vos voyages et à éviter les imprévus grâce à l'intelligence artificielle. Elle analyse les données en temps réel pour vous fournir des alertes et des recommandations personnalisées.",
      },
      {
        question: "L'application est-elle disponible sur iOS et Android?",
        answer:
          "Oui, l'application Glib est disponible à la fois sur iOS via l'App Store et sur Android via le Google Play Store. Vous pouvez la télécharger gratuitement sur les deux plateformes.",
      },
      {
        question: "Les services de Glib sont-ils gratuits?",
        answer:
          "Glib propose une version gratuite avec des fonctionnalités de base et une version premium avec des fonctionnalités avancées. Consultez notre page de tarification pour plus de détails sur les différentes offres.",
      },
    ],
    alerts: [
      {
        question:
          "À cause du mauvais temps, mon activité de croisière a été annulée comment alerter sur Glib?",
        answer:
          "Vous pouvez créer une alerte en ouvrant l'application, en accédant à la section 'Alertes', puis en cliquant sur le bouton '+' pour ajouter une nouvelle alerte. Sélectionnez le type d'alerte 'Annulation' et suivez les instructions pour fournir les détails nécessaires.",
      },
      {
        question: "Quels types d'alertes puis-je créer?",
        answer:
          "Vous pouvez créer différents types d'alertes comme des annulations, des retards, des changements d'horaires, des fermetures imprévues, des conditions météorologiques défavorables, et bien d'autres situations qui pourraient affecter les voyageurs.",
      },
      {
        question: "Qu'est-ce que les alertes dans l'application Glib?",
        answer:
          "Les alertes Glib sont des notifications en temps réel qui informent les voyageurs des événements imprévus pouvant affecter leur itinéraire. Elles peuvent être créées par d'autres utilisateurs ou par notre système automatisé qui surveille diverses sources d'information.",
      },
      {
        question: "Comment puis-je créer une alerte?",
        answer:
          "Pour créer une alerte, ouvrez l'application Glib, accédez à l'onglet 'Alertes', appuyez sur le bouton '+', sélectionnez le type d'alerte, remplissez les informations requises et confirmez. Votre alerte sera immédiatement visible pour les autres utilisateurs concernés.",
      },
      {
        question: "Les alertes sont-elles visibles par tous les utilisateurs?",
        answer:
          "Les alertes sont visibles par les utilisateurs dont l'itinéraire pourrait être affecté par l'événement signalé. Notre algorithme intelligent détermine qui devrait recevoir chaque alerte en fonction de leur localisation et de leurs plans de voyage.",
      },
    ],
    account: [
      {
        question: "Comment puis-je modifier mon itinéraire après l'avoir créé?",
        answer:
          "Pour modifier un itinéraire existant, accédez à la section 'Mes voyages', sélectionnez l'itinéraire concerné, puis appuyez sur 'Modifier'. Vous pourrez alors ajuster les dates, les activités, les hébergements et autres détails selon vos besoins.",
      },
      {
        question:
          "Comment puis-je suivre mes gains de parrainage via l'application?",
        answer:
          "Vous pouvez suivre vos gains de parrainage en accédant à votre profil, puis en sélectionnant 'Programme de parrainage'. Vous y trouverez un tableau de bord détaillant le nombre de personnes parrainées, les gains accumulés et les options pour retirer vos récompenses.",
      },
      {
        question:
          "Qu'est-ce que le programme de parrainage et comment puis-je y participer?",
        answer:
          "Le programme de parrainage de Glib vous permet de gagner des récompenses en invitant vos amis à utiliser l'application. Pour participer, accédez à la section 'Parrainage' dans votre profil, obtenez votre code unique et partagez-le avec vos contacts. Vous recevrez une récompense pour chaque nouvel utilisateur qui s'inscrit avec votre code.",
      },
    ],
    app: [
      {
        question: "Comment Glib s'adapte-t-elle aux changements en temps réel?",
        answer:
          "Glib utilise une technologie d'intelligence artificielle avancée qui analyse continuellement diverses sources de données en temps réel. L'application peut détecter les perturbations, les changements météorologiques, les modifications d'horaires et d'autres événements qui pourraient affecter votre voyage, puis vous envoyer des notifications et des suggestions alternatives.",
      },
      {
        question:
          "Comment fonctionne le suivi en temps réel de mon itinéraire?",
        answer:
          "Le suivi en temps réel de votre itinéraire fonctionne grâce à une combinaison de votre localisation GPS, des données en direct des transports publics, des conditions météorologiques et d'autres sources d'information. L'application compare constamment ces données avec votre itinéraire prévu pour vous alerter de tout changement ou retard potentiel.",
      },
      {
        question:
          "Puis-je réserver des hôtels et des activités directement via l'application?",
        answer:
          "Oui, Glib vous permet de réserver directement des hôtels, des restaurants, des activités et des transports via l'application. Nous collaborons avec de nombreux partenaires pour vous offrir un large choix d'options et des tarifs compétitifs, le tout sans quitter l'application.",
      },
    ],
    partners: [
      {
        question:
          "Comment devenir partenaire de Glib en tant que restaurant ou hôtelier?",
        answer:
          "Pour devenir partenaire de Glib, rendez-vous sur notre page 'Solution professionnelle' et remplissez le formulaire de demande de partenariat. Notre équipe vous contactera pour discuter des détails et mettre en place votre intégration sur notre plateforme.",
      },
      {
        question:
          "Quels types de partenariats professionnels propose Glib aux restaurateurs et hôteliers?",
        answer:
          "Glib propose plusieurs types de partenariats adaptés aux besoins des professionnels du tourisme et de l'hôtellerie-restauration. Cela inclut des options de visibilité premium, des systèmes de réservation intégrés, des outils de gestion de la relation client, et des analyses de données pour optimiser votre activité.",
      },
      {
        question:
          "Les professionnels peuvent-ils gérer les alertes concernant leur établissement?",
        answer:
          "Oui, les partenaires professionnels de Glib peuvent gérer les alertes concernant leur établissement. Ils peuvent répondre aux alertes créées par les utilisateurs, publier leurs propres alertes (par exemple pour des changements d'horaires) et recevoir des notifications lorsque leur établissement est mentionné dans une alerte.",
      },
      {
        question:
          "Les professionnels peuvent-ils mettre à jour leur adresse GPS si elle change?",
        answer:
          "Oui, les professionnels peuvent facilement mettre à jour leur adresse GPS et autres informations de localisation via leur tableau de bord professionnel. Ces mises à jour sont immédiatement reflétées dans l'application pour tous les utilisateurs.",
      },
    ],
  };

  const filteredFaqs = Object.entries(faqs).reduce(
    (acc, [category, questions]) => {
      const filtered = questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (typeof faq.answer === "string" &&
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {} as Record<string, (typeof faqs)[keyof typeof faqs]>
  );

  const handleContactSupport = () => {
    router.push("/contact");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden 50">
        <div className="absolute inset-0 opacity-20 "></div>
        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-gradient">
                Comment pouvons-nous vous aider?
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-100">
              Trouvez rapidement des réponses à vos questions sur Glib
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full rounded-full border-0 bg-white/90 py-6 pl-5 pr-12 text-base shadow-xl backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-purple-500 dark:bg-gray-800/90 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-white">
                {Object.values(filteredFaqs).flat().length} résultats trouvés
              </p>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="general" className="w-full">
          <div className="mb-8 overflow-x-auto flex justify-center">
            <TabsList className="inline-flex h-auto w-auto space-x-2 rounded-full bg-purple-100/50 p-1 dark:bg-gray-800/50">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-purple-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-purple-300"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(searchQuery ? filteredFaqs : faqs).map(
            ([category, questions]) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-6"
              >
                {questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </TabsContent>
            )
          )}
        </Tabs>

        {/* Contact Section */}
        <div className="mt-16 rounded-2xl bg-purple-50 p-8 dark:bg-gray-800/50">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-300">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Notre équipe de support est disponible pour répondre à toutes
                vos questions.
              </p>
            </div>
            <Button
              onClick={handleContactSupport}
              className="group rounded-full bg-purple-600 px-6 py-6 text-white hover:bg-purple-700"
            >
              Contacter le support
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
          <div className="prose prose-purple max-w-none dark:prose-invert">
            {typeof answer === "string" ? <p>{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  );
}
