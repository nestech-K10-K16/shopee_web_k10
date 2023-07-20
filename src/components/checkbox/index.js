import React, { useState } from 'react'
import "./style.css"

const CheckBox = ({ label }) => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div id='container_check-box' >
            <label>
                <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                <p>{label || ''}</p>
            </label>
        </div>
    )
}

export default CheckBox