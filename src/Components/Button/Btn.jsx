import React from "react";
import "../Button/Button.scss"

function Button ({className, onClick, children}){
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}

export default Button