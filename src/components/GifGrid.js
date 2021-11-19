import React, { } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

   const {data: images, loading} = useFetchGifs( category ); 


    return (

        <>
            <h3 className="animate__animated animate__flash"> {category} </h3>


            {/* // && Cuando se cumpla la condicion muestro lo demas que esta despues de las && */}
            {loading && <p className="animate__animated animate__flash">Loading</p> } 


            <div className="card-grid">
            
                {
                    images.map( img  => (
                       <GifGridItem 
                       key={img.id}
                       {...img} /> 
                       ))
                } 

            </div> 

        </>
    )
}




//Cuando quiero acceder a una propiedad dentro de un json utilizo la desestructuracion
  // Ej const data = await resp.json(); y coloco const {data} = await resp.json(); ya que quiero la data que esta dentro de la constante data




//    //Utilizo el useEfecct para invocar la funcion pero se le genera un [] array vacio para que solo se ejecute una vez en consola
//     // Es decir se ejecute la funcion cuando el componente es renderizdo por primera vez
//    //Se lanza la funcion y luego de que getGifs(category) la detecte la lanza y refleja con .then(setImages);
//     useEffect( () => {
//         getGifs(category)
//             .then(setImages);
//     }, [category])




  //Se crea esta funcion de javascript para mostrar en una lista los datos como el id y el title en nuestra app
/* <ol> 
                {
                    images.map( ({ id, title})  => (
                        <li key={id}> {title} </li>
                        ))
                }
               
    </ol> */


//Se utiliza este operador ternario para darle una instruccion sobre que decir mientras loading se esta ejecutando
//{ loading ? 'Cargando' : 'Data Cargada'}

// &&