import React from 'react'
import Navigation from '../../../components/navigation'
import Footer from '../../../components/footer'
import SidebarBlog from '../../../components/sidebarblog'
import "./style.css"

const LayoutSidebarBlog = ({ children }) => {
    return (
        <div id='container-layout-sidebar-blog'>
            <Navigation />
            <div className='container-layout-sidebar-blog__content'>
                <SidebarBlog />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutSidebarBlog