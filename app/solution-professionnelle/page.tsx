import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users } from "lucide-react";

export default function ProfessionalSolutionPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <section className="mb-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Booster votre activité en rejoignant Glib
              </h1>
              <p className="mt-4 text-muted-foreground">
                Vous êtes un professionnel du tourisme ? Rejoignez-nous et
                augmentez votre visibilité en intégrant notre application.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact?tab=rejoindre">Commencer</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-purple-700/30 blur-3xl"></div>
              <Image
                src="/image.png"
                alt="Application Glib"
                width={300}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-12 text-center font-outfit text-3xl font-bold tracking-tighter">
            Pourquoi rejoindre GLIB
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Faible commission</h3>
                <p className="text-sm text-muted-foreground">
                  Nos commissions sont parmi les plus basses du marché, vous
                  permettant de maximiser vos revenus tout en bénéficiant d'une
                  visibilité accrue et d'un service premium.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">
                  Inscription Gratuite
                </h3>
                <p className="text-sm text-muted-foreground">
                  L'inscription sur Glib est sans engagement. Vous ne payez
                  qu'une fois par mois, et uniquement en cas de réservations
                  effectuées, vous offrant ainsi une tranquillité d'esprit
                  totale.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-gradient-to-br from-purple-950/30 to-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Visibilité ciblée</h3>
                <p className="text-sm text-muted-foreground">
                  Nous mettons en avant votre établissement auprès de la
                  clientèle la plus susceptible de réserver vos services,
                  augmentant ainsi votre visibilité de manière pertinente et
                  efficace.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-24 text-center">
          <p className="mb-6 text-xl font-medium">
            Rejoignez-nous dès aujourd'hui et profitez d'une solution qui met
            votre succès au cœur de nos priorités.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact?tab=rejoindre">Contactez-nous</Link>
          </Button>
        </section>

        <section className="mb-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-outfit text-3xl font-bold tracking-tighter">
                Avec Glib, booster vos réseaux sociaux grâce aux étudiants
              </h2>
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-medium">
                  Pourquoi des étudiants ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-purple-500 hover:bg-purple-600">
                      1
                    </Badge>
                    <div>
                      <p className="font-medium">Authenticité</p>
                      <p className="text-sm text-muted-foreground">
                        Les témoignages d'étudiants sont réels et crédibles, ce
                        qui crée un lien de confiance avec votre audience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-purple-500 hover:bg-purple-600">
                      2
                    </Badge>
                    <div>
                      <p className="font-medium">Engagement</p>
                      <p className="text-sm text-muted-foreground">
                        Les vidéos authentiques sont plus susceptibles d'être
                        partagées, commentées et aimées, augmentant ainsi la
                        portée de votre message.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-purple-500 hover:bg-purple-600">
                      3
                    </Badge>
                    <div>
                      <p className="font-medium">Responsabilité Sociale</p>
                      <p className="text-sm text-muted-foreground">
                        En aidant des étudiants à se restaurer, vous montrez que
                        votre restaurant est soucieux de sa communauté, ce qui
                        renforce votre image de marque.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="mb-4 text-xl font-medium">
                    Rejoignez l'initiative
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Inscrivez-vous dès maintenant pour faire partie de ce
                    programme unique. Ensemble, faisons de votre restaurant une
                    destination incontournable tout en soutenant une cause
                    sociale essentielle.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative max-w-md overflow-hidden rounded-3xl bg-purple-500/20 p-8">
                <div className="overflow-hidden rounded-2xl">
                  <video
                    controls
                    className="h-auto w-full rounded-2xl"
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src="https://video.wixstatic.com/video/5171cc_974ed2babb6848908354fd0cfb4e7323/720p/mp4/file.mp4"
                      type="video/mp4"
                    />
                    <p className="text-center p-4 bg-gray-100 rounded-lg">
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </p>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-12 text-center font-outfit text-3xl font-bold tracking-tighter">
            Nos partenaires
          </h2>
          <div className="text-center">
            <p className="mb-6 text-2xl font-bold text-purple-500">
              +101 professionnels nous ont déjà rejoints
            </p>
            <p className="mb-8 text-muted-foreground">
              Soyez le prochain, en téléchargeant Glib sur :
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="w-full justify-start gap-2 sm:w-auto">
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
              <Button className="w-full justify-start gap-2 sm:w-auto">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
