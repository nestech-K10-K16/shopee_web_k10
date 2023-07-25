import React, { useState } from 'react'
import "./style.css"

const CheckBox = ({ label, classNameLabel }) => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div id='container_check-box' >
            <label>
                <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                <p className={classNameLabel}>{label || ''}</p>
            </label>
        </div>
    )
}

export default CheckBox