import { useState } from "react";

export default function LeaderBoard(props) {
    console.log("LeaderBoard")
    console.log(props.numOfMoves)
    let playerdata = props.numOfMoves
   
    console.log(playerdata[0])
    return (
        <>
            <h1>leading now:</h1>
            <h2>{playerdata[0].name}: Number of Moves: </h2>
        </>
    )
}