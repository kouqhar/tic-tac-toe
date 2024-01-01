const Log = ({ turns, playerName }) => {
	
	return (
		<ol id="log">
			{
				turns?.map(({player, square : {row, col } }, idx) => 
					<li key={`${row}-${col}`}>
						{playerName[player]} <sub className="sub-green">selected</sub> Row: {row} - Col: {col}
					</li>
				)
			}
		</ol>
	)
}

export { Log }