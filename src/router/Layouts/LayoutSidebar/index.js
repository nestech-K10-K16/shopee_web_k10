import React from 'react'
import Navigation from '../../../components/navigation'
import Footer from '../../../components/footer'
import Sidebar from '../../../components/sidebar'
import "./style.css"

const LayoutSidebar = ({ children }) => {
    return (
        <div className='container-layout'>
            <Navigation />
            <div className='container-layout__content'>
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutSidebar