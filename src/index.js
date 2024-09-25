
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonList = document.querySelector('.cards')

function renderPokemon(){

    for (let pokemon of data){
    const li = document.createElement('li')
    li.className = 'card'

    const h2 = document.createElement('h2')
    h2.className = 'card--title'
    h2.textContent = pokemon.name

    const img = document.createElement('img')
    img.width = '256'
    img.className = 'card--img'
    img.src = pokemon.sprites.front_default 

    const ul = document.createElement('ul')
    ul.className = 'card--text'
    const subLi = document.createElement('li')
    subLi.textContent = `HP: ${pokemon.stats[0].base_stat}` 
    const subLi2 = document.createElement('li')
    subLi2.textContent = `ATTACK: ${pokemon.stats[1].base_stat}` 
    const subLi3 = document.createElement('li')
    subLi3.textContent = `DEFENCE: ${pokemon.stats[2].base_stat}` 
    const subLi4 = document.createElement('li')
    subLi4.textContent = `SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}` 
    const subLi5 = document.createElement('li')
    subLi5.textContent = `SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}` 
    const subLi6 = document.createElement('li')
    subLi6.textContent = `SPEED: ${pokemon.stats[5].base_stat}` 

    let games = appearsInGames(pokemon)
    const subLi7 = document.createElement('li')
    subLi6.textContent = `Appears in games: ${games}` 


    //append
    ul.appendChild(subLi)
    ul.appendChild(subLi2)
    ul.appendChild(subLi3)
    ul.appendChild(subLi4)
    ul.appendChild(subLi5)
    ul.appendChild(subLi6)
    ul.appendChild(subLi7)
    li.appendChild(h2)
    li.appendChild(img)
    li.appendChild(ul)

    pokemonList.appendChild(li)
    }
    
}

function appearsInGames(pokemon){
    let arr = []
    
    for(let game of pokemon.game_indices){
        
        arr.push(game.version.name)
    }

    return arr
}

renderPokemon()
