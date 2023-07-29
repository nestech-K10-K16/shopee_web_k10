import React, { useState } from 'react'
import "./style.css"

const CheckBox = ({ label, classNameLabel, isChecked, onClick }) => {

    return (
        <div id='container_check-box' >
            <label>
                <input type="checkbox" checked={isChecked} onClick={onClick} />
                <p className={classNameLabel}>{label || ''}</p>
            </label>
        </div>
    )
}

export default CheckBox