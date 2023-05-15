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
            <img width="200px" src="${imagenes}" alt="">
                                <h5 class="card-title"><b>${character.name}</b></h5>
                                <p class="card-title"><b>${character.japaneseName}</b></p>
                                <p class="card-text"><b>Origen: </b>${character.origin}</p>
                                <p class="card-text"><b>Especie:</b> ${character.species}</p>
                                <p class="card-text"><b>edad:</b> ${character.age}</p>
                                <p class="card-text"><b>genero:</b> ${character.gender}</p>
                                <p class="card-text"><b>Especie:</b> ${character.race}</p>
                                <p class="card-text"><b>Job:</b> ${character.job}</p>
                                <p class="card-text"><b>descripción:</b> ${character.description}</p>
            `
            divRes.appendChild(divItem);
    });
}
// acá va el numero 2 ya que el número uno no arroja nada en la api :()
apiFinalFantasy(2);