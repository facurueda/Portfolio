import React from "react";
import GitHubLogo from "../assets/github.svg";
import WebPageLogo from "../assets/webpage.svg";

const Proyectcard = (props) => {
      const { nombre, imagen, texto, github, webPage } = props;

      return (
            <div className="proyectCardContainer">
                  <div className="imagenCardContainer">
                        <img
                              src={imagen}
                              alt="Imagen"
                              className="imagenProyecto"
                        />
                  </div>
                  <div className="textoCardContainer">
                        <div className="nombreProyecto">{nombre}</div>
                        <div className="textoProyecto">{texto}</div>
                        <div className="btnsContainer">
                              <a href={github}>
                                    <img
                                          src={GitHubLogo}
                                          className="btnGitHub"
                                    />
                              </a>
                              <a href={webPage}>
                                    <img src={WebPageLogo} className="btnWebPage" />
                              </a>
                        </div>
                  </div>
                  
            </div>
      );
};

export default Proyectcard;
