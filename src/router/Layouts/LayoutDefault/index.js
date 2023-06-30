import React from 'react'
import Navigation from '../../../components/navigation'
import Footer from '../../../components/footer'

const LayoutDefault = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default LayoutDefault;

