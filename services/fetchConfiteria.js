const HOST = "http://localhost:8080/food";

const crearComida = (comida) => {
    fetch(`${HOST}/create`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(comida),
    });
};

const eliminarComida = (id) => {
    fetch(`${HOST}/delete/${id}`, {
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
    return fetch(`${HOST}/`)
    .then(res => res.json())
    .then(comidas => comidas);
}


export { crearComida, eliminarComida, editarComida, getComidas };