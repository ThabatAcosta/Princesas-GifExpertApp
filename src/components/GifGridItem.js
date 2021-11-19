import React from 'react'

export const GifGridItem = ({ title, url}) => {

    return (

        <div className="card animate__animated animate__swing" >
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
        
    )
}

//Este componente se creo para mostrar las imagenes y los titulos de las imagenes
