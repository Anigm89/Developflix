import peliculas from './peliculas.js'
//console.log(peliculas);

const filtradopeliculas = (generoId, contenedorId) =>
{
    const contenedor = document.getElementById(contenedorId);   
    const peliculasgenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId)); console.log(peliculasgenero)

    for(const pelicula of peliculasgenero)
    {
        let templatepelis = ` 
        <div class = "pelicula">
            <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt ="${pelicula.title}">
            <p>${pelicula.title}</p>
        </div> `
        contenedor.innerHTML += templatepelis;
    }
}

filtradopeliculas(28,'genero-28');
filtradopeliculas(53,'genero-53');
filtradopeliculas(12,'genero-12');



///lo mismo pero con foreach
/*
const filtradopeliculas = (generoId, contenedorId) =>
{
    const contenedor = document.getElementById(contenedorId);
    const peliculasgenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId));

    peliculasgenero.forEach((pelicula) => 
    {
        let templatepelis = ` 
        <div class = "pelicula">
            <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt ="${pelicula.title}">
            <p>${pelicula.title}</p>
        </div> `
        contenedor.innerHTML += templatepelis;
    })
}

filtradopeliculas(28,'genero-28');
filtradopeliculas(53,'genero-53');
filtradopeliculas(12,'genero-12');
*/