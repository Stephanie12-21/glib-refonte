"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Glib Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </motion.div>
              <span className="text-xl font-bold tracking-tight">Glib</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Contact@glib.fr
            </p>
            <p className="text-sm text-muted-foreground">+33 7 68 03 03 91</p>
            <div className="mt-4 flex gap-3">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </motion.div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Pages</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/fonctionnalite"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/solution-professionnelle"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Solutions professionnelles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Contrats</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/cgv"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Téléchargez l'application</h3>
            <div className="mt-4 flex flex-col gap-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="justify-start gap-2 text-xs w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M3 11h18" />
                    <path d="M18 16.5v3.5" />
                    <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">Télécharger sur</span>
                    <span>l'App Store</span>
                  </div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="justify-start gap-2 text-xs w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">Disponible sur</span>
                    <span>Google Play</span>
                  </div>
                </Button>
              </motion.div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Application disponible prochainement !
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex items-center justify-center space-x-8 overflow-x-auto px-4 py-4 md:px-0">
            <Image
              src="https://static.wixstatic.com/media/5171cc_aab9e67db8264ff8bbaa98bdd8068390~mv2.png/v1/fill/w_242,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5171cc_aab9e67db8264ff8bbaa98bdd8068390~mv2.png"
              alt="France Active"
              width={121}
              height={28}
              className="h-10 w-auto opacity-100 transition-opacity"
            />
            <Image
              src="https://static.wixstatic.com/media/5171cc_93581e207c84435ba2c43a514ac8d3e0~mv2.png/v1/fill/w_182,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Clip%20path%20group-2.png"
              alt="Réseau Entreprendre"
              width={91}
              height={35}
              className="h-10 w-auto opacity-100 transition-opacity"
            />
            <Image
              src="https://static.wixstatic.com/media/5171cc_98359a491f80442e98f0f78f0dc2dc69~mv2.png/v1/fill/w_190,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5171cc_98359a491f80442e98f0f78f0dc2dc69~mv2.png"
              alt="CCI Paris"
              width={95}
              height={31}
              className="h-10 w-auto opacity-100 transition-opacity"
            />
            <Image
              src="https://static.wixstatic.com/media/5171cc_965d208373764128a8967c6bbcf7138a~mv2.png/v1/fill/w_64,h_118,al_c,lg_1,q_85,enc_avif,quality_auto/5171cc_965d208373764128a8967c6bbcf7138a~mv2.png"
              alt="Paris Tech"
              width={43}
              height={80}
              className="h-20 w-auto opacity-100 transition-opacity my-auto"
            />
            <div className="h-10 w-auto opacity-100  transition-opacity">
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="-0.053 0.065 1700.757 1700.757"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.053 0.065 1700.757 1700.757"
                height="40"
                width="40"
                data-type="color"
                role="img"
                aria-label="Logo"
              >
                <g>
                  <defs>
                    <clipPath id="b3f5e9be-8d2b-422a-945a-7f3262e6289f_comp-m0grsihv">
                      <path d="M0 1417.3h1417.3V0H0z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#b3f5e9be-8d2b-422a-945a-7f3262e6289f_comp-m0grsihv)"
                    transform="matrix(1.3333 0 0 -1.3333 -110.45 1795.3)"
                  >
                    <path
                      fill="#24572d"
                      d="M1358.4 708.66c0-352.24-285.55-637.8-637.8-637.8-352.24 0-637.8 285.55-637.8 637.8s285.55 637.8 637.8 637.8c352.24 0 637.8-285.55 637.8-637.8"
                      data-color="1"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="m544.15 752.48 23.082 124.38 23.082-124.38zm55.382-64.988h38.84l-52.712 252.72h-36.856l-52.712-252.72h38.84c.132 17.728 14.541 32.059 32.3 32.059s32.169-14.331 32.3-32.059"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M1062.6 793.73c-9.613 5.825-16.578 10.886-20.928 15.513-4.077 4.354-6.25 9.525-6.25 15.241 0 11.36 10.049 15.513 17.394 15.513 16.583 0 22.08-15.175 24.54-20.273l29.003 11.564c-2.424 6.081-12.004 38.918-54.358 38.918-24.267 0-52.456-14.458-52.456-47.627 0-20.413 12.774-38.647 38.594-54.432 10.872-6.804 18.754-12.248 23.375-16.874s6.794-10.07 6.794-16.329c0-12.794-9.961-18.508-19.297-18.508-19.352 0-27.01 21.407-28.888 25.989l-29.003-11.564s11.83-44.634 58.163-44.634c15.764 0 29.081 4.627 39.409 13.88 10.329 8.981 15.493 21.229 15.493 37.014 0 21.885-12.083 38.732-41.585 56.609"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M911.31 899.78c12.562 0 22.745 10.183 22.745 22.745 0 12.561-10.183 22.744-22.745 22.744s-22.745-10.183-22.745-22.744 10.183-22.745 22.745-22.745"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M892.23 687.49h38.161v113.22H892.23z"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M739.71 837.61h16.105c15.391 0 27.868-9.996 27.868-27.925s-12.477-27.926-27.868-27.926H739.71zm0-84.17h19.992l26.887-65.945h40.562l-32.165 74.856c15.784 9.393 26.118 26.004 26.118 48.843 0 37.079-27.231 57.753-60.823 57.753h-56.204v-181.45h35.633z"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M374.22 845.54h16.621c17.037 0 30.848-11.084 30.848-30.963s-13.811-30.963-30.848-30.963H374.22zm0-94.013h19.359c36.658 0 66.376 22.599 66.376 63.132s-29.718 63.133-66.376 63.133h-57.456v-190.3h38.097z"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M406.15 608.01c0-7.518 4.945-15.896 10.776-15.896 7.326 0 10.851 5.672 10.851 13.256 0 9.582-6.048 16.615-12.029 16.615-5.898 0-9.598-7.96-9.598-13.975"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M358.4 433.59c-8.074 0-12.43 5.367-12.43 11.264 0 16.866 28.343 37.778 60.856 51.916-11.126-40.145-34.501-63.18-48.426-63.18m135.88 132.4c1.496 0 2.907-.726 2.907-2.046 0-9.005-21.601-21.836-36.295-29.345 8.362 19.154 24.459 31.391 33.388 31.391m38.943-66.576c-1.904 0-29.562-13.561-48.941-13.561-14.026 0-28.769 6.119-28.769 23.281 0 2.418.15 4.765.409 7.079 25.335 11.235 53.236 26.948 53.236 42.143 0 12.672-9.582 22.955-19.188 22.955-20.165 0-40.012-28.285-45.768-54.314-5.914-2.381-12.212-4.753-18.686-7.175.451 5.517.693 10.997.693 16.381 0 19.404-1.629 39.69-10.358 39.69-2.347 0-4.101-1.691-4.101-4.79 0-2.172 1.336-14.109 1.336-26.597 0-10.78-.877-20.892-2.414-30.285-37.642-14.41-75.808-31.856-75.808-62.658 0-16.899 10.758-34.859 24.817-34.859 34.46 0 56.429 41.934 63.78 86.561a582 582 0 0 1 19.154 7.318c1.17-20.424 18.077-41.048 41.591-41.048 21.836 0 52.008 13.891 52.008 26.446 0 2.995-1.077 3.433-2.991 3.433"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M669.39 571.46c-6.056 0-88.888-5.083-88.888-16.001 0-7.505 3.626-13.039 6.875-13.039 3.534 0 19.371 4.761 34.449 7.046-6.148-20.111-16.765-56.089-16.765-71.956 0-9.811 4.369-21.034 9.448-21.034 3.04 0 5.02 2.352 5.02 7.143 0 4.786.727 13.311 2.748 21.697 1.061 4.365 12.129 46.261 17.593 65.887 11.335.81 22.295 1.387 26.68 1.387 10.701 0 12.154.568 12.154 3.909 0 7.092-4.227 14.961-9.314 14.961"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M696.05 542.89c3.559 4.052 24.609 28.878 24.609 39.345 0 4.193-5.02 10.399-9.105 10.399-2.481 0-5.797-6.352-7.969-9.539-2.164-3.179-23.865-36.742-23.865-42.101 0-3.308 2.146-7.251 4.452-7.251 2.021 0 7.367 4.01 11.878 9.147"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M982.78 494.57a32 32 0 0 0-.209 3.6c0 17.626 12.99 29.809 22.028 29.809 6.173 0 8.32-2.953 8.32-5.91 0-7.919-14.543-20.445-30.139-27.499m-279.67-25.403c-3.216 0-4.294 2.548-4.294 7.648 0 27.328 41.024 84.736 71.58 84.736 5.505 0 11.277-4.031 11.277-11.277 0-22.27-60.161-81.107-78.563-81.107m397.64 15.571c-3.676 0-30.607-21.514-70.999-22.266-17.075-.313-32.227 5.78-40.514 16.339 18.018 7.71 35.234 21.644 35.234 36.818 0 14.083-9.322 28.467-25.327 28.467-15.303 0-30.273-20.782-30.273-39.753 0-4.327.66-9.067 2.005-13.908-3.032-.718-5.98-1.132-8.721-1.132-13.64 0-19.036 9.222-18.962 17.463.034 4.418.009 7.685-1.01 10.374-1.913 5.029-5.171 7.347-7.685 7.347-5.004 0-15.178-12.788-20.148-15.307 1.077 3.491 1.879 5.371 1.879 10.742 0 6.37-3.867 11.816-9.397 11.816-3.225 0-5.129-3.659-6.474-5.806-1.345-2.146-14.577-17.525-19.263-25.598.167 1.917 3.283 20.478 3.283 25.92 0 6.896-3.316 13.357-9.28 13.357-7.042 0-5.38-7.969-13.942-17.032-3.091-3.267-24.676-28.423-29.68-28.423-1.203 0-.802 2.235-.802 4.24 0 2 1.571 18.239 4.562 24.642.952 2.046 3.274 7.602 3.274 9.602 0 5.476-4.21 12.413-10.058 12.413-4.185 0-4.068-4.168-5.596-7.28-3.851-7.844-34.8-45.488-45.275-51.101-.109 1.971.175 7.012.601 9.218 8.487 8.395 16.656 32.49 16.656 43.374 0 18.624-10.85 36.053-30.982 36.053-33.404 0-77.017-57.922-77.017-92.083 0-12.613 5.839-29.282 21.735-29.282 16.164 0 36.128 20.043 47.497 32.394 1.888-.313 6.423.689 8.596 1.637.684-7.192 7.125-18.465 14.359-18.465 10.475 0 29.512 26.973 37.431 33.814-.2-15.662 6.875-26.421 16.348-26.421 10.775 0 25.076 18.57 33.538 27.938.1-10.672 3.325-26.368 12.388-26.368 8.495 0 15.003 14.247 19.046 19.91-1.621-8.165 4.218-15.094 9.355-15.094 9.306 0 21.126 19 24.2 19 1.153 0 6.674-29.747 31.767-29.747 4.336 0 9.348.79 14.602 2.226 9.473-15.549 26.806-28.71 53.211-28.71 40.559 0 73.305 22.291 73.02 32.048-.125 4.272-1.027 6.624-3.182 6.624"
                      data-color="2"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M841.69 561.47c7.359 0 11.31 4.248 11.31 7.593 0 8.842-9.088 22.053-15.111 22.053-5.304 0-9.89-6.089-9.89-10.893 0-8.023 9.071-18.753 13.691-18.753"
                      data-color="2"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-base text-muted-foreground">
          © 2025 Glib refonte non-officielle réalisée par{" "}
          <Link
            href="https://stephanie-maminiaina.vercel.app/"
            className="text-[#914de6]"
          >
            Stéphanie MAMINIAINA
          </Link>
        </div>
      </div>
    </footer>
  );
}
