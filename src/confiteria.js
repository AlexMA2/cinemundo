import {
  crearComida,
  editarComida,
  eliminarComida,
  getComidas,
} from "../services/fetchConfiteria.js";

const formConfiteria = document.getElementById("form-confiteria");

const btns = document.getElementById("container-card");

const btnAll = document.getElementById("btn-all");

let onEdit = false;
let idEdit = -1;

const comidaTitulo = document.getElementById("comida-titulo");
const comidaDescripcion = document.getElementById("comida-desc");
const comidaPrecio = document.getElementById("comida-precio");
const comidaStock = document.getElementById("comida-stock");

formConfiteria.addEventListener("submit", (e) => {
  e.preventDefault();
  if (onEdit) {
    let comidaEditada = getValoresDelFormulario();
    editarComida(idEdit, comidaEditada);
  } else {
    let comidaNueva = getValoresDelFormulario();
    crearComida(comidaNueva);
  }
});

const getValoresDelFormulario = () => {
  const comidaNueva = {
    name: comidaTitulo.value,
    description: comidaDescripcion.value,
    price: comidaPrecio.value,
    stock: comidaStock.value,
  };

  comidaTitulo.value = "";
  comidaDescripcion.value = "";
  comidaPrecio.value = "";
  comidaStock.value = "";

  return comidaNueva;
};

btns.addEventListener("click", (e) => {
  const { target } = e;

  if (
    target &&
    target.nodeName == "A" &&
    target.classList.contains("btn-eliminar")
  ) {
    idEdit = target.parentElement.id;
    let eliminar = confirm("¿Estás seguro de eliminar esta comida?");
    if (eliminar) {
      eliminarComida(idEdit);
    }
  }
  if (
    target &&
    target.nodeName == "A" &&
    target.classList.contains("btn-editar")
  ) {
    if (!onEdit) {
      btnAll.innerText = "Editar";
      target.innerText = "Cancelar";
      onEdit = true;
      idEdit = target.parentElement.id;
    } else {
      btnAll.innerText = "Crear";
      target.innerText = "Editar";
      onEdit = false;
      idEdit = -1;
    }
  }
});

const renderCard = (comida) => {
  
  let template = `
  <div class="card shadow-sm p-3 mb-5 bg-dark bg-gradient rounded card-limits" style="width: 18rem;">
  <div class="card-body text-white">
      <h5 class="card-title"> ${comida.name} </h5>
      <h6 class="card-subtitle mb-2 text-muted">S/. ${comida.price}</h6>
      <p class="card-text">${comida.description}</p>
      <p class="card-text">Stock : ${comida.stock}</p>
      <div class="row" id="${comida._id}">
          <a class="btn btn-light col-sm-5 mx-2 btn-editar"> Editar</a>
          <a class="btn btn-light col-sm-5 btn-eliminar">Eliminar </a>
      </div>
  </div>
</div>
  `;

  btns.innerHTML += template;
};

const renderComidas = () => {
  getComidas().then((comidas) => {
    comidas.forEach((comida) => {
      renderCard(comida);
    })
  });  
};

renderComidas();
