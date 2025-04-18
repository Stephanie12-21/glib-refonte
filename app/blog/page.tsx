"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Comment bien se préparer à un voyage à Paris",
    excerpt:
      "Découvrez nos conseils pour préparer votre séjour dans la capitale française",
    image:
      "https://static.wixstatic.com/media/nsplsh_16f4a7c70da34c53956af557365411ce~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_16f4a7c70da34c53956af557365411ce~mv2.webp",
    category: "Conseils",
    date: "2 avril 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Les meilleures rooftops de Paris",
    excerpt: "Notre sélection des plus beaux toits-terrasses de la capitale",
    image:
      "https://static.wixstatic.com/media/nsplsh_54616a476d5f2d76493349~mv2.jpg/v1/fill/w_2056,h_1544,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_54616a476d5f2d76493349~mv2.jpg",
    category: "Découverte",
    date: "28 mars 2025",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Les quartiers historiques de Paris et leur histoire",
    excerpt:
      "Plongez dans l'histoire fascinante des quartiers emblématiques de Paris",
    image:
      "https://static.wixstatic.com/media/nsplsh_554f303267415733633063~mv2_d_4096_2731_s_4_2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_554f303267415733633063~mv2_d_4096_2731_s_4_2.webp",
    category: "Culture",
    date: "20 mars 2025",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "Les boutiques insolites du Marais à Paris",
    excerpt: "Découvrez les adresses cachées et originales du quartier branché",
    image:
      "https://static.wixstatic.com/media/nsplsh_7642357174743858344e41~mv2_d_8688_5792_s_4_2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_7642357174743858344e41~mv2_d_8688_5792_s_4_2.webp",
    category: "Shopping",
    date: "15 mars 2025",
    readTime: "3 min",
  },
  {
    id: 5,
    title: "Comment explorer Paris en famille",
    excerpt: "Guide pratique pour visiter la capitale avec des enfants",
    image:
      "https://static.wixstatic.com/media/nsplsh_376f337373666976467267~mv2_d_5584_3713_s_4_2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_376f337373666976467267~mv2_d_5584_3713_s_4_2.webp",
    category: "Famille",
    date: "10 mars 2025",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Les meilleures vues de Paris",
    excerpt: "Notre sélection des plus beaux panoramas sur la ville lumière",
    image:
      "https://static.wixstatic.com/media/nsplsh_73000dacf1ab46528c53f55dcede09f1~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_73000dacf1ab46528c53f55dcede09f1~mv2.webp",
    category: "Découverte",
    date: "5 mars 2025",
    readTime: "4 min",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="font-outfit text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Découvrez nos derniers articles, conseils et astuces pour voyager en
            toute sérénité
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/50"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 h-7 -translate-y-1/2 px-2"
                onClick={() => setSearchTerm("")}
              >
                Effacer
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Card className="glass-card overflow-hidden border-none h-full hover-lift">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full border-primary text-xs text-primary"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="mb-2 line-clamp-2 text-xl font-semibold">
                      {post.title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Lire l'article
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime} de lecture
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                Aucun article ne correspond à votre recherche.
              </p>
              <Button
                variant="link"
                onClick={() => setSearchTerm("")}
                className="mt-2 text-primary"
              >
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
