"use client";

import Image from "next/image";
import {
  GlobeAltIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  SparklesIcon,
  BookOpenIcon,
  LanguageIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from 'react';



export default function Home() {
  const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/TON_PROFIL_ICI",
    color: "hover:bg-blue-600 hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.75l.42-3.2H13.5V8.6c0-.92.26-1.55 1.6-1.55h1.7V4.2c-.29-.04-1.29-.12-2.46-.12-2.44 0-4.11 1.49-4.11 4.21v2.39H7.5v3.2h2.73V22h3.27Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TON_PROFIL_ICI",
    color: "hover:bg-red-600 hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M21.7 8.2s-.2-1.48-.82-2.13c-.78-.82-1.66-.82-2.06-.87C16 5 12 5 12 5s-4 0-6.82.2c-.4.05-1.28.05-2.06.87C2.5 6.72 2.3 8.2 2.3 8.2S2 9.94 2 11.67v.66C2 14.06 2.3 15.8 2.3 15.8s.2 1.48.82 2.13c.78.82 1.8.79 2.25.88 1.6.15 6.63.19 6.63.19s4 0 6.82-.2c.4-.05 1.28-.05 2.06-.87.62-.65.82-2.13.82-2.13s.3-1.74.3-3.47v-.66c0-1.73-.3-3.47-.3-3.47ZM9.95 14.7V9.6l5.1 2.55-5.1 2.55Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/TON_PROFIL_ICI",
    color: "hover:bg-pink-600 hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 2.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm5.75-2.05a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z" />
      </svg>
    ),
  },
];

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Langues", href: "#languages" },
    { name: "Cours", href: "#courses" },
    { name: "Avis", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <main className="bg-[#0b1220] text-white font-[Poppins] overflow-x-hidden">

      {/* NAV */}
<nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl tracking-wide">Danny Kool Suerte</h1>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition">
                {link.name}
              </a>
            ))}
          </div>

          {/* BOUTON HAMBURGER (Visible uniquement sur mobile) */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        <div className={`md:hidden bg-black/90 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 border-b border-white/10' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 px-6 py-6 text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Ferme le menu après clic
                className="text-white/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
<section
  id="home"
  className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
>
  <img
  src="/images/Profil/19.JPG"
  alt="Danny Kool Suerte"
  /* Ajout de object-right pour cadrer sur la personne en mode mobile */
  className="absolute inset-0 h-full w-full object-cover object-left -scale-x-100 z-0"
/>
  <div className="absolute inset-0 bg-slate-950/35" />

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
    <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
          Professeur de langues polyglotte
        </div>

        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Apprenez les langues avec une méthode claire, vivante et humaine.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
          Français, anglais, espagnol, portugais, allemand, swahili et lingala.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Réserver un cours
          </a>
          <a
            href="#languages"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Voir les langues
          </a>
        </div>
      </div>


    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-20 bg-white [clip-path:polygon(0_60%,100%_0,100%_100%,0_100%)]" />
</section>

      <section className="overflow-hidden bg-white py-10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-scroll items-center gap-12 whitespace-nowrap">
        {[
          "/images/logo/IMG-20260415-WA0034.jpg",
          "/images/logo/IMG-20260415-WA0037.jpg",
          "/images/logo/IMG-20260415-WA0038.jpg",
          "/images/logo/IMG-20260415-WA0039.jpg",
          "/images/logo/IMG-20260415-WA0040.jpg",
          "/images/logo/IMG-20260415-WA0041.jpg",
          "/images/logo/IMG-20260415-WA0042.jpg",
          "/images/logo/IMG-20260415-WA0043.jpg",
           "/images/logo/IMG-20260415-WA0044.jpg",

        ].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i + 1}`}
            className="h-15 w-auto opacity-70 grayscale-65 transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}

        {[
          "/images/logo/IMG-20260415-WA0034.jpg",
          "/images/logo/IMG-20260415-WA0037.jpg",
          "/images/logo/IMG-20260415-WA0038.jpg",
          "/images/logo/IMG-20260415-WA0039.jpg",
          "/images/logo/IMG-20260415-WA0040.jpg",
          "/images/logo/IMG-20260415-WA0041.jpg",
          "/images/logo/IMG-20260415-WA0042.jpg",
          "/images/logo/IMG-20260415-WA0043.jpg",
           "/images/logo/IMG-20260415-WA0044.jpg",
        ].map((logo, i) => (
          <img
            key={`dup-${i}`}
            src={logo}
            alt={`Logo duplicate ${i + 1}`}
            className="h-15 w-auto opacity-70 grayscale-65 transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">À propos</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <AcademicCapIcon className="w-10 h-10 text-blue-400" />
              <h3 className="mt-4 font-semibold">Expertise académique</h3>
              <p className="text-white/60 text-sm mt-2">
                Formation en pédagogie et génie civil, expérience terrain internationale.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <UserGroupIcon className="w-10 h-10 text-purple-400" />
              <h3 className="mt-4 font-semibold">Expérience internationale</h3>
              <p className="text-white/60 text-sm mt-2">
                Formation de contingents militaires et apprenants dans plusieurs pays.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <SparklesIcon className="w-10 h-10 text-pink-400" />
              <h3 className="mt-4 font-semibold">Résultats rapides</h3>
              <p className="text-white/60 text-sm mt-2">
                Méthode pratique axée sur la conversation réelle.
              </p>
            </div>

          </div>
        </div>
      </section>
<section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[45vh] sm:h-[45vh] md:h-[45vh] overflow-hidden">

  <div className="grid grid-cols-1 sm:grid-cols-3 h-full w-full">

    {[
      {
        img: "/images/Gallery/IMG_0518.jpg",
        title: "98%",
        desc: "Taux de satisfaction",
      },
      {
        img: "/images/Gallery/5.jpg",
        title: "500+",
        desc: "Apprenants formés",
      },
      {
        img: "images/Gallery/IMG_0368.jpg",
        title: "6+",
        desc: "Pays touchés",
      },
    ].map((item, i) => (
      <div key={i} className="relative overflow-hidden group">

        {/* IMAGE */}
        <img
          src={item.img}
          alt={`Résultat ${i + 1}`}
          className="h-full w-full object-cover scale-105 transition duration-700 group-hover:scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

        {/* CENTER TEXT (PAR IMAGE) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fadeUp">
            {item.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/80 animate-fadeUp">
            {item.desc}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>

      {/* LANGUAGES */}
      <section id="languages" className="py-24 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Langues enseignées</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Français" },
              { name: "Anglais" },
              { name: "Espagnol" },
              { name: "Portugais" },
              { name: "Allemand" },
              { name: "Swahili" },
            ].map((lang, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="relative bg-[#fdf6e3] text-black p-6 rounded-[20px] shadow-xl border-[1px] border-[#e8dcc0] font-[cursive]"
                style={{
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="absolute -top-3 left-4 w-10 h-6 bg-yellow-200 rotate-[-10deg] shadow-md"></div>

                <h3 className="text-xl font-bold">{lang.name}</h3>
                <p className="text-sm mt-2">
                  Apprentissage interactif basé sur la communication réelle.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* SERVICES */}
      <section id="courses" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Cours proposés
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <AcademicCapIcon className="w-9 h-9 text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold">Débutant</h3>
              <p className="text-white/65 text-sm mt-2">
                Apprendre les bases essentielles avec simplicité.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <ChatBubbleBottomCenterTextIcon className="w-9 h-9 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold">Intermédiaire</h3>
              <p className="text-white/65 text-sm mt-2">
                Renforcer l’expression et la compréhension.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <GlobeAltIcon className="w-9 h-9 text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold">Avancé</h3>
              <p className="text-white/65 text-sm mt-2">
                Perfectionner la fluidité et la précision.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <AcademicCapIcon className="w-9 h-9 text-pink-400" />
              <h3 className="mt-4 text-xl font-semibold">Examens & entretiens</h3>
              <p className="text-white/65 text-sm mt-2">
                Préparation ciblée selon l’objectif demandé.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

<section className="bg-slate-950 py-24 transition-colors duration-500">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl ring-1 ring-white/10">
          <img
            src="/images/Profil/IMG-20260415-WA0005.jpg"
            alt="Danny Kool Suerte"
            className="h-[420px] w-full object-cover object-top sm:h-[520px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
            <p className="text-sm font-medium tracking-[0.3em] text-blue-200 uppercase">
              Danny Kool Suerte
            </p>
            <p className="mt-2 text-lg font-semibold sm:text-xl">
              Professeur de langues · Formateur · Polyglotte
            </p>
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          À propos du formateur
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Une approche humaine, claire et orientée résultats
        </h2>

        <div className="mx-auto mt-6 h-[2px] w-24 bg-blue-500 lg:mx-0" />

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          J’accompagne chaque apprenant avec une méthode personnalisée qui met
          l’accent sur la pratique, la confiance et la progression réelle.
          Apprendre une langue devient plus simple quand l’enseignement est
          vivant, structuré et adapté à vos objectifs.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Mon objectif est de vous aider à parler avec assurance, comprendre
          plus vite et progresser avec plaisir, quel que soit votre niveau.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          {["12+ ans d’expérience", "7 langues enseignées", "Cours personnalisés"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



      {/* MÉTHODE */}
      <section id="methodology" className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Méthode d’enseignement
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <BookOpenIcon className="w-9 h-9 text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold">Écoute</h3>
              <p className="text-white/65 text-sm mt-2">
                Comprendre d’abord le besoin de l’apprenant.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <LanguageIcon className="w-9 h-9 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold">Pratique</h3>
              <p className="text-white/65 text-sm mt-2">
                Exercices utiles et situations concrètes.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <AcademicCapIcon className="w-9 h-9 text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold">Correction</h3>
              <p className="text-white/65 text-sm mt-2">
                Corriger avec précision et douceur.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <SparklesIcon className="w-9 h-9 text-pink-400" />
              <h3 className="mt-4 text-xl font-semibold">Confiance</h3>
              <p className="text-white/65 text-sm mt-2">
                Créer un cadre rassurant pour apprendre.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
<section
  id="gallery"
  className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-black py-2"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-0">

    {[
      "/images/Gallery/IMG-20260415-WA0014.jpg",
      "/images/Gallery/IMG_0116.jpg",
      "/images/Gallery/IMG_8955.jpg",
      "/images/Gallery/IMG-20260415-WA0011.jpg",
      "/images/Gallery/IMG_5521.jpg",
      "/images/Gallery/IMG_9096.jpg",
    ].map((img, i) => (
      <div
        key={i}
        className="relative overflow-hidden cursor-pointer group"
      >
        <img
          src={img}
          alt={`Galerie ${i + 1}`}
          className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* overlay hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
      </div>
    ))}
  </div>
</section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Témoignages
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                  alt="Apprenant, Goma"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Apprenant, Goma</p>
                  <p className="text-xs text-white/50">Cours de français</p>
                </div>
              </div>
              <p className="mt-5 text-white/70 italic leading-7">
                “Très professionnel, méthode claire et résultats visibles rapidement.”
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                  alt="Étudiante, Kinshasa"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Étudiante, Kinshasa</p>
                  <p className="text-xs text-white/50">Cours d’anglais</p>
                </div>
              </div>
              <p className="mt-5 text-white/70 italic leading-7">
                “Les cours sont bien organisés et motivants.”
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Professionnel, à distance"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Professionnel, à distance</p>
                  <p className="text-xs text-white/50">Espagnol et communication</p>
                </div>
              </div>
              <p className="mt-5 text-white/70 italic leading-7">
                “Excellent suivi et excellente pédagogie.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    
{/* CONTACT */}
<section id="contact" className="py-24 px-6">
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
    <div>
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="mt-4 max-w-xl leading-8 text-white/70">
        Disponible du lundi au samedi de 8h00 à 20h00. Dimanche sur rendez-vous.
      </p>

      <div className="mt-8 space-y-3 text-white/80">
        <p className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5" />
          097 379 1831
        </p>
        <p className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5" />
          dannykoolsuerte@mail.com
        </p>
        <p className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5" />
          Kinshasa, RDC
        </p>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Réseaux sociaux
        </p>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition duration-300 hover:scale-105 ${item.color}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Nom complet"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
        <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
          <option>Choisir une langue</option>
          <option>Français</option>
          <option>Anglais</option>
          <option>Espagnol</option>
          <option>Portugais</option>
          <option>Allemand</option>
          <option>Swahili</option>
          <option>Lingala</option>
        </select>
        <textarea
          rows={5}
          placeholder="Votre message"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Envoyer la demande
        </button>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-center text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Danny Kool Suerte. Tous droits réservés.</p>
          <div className="flex justify-center gap-4">
            <a href="#about">À propos</a>
            <a href="#services">Cours</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}