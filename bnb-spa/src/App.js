
import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import Banner from "./img/banner.png";
import Imagen1 from "./img/img1.jpg";
import Imagen2 from "./img/img2.png";
import css from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  // Lista de imágenes para el carrusel (ejemplo)
  const carouselImages = [
    Imagen1,
    Imagen2,
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar automáticamente la imagen cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.navbar}>
          <div className={css.logo}>
            <img src={logo} alt="Logo de mi sitio web" className={css.foto} />
          </div>
          <div className={css.ubicacion}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
              className={css.ubi}
            />
            <div>
              <h5>Dolores, Bs As</h5>
            </div>
          </div>
        </div>

        <div className={css.titulo}>
          <h1>
            La ultima Tecnologia, al{" "}
            <span className={css.subrayado}>mejor precio</span>.
          </h1>
        </div>

        <div className={css.subtitulo}>
          <h4>
            <span className={css.pregunta}>
              ¿Buscas productos Apple o Samsung a precios accesibles?{" "}
            </span>{" "}
            <br></br> BNB te trae el dispositivo que quieras, al mejor precio.
          </h4>
        </div>

        <div className={css.contacto}>
          <div className={css.contacto1}>
            <div className={css.icono}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#12ca30" }}
                className={css.wpp}
              />
            </div>
          </div>
          <div className={css.contacto2}>
            <div className={css.red}>Lista de precios</div>
          </div>
          <div className={css.contacto1}>
            <div className={css.icono}>
              <FontAwesomeIcon
                icon={faInstagram}
                className={css.wpp}
                style={{ color: "#b00759" }}
              />
            </div>
          </div>
        </div>

        <div className={css.carouselContainer}>
          <img
            src={carouselImages[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className={css.carouselImage}
          />
        </div>

        <img src={Banner} alt="Banner de mi sitio web" className={css.banner} />
      </div>
    </div>
  );
}

export default App;
