import { useEffect, useState  } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    //nos permite que no se vuelca a ejecutar la función mas de una vez (en terminos básicos)
    useEffect( () => {
        getImages();
    }, [] )

    return {
        images,
        isLoading
    }
}
