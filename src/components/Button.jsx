import React from "react"

let Button = (props) => {
    return (
        <button onClick = {props.handleClick} style={props.styled ? {backgroundColor: "orange"} : null}>{props.children}</button>
    )
}

export default Button;