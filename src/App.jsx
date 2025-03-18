import React, {useState} from "react"
import LoggedPage from "./LoggedPage.jsx"
import Login from "./LoginPageComponents/Login.jsx"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true')
    
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn')
      setIsLoggedIn(false)
    }
    
    return (
      <div>{isLoggedIn ? <LoggedPage onLogout={handleLogout}/> : <Login/>}</div>
    )
}

export default App
