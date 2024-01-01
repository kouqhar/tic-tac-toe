const GameBoard = ({ handleSquare, board }) => {
	
	const handleSquareClick = (rowIndex, colIndex) => {
		handleSquare(rowIndex, colIndex)
	}

	return <ol id="game-board">
		{
			board?.map((row, rowIndex) => {
				return <li key={rowIndex}>
					<ol>
						{
							row.map((playerSymbol, colIndex) => {
								return (
									<li key={colIndex}>
										<button 
											onClick={() => handleSquareClick(rowIndex, colIndex)} 
											disabled={playerSymbol !== null} >
											{playerSymbol}
										</button>
									</li>
								)
							})
						}
					</ol>
				</li>
			})
		}
	</ol>
}

export { GameBoard }