
if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]))

export default function Login(props) {    
    let userName;
    //button press
    function handleFormSumbit(userName='') {
        let users = JSON.parse(localStorage.getItem("users"))
        if (!users.includes(userName) && userName) {
            localStorage.setItem("users", JSON.stringify([...users, userName]));
        }

        if (!props.players.includes(userName) && userName) {
            props.setPlayers(prev => [...prev, userName])
        }
    }
    //component

    return (
        <>
            <h1>Log In</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={userName} onChange={(e) => userName = e.target.value} />
            <button className="display-block center-x" onClick={() => handleFormSumbit(userName)}>Log In!</button>
            <button className="display-block center-x" onClick={() => props.setScreen('game')}>Move screen</button>
        </>
    )
}

