import React, { useState } from 'react'
import { PAYMENT_METHOD } from '../../constants/common'
import CheckBox from '../checkbox'
import "./style.css"

const PaymentMethod = () => {

    const [isChecked, setIschecked] = useState(PAYMENT_METHOD[0].payment_title)

    return (
        <div id='PaymentMethod'>
            {
                PAYMENT_METHOD.map(({ payment_title, payment_detail }) => {
                    return <div className='PaymentMethod-item'>
                        <CheckBox label={payment_title} isChecked={isChecked === payment_title} onClick={() => setIschecked(payment_title)} />
                        {
                            isChecked === payment_title ? <p className='text-font-family_default text-body-small text-color-black'>{payment_detail}</p> : <></>
                        }
                    </div>
                })
            }
        </div>
    )
}

export default PaymentMethod