
import { crearSala, editarSala, eliminarSala, getSalas } from "../services/fetchSalas.js";

const formSala = document.getElementById("form-sala");

const btns = document.getElementById("container-card");

const btnAll = document.getElementById("btn-all");

let onEdit = false;
let idEdit = -1;

const salaNombre = document.getElementById("sala-nombre");
const salaButacas = document.getElementById("sala-butacas");
const salaTipo = document.getElementById("sala-tipo");

formSala.addEventListener("submit", (e) => {
  e.preventDefault();
  if (onEdit) {    
    let salaEditada = getValoresDelFormulario()
    editarSala(idEdit, salaEditada)
  } else {
    
    let salaNueva = getValoresDelFormulario()    
    crearSala(salaNueva);
  }
});

const getValoresDelFormulario = () => {
  const salaNueva = {
    title: salaNombre.value,    
    butacas: salaButacas.value,
    tipo: salaTipo.value,
  };
 

  salaNombre.value = ""
  salaButacas.value = ""
  salaTipo.value = ""

  return salaNueva
}

btns.addEventListener("click", (e) => {
  const { target } = e;

  if (
    target &&
    target.nodeName == "A" &&
    target.classList.contains("btn-eliminar")
  ) {
    idEdit = target.parentElement.id;
    let eliminar = confirm("¿Estás seguro de eliminar esta sala?");
    if (eliminar) {
      eliminarSala(idEdit);
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


const renderCard = (sala) => {
   
    let template = `
    <div
            class="card text-white bg-secondary mb-3 text-center"
            style="width: 16rem; height: 12rem"
    >
        <div class="card-body text-white text-center">
            <h5 class="card-title">${sala.title}</h5>
            <h6 class="card-subtitle mb-2">${sala.tipo}</h6>
            <p class="card-text-center">${sala.butacas}</p>
            <div class="row text-center p-0 m-0" id="${sala.id}">
             <a class="btn btn-light col-sm-5 mx-2 btn-editar"> Editar</a>
             <a class="btn btn-light col-sm-5 btn-eliminar">Eliminar </a>
            </div>
        </div>
    </div> `;

    btns.innerHTML += template;
}

const renderSalas = () => {
    getSalas().then((salas) => {
      salas.forEach((sala) => {
        renderCard(sala);
      })
    });  
}

renderSalas();