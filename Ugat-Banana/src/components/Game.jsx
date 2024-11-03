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

const testPlayerNamesArr = ["ram", "adi", "ramram", "kofi"];

export default function Game(props) {
    const playerObjArr = testPlayerNamesArr.map((p) => new Player(p));
    const [currentPlayer, setCurrentPlayer] = useState(playerObjArr[0]);
    console.log(playerObjArr);

    // Game
    console.log(currentPlayer);

    // Initialize the first player at the start of the game

    return <h1>{currentPlayer.name}</h1>;
}
