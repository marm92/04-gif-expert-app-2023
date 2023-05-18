import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch']);
    
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes( newCategory) ) return; // para evitar repetidos
        //console.log(newCategory);
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        //console.log('valorant')
    };
    

  return (
    <>
        <h1>GifExpertApp</h1>
        
        
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ event => onAddCategory(event) }
        />

        
        { 
            categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                )
            ) 
        }
        
            { /* Gif */ }
  
    </>
  )
}
