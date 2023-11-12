import peliculas from './peliculas.js'
//console.log(peliculas);

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');


 let generos = []; 
 let titulos = [];

 function separar() {
    for(let i=0; i<peliculas.length;i++) {
            generos.push(peliculas[i].genre_ids);
            titulos.push(peliculas[i].title);
    }
   // return generos;
    //console.log('generos ' + generos + ' pelis ' + titulos);
    
}
separar(peliculas);
//console.log('generos ',generos);
//console.log(titulos);

/*
let generoaccion;
let generothriller;
let generoaventuras;
generos.forEach(genero => {
       console.log('gen', genero);
    const generoaccion1 = genero.filter((peli) => peli === 28);       console.log('accion', generoaccion1); 
    const generotrhiller1 = genero.filter((peli) => peli === 53);       console.log('thriller', generotrhiller1); 
    const generoaventuras1 = genero.find((num) => num === 12);       console.log('aventuras', generoaventuras1); 
    generoaccion = generoaccion1;
    generothriller = generotrhiller1;
    generoaventuras = generoaventuras1;

});

 console.log('no', generoaventuras)
 */

 //const generosSeleccionados = [28, 53,12];
 const generoaventuras = [12]
 const generothriller= [53];
 const generoaccion = [28];

 // Filtrar las películas por género aventuras
 const peliculasFiltradasadv = peliculas.filter(pelicula =>
     pelicula.genre_ids.some(id => generoaventuras.includes(id))
   );
   
   //console.log('x', peliculasFiltradas)

   for(let i=0; i<peliculasFiltradasadv.length;i++) 
   {
    let  pelisaventuras = peliculasFiltradasadv[i].title;
    let fotosaventuras =peliculasFiltradasadv[i].poster_path;
     console.log('z',pelisaventuras);
 
         aventura.innerHTML += 
         `<div><p> ${pelisaventuras } </p>
         <img src="https://image.tmdb.org/t/p/w500${fotosaventuras}"></div>` ;
     
   }


// Filtrar las películas por género thriller
const peliculasFiltradasT = peliculas.filter(pelicula =>
    pelicula.genre_ids.some(id => generothriller.includes(id))
  );
   for(let i=0; i<peliculasFiltradasT.length;i++) 
  {
   let  pelisthriller = peliculasFiltradasT[i].title;
   let cartelthriller =peliculasFiltradasT[i].poster_path;
    //console.log('z',generothriller);

        thriller.innerHTML += 
        `<div><p> ${pelisthriller } </p>
        <img src="https://image.tmdb.org/t/p/w500${cartelthriller}"></div>` ;

  }

  // Filtrar las películas por género accion
const peliculasFiltradasACC = peliculas.filter(pelicula =>
    pelicula.genre_ids.some(id => generoaccion.includes(id))
  );
   for(let i=0; i<peliculasFiltradasACC.length;i++) 
  {
   let  pelisaccion = peliculasFiltradasACC[i].title;
   let cartelaccion =peliculasFiltradasACC[i].poster_path;
    //console.log('z',generothriller);

        accion.innerHTML += 
        ` <div>${pelisaccion } 
        <img src="https://image.tmdb.org/t/p/w500${cartelaccion}"></div>` ;
    
  }
  

