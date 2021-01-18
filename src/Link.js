import React from "react"

export default function Link(props){
    const {children, href} = props
    return(
        <a href={href} className="ui-link">{children}</a>
    )
}