// Exercícios de Classes
class SpaceShip {
    constructor(name, crewQuantity) {
      this.name = name
      this.crewQuantity = crewQuantity
      this.isHitched = false
      this.entraceDoorsOpen = false
    }
   
    hitch() {
      this.isHitched = true
      this.entraceDoorsOpen = true
    }
  }
  
  function showMenu () {
    let chosenOption
    while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
      chosenOption = prompt('O que deseja fazer?\n' +
                           ' 1 - Engatar Nave\n' +
                           ' 2 - Imprimir Naves\n' +
                           ' 3 - Sair do Programa')
    }
    return chosenOption
  }
  
  function createSpaceship() {
    let spaceShipName = prompt('Informe o nome da nave')
    let crewQuantity = prompt('Informa a quantidade de tripulantes')
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
  }
  
  function printSpaceShipList(spaceships) {
    let spaceshipList = ''
    spaceships.forEach((spaceship, index) => {
      spaceship += (index + 1) + '- ' + spaceship.name + ' (' + spaceship.crewQuantity + ' tripulantes)\n'
    })
    alert(spaceshipList)
  }
  
  let hitchedSpaceShips = []
  
  let chosenOption
  
  while(chosenOption != '3') {
    chosenOption = showMenu()
    switch(chosenOption)
      case '1':
        let spaceShipToAdd = createSpaceship()
        hitchedSpaceships.push(spaceShipsToAdd)
            break
      case '2':
        printSpaceShipList(hitchedSpaceships)
        break
           
        }