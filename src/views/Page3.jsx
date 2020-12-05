import React from 'react';
import Curriculum from '../assets/CurriculumVitae.png'
const Page3 = () => {
      return (
            <div className='page3Container'>
                  <div className='textoBotonesPage3'>
                        <label className='textContacto'>CONTACTO</label>
                        <span className="linea1Page3" />
                        <span className="linea2Page3" />
                        <button
                        className="btnContacto"
                        onClick={e => {window.open('https://drive.google.com/file/d/1rfQGCEhIdsqongxtJsofM9VZGGMPEePK/view')}}

>
                              DESCARGAR CURRICULUM
                        </button>
                  </div>
                  <div className='curriculumContainer'>
                        <img src={Curriculum} className='ImagenCurriculum' alt='cv'/>
                  </div>
            </div>
      )
}

export default Page3;