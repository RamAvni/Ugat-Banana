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
                setPlayerObj({ ...playerObj, [player.name]: { ...player, currentNumber: player.currentNumber + 1, numOfMoves: player.numOfMoves + 1 } });
                break;
            case "subtract":
                setPlayerObj({ ...playerObj, [player.name]: { ...player, currentNumber: player.currentNumber - 1, numOfMoves: player.numOfMoves + 1 } })
                break;
            case "double":
                setPlayerObj({ ...playerObj, [player.name]: { ...player, currentNumber: player.currentNumber * 2, numOfMoves: player.numOfMoves + 1 } })
                break;
            case "half":
                setPlayerObj({ ...playerObj, [player.name]: { ...player, currentNumber: player.currentNumber / 2, numOfMoves: player.numOfMoves + 1 } });
                break;
        }
    }

    // // const [currentPlayer, setCurrentPlayer] = useState(playerObjArr[0]);

    console.log(Object.values(playerObj))
    const winner = Object.values(playerObj).find(p => p.currentNumber === 100);
    if (winner) {
        return <h1>Winner is: {winner.name}!!!</h1>;
    } else {
        return Object.values(playerObj).map((currentPlayer) => {
            console.log(currentPlayer)
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
        });
    }
}
