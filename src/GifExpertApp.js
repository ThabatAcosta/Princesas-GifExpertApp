import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

   const [categorias, setCategorias] = useState(['Princesas'])


    return (
        
        <> 
        <h2>GifExpertApp</h2>



        <AddCategory setCategorias={setCategorias}/>
        <hr/>


        <ol>
            {
                categorias.map ( (category, index) => (
                    <GifGrid
                        key={index}
                        category={category}
                    
                    />
                ))
            }
        </ol>
        </>
    )
}

//COMENTARIOS

//Se utilizo para correr todos los elementos he insertar uno mas
// const handleAdd = () => {
    //     setCategorias([...categorias, 'Frozen']);
    //     return
    // }


// Se utilizo para colocar los elementos del arreglo en una lista ordenada
// <ol>
//      {
//        categorias.map ( category => (
//          <li key={category}> {category} </li>  
//          ))
//        }
//  </ol>