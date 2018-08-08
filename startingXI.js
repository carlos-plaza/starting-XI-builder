
// BUTTONS
const BUTTON_433 = document.querySelector('.four-three-three');
const BUTTON_442 = document.querySelector('.four-four-two');
const BUTTON_532 = document.querySelector('.five-three-two');
const BUTTON_352 = document.querySelector('.three-five-two');
const removeAllBtn = document.querySelector('.remove-all-players');
const addDefBtn = document.querySelector('add-defender');

//FUNCTIONS - CREATE AND REMOVE PLAYERS

const removePlayers = (position) => {
  let positionLine = document.querySelectorAll(`.${position}.team-1 > .player`);
  positionLine.forEach( (player) => {
    player.remove();
  });
}

const removeAllPlayers = () => {
  removePlayers('defenders');
  removePlayers('midfielders');
  removePlayers('forwards');
}


const createNewPlayer = (position) => {
  let dupPlayer = document.querySelector('.player').cloneNode('yes');
  dupPlayer.children[0].textContent = position;
  dupPlayer.children[1].textContent = "";
  return dupPlayer;
}

const addPlayers = (positionRow, position) => {
  //Grab position row and add new player
  let positionLine = document.querySelector(`.${positionRow}.team-1`);
  positionLine.appendChild(createNewPlayer(position));
}

//FUNCTIONS - CHANGE FORMATIONS

function fourFourTwo() {
  removeAllPlayers();

  addPlayers('defenders', 'LB');
  addPlayers('defenders', 'CB');
  addPlayers('defenders', 'CB');
  addPlayers('defenders', 'RB');
  addPlayers('midfielders', 'LM');
  addPlayers('midfielders', 'CM');
  addPlayers('midfielders', 'CM');
  addPlayers('midfielders', 'RM');
  addPlayers('forwards', 'ST');
  addPlayers('forwards', 'ST');
}

function fourThreeThree() {
  removeAllPlayers();

  addPlayers('defenders', 'RB');
  addPlayers('defenders', 'CB');
  addPlayers('defenders', 'CB');
  addPlayers('defenders', 'LB');
  addPlayers('midfielders', 'CM');
  addPlayers('midfielders', 'CDM');
  addPlayers('midfielders', 'CM');
  addPlayers('forwards', 'RW');
  addPlayers('forwards', 'ST');
  addPlayers('forwards', 'LW');
}

function fiveThreeTwo() {
  removeAllPlayers();

  addPlayers('defenders', 'RWB');
  addPlayers('defenders', 'RCB');
  addPlayers('defenders', 'CB');
  addPlayers('defenders', 'LCB');
  addPlayers('defenders', 'LWB');
  addPlayers('midfielders', 'CM');
  addPlayers('midfielders', 'CM');
  addPlayers('midfielders', 'CM');
  addPlayers('forwards', 'ST');
  addPlayers('forwards', 'ST');
}

//EVENT LISTENERS - CHANGE FORMATIONS


BUTTON_433.addEventListener('click', fourThreeThree);
BUTTON_442.addEventListener('click', fourFourTwo);
BUTTON_532.addEventListener('click', fiveThreeTwo);

removeAllBtn.addEventListener('click', removeAllPlayers);