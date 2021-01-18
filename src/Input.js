import React from "react"

export default function Input(props){
    const {type, placeholder, name} = props
    return(
        <input type={type || "text"} placeholder={placeholder} name={name} className="ui-textfield"/>
    )
}