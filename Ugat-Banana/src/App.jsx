import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Game from "./components/Game";
import SignUp from "./components/SignUp";

function App() {
    const [screen, setScreen] = useState("login");
    const [players, setPlayers] = useState([])

    if (screen === "login") {
        return <Login 
        setScreen={setScreen}
        setPlayers={setPlayers}
        />;
    } else if (screen === 'sign up') {
      return <SignUp setScreen={setScreen} />;
    }
     else if (screen === "game") {
        return <Game 
        setScreen={setScreen}
        players={players}
        />;
    }
}

export default App;