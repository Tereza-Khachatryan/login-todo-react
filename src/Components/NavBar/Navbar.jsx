import Button from "../Button/Btn"
import "../NavBar/Navbar.scss"
import React from "react"

function Navbar({ setViewMode }) {

    function handleAll() {
        setViewMode('all');
    }

    function handleDone() {
        setViewMode('done');
    }

    function handlePending() {
        setViewMode('pending');
    }

    return (
        <nav className="navbar">
            <Button className="nav-btn" onClick={handleAll}>All</Button>
            <Button className="nav-btn" onClick={handlePending}>Pending</Button>
            <Button className="nav-btn" onClick={handleDone}>Done</Button>
        </nav>
    );
}


export default Navbar