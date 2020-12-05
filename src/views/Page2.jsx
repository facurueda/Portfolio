import React from "react";
import Ecommerce from "../assets/Ecommerce.png";
import FoodApp from "../assets/FoodApp.png";
import WeatherApp from "../assets/WeatherApp.png";
import { useHistory } from "react-router-dom";

const Page2 = () => {
      const history = useHistory();

      return (
            <div className="page2Container">
                  <div className="textoBotonesPage2">
                        <label className="textPortfolio">PROYECTOS</label>
                        <span className="linea1Page2" />
                        <span className="linea2Page2" />
                        <button
                              className="btnProyectos"
                              onClick={(e) => history.push("/Proyects")}
                        >
                              VER MÁS
                        </button>
                  </div>
                  <div className="imagenPage2">
                        <img src={Ecommerce} alt="" className="ecommerceImg" />
                        <img src={FoodApp} alt="" className="foodAppImg" />
                        <img
                              src={WeatherApp}
                              alt=""
                              className="weatherAppImg"
                        />
                        <img src={Ecommerce} alt="" className="ecommerceImg1" />
                        <img src={FoodApp} alt="" className="foodAppImg1" />
                        <img
                              src={WeatherApp}
                              alt=""
                              className="weatherAppImg1"
                        />
                        <img src={Ecommerce} alt="" className="ecommerceImg2" />
                        <img src={FoodApp} alt="" className="foodAppImg2" />
                        <img
                              src={WeatherApp}
                              alt=""
                              className="weatherAppImg2"
                        />
                        <img src={Ecommerce} alt="" className="ecommerceImg3" />
                        <img src={FoodApp} alt="" className="foodAppImg3" />
                        <img
                              src={WeatherApp}
                              alt=""
                              className="weatherAppImg3"
                        />
                  </div>
            </div>
      );
};

export default Page2;
