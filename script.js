
function createGame(grupo, player1, hour, player2) {

  return `<li>

  <em>${grupo}</em>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
     <strong>${hour}</strong> 
  <img src="/assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />

  </li>  `
}

// variável de controle
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            
            ${games}
          </ul> 
        </div>
    
    `
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'quinta',
    createGame('Grupo G', 'Switizerland', '07:00', 'Cameroon')
    + createGame('Grupo G', 'brazil', '16:00', 'serbia')
    + createGame('Grupo H', 'Uruguai', '10:00', 'coreia')
    + createGame('Grupo H', 'Portugal', '13:00', 'gana'))
  + createCard('28/11', 'segunda',
    createGame('Grupo G', 'Cameroon', '07:00', 'serbia')
    + createGame("Grupo H", "coreia", "10:00", "gana")
    + createGame('Grupo G', 'Switizerland', '12:00', 'brazil')
    + createGame('Grupo H', 'Portugal', '16:00', 'Uruguai')
  )
  + createCard('02/12', 'sexta',
    createGame('Grupo G', 'brazil', '16:00', 'Cameroon')
    + createGame('Grupo G', 'serbia', '16:00', 'switizerland')
    + createGame('Grupo H', 'GANA', '16:00', 'Uruguai')
    + createGame('Grupo H', 'coreia', '16:00', 'portugal'))


