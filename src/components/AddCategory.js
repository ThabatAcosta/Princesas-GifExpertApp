import React, {useState} from 'react'
import PropTypes  from 'prop-types';



export const AddCategory = ({setCategorias}) => {

   const [inputValue, setInputValue] = useState('');
   
// Con esta funcion extraigo el valor del input
   const handleInputChange = (e) => {
       setInputValue(e.target.value);
    
   }
    
   
   //Con esta funcion evito que mi pagina a pesar de cualquier evento regrese a su estado inicial, es decir que los eventos se generen y sigan su curso
   const handleSumit = (e) => {
       e.preventDefault(); 
       // El trim quita los espacios en blanco 
       if( inputValue.trim().length > 2){ 
        setCategorias( cats => [ inputValue, ...cats ]);
        setInputValue('');
       }    
   }


       //onSubmit es el click del evento (para formulario)
       //onChance cuando cambie, realiza el evento que yo le diga (input)
       return (
        <form onSubmit={handleSumit}> 
          <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
          /> 
        </form>
    )
}



AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}



       //props.setCategorias() 1ra manera de hacerlo con (props) en el parametro
       // setCategorias( cats => [...cats, inputValue]); 2da manera con ({setCategorias}) desestructuracion en los parametros


//onSumit se utiliza para evitar que se refresque toda la pagina con el enter sino solo lo que necesitamos

//onChange