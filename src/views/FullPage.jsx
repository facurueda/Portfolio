import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import anime from "animejs/lib/anime.es.js";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const SEL = "section";
const SECTION_SEL = `.${SEL}`;

const FullPage = () => {
      const PAGES = [
            { page: <Page1/> },
            { page: <Page2/> },
            { page: <Page3/> },
      ];

      const [fullpages, setFullPages] = useState(PAGES);

      const onLeave = (origin, destination, direction) => {
            if(origin.index === 0){
                  anime({
                        targets: [
                              ".homePersona",
                              ".homePantalla",
                              ".homeCode",
                              ".homeTextLeft",
                              ".homeTextTop",
                              ".homeEngranaje",
                        ],
                        direction: "normal",
                        easing: "linear",
                        translateX:['0%', '100%'],
                        duration: 400,
                        opacity: 0,
                  });
                  anime({
                        targets: [
                              "#FirstLastName",
                              ".fullStack",
                              ".lineaRoja1",
                              ".lineaRoja2"
                        ],
                        direction: "normal",
                        easing: "linear",
                        translateX:['25%', '-50%'],
                        duration: 400,
                        opacity: 0,
                  })
            }
            if(destination.index === 0){
                  anime({
                        targets: [
                              ".homePersona",
                              ".homePantalla",
                              ".homeCode",
                              ".homeTextLeft",
                              ".homeTextTop",
                              ".homeEngranaje",
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 750,
                        duration: 400,
                        translateX:["100%", "0%"],
                        opacity:1 ,
                  });
                  anime({
                        targets: [
                              "#FirstLastName",
                              ".fullStack",
                              ".lineaRoja1",
                              ".lineaRoja2"
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 750,
                        duration: 400,
                        translateX:["-50%", "0%"],
                        opacity:1 ,
                  });
            }
            if(destination.index === 1){
                  anime({
                        targets: [
                              ".ecommerceImg",
                              ".foodAppImg",
                              ".weatherAppImg",
                              ".ecommerceImg1",
                              ".foodAppImg1",
                              ".weatherAppImg1",
                              ".ecommerceImg2",
                              ".foodAppImg2",
                              ".weatherAppImg2",
                              ".ecommerceImg3",
                              ".foodAppImg3",
                              ".weatherAppImg3",
                        ],
      
                        direction: "normal",
                        easing: "linear",
                        delay: 500,
                        duration: 400,
                        translateX:["150%", "0%"],
                        opacity:[0,1],
                        rotate :['0','-14deg'],
                  });
                  anime({
                        targets: [
                              ".textPortfolio",
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 750,
                        duration: 400,
                        translateX:["-50%", "10%"],
                        opacity:[0,1] ,
                  });
                  anime({
                        targets: [
                              ".btnProyectos",
                              ".linea1Page2",
                              ".linea2Page2"
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 900,
                        duration: 400,
                        translateX:["-10%", "15%"],
                        opacity:[0,1] ,
                  });
            }
            if(origin.index === 1){
                  anime({
                        targets: [
                              ".ecommerceImg",
                              ".foodAppImg",
                              ".weatherAppImg",
                              ".ecommerceImg1",
                              ".foodAppImg1",
                              ".weatherAppImg1",
                              ".ecommerceImg2",
                              ".foodAppImg2",
                              ".weatherAppImg2",
                              ".ecommerceImg3",
                              ".foodAppImg3",
                              ".weatherAppImg3",
                        ],
      
                        direction: "normal",
                        easing: "linear",
                        duration: 300,
                        translateX:['0', '100%'],
                        opacity:0,
                        rotate :['-14deg', '0']
                  });
                  anime({
                        targets: [
                              ".textPortfolio",
                        ],
                        direction: "normal",
                        easing: "linear",
                        duration: 500,
                        translateX:["0", "-100%"],
                        opacity:0 ,
                  });
                  anime({
                        targets: [
                              ".btnProyectos",
                              ".linea1Page2",
                              ".linea2Page2"
                        ],
                        direction: "normal",
                        easing: "linear",
                        duration: 200,
                        translateX:["0", "-100%"],
                        opacity:0 ,
                  });
            }
            if(destination.index === 2){
                  anime({
                        targets: [
                              '.ImagenCurriculum'
                        ],
      
                        direction: "reverse",
                        easing: "linear",
                        duration: 300,
                        translateX:['0', '200%'],
                        opacity:[1, 0],
                        duration:1000,
                        rotate :['-25deg', '0']
                  });
                  anime({
                        targets: [
                              '.textContacto',
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 750,
                        duration: 400,
                        translateX:["-50%", "10%"],
                        opacity:[0,1] ,
                  });
                  anime({
                        targets: [
                              '.linea1Page3',
                              '.linea2Page3',
                              '.btnContacto'
                        ],
                        direction: "normal",
                        easing: "linear",
                        delay: 900,
                        duration: 400,
                        translateX:["-10%", "15%"],
                        opacity:[0,1] ,
                  });
            }
            if(origin.index === 2){
                  anime({
                        targets: [
                              '.ImagenCurriculum'
                        ],
      
                        direction: "normal",
                        easing: "linear",
                        duration: 500,
                        translateX:['0', '200%'],
                        opacity:[0,1],
                  });
                  anime({
                        targets: [
                              '.textContacto',
                        ],
                        direction: "normal",
                        easing: "linear",
                        duration: 500,
                        translateX:["0", "-100%"],
                        opacity:0 ,
                  });
                  anime({
                        targets: [
                              '.linea1Page3',
                              '.linea2Page3',
                              '.btnContacto'
                        ],
                        direction: "normal",
                        easing: "linear",
                        duration: 200,
                        translateX:["0", "-100%"],
                        opacity:0 ,
                  });
            }
            
      };

      return (
            <div className="App">
                  <ReactFullpage
                        debug
                        licenseKey={"YOUR_KEY_HERE"}
                        navigation
                        scrollingSpeed={1500}
                        sectionSelector={SECTION_SEL}
                        onLeave={onLeave}
                        navigationPosition="left"
                        render={(comp) => (
                              <ReactFullpage.Wrapper>
                                    {fullpages.map(({ page }) => (
                                          <div key={page} className={SEL}>
                                                {page}
                                          </div>
                                    ))}
                              </ReactFullpage.Wrapper>
                        )}
                  />
            </div>
      );
};

export default FullPage;
