import React from "react"

export default function Button(props){
    const {type, disabled, children} = props
    return(
        <button type={type} disabled={disabled} className="ui-button">{children}</button>
    )
}