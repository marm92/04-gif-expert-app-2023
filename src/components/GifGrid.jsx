import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      
      {
        isLoading && (<h2>Cargando...</h2>) // podria ser un componente, hay muchas maneras de realizar esto
      }

      <div className='card-grid'>
        {
          // desestructuración de images para evitar colocar images.id...
          images.map( ( image )=>(
            <GifItem 
              key={ image.id }
              {...image
              }
            />
          ))
        }
      </div>
    </>
  )
}