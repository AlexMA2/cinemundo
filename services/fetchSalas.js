const HOST = "http://localhost:8080/sala";

export const crearSala = (sala) => {
    
    fetch(`${HOST}/create`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(sala),
    });
};

export const eliminarSala = (id) => {
    
    fetch(`${HOST}/${id}`, {
        method: "DELETE",
    });
};

export const editarSala = (id, sala) => {
   
    fetch(`${HOST}/sala/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(sala),
    });
}

export const getSalas = () => {
   
    return fetch(`${HOST}/salas`)
    .then(res => res.json())
    .then(salas => salas);
}
