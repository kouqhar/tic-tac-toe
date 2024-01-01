const GameOver = ({ winner, reset }) => {
	return <div id="game-over">
		<h2>Game Over!</h2>
		{winner && <p>{winner[0]} <sub className="sub-green">with symbol</sub> {winner[1]} won!</p>}
		{!winner && <p>It&apos;s a draw!</p>}
		<p>
			<button onClick={reset}>Rematch!</button>
		</p>
	</div>
}

export { GameOver }