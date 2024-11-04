import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Game from "./components/Game";
import SignUp from "./components/SignUp";
import LeaderBoard from "./components/leaderBoard";

function App() {
    const [screen, setScreen] = useState("login");
    const [players, setPlayers] = useState([])
    const [numOfMoves, setNumOfMoves] = useState([])
    console.log('players: ', players);
    console.log(numOfMoves)


    if (screen === "login") {
        return <Login 
        setScreen={setScreen}
        players={players}
        setPlayers={setPlayers}
        />;
    } else if (screen === 'sign up') {
      return <SignUp setScreen={setScreen} />;
    }
     else if (screen === "game") {
        return <Game 
        setScreen={setScreen}
        players={players}
        numOfMoves={numOfMoves}
        setNumOfMoves={setNumOfMoves}
        />;
    }
    else if (screen === "leaderBoard") {
        return <LeaderBoard 
        setScreen={setScreen}
        players={players}
        numOfMoves={numOfMoves}
        />;
    }
}

export default App;