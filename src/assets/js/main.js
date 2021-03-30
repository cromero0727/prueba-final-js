import "../../assets/scss/style.scss";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";

const llamarPersonajes = (() => {
    const urlBase = "https://rickandmortyapi.com/api";
    // Variable privada que almacene la cantidad de personajes a mostrar.
    let cantidadPersonajes = 0;
    let serie = null;


    const dataPersonajes = async(urlAPI, urlP) => {
        let arr = [];
        try {
            const req = await fetch(urlAPI + urlP);
            const data = await req.json();
            arr = data.results;
        } catch (error) {
            console.log(
                `Error en la obtención de los personajes desde la API: ${error}`
            );
        } finally {
            return arr;
        }
    };

    const funcionPublica1 = async() => {
        serie = new Serie("Rick and Morty");
        // console.log(serie);

        const resultadosAPI = await dataPersonajes(urlBase, "/character");
        cantidadPersonajes = resultadosAPI.length;

        resultadosAPI.forEach(personaje => {
            // console.log(personaje);
            const per = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
            serie.agregarPersonajes(per);
        });
    };
    const funcionPublica2 = () => {
        document.getElementById('numeroPersonajes').innerHTML = cantidadPersonajes;
        document.getElementById('spinner').classList.remove('spinner-border')
        const templateApp = document.getElementById("app");
        serie.personajes.forEach(personaje => (
            templateApp.innerHTML += `
            
                <div class="col-md-3 col-sm-6 col-xs-12">

                    <div class="card mb-3" style="">
                      <img src="${personaje.imagen}" class="card-img-top" alt="" id="imgPersonaje">
                      <div class="card-body">
                          <h5 class="card-title" id="nombrePersonaje">${personaje.obtenerNombre}</h5>
                          <p class="card-text" id="especiePersonaje">${personaje.especie}</p>
                      </div>
                    </div>
                    
                  </div> 
               
          `
        ));

    }
    return {
        funcionPublica1,
        funcionPublica2,
    };
})();

llamarPersonajes.funcionPublica1();
// llamarPersonajes.funcionPublica2();
setTimeout(() => {
    llamarPersonajes.funcionPublica2();
}, 2000);