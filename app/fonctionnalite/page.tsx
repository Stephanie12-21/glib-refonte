import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Shield } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comment ça marche ?
          </h1>
          <p className="mt-4 text-muted-foreground">
            Découvrez les fonctionnalités qui font de Glib votre compagnon de
            voyage idéal
          </p>
        </div>

        <div className="relative mb-24">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-500 to-transparent"></div>
          <div className="grid gap-12">
            <div className="relative grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center md:order-2">
                <Badge className="mb-2 w-fit bg-purple-500 hover:bg-purple-600">
                  Étape 1
                </Badge>
                <h2 className="mb-4 font-outfit text-2xl font-bold">
                  Créer votre profil
                </h2>
                <p className="text-muted-foreground">
                  Sélectionnez vos dates et destinations, choisissez les
                  activités idéales proposées par Glib, et obtenez un itinéraire
                  sur mesure, optimisé selon vos préférences et réservable en un
                  clic.
                </p>
              </div>
              <div className="relative flex items-center justify-center md:order-1">
                <Image
                  src="https://static.wixstatic.com/media/5171cc_d60527cef7c34fd989e691b0e52a188c~mv2.png/v1/fill/w_1007,h_992,al_c,q_90,enc_avif,quality_auto/5171cc_d60527cef7c34fd989e691b0e52a188c~mv2.png"
                  alt="Suivi en temps réel"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative grid gap-10 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <Badge className="mb-2 w-fit bg-purple-500 hover:bg-purple-600">
                  Étape 2
                </Badge>
                <h2 className="mb-4 font-outfit text-2xl font-bold">
                  Suivi en temps réel
                </h2>
                <p className="text-muted-foreground">
                  Glib surveille votre itinéraire en continu, prévient en temps
                  réel les problèmes liés à la météo, les transports, et bien
                  plus encore. Vous êtes averti instantanément de tout
                  changement ou problème pouvant affecter vos activités, pour
                  que vous restiez toujours à jour et prêt à ajuster votre
                  voyage.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Suivi en temps réel"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center md:order-2">
                <Badge className="mb-2 w-fit bg-purple-500 hover:bg-purple-600">
                  Étape 3
                </Badge>
                <h2 className="mb-4 font-outfit text-2xl font-bold">
                  Solution alternative
                </h2>
                <p className="text-muted-foreground">
                  En cas de problème, Glib vous suggère des alternatives
                  adaptées ou vous permet de reprogrammer l'activité à un moment
                  plus adéquat pour assurer que votre voyage reste fluide et
                  agréable.
                </p>
              </div>
              <div className="relative flex items-center justify-center md:order-1">
                <Image
                  src="https://static.wixstatic.com/media/5171cc_d60527cef7c34fd989e691b0e52a188c~mv2.png/v1/fill/w_1007,h_992,al_c,q_90,enc_avif,quality_auto/5171cc_d60527cef7c34fd989e691b0e52a188c~mv2.png"
                  alt="Suivi en temps réel"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <p className="mb-6 text-xl font-medium">
            Que vous soyez un explorateur spontané ou un planificateur
            méticuleux, Glib s'adapte à votre style, vos préférences et aux
            conditions réelles pour garantir que chaque voyage soit unique !
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Télécharger l'application
          </Button>
        </div>

        <div className="mb-24">
          <h2 className="mb-8 text-center font-outfit text-3xl font-bold tracking-tighter">
            Élevez votre expérience de voyage
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-purple-500/10 p-3">
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">
                  Planifiez tout votre séjour en 1 min
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gagnez du temps avec notre assistant IA qui vous propose un
                  itinéraire personnalisé en fonction de vos préférences et de
                  la durée de votre séjour.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-purple-500/10 p-3">
                  <MapPin className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">
                  Voyages adaptés à vos envies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Notre algorithme apprend de vos préférences pour vous suggérer
                  des activités et des lieux qui correspondent parfaitement à
                  vos goûts.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-purple-500/10 p-3">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">
                  N'ayez plus peur des imprévus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Avec notre système d'alerte en temps réel et nos alternatives
                  intelligentes, vous êtes toujours préparé à faire face aux
                  changements de dernière minute.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-6 text-xl font-medium">
            Rejoignez la révolution du voyage et découvrez un monde d'avantages
            avec Glib
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Télécharger gratuitement
          </Button>
        </div>
      </div>
    </div>
  );
}
