import React, { useEffect } from "react";
import Persona from "../assets/homeBackground/person.png";
import Pantalla from "../assets/homeBackground/pantalla.png";
import Engranaje from "../assets/homeBackground/engranaje.png";
import Code from "../assets/homeBackground/code.png";
import TextLeft from "../assets/homeBackground/textLeft.png";
import TextTop from "../assets/homeBackground/textTop.png";
import Flechas from '../assets/homeBackground/flechas.svg';
import anime from "animejs/lib/anime.es.js";

const HomeImg = () => {
      useEffect(() => {
            anime({
                  targets: [
                        ".homePersona",
                        ".homePantalla",
                        ".homeCode",
                        ".homeTextLeft",
                        ".homeTextTop",
                        ".homeEngranaje1",
                        ".homeEngranaje2",
                        ".flechasBackground",
                  ],

                  direction: "reverse",
                  easing: "easeInOutQuad",
                  translateX: "100%",
                  opacity: [1, 0],
                  delay: function (el, i, l) {
                        return i * 150;
                  },
                  complete: function () {
                        anime({
                              targets: [".homeEngranaje1", ".homeEngranaje2"],
                              rotate: "8turn",
                              easing: "linear",
                              loop: true,
                              duration: 20000,
                              widht: "100%",
                        });
                        anime({
                              targets: [".flechasBackground"],
                              easing: "linear",
                              direction: "reverse",
                              loop: true,
                              translateY:['25px', '0'],
                        });
                  },
            });
      }, []);

      return (
            <div className="HomeImgContainer">
                  <div className="imgContainer">
                        <img src={Persona} alt="img" className="homePersona" />
                        <img
                              src={Pantalla}
                              alt="img"
                              className="homePantalla"
                        />
                        <img
                              src={Engranaje}
                              alt="img"
                              className="homeEngranaje1"
                        />
                        <img
                              src={Engranaje}
                              alt="img"
                              className="homeEngranaje2"
                        />
                        <img src={Code} alt="img" className="homeCode" />
                        <img
                              src={TextLeft}
                              alt="img"
                              className="homeTextLeft"
                        />
                        <img src={TextTop} alt="img" className="homeTextTop" />
                        <img src={Flechas} alt="flechas" className="flechasBackground"/>
                  </div>
            </div>
      );
};

export default HomeImg;
