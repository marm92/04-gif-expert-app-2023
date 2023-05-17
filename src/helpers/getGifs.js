export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PNd8YneqnA7iUBZOmo4fSho9RcW9zSpD&q=${ category }&limit=20`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}
  