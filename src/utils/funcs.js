import { WINNING_COMBINATIONS } from "./winning-combinations"

const PLAYERS = {
    X: "Anonymous-1",
    O: "Anonymous-2"
  }

const PLAYERS_OBJ = [
  {
    symbol: "X"
  },
  {
    symbol: "O"
  },
]

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = "O"

  return currentPlayer
}

const deriveWinner = (gameBoard, players) => {
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstCombinations = gameBoard[combination[0].row][combination[0].column]
    const secondCombinations = gameBoard[combination[1].row][combination[1].column]
    const thirdCombinations = gameBoard[combination[2].row][combination[2].column]

    if(firstCombinations && firstCombinations === secondCombinations && firstCombinations === thirdCombinations) 
      winner = [players[firstCombinations], firstCombinations]
  }
  
  return winner
}

const deriveGameBoard = (gameTurns) => {  
  let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])]

  for(const turn of gameTurns){
    const { square : { row, col }, player } = turn
    gameBoard[row][col] = player
  }

  return gameBoard
}

export { PLAYERS, PLAYERS_OBJ, INITIAL_GAMEBOARD, deriveActivePlayer, deriveWinner, deriveGameBoard  }