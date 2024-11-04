/* eslint-disable react/jsx-key */
import { useState } from "react";

class Player {
    constructor(name) {
        this.name = name;
        this.numOfMoves = 0;
        this.currentNumber = Math.floor(Math.random() * 99) + 1;

        // inGame = has yet to win?
        this.inGame = true;
        this.toPlay = false;
    }
}

export default function Game(props) {

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [playerObj, setPlayerObj] = useState(
        props.players.reduce((accumulator, current) => ({ ...accumulator, [current]: new Player(current) }), {})
    );

    function handleMove(player, action) {
        player.toPlay = false;
        switch (action) {
            case "add":
                setPlayerObj({
                    ...playerObj,
                    [player.name]: { ...player, currentNumber: player.currentNumber + 1, numOfMoves: player.numOfMoves + 1 },
                });
                break;
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
                    [player.name]: { ...player, currentNumber: Math.floor(player.currentNumber / 2), numOfMoves: player.numOfMoves + 1 },
                });
                break;
        }
        progressTurns(player)
    }

    function giveFirstTurn() {
        setPlayerObj({ ...playerObj, [Object.keys(playerObj)[0]]: { ...Object.values(playerObj)[0], toPlay: true } });
    }

    function progressTurns() {
        const playerList = Object.values(playerObj);
        const index = currentPlayerIndex === playerList.length - 1 ? 0 : currentPlayerIndex+1
        const nextPlayer = playerList[index];
        setCurrentPlayerIndex(index)

        nextPlayer.toPlay = true;

        setPlayerObj((prev)=> ({...prev, [nextPlayer.name]: nextPlayer}))
    }

    // // const [currentPlayer, setCurrentPlayer] = useState(playerObjArr[0]);

    function removeKeyFromObj(obj, keyName) {
        const temp = { ...obj };
        delete temp[keyName];
        return temp;
    }
    if (!Object.values(playerObj).find((element) => element.toPlay === true)) {
        giveFirstTurn();
    }

    console.log(playerObj)

    return Object.values(playerObj).map((currentPlayer) => {
        // const winner = Object.values(playerObj).find((p) => p.currentNumber === 100);
        if (currentPlayer.currentNumber === 100) {
            return (
                <div key={currentPlayer.name}>
                    <h1>Winner is: {currentPlayer.name}!!!</h1>
                    <h2>{`${currentPlayer.name}'s Number of Moves: ${currentPlayer.numOfMoves}`}</h2>
                    <button onClick={() => setPlayerObj((prev) => removeKeyFromObj(prev, currentPlayer.name))}>Log out</button>
                </div>
            );
        } else {
            return (
                <div key={currentPlayer.name}>
                    <h1>{currentPlayer.name}</h1>
                    <h2>Your Number is: {currentPlayer.currentNumber}</h2>
                    <h2>Playing: {`${currentPlayer.toPlay}`}</h2>
                    <button disabled={!currentPlayer.toPlay} onClick={() => handleMove(currentPlayer, "add")}>Add 1</button>
                    <button disabled={!currentPlayer.toPlay} onClick={() => handleMove(currentPlayer, "subtract")}>Remove 1</button>
                    <button disabled={!currentPlayer.toPlay} onClick={() => handleMove(currentPlayer, "double")}>Double</button>
                    <button disabled={!currentPlayer.toPlay} onClick={() => handleMove(currentPlayer, "half")}>Half</button>
                </div>
            );
        }
    });
}
