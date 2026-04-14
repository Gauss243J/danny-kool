import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Danny Kool Suerte</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-600">À propos</a>
            <a href="#courses" className="hover:text-blue-600">Cours</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Professeur de langues polyglotte
            </h2>
            <p className="mb-6 text-lg">
              12 ans d’expérience dans l’enseignement du français, anglais, espagnol,
              portugais, allemand et plus encore.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
            >
              Réserver un cours
            </a>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Teaching"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">À propos</h3>

          <p className="mb-4">
            Je suis diplômé en génie civil de l’ULPGL et également formé en pédagogie générale.
            Passionné par les langues, j’ai développé une expertise dans l’enseignement et la formation linguistique.
          </p>

          <p className="mb-4">
            J’ai enseigné à la MONUSCO auprès de contingents internationaux (Uruguay, Guatemala),
            et formé des apprenants à travers plusieurs pays.
          </p>

          <p>
            Fondateur de <strong>INIL</strong> et <strong>PRIMERO DIOS</strong>,
            je promeus le multilinguisme et la communication interculturelle.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Learning"
              width={300}
              height={200}
              className="rounded-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Languages"
              width={300}
              height={200}
              className="rounded-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Teaching"
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Cours proposés
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold text-xl mb-4">Débutant</h4>
              <p>Apprendre les bases essentielles des langues.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold text-xl mb-4">Intermédiaire</h4>
              <p>Renforcer la communication et la pratique.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold text-xl mb-4">Avancé</h4>
              <p>Maîtrise professionnelle et perfectionnement.</p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="mb-4">
              Formats : en ligne, à domicile, en groupe ou individuel
            </p>
            <p>
              Langues : Français, Anglais, Espagnol, Portugais, Allemand, Swahili, Lingala
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>

          <p className="mb-4">📍 Kinshasa, RDC</p>
          <p className="mb-2">📞 097 379 1831</p>
          <p className="mb-2">💬 WhatsApp disponible</p>
          <p className="mb-6">📧 dannykoolsuerte@mail.com</p>

          <p className="mb-6">
            Disponible du lundi au samedi (8h – 20h)
          </p>

          <a
            href="https://wa.me/243973791831"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
          >
            Contacter sur WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© 2026 Danny Kool Suerte - Tous droits réservés</p>
      </footer>

    </main>
  );
}