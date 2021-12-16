
import { crearPelicula, editarPelicula, eliminarPelicula, getPeliculas } from "../services/fetchPelicula.js";

const formPelicula = document.getElementById("form-pelicula");

const btns = document.getElementById("container-card");

const btnAll = document.getElementById("btn-all");

let onEdit = false;
let idEdit = -1;

const peliculaTitulo = document.getElementById("pelicula-titulo");
const peliculaSinopsis = document.getElementById("pelicula-sinopsis");
const peliculaIdioma = document.getElementById("pelicula-idioma");
const peliculaEstreno = document.getElementById("pelicula-estreno");

formPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  if (onEdit) {    
    let peliculaEditada = getValoresDelFormulario()
    editarPelicula(idEdit, peliculaEditada)
  } else {
    
    let peliculaNueva = getValoresDelFormulario()    
    crearPelicula(peliculaNueva);
  }
});

const getValoresDelFormulario = () => {
  const peliculaNueva = {
    title: peliculaTitulo.value,
    sinopsis: peliculaSinopsis.value,
    language: peliculaIdioma.value,
    released: peliculaEstreno.value,
  };
 

  peliculaTitulo.value = ""
  peliculaSinopsis.value = ""
  peliculaIdioma.value = ""
  peliculaEstreno.value = ""

  return peliculaNueva
}

btns.addEventListener("click", (e) => {
  const { target } = e;

  if (
    target &&
    target.nodeName == "A" &&
    target.classList.contains("btn-eliminar")
  ) {
    idEdit = target.parentElement.id;
    let eliminar = confirm("¿Estás seguro de eliminar esta pelicula?");
    if (eliminar) {
      eliminarPelicula(idEdit);
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


const renderCard = (pelicula) => {
   
    let template = `
    <div class="card shadow-sm p-3 mb-5 bg-dark bg-gradient rounded card-limits" id="container-card" style="width: 18rem;">
        <div class="card-body text-white">
            <h5 class="card-title"> ${pelicula.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${pelicula.language}</h6>
            <p class="card-text"> ${pelicula.sinopsis}</p>
            <p class="card-text">${pelicula.released}</p>         
            <div class="row" id="${pelicula.id}">
                <a class="btn btn-light col-sm-5 mx-2 btn-editar"> Editar</a>
                <a class="btn btn-light col-sm-5 btn-eliminar">Eliminar </a>
            </div>
        </div>                    
    </div>
    `;


    btns.innerHTML += template;
}

const renderPeliculas = () => {
    getPeliculas().then((peliculas) => {
      peliculas.forEach((pelicula) => {
        renderCard(pelicula);
      })
    }); 
}

renderPeliculas();