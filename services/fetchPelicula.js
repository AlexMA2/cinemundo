const HOST = "http://localhost:8080";

export const crearPelicula = (pelicula) => {
    
    fetch(`${HOST}/pelicula`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(pelicula),
    });
};

export const eliminarPelicula = (id) => {
    
    fetch(`${HOST}/pelicula/${id}`, {
        method: "DELETE",
    });
};

export const editarPelicula = (id, pelicula) => {
   
    fetch(`${HOST}/pelicula/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(pelicula),
    });
}

export const getPeliculas = () => {
   
    return fetch(`${HOST}/pelicula`)
    .then(res => res.json())
    .then(peliculas => peliculas);
}
