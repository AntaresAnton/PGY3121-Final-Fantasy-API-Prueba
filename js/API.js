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
                  <div class="card-body">
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
                    <a class="btn btn-primary" href="#">Más información de ${character.name}</a>
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