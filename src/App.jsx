import { useState } from 'react'
import { Player } from "./components/Player"
import { GameBoard } from "./components/GameBoard"
import { Log } from "./components/Log"
import { GameOver } from "./components/GameOver"
import { PLAYERS, PLAYERS_OBJ, INITIAL_GAMEBOARD, deriveActivePlayer, deriveWinner, deriveGameBoard  } from "./utils/funcs"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState(PLAYERS)
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const isDraw = gameTurns.length >=9 && !winner

  const handleReset = () => setGameTurns([])
  const handleSelectSquare = (rowIndex, colIndex) => 
      setGameTurns(prevTurn => {
        const player = deriveActivePlayer(prevTurn)

        const updatedTurns = [
          { square : {row: rowIndex, col: colIndex }, player },
          ...prevTurn
        ]

        return updatedTurns
      })

  const handlePlayerNameChange = (symbol, name) => 
    setPlayers(prevPlayers => {
      return {...prevPlayers, [symbol]: name }
    })

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {
            PLAYERS_OBJ.map(({ symbol }) => 
              <Player 
                key={symbol}
                symbol={symbol} 
                playerName={players}
                activePlayer={activePlayer} 
                isActive={activePlayer === symbol} 
                onNameChange={handlePlayerNameChange} />)
          }
        </ol>

        {(winner || isDraw) && <GameOver winner={winner} reset={handleReset} />}
        <GameBoard handleSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log playerName={players} turns={gameTurns} />
    </main>
  )
}

export default App
