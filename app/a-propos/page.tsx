import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              À Propos de GLIB
            </h1>
            <p className="mt-6 text-muted-foreground">
              GLIB a été créé pour répondre aux besoins croissants des voyageurs
              modernes qui cherchent à maximiser leur expérience tout en
              minimisant les imprévus. Inspiré par les défis rencontrés lors de
              nombreux voyages, GLIB a été conçu pour offrir une solution
              tout-en-un qui anticipe les problèmes et propose des solutions en
              temps réel. L'idée est née de la volonté de révolutionner la
              manière dont les gens planifient et vivent leurs voyages, en
              combinant intelligence artificielle et technologie de pointe.
            </p>
          </div>
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-purple-500/20 bg-purple-500/10 p-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Illustration"
                width={400}
                height={400}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <h2 className="relative -top-5 mx-auto w-fit bg-background px-4 font-outfit text-3xl font-bold tracking-tighter">
              Notre Histoire
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Notre histoire commence lors d'un voyage où nous, trois ingénieurs
              passionnés par la technologie et les voyages, nous sommes réunis
              pour discuter des défis rencontrés en cours de route. Frustrés par
              les imprévus et les complications récurrentes, nous avons
              identifié un besoin urgent pour une solution qui anticipe les
              problèmes et simplifie la planification de voyage.
            </p>
            <p className="text-muted-foreground">
              Inspirés par nos propres expériences, nous avons décidé de créer
              GLIB, une application intégrant l'intelligence artificielle pour
              offrir des alertes en temps réel, des suggestions d'activités
              alternatives et une gestion de l'affluence. Travaillant sans
              relâche, nous avons conçu une plateforme innovante qui transforme
              la manière dont les voyageurs planifient et vivent leurs
              aventures, assurant une expérience fluide et sans stress.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-purple-500/20 bg-purple-500/10 p-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Illustration"
                  width={400}
                  height={400}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <h2 className="relative -top-5 mx-auto w-fit bg-background px-4 font-outfit text-3xl font-bold tracking-tighter">
              Vision & Mission
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-center text-xl font-medium">
                  Notre vision
                </h3>
                <p className="text-muted-foreground">
                  Chez GLIB, notre vision est de transformer chaque voyage en
                  une expérience fluide et mémorable. Nous croyons que les
                  voyages devraient être synonymes de découverte et de plaisir,
                  sans les tracas et les incertitudes qui peuvent souvent les
                  accompagner.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-center text-xl font-medium">
                  Notre mission
                </h3>
                <p className="text-muted-foreground">
                  Notre mission est de fournir une application intuitive et
                  intelligente qui aide les voyageurs à planifier, gérer et
                  optimiser leurs déplacements. GLIB est conçu pour offrir des
                  alertes en temps réel, des suggestions d'activités
                  alternatives, et une gestion simplifiée des réservations. Nous
                  nous engageons également à soutenir les professionnels du
                  tourisme en leur offrant des outils pour mieux gérer
                  l'affluence et améliorer la qualité de leur service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
