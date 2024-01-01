import { useState } from "react"

const Player = ({ symbol, playerName, activePlayer, isActive, onNameChange }) => {
	const [onEdit, setOnEdit] = useState(false);
	const [newName, setNewName] = useState(playerName[symbol])
	const highlightPlayer = activePlayer === "X" ? "" : ""

	const handleInputChange = (e) => setNewName(e.target.value)
	const handleInput = (e) => {
		setOnEdit(prevState => !prevState)
		if(onEdit) onNameChange(symbol, newName)
	}

	return (
		<li className={isActive ? "active" : undefined}>
	      <span className="player">
	        {onEdit ? 
	        	<input value={newName} onChange={handleInputChange}  /> : 
	        	<span className="player-name">{newName}</span>
	        }
	        <span className="player-symbol">{symbol}</span>
	        <button onClick={handleInput}>{onEdit ? "Save" : "Edit"}</button>
	      </span>
	    </li>
	)
}

export { Player }