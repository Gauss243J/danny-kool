"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  Bars3Icon,
  BookOpenIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  LanguageIcon,
  PhoneIcon,
  SparklesIcon,
  UserGroupIcon,
  UsersIcon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const languages = [
  { code: "FR", name: "Français", color: "from-blue-500 to-cyan-500" },
  { code: "EN", name: "Anglais", color: "from-sky-500 to-indigo-500" },
  { code: "ES", name: "Espagnol", color: "from-rose-500 to-orange-500" },
  { code: "PT", name: "Portugais", color: "from-emerald-500 to-teal-500" },
  { code: "DE", name: "Allemand", color: "from-violet-500 to-fuchsia-500" },
  { code: "SW", name: "Swahili", color: "from-amber-500 to-orange-500" },
  { code: "LN", name: "Lingala", color: "from-slate-700 to-slate-900" },
];

const services = [
  {
    icon: AcademicCapIcon,
    title: "Cours structurés",
    text: "Des parcours clairs pour débutants, intermédiaires et avancés.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Conversation réelle",
    text: "Des séances orientées vers la parole, l’écoute et la compréhension.",
  },
  {
    icon: GlobeAltIcon,
    title: "En ligne ou présentiel",
    text: "Une organisation flexible selon la disponibilité de l’apprenant.",
  },
  {
    icon: UserGroupIcon,
    title: "Cours privés ou en groupe",
    text: "Des formats adaptés au rythme, au niveau et aux objectifs.",
  },
];

const methodology = [
  {
    icon: BookOpenIcon,
    title: "Écoute",
    desc: "Comprendre d’abord le besoin de l’apprenant.",
  },
  {
    icon: LanguageIcon,
    title: "Pratique",
    desc: "Exercices utiles et situations concrètes.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Correction",
    desc: "Corriger avec précision et douceur.",
  },
  {
    icon: SparklesIcon,
    title: "Confiance",
    desc: "Créer un cadre rassurant pour apprendre.",
  },
];

const testimonials = [
  {
    name: "Apprenant, Goma",
    role: "Cours de français",
    text: "Très professionnel, méthode claire et résultats visibles rapidement.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Étudiante, Kinshasa",
    role: "Cours d’anglais",
    text: "Les cours sont bien organisés et motivants.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Professionnel, à distance",
    role: "Espagnol et communication",
    text: "Excellent suivi et excellente pédagogie.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

const stats = [
  { label: "Années d’expérience", value: "12+" },
  { label: "Langues enseignées", value: "7" },
  { label: "Formats", value: "4" },
  { label: "Portée", value: "Internationale" },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Cours en groupe",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Salle de formation",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80",
    alt: "Apprentissage linguistique",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-base font-bold tracking-tight text-slate-900 sm:text-lg"
          >
            Danny Kool Suerte
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              À propos
            </a>
            <a href="#languages" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Langues
            </a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Cours
            </a>
            <a href="#methodology" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Méthode
            </a>
            <a href="#gallery" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Galerie
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Témoignages
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/243973791831"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              <PhoneIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {[
                ["À propos", "#about"],
                ["Langues", "#languages"],
                ["Cours", "#services"],
                ["Méthode", "#methodology"],
                ["Galerie", "#gallery"],
                ["Témoignages", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#ffffff)]"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <CheckBadgeIcon className="h-4 w-4" />
              Professeur de langues polyglotte
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Apprenez les langues avec une méthode élégante, claire et vivante.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Français, anglais, espagnol, portugais, allemand, swahili et lingala.
              Une présentation professionnelle pour un service de formation sérieux et accessible.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Réserver un cours
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#languages"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voir les langues
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80"
                alt="Portrait du professeur"
                className="h-[440px] w-full object-cover object-top"
              />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                Photo de présentation
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] bg-slate-900/80 p-5 text-white backdrop-blur">
                <p className="text-sm font-medium text-slate-200">Enseignement multilingue</p>
                <p className="mt-1 text-lg font-semibold">
                  Une présence professionnelle et rassurante dès le premier regard.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-800 bg-slate-950 text-white shadow-2xl overflow-hidden">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
                  À propos
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Une expertise académique et pratique
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Professeur de langues avec plus de 12 ans d’expérience dans l’enseignement du français,
                  de l’anglais, de l’espagnol, du portugais, de l’allemand, du swahili et du lingala.
                  Une approche claire, humaine et orientée vers la progression réelle.
                </p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <BookOpenIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Méthode pratique</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Apprentissage basé sur la conversation, les exemples concrets et la vie réelle.
                  </p>
                </div>

                <div className="sm:mt-10 rounded-[1.75rem] bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <UsersIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Tous niveaux</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Débutant, intermédiaire et avancé avec un suivi adapté à chaque apprenant.
                  </p>
                </div>

                <div className="sm:col-span-2 rounded-[1.75rem] bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Approche interactive</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Cours dynamiques, personnalisés et centrés sur la communication réelle pour aider
                    l’apprenant à parler avec confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Langues enseignées"
            title="Des cartes claires pour présenter chaque langue"
            subtitle="Chaque carte reste courte, lisible et cohérente avec un site de formation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {languages.map((lang, index) => (
              <motion.article
                key={lang.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className={`h-2 bg-gradient-to-r ${lang.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${lang.color} text-sm font-bold text-white shadow`}
                    >
                      {lang.code}
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Langue
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{lang.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Formation, pratique et accompagnement pour gagner en aisance.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#eff6ff,_#f8fafc,_#ecfeff)] px-6 py-12 sm:px-10 lg:px-12"
            style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}
          >
            <SectionTitle
              eyebrow="Cours proposés"
              title="Des formats pensés pour progresser vite"
              subtitle="Un accompagnement adapté aux objectifs, au niveau et à la disponibilité de chaque apprenant."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="methodology" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Méthode"
            title="Une méthode simple, humaine et structurée"
            subtitle="Apprendre avec confiance passe par une méthode claire et des objectifs visibles."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Galerie"
            title="Des images pour illustrer l’univers de la formation"
            subtitle="La galerie donne un aspect plus vivant et professionnel au site vitrine."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[2rem] shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-72 w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
            Résultats
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Un suivi sérieux et des progrès visibles
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Taux de satisfaction", value: "98%" },
              { label: "Apprenants formés", value: "500+" },
              { label: "Pays touchés", value: "6+" },
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Témoignages"
            title="Ce que disent les apprenants"
            subtitle="Les retours d’expérience renforcent la confiance et montrent la qualité du suivi."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-700">“{item.text}”</p>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Réservez votre cours maintenant
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Disponible du lundi au samedi de 8h00 à 20h00. Dimanche sur rendez-vous.
            </p>

            <div className="mt-8 space-y-3 text-slate-200">
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                097 379 1831
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5" />
                dannykoolsuerte@mail.com
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl"
          >
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
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-center text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p>© 2026 Danny Kool Suerte. Tous droits réservés.</p>
          <div className="flex justify-center gap-4">
            <a href="#about" className="hover:text-slate-900">
              À propos
            </a>
            <a href="#services" className="hover:text-slate-900">
              Cours
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}