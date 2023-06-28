import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Shop from '../pages/shop'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../styles/index.css'

const MainRoute = () => {
    return (
        <div style={{ padding: '64px 96px' }}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/shop'} element={<Shop />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default MainRoute