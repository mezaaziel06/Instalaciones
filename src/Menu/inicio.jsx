import React from 'react';
import { FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Carousel from './carousel';

// Importar las imágenes locales
import imagen1 from './../assets/images/imagen1.jpg';
import imagen2 from './../assets/images/imagen2.jpeg';
import elevador from './../assets/images/elevador.jpg';
import imagen8 from './../assets/images/imagen8.jpg';  // Nueva imagen para la sección de bienvenida

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y descripción */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Instalaciones XYZ</h2>
            <p>PRODUCTOS Y SERVICIOS</p>
          </div>

          {/* Información de contacto */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> <span>+52 998 364 0387</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:mezzaaazielle@gmail.com" className="hover:underline">
                mezzaaazielle@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> <span>Cancún</span>
            </div>
          </div>

          {/* Iconos de redes sociales */}
          <div className="flex space-x-4">
            <a href="https://instagram.com/meza_azielle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/@hernandezmezaazielmichell7552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Instalaciones XYZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl h-[600px]">
      <img
        src={imagen1}
        alt="Imagen 1"
        className="h-full w-full object-cover"
      />
      <img
        src={imagen2}
        alt="Imagen 2"
        className="h-full w-full object-cover"
      />
      <img
        src={elevador}
        alt="Elevador"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

const HomePage = () => {
  return (
    <div>
      {/* Sección de bienvenida */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img src={imagen8} alt="Imagen de bienvenida" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-2xl p-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">¡Bienvenido a Instalaciones XYZ!</h1>
          <p className="text-lg text-white">
            Nos especializamos en instalaciones de elevadores y escaleras eléctricas, garantizando
            eficiencia y seguridad en cada proyecto.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Sección de trabajos */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">NUESTROS ULTIMOS TRABAJOS!!</h2>
        </div>
      </div>

      {/* Agregar el Carousel */}
      <CarouselDefault />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
