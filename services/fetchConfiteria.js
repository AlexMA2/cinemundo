const HOST = "http://localhost:8080";

const crearComida = (comida) => {
    fetch(`${HOST}/comida`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(comida),
    });
};

const eliminarComida = (id) => {
    fetch(`${HOST}/comida/${id}`, {
        method: "DELETE",
    });
};

const editarComida = (id, comida) => {
    fetch(`${HOST}/comida/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(comida),
    });
}

const getComidas = () => {
    return fetch(`${HOST}/comida`)
    .then(res => res.json())
    .then(comidas => comidas);
}


export { crearComida, eliminarComida, editarComida, getComidas };