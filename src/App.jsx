import React, {useState} from "react"
import LoggedPage from "./LoggedPage.jsx"
import Login from "./Login.jsx"
import AddTodoModal from "./AddTodoModal.jsx"

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
