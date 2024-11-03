if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]))

if (!localStorage.getItem("loggedUsers"))
    localStorage.setItem("loggedUsers", JSON.stringify([]))

localStorage.setItem("loggedUsers", JSON.stringify([""]));
localStorage.setItem("users", JSON.stringify(["adi"]));


export default function Login(props) {
    let userName = props.value
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

// {
//     //set up users
//     if (!localStorage.getItem("users"))
//         localStorage.setItem("users", JSON.stringify([]))

//     //let registerForm = {username:"",password:""};


//     //--------------------------------------Sign up--------------------------------------

//     //collect info
//     function handleRegisterChange() {
//         registerForm = {
//             username: document.getElementById("register-username").value,
//             password: document.getElementById("register-password").value
//         }
//     }

//     //add sign up info to local storage
//     function onRegisterSubmit() {
//         let users = JSON.parse(localStorage.getItem("users"))
//         localStorage.setItem("users", JSON.stringify([...users, registerForm]))
//     }


//     //--------------------------------------log in--------------------------------------

//     //set up looged users
//     if (!localStorage.getItem("loggedUsers"))
//         localStorage.setItem("loggedUsers", JSON.stringify([]))

//     //collect login info
//     let logForm = {};
//     function handleLogChange() {
//         logForm = {
//             username: document.getElementById("username").value,
//             password: document.getElementById("password").value,
//             isJudge: false,
//             score: 0,
//             answer: "",
//             isWinner: false
//         }
//         return logForm;
//     }
// }
// {
//     //add current user info to local storage
//     function onLogSubmit() {
//         let users = JSON.parse(localStorage.getItem("users"))
//         let loggeduser = users.find(user => checkUsernamePasswordMatch(user));

//         if (users.find(user => checkUsernamePasswordMatch(user))) {
//             document.getElementById("aside").innerHTML += "<br>" + loggeduser.username;
//             const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"));

//             loggedUsers.push(logForm);
//             localStorage.setItem("loggedUsers", JSON.stringify(loggedUsers));
//         }
//         // }
//     }

//     //validate
//     function checkUsernamePasswordMatch(user) {
//         return user.username === logForm.username && logForm.password === user.password;
//     }
// }