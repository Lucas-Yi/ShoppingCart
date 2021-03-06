import React from "react"
import Clsx from "clsx"

export default function Input(props) {
    const {placeholder, type="type", className, required, ...rest} = props
    const classNames = Clsx("input", className)
    return <>
        <label className="label">
            {placeholder}
            {required && <span className="input-required">*</span>}
            <div>
                <input type={type} placeholder={placeholder} className={classNames} 
                required={required} {...rest}/>
            </div>
        </label>
    </>;
}