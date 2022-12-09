
function createGame(player1, hour, player2) {

  return `
  <li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
           
           
           
   </li>

  `
}


function createCard(date, day, games) {

  return `
    <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            
            ${games}
          </ul>
        </div>
    
    `
}

document.querySelector('#cards').innerHTML =



  createCard('24/11', 'quinta', createGame('Brazil', '16:00', 'Serbia'))
  + createCard('28/11', 'segunda', createGame('Switizerland', '13:00', 'Brazil')
  , createGame('Portugal', '16:00', 'Uruguai'))
  + createCard('02/12', 'sexta', createGame('Brazil', '16:00', 'Cameroon'))
