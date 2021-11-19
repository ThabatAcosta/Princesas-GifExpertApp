


//Recibir una categoria y hacer una peticion http
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=2XlPJVB9ZLKDnXXFvUFPAxgD31vPGO3h`;
    const resp = await fetch(url); //fech con el fech se le hacen peticiones al navegador y regresa una promesa
    const {data} = await resp.json();
    
    
   
    // De esta manera accedo solo a los datos que quiero de cada usuario de mi arreglo de objetos
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
    }

    //Este archivo fue creado para hacer la mencion de la url de la api o libreria la cual usamos para la app