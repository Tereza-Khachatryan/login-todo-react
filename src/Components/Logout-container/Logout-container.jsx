import "../Logout-container/Logout-container.scss"
import Button from "../Button/Btn"

function Logout({ onLogout }){
    
    return (
        <div className="logout-parent container">
            <Button className="logout-btn" onClick={onLogout}>Logout</Button>
        </div>
    )
}

export default Logout