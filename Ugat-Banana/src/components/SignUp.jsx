export default function SignUp(props) {


    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button>Sign Up!</button>
            </form>
        </>
    )
}