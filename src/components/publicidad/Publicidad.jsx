import React from 'react'
import style from '../publicidad/publicidad.module.css'

function Publicidad() {
  return (
  <div className='container-fluid'>
        <div className='row d-flex'>
            <img className={`${style.img} p-0`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITVTP3hJvCCSqEYHOIczuT-du3dHJQSgk_w&usqp=CAU" alt="publicidad" />
        </div>
  </div>
  )
}

export default Publicidad