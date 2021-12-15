const HOST = "http://localhost:8080/api";

export const crearPelicula = (pelicula) => {
    
    fetch(`${HOST}/create`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(pelicula),
    });
};

export const eliminarPelicula = (id) => {
    
    fetch(`${HOST}/${id}`, {
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
   
    return fetch(`${HOST}/movies`)
    .then(res => res.json())
    .then(peliculas => peliculas);
}
