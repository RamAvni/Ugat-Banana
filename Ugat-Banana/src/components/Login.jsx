
if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]))
localStorage.setItem("users", JSON.stringify(["adi"]));

export default function Login(props) {
    if (!localStorage.getItem("loggedUsers"))
        localStorage.setItem("loggedUsers", JSON.stringify([]))
    
    
    let userName;
    console.log('userName: ', userName);
    //button press
    function handleFormSumbit(savedUser) {
        let users = JSON.parse(localStorage.getItem("users"))
        if (!users.includes(savedUser) && savedUser) {
            localStorage.setItem("users", JSON.stringify([...users, savedUser]));
        }
        let loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"))
        console.log('loggedUsers: ', loggedUsers);
        //console.log(savedUser)
        console.log(typeof savedUser !== null)
        if (!loggedUsers.includes(savedUser) && savedUser) {
            localStorage.setItem("loggedUsers", JSON.stringify([...loggedUsers, savedUser]));
            let loggedUsersArray = JSON.parse(localStorage.getItem("loggedUsers"))
            console.log('loggedUsers: ', loggedUsersArray);
            props.setPlayers(loggedUsersArray)
        }
        //remember to empty the loggedUsers at the logout!!!!!!
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

