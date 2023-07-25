import React from 'react'
import "./style.css"

const Dashboard = () => {
    return (
        <div id='container-Dashboard'>
            <p className='text-font-family_default text-heading5 text-color-black'>Hello Vitatheme (not Vitatheme? <span className='text-color-accent'>Log out</span>)</p>
            <p className='text-font-family_default text-heading5 text-color-black'>From your account dashboard you can view your <span className='text-color-accent'>recent orders</span>, manage your <span className='text-color-accent'>shipping and billing addresses</span>, and <span className='text-color-accent'>edit your password and account details</span>.</p>
        </div>
    )
}

export default Dashboard