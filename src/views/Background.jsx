import React, { useEffect, useRef } from "react";
import backgroundImage from "../assets/homeBackground/fondo.png";
import Stars from "../assets/homeBackground/star.svg";
import ParallaxMousemove from "react-parallax-mousemove";

const Background = () => {
      return (
            <div className="backgroundContainer">
                  <ParallaxMousemove>
                        <ParallaxMousemove.Layer
                              layerStyle={{
                                    position: "absolute",
                                    height: "100vh",
                              }}
                              config={{
                                    yFactor: 0.1,
                                    xFactor: 0.1,
                                    springSettings: {
                                          stiffness: 50,
                                          damping: 30,
                                    },
                              }}
                        >
                              <img src={Stars} className="starsBackground" />
                        </ParallaxMousemove.Layer>
                        <div className="backgroundImage">
                              <ParallaxMousemove.Layer
                                    layerStyle={{
                                          position: "absolute",
                                          height: "100vh",
                                    }}
                                    config={{
                                          yFactor: -0.1,
                                          xFactor: -0.1,
                                          springSettings: {
                                                stiffness: 50,
                                                damping: 30,
                                          },
                                    }}
                              >
                                    <img
                                          src={backgroundImage}
                                          alt="fondo"
                                          className="imageInBackground"
                                    />
                              </ParallaxMousemove.Layer>
                        </div>
                  </ParallaxMousemove>
            </div>
      );
};

export default Background;
