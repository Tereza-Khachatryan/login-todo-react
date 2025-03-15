import React, {useState} from "react"

function Login(){
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    let handleLogin = (event) => {
        event.preventDefault()

        const currentUserName = 'Tereza'
        const currentPassword = '1234'

    if(userName === currentUserName && password === currentPassword){
        console.log('Login successsful')
        localStorage.setItem('isLoggedIn', 'true')
        window.location.reload()
    } else {
        setError('Invalid username or password!')
    }
    }

    return (
    <div className="loginPage-bigDiv">
        <div className="login-container">
            <h2 className="header">Todo App</h2>
            <form className="form" onSubmit={handleLogin}>
                <input className="input"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => {setUsername(e.target.value)}}
                        required
                />
                <input className="input"
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)}}
                        required
                />
                <button className="login-btn" type="submit">Login</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    </div>
    )
}

export default Login