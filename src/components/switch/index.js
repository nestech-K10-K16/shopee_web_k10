import React from 'react'
import classNames from 'classnames'
import "./style.css"

const Switch = ({ rounded = false, isToggle, onToggle }) => {

    const SliderClassname = classNames("slider", {
        rounded: rounded
    });

    return (
        <label className='switch'>
            <input type='checkbox' checked={isToggle} onChange={onToggle}></input>
            <span className={SliderClassname}></span>
        </label>
    )
}

export default Switch