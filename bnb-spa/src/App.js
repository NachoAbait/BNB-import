import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import Banner from "./img/banner.png";
import Imagen1 from "./img/img1.png";
import Imagen2 from "./img/img2.png";
import Imagen3 from "./img/img3.png";
import Imagen4 from "./img/img4.png";
import Imagen5 from "./img/img5.png"
import olas2 from "./img/olas2.png";
import css from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const carouselImages = [
    Imagen1,
    Imagen2,
    Imagen3,
    Imagen4,
    Imagen5
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTimerContacto, setIsTimerContacto] = useState(false);
  const [typedInitialText, setTypedInitialText] = useState("");
  const [typedRemainingText, setTypedRemainingText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const initialText = "¿Buscas productos Apple a precios accesibles?";
  const remainingText =
    "BNB te trae el dispositivo que quieras, sellado con garantia oficial.";

  useEffect(() => {
    let index = 0;
    const typeInitialText = () => {
      const interval = setInterval(() => {
        if (index <= initialText.length) {
          setTypedInitialText(initialText.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          typeRemainingText(); // Iniciar el tipeo del remainingText
        }
      }, 25); // Ajusta la velocidad del tipeo según tu preferencia
    };

    const typeRemainingText = () => {
      let remainingIndex = 0;
      const interval = setInterval(() => {
        if (remainingIndex <= remainingText.length) {
          setTypedRemainingText(remainingText.substring(0, remainingIndex));
          remainingIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Ajusta la velocidad del tipeo según tu preferencia
    };

    typeInitialText();

    return () => {
      clearInterval(typeInitialText);
      clearInterval(typeRemainingText);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    setTimeout(() => {
      setIsTimerContacto(true);
    }, 500)

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
              style={{ color: "#ff0000ab" }}
              className={css.ubi}
            />
            <div>
              <h5>Dolores, Bs As</h5>
            </div>
          </div>
        </div>

        <div className={isLoaded ? `${css.titulo} ${css.fadeIn}` : css.titulo}>
          <h1>
            Productos Apple, al{" "}
            <span className={css.subrayado}>mejor precio</span>.
          </h1>
        </div>

        <div className={css.subtitulo}>
          <h4>
            <span className={css.pregunta}>{typedInitialText}</span> <br />
            {typedInitialText === initialText && (
              <span>{typedRemainingText}</span>
            )}
          </h4>
        </div>

        <div className={isTimerContacto ? `${css.contacto} ${css.fadeIn}` : css.contacto}>
          <div className={css.contacto1}>
            <div className={css.icono}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#12ca30" }}
                className={css.wpp}
              />
            </div>
          </div>
          <div className={`${css.contacto2} ${isClicked ? css.clicked : ""}`}>
            <a 
              href="https://drive.google.com/drive/folders/1sSEkbf6b3hWbBJ4wtvOKCzlO6OtNI1tE?usp=sharing" 
              className={css.link}
              onClick={() => setIsClicked(true)}
            >
              <div className={css.red}>Lista de precios</div>
            </a>
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

        <img src={olas2} alt="Banner de mi sitio web" className={css.banner2} />
        <img src={Banner} alt="Banner de mi sitio web" className={css.banner} />
      </div>
    </div>
  );
}

export default App;
