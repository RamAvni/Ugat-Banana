
export default function Login(props) {
    if (!localStorage.getItem("users"))
        localStorage.setItem("users", JSON.stringify([]))
    
    if (!localStorage.getItem("loggedUsers"))
        localStorage.setItem("loggedUsers", JSON.stringify([]))
    
    localStorage.setItem("loggedUsers", JSON.stringify([""]));
    localStorage.setItem("users", JSON.stringify(["adi"]));
    
    let userName;
    //button press
    function handleFormSumbit() {
        let savedUser = "";
        let users = JSON.parse(localStorage.getItem("users"))
        savedUser = userName;
        if (!users.includes(userName)) {
            localStorage.setItem("users", JSON.stringify([...users, savedUser]));
        }
        let loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"))
        if (!loggedUsers.includes(userName)) {
            localStorage.setItem("loggedUsers", JSON.stringify([...loggedUsers, savedUser]));
            let loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"))
            props.setPlayers(loggedUsers)
        }
        //remember to empty the loggedUsers at the logout!!!!!!
    }
    //component
    return (
        <>
            <h1>Log In</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={(e) => userName = e.target.value} />
            <button onClick={handleFormSumbit}>Log In!</button>
        </>
    )
}

