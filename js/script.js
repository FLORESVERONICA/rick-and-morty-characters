 const characterList = document.getElementById("character-list")
const prevBtn = document.getElementById("prev-page")
const nextBtn = document.getElementById("next-page")

const urlBase = "https://rickandmortyapi.com/api/character/?page="
 let page = 1

 const getCharacters = () => {
    characterList.innerHTML = ""
    if(page === 1) {
      prevBtn.disabled = true  
    } else {
        prevBtn.disabled = false  
    }
 fetch(`${urlBase}${page}`)
.then(response => {
    if (!response.ok){
        throw new Error ("no funciona")
    }
    return response.json()
})
.then(data => {
    let characters = data.results;
    console.log(characters)
    characters.forEach(character => {
    const template = ` 
    <li>
        <img src=${character.image} alt=${character.name} />
        <div class= "text">
        <h2><span>Nombre: </span>${character.name}</h2>
        <p><span>Especie: </span>${character.species}</p>
        </div>
    </li>
`
    characterList.innerHTML += template
    });
    }).catch(err => console.err(Error))

}
nextBtn.addEventListener("click", () => {
    page++
    getCharacters()
    })
prevBtn.addEventListener("click", () => {
        page--
        getCharacters()
        })
