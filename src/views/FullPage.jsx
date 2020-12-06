import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactDOM from "react-dom";
import Background from "./Background";
import HomeImg from "../components/HomeImg";
import Page1 from "./Page1";
import anime from "animejs/lib/anime.es.js";
import Page2 from "./Page2";
import Page3 from "./Page3";
// import ReactFullpage from '../../../components';

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
                        // rotate :['-14deg', '0']
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
                        debug /* Debug logging */
                        // Required when using extensions
                        //     pluginWrapper={pluginWrapper}

                        // fullpage options
                        licenseKey={"YOUR_KEY_HERE"}
                        navigation
                        scrollingSpeed={1500}
                        //     anchors={['firstPage', 'secondPage', 'thirdPage']} NOMBRE QUE TIENE EN LA URL
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

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       sectionsColor: [...originalColors],
//       fullpages: [
//         {
//           text: 'Section 1',
//         },
//         {
//           text: 'Section 2',
//         },
//         {
//           text: 'Section 3',
//         }
//       ],
//     };
//   }

// onLeave(origin, destination, direction) {
// console.log('onLeave', { origin, destination, direction });
// // arguments are mapped in order of fullpage.js callback arguments do something
// // with the event
// }

//   handleChangeColors() {
//     const newColors =
//       this.state.sectionsColor[0] === 'yellow'
//         ? [...originalColors]
//         : ['yellow', 'blue', 'white'];
//     this.setState({
//       sectionsColor: newColors,
//     });
//   }

//   handleAddSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const { length } = fullpages;
//       fullpages.push({
//         text: `section ${length + 1}`,
//         id: Math.random(),
//       });

//       return {
//         fullpages: [...fullpages],
//       };
//     });
//   }

//   handleRemoveSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const newPages = [...fullpages];
//       newPages.pop();

//       return { fullpages: newPages };
//     });
//   }

//   moveSectionDown() {
//     fullpage_api.moveSectionDown();
//   }

//   render() {
//     const { fullpages } = this.state;

//     if (!fullpages.length) {
//       return null;
//     }

//     const Menu = () => (
//                               <div
//                               className="menu"
//                               style={{
//                               position: 'fixed',
//                               top: 0,
//                               zIndex: 100,
//                               }}
//                               >
//                               <ul className="actions">
//                               <li>
//                                     <button onClick={() => this.handleAddSection()}>Add Section</button>
//                                     <button onClick={() => this.handleRemoveSection()}>
//                                     Remove Section
//                                     </button>
//                                     <button onClick={() => this.handleChangeColors()}>
//                                     Change background colors
//                                     </button>
//                                     <button onClick={() => this.moveSectionDown()}>
//                                     Move Section Down
//                                     </button>
//                               </li>
//                               </ul>
//       </div>
//     );

//     return (
//       <div className="App">
//         {/* <Menu /> */}
//         <ReactFullpage
//           debug /* Debug logging */

//           // Required when using extensions
//           pluginWrapper={pluginWrapper}

//           // fullpage options
//           licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
//           navigation
//           anchors={['firstPage', 'secondPage', 'thirdPage']}
//           sectionSelector={SECTION_SEL}
//           onLeave={this.onLeave.bind(this)}
//           sectionsColor={this.state.sectionsColor}

//           render={comp => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <h1>{text}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById('react-root');
// ReactDOM.render(<App />, rootElement);
