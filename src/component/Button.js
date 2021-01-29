import React from "react"
import clsx from "clsx"

export default function Button(props){
    const {children, className, outline, ...rest} = props
    const classNames = clsx(
        {
            "btn": true,
            "btn-default": !outline,
            "btn-outline": outline 
        }
        , className
    )
    return <button className={classNames} {...rest}>{children}</button>
}