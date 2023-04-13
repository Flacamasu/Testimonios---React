import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

const imagen = new Image();
imagen.onload = () => {
  // La imagen se cargó correctamente
};
imagen.onerror = (error) => {
  console.error('Error al cargar la imagen:', error);
  // Aquí se podría mostrar un mensaje de error al usuario, o realizar alguna otra acción.
};

function Testimonio(props) {
  
  let imagen;
  try {
    imagen = require(`../imagenes/testimonio-${props.imagen}.jpg`);
  } catch (error) {
    imagen = require(`../imagenes/no-encontrada.jpg`);
  }

  return(
   <div className='contenedor-testimonio'>
    <img
      className='imagen-testimonio'
      src={imagen}

      onError={(e) => {
        console.error('Error al cargar la imagen:', e.target.src);
      }}
      alt='Foto de persona 1'
    />
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        <strong>{props.nombre}</strong> en {props.pais}
      </p>
      <p className='cargo-testimonio'>{props.titulo} en <strong>{props.empresa}</strong></p>
      <p className='texto-testimonio'>"{props.testimonio}"</p>
    </div>
   </div>
  );
}

export default Testimonio;