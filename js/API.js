// Alumno: Patricio Quintanilla
// Asignatura: PGY3121
// Fecha Creación: 14/05/2023
const apiFinalFantasy=async(pagina)=>{
    let url="https://www.moogleapi.com/api/v1/characters/search?origin=" + pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    // el foreach es para el bucle :)
    data.forEach(character=> {
        // esto es para que haga el bucle del array :)
        let imagenes = ''
        for (let i = 0; i < character.pictures.length; i++) {
            imagenes += `${character.pictures[i].url}`;
        }
        divItem=document.createElement('div')
        // El card
            divItem.innerHTML=`
            <!-- Inicio Card -->
<div class="col-md-3 col-sm-6 col-xs-12 g-0">
  <div class="card mx-2" style="width: 18rem;">
    <img src="${imagenes}" class="card-img-top" alt="...">
    <div class="card-body" id="${character.name}">
      <h5 class="card-title">${character.name}</h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Nombre (JP): </b>${character.japaneseName}</li>
      <li class="list-group-item"><b>Job: </b>${character.job}</li>
      <li class="list-group-item"><b>Origen: </b>${character.origin}</li>
      <li class="list-group-item"><b>Especie: </b>${character.species}</li>
      <li class="list-group-item"><b>Edad: </b>${character.age}</li>
      <li class="list-group-item"><b>Género: </b>${character.gender}</li>
      <li class="list-group-item"><b>Raza: </b>${character.race}</li>
    </ul>
    <div class="card-body text-center">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Más información de ${character.name}
      </button>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Información de ${character.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              <li class="list-group-item"><b>Nombre (JP): </b>${character.japaneseName}</li>
              <li class="list-group-item"><b>Job: </b>${character.job}</li>
              <li class="list-group-item"><b>Origen: </b>${character.origin}</li>
              <li class="list-group-item"><b>Especie: </b>${character.species}</li>
              <li class="list-group-item"><b>Edad: </b>${character.age}</li>
              <li class="list-group-item"><b>Género: </b>${character.gender}</li>
              <li class="list-group-item"><b>Raza: </b>${character.race}</li> <br>
              <p><b>Descripción:</b></p>
              <p>${character.description}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
      <!-- fin modal -->
    </div>
  </div>
  <!-- fin card -->
</div>
            `
            divRes.appendChild(divItem);
    });
}
// acá va el numero 2 ya que el número uno no arroja nada en la api :()
apiFinalFantasy(2);