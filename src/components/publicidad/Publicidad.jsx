import React from 'react'
import style from '../publicidad/publicidad.module.css'
import publicidad from '../img/publicidad7.jpg'

function Publicidad() {
  return (
  <div className='container-fluid'>
        <div className='row d-flex img-fluid'>
            <img className={`${style.img} p-0 my-2`} src={publicidad} alt="publicidad" />
        </div>
  </div>
  )
}

export default Publicidad