import React from 'react';
import imagen1 from './../assets/images/imagen1.jpg';
import imagen2 from './../assets/images/imagen2.jpeg';
import elevador from './../assets/images/elevador.jpg';

const CarouselDefault = () => {
  const [current, setCurrent] = React.useState(0);

  const images = [imagen1, imagen2, elevador];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <img
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Flecha izquierda */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-0 text-white text-4xl font-bold hover:scale-110 transition-transform"
        >
          &lt;
        </button>
        {/* Flecha derecha */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-0 text-white text-4xl font-bold hover:scale-110 transition-transform"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 mx-1 rounded-full ${current === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;
