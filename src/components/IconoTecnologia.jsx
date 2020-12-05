import React from 'react';

const IconoTecnologia = (props) =>{
      return (
            <div className='iconoTecnologiaContainer'>
            {console.log(props)}
            {/* {props.image === "Javascript" ? (

            ) : ()} */}
                  <img alt='img' src={props.image} className='iconoTecnologia'/>
            </div>
      )
}

export default IconoTecnologia;