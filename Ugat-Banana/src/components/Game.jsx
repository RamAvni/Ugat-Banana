import { useState } from "react";
const [currentPlayerNumber, setCurrentPlayerNumber] = useState(currentPlayer.currentNumber)
class Player {
    constructor(name) {
        this.name = name;
        this.numOfMoves = 0;
        this.currentNumber = Math.floor(Math.random() * 99) + 1;

        // inGame = has yet to win?
        this.inGame = true;
    }
}

function getNextIndex(arr, currentIndex) {
    console.log(currentIndex);
    if (currentIndex + 1 >= arr.length) {
        return 0;
    } else {
        console.log(currentIndex + 1);
        return currentIndex + 1;
    }
}


export default function Game(props) {
    function handleMove(player, action) {
        switch (action) {
            case "add":
                player.currentNumber++;
                break;
            case "subtract":
                player.currentNumber--;
                break;
            case "double":
                player.currentNumber = player.currentNumber * 2;
                break;
            case "half":
                player.currentNumber = player.currentNumber / 2;
                break;
        }
    
        player.numOfMoves++
        setCurrentPlayer(playerObjArr[getNextIndex(playerObjArr, playerObjArr.indexOf(currentPlayer))])
    }
    const [playerObjArr, setPlayerObjArr] = useState(props.players.map((p) => new Player(p)));
    const [currentPlayer, setCurrentPlayer] = useState(playerObjArr[0]);

    const winner = playerObjArr.find((player) => player.currentNumber === 100)
    if (winner) {
        return <h1>Winner is: {winner.name}!!!</h1>;
    } else {
        return (
            <>
                <h1>{currentPlayer.name}</h1>
                <h2>Your Number is: {currentPlayerNumber}</h2>
                <button onClick={() => handleMove(currentPlayer, "add")}>Add 1</button>
                <button onClick={() => handleMove(currentPlayer, "subtract")}>Remove 1</button>
                <button onClick={() => handleMove(currentPlayer, "double")}>Double</button>
                <button onClick={() => handleMove(currentPlayer, "half")}>Half</button>
                <button
                    className="display-block center-x"
                    onClick={() => setCurrentPlayer(playerObjArr[getNextIndex(playerObjArr, playerObjArr.indexOf(currentPlayer))])}
                >
                    Next Player!
                </button>
            </>
        );
    }
}
