"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-effect" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image
              src="/logo.svg"
              alt="Glib Logo"
              width={40}
              height={40}
              className="h-10 w-10 transition-all duration-300 hover:scale-110"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">Glib</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Accueil
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/a-propos"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            À propos
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/fonctionnalite"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Fonctionnalités
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/solution-professionnelle"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Solutions professionnelles
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <LanguageSelector /> */}
          <Button
            asChild
            variant="default"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90"
          >
            <Link href="/contact">Contact</Link>
          </Button>

          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Accueil
                </Link>
                <Link
                  href="/fonctionnalite"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Fonctionnalité
                </Link>
                <Link
                  href="/solution-professionnelle"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Solution professionnelle
                </Link>
                <Link
                  href="/a-propos"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  À propos
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>{" "}
              {/* Pour l’accessibilité */}
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Accueil
                </Link>
                <Link
                  href="/fonctionnalite"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Fonctionnalité
                </Link>
                <Link
                  href="/solution-professionnelle"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Solution professionnelle
                </Link>
                <Link
                  href="/a-propos"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  À propos
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
