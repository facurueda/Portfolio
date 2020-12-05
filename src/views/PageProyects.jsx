import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import PROYECTOS from "../assets/proyectos";
import Auth0 from "../assets/icons/auth0.png";
import Mongo from "../assets/icons/mongodb.png";
import Redis from "../assets/icons/redis.png";
import Sequelize from "../assets/icons/sequelize.png";
import Proyectcard from "../components/ProyectCard";
import Axios from "../assets/icons/Axios.png";
import Bootstrap from "../assets/icons/Bootstrap.png";
import Css from "../assets/icons/css.png";
import Html from "../assets/icons/html.png";
import Javascript from "../assets/icons/javascript.png";
import NodeJs from "../assets/icons/nodejs.png";
import Postgresql from "../assets/icons/postgresql.png";
import ReactLogo from "../assets/icons/reactjs.png";
import Redux from "../assets/icons/redux.png";
import ButtonBack from "../assets/buttonBack.svg";
import { useHistory } from "react-router-dom";

const PageProyects = () => {
      const history = useHistory();

      const tecnologias = [
            Css,
            Html,
            Javascript,
            ReactLogo,
            Redux,
            Bootstrap,
            NodeJs,
            Axios,
            Postgresql,
            Sequelize,
            Auth0,
            Mongo,
            Redis,
      ];

      useEffect(() => {
            anime({
                  targets: ".tecnologiasContainer",
                  direction: "reverse",
                  easing: "easeInOutQuad",
                  translateX: "-100%",
                  opacity: [1, 0],
                  duration: 2000,
            });
            anime({
                  targets: ".proyectCardsContainer",
                  direction: "normal",
                  easing: "easeInOutQuad",
                  translateY: ["-50%", "0"],
                  opacity: [0, 1],
                  duration: 2000,
            });
            anime({
                  targets: ".buttonBackProyects",
                  direction: "reverse",
                  easing: "easeInOutQuad",
                  translateX: "100%",
                  opacity: [1, 0],
                  duration: 2000,
            });
      }, []);

      return (
            <div className="pageProyectsContent">
                  <img
                        src={ButtonBack}
                        className="buttonBackProyects"
                        onClick={history.goBack}
                  />
                  <div className="proyectCardsContainer">
                        {PROYECTOS.map((e) => {
                              return (
                                    <Proyectcard
                                          nombre={e.nombre}
                                          imagen={e.imagen}
                                          texto={e.texto}
                                          github={e.github}
                                          webPage={e.webPage}
                                    />
                              );
                        })}
                  </div>
                  <div className="tecnologiasContainer">
                        {tecnologias.map((elem) => {
                              return (
                                    <img
                                          src={elem}
                                          className="iconoTecnologiaAxios"
                                    />
                              );
                        })}
                  </div>
            </div>
      );
};

export default PageProyects;
