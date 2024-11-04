/* eslint-disable react/jsx-key */
import { useState } from "react";

class Player {
    constructor(name) {
        this.name = name;
        this.numOfMoves = 0;
        this.currentNumber = Math.floor(Math.random() * 99) + 1;
        
        // inGame = has yet to win?
        this.inGame = true;
    }
}

export default function Game(props) {
    const [playerObj, setPlayerObj] = useState(
        props.players.reduce((accumulator, current) => ({ ...accumulator, [current]: new Player(current) }), {})
    );
    console.log("props.players: ", props.players);
    console.log("playerObj: ", playerObj);
    function handleMove(player, action) {
        switch (action) {
            case "add":
                setPlayerObj({
                    ...playerObj,
                    [player.name]: { ...player, currentNumber: player.currentNumber + 1, numOfMoves: player.numOfMoves + 1 },
                });
                break;
                case "subtract":
                    player.currentNumber--;
                    break;
                    case "double":
                        player.currentNumber = player.currentNumber * 2;
            case "subtract":
                setPlayerObj({
                    ...playerObj,
                    [player.name]: { ...player, currentNumber: player.currentNumber - 1, numOfMoves: player.numOfMoves + 1 },
                });
                break;
            case "double":
                setPlayerObj({
                    ...playerObj,
                    [player.name]: { ...player, currentNumber: player.currentNumber * 2, numOfMoves: player.numOfMoves + 1 },
                });
                break;
            case "half":
                setPlayerObj({
                    ...playerObj,
                    [player.name]: { ...player, currentNumber: player.currentNumber / 2, numOfMoves: player.numOfMoves + 1 },
                });
                break;
        }
    }

    // // const [currentPlayer, setCurrentPlayer] = useState(playerObjArr[0]);

    
    return Object.values(playerObj).map((currentPlayer) => {
        // const winner = Object.values(playerObj).find((p) => p.currentNumber === 100);
        if (currentPlayer.currentNumber === 100) {
            return (
                <>
                    <h1>Winner is: {currentPlayer.name}!!!</h1>
                    <h2>{`${currentPlayer.name}'s Number of Moves: ${currentPlayer.numOfMoves}`}</h2>
                </>
            );
        } else {
            console.log(currentPlayer);
            return (
                <>
                    <h1>{currentPlayer.name}</h1>
                    <h2>Your Number is: {currentPlayer.currentNumber}</h2>
                    <button onClick={() => handleMove(currentPlayer, "add")}>Add 1</button>
                    <button onClick={() => handleMove(currentPlayer, "subtract")}>Remove 1</button>
                    <button onClick={() => handleMove(currentPlayer, "double")}>Double</button>
                    <button onClick={() => handleMove(currentPlayer, "half")}>Half</button>
                </>
            );
        }
    });
}
