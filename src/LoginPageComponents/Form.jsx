import React, {useState} from "react"
import "../LoginPageComponents/Form.scss"
import Button from "../Components/Button/Btn"
import Input from "../Components/Input/Input"

function Form (){
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
        <form className="form" onSubmit={handleLogin}>
            <h2 className="header">Todo App</h2>
            <Input  
                className="input"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => {setUsername(e.target.value)}}
                required/> 
            <Input 
                className="input"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                        }}
                required/>
            <Button className="login-btn" type="submit">Login</Button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    )
}

export default Form